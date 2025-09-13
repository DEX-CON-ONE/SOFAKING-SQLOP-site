# Embed Chat App — Preparation & Implementation Plan

This document collects the live discovery results from your Azure subscription and a concrete, secure plan to embed the deployed AI chat app (Container App) into your Next.js homepage using the recommended server-side proxy approach.

## Quick summary
- Chat backend (Container App): ca-api-fbbtmk6hdoa5k
  - Resource group: rg-env-sqlop-chatai
  - Public FQDN: ca-api-fbbtmk6hdoa5k.whitesmoke-1c4b6bfd.swedencentral.azurecontainerapps.io
  - Latest revision FQDN: ca-api-fbbtmk6hdoa5k--azd-1757265731.whitesmoke-1c4b6bfd.swedencentral.azurecontainerapps.io
  - Target port: 50505
  - Container image: crfbbtmk6hdoa5k.azurecr.io/api_and_frontend:azd-deploy-1757264526
  - Notable container env vars (non-secret): AZURE_CLIENT_ID=5b4e617b-c947-4f42-8def-a0ddcc124620, AZURE_AI_AGENT_DEPLOYMENT_NAME=gpt-4o-mini, AZURE_EXISTING_AIPROJECT_ENDPOINT=https://aoai-fbbtmk6hdoa5k.services.ai.azure.com/api/projects/proj-fbbtmk6hdoa5k
  - Managed identity (user-assigned): principalId=ec205741-c0e6-4a81-9395-7c7b711f2621, clientId=5b4e617b-c947-4f42-8def-a0ddcc124620

- Static Web App (Next.js site): next-pub-static-webapp
  - Resource group: rg-SQLOP-web
  - Default hostname: zealous-mud-060938010.1.azurestaticapps.net
  - Repository: https://github.com/SQLOPTIMISE/MakeMy-NextJs-Site
  - KeyVaultReferenceIdentity: SystemAssigned

- Key Vault: kv-hubsqlop348479412002 (resource group: iDBA, location: eastus)
  - Secret listing blocked (Forbidden) for current CLI identity — additional permissions required

## What is missing / blocked
- I could not list or read Key Vault secrets for `kv-hubsqlop348479412002` (AccessDenied). This blocks discovery of actual secret names/values (for CHAT API key or OpenAI/Azure OpenAI keys).
- I could not confirm the exact chat HTTP routes (for example `/api/chat`) or whether the backend requires API key vs Azure AD tokens. Those must be confirmed or discovered from secrets/app settings.

## How to unblock (exact commands)
Use one of the following approaches to grant read access to the Key Vault for the identity you choose. Replace placeholders as needed.

- Grant the Container App's user-assigned identity access to secrets (recommended if the Container App needs access):
```bash
az keyvault set-policy \
  --name kv-hubsqlop348479412002 \
  --object-id ec205741-c0e6-4a81-9395-7c7b711f2621 \
  --secret-permissions get list
```

- Temporarily grant your CLI user permission (so you can inspect secrets):
```bash
az keyvault set-policy \
  --name kv-hubsqlop348479412002 \
  --upn your-email@domain.com \
  --secret-permissions get list
```

- If you prefer Azure RBAC role assignment for a principal (Key Vault Secrets User):
```bash
# find principal id (e.g. for a static site or managed identity), then:
az role assignment create --assignee <principalId-or-spn> --role "Key Vault Secrets User" --scope \
  /subscriptions/1b4303bc-5996-4aee-83bf-99c5f6c8ae62/resourceGroups/iDBA/providers/Microsoft.KeyVault/vaults/kv-hubsqlop348479412002
```

After granting access, run this to list secrets:
```bash
az keyvault secret list --vault-name kv-hubsqlop348479412002 --query "[].{name:name}" -o table
```

## Required confirmations / inputs (what you must provide)
The coding agent will need the following values to implement the proxy and UI:

- Confirm which backend URL to proxy (pick one):
  - `CHAT_BACKEND_URL`: use the Latest Revision FQDN for latest code: `https://ca-api-fbbtmk6hdoa5k--azd-1757265731.whitesmoke-1c4b6bfd.swedencentral.azurecontainerapps.io`
- Confirm chat backend routes and streaming support:
  - e.g. POST `/api/chat` or POST `/v1/chat`; indicate whether responses are streamed (SSE/Response stream) or full JSON.
- Confirm auth model for the chat backend:
  - none (public), API key (name of Key Vault secret), or Azure AD (client credentials or managed identity). If API key, give Key Vault name and secret name, or grant the policy above so it can be read.
- Frontend repo details (I found the repo URL above): branch (usually `main`) and the exact homepage path in the repo (`pages/index.js`, `app/page.tsx`, etc.).
- Do you want streaming responses displayed in the UI? (yes/no)

## Security design (recommended)
- Use a server-side proxy (Next.js API route) so the browser never sees the chat API key.
- The proxy runs in your frontend host (Static Web App functions or App Service) and authenticates to Key Vault or reads an app setting injected at deploy time by CI.
- Prefer Key Vault + managed identity or GitHub OIDC to inject secrets — avoid storing a long-lived client secret in GitHub.

## Files to add (concrete)
Add these to your Next.js frontend repo (paths are suggestions; adapt to your repo structure):

- `pages/api/chat.js` (or `app/api/chat/route.ts` for app router)
  - Server-side proxy: accepts POST {message,...}, reads secret from process.env (or uses managed identity to fetch Key Vault secret), forwards to the chat backend, supports streaming.

- `components/ChatWidget.jsx`
  - Small React component used on the homepage. Posts to `/api/chat`, renders streaming responses where available, handles errors/loading.

- Update homepage `pages/index.js` to include `ChatWidget`.

## Environment variables / secret names (create these)
- CHAT_BACKEND_URL — e.g. `https://ca-api-fbbtmk6hdoa5k--azd-1757265731.whitesmoke-1c4b6bfd.swedencentral.azurecontainerapps.io`
- CHAT_AUTH_MODE — `apiKey` | `azureAd` | `none`
- CHAT_API_KEY_SECRET_NAME — (Key Vault secret name), e.g. `CHAT_API_KEY`
- KEYVAULT_NAME — `kv-hubsqlop348479412002` (non-secret)
- NEXT_PUBLIC_CHAT_HOSTNAME — the site origin for client-side config/allowed origins

CI / GitHub Secrets for the frontend repo (add these in repository Settings → Secrets):
- AZURE_CREDENTIALS (or use GitHub OIDC) — for deployment
- KEYVAULT_NAME (optional)
- CHAT_API_KEY (optional, only if you want CI to inject app setting instead of runtime Key Vault)

## Sample Next.js API proxy (illustrative)
Add as `pages/api/chat.js` and adapt to your backend endpoint and streaming format.

```js
// pages/api/chat.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { message } = req.body;
  const backend = process.env.CHAT_BACKEND_URL;
  const apiKey = process.env.CHAT_API_KEY || null;
  const headers = { 'Content-Type': 'application/json' };
  if (apiKey) headers['Authorization'] = `Bearer ${apiKey}`;

  const resp = await fetch(`${backend}/api/chat`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ message })
  });

  // If backend streams text/event-stream or chunked responses, pipe back
  if (resp.body && resp.headers.get('content-type')?.includes('text/event-stream')) {
    res.setHeader('Content-Type', 'text/event-stream');
    const reader = resp.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(Buffer.from(value));
    }
    res.end();
    return;
  }

  const data = await resp.json();
  res.status(resp.status).json(data);
}
```

## Key Vault & identity wiring (commands)
- Grant Static Web App system-assigned identity or the Next.js host access to Key Vault secrets (example for Static Web App identity):
```bash
# get static web app identity principalId
az staticwebapp show -g rg-SQLOP-web -n next-pub-static-webapp --query identity -o json
# then set policy (replace <principalId> with value):
az keyvault set-policy --name kv-hubsqlop348479412002 --object-id <principalId> --secret-permissions get list
```

- Alternatively, grant Container App user-assigned identity (found earlier) permission if it needs direct access:
```bash
az keyvault set-policy --name kv-hubsqlop348479412002 --object-id ec205741-c0e6-4a81-9395-7c7b711f2621 --secret-permissions get list
```

## CI/CD notes (GitHub Actions)
- Add necessary GitHub secrets (AZURE_CREDENTIALS or use OIDC, plus optional CHAT_API_KEY if CI will set app settings).
- Use Azure/static-web-apps-deploy action or `az staticwebapp` CLI to deploy. When deploying, set app settings or Key Vault references so the runtime has CHAT_BACKEND_URL and CHAT_API_KEY available.

## Acceptance criteria / tests
- Homepage loads and displays chat widget.
- Sending message from UI returns a valid response from the chat backend (including streamed tokens if enabled).
- No API keys are visible in browser network requests or bundled JS.

## Next steps & options
- Option A (recommended): give the Static Web App system identity access to Key Vault; I will add the proxy and UI code to your frontend repo and wire Key Vault references in the SWA app settings.
- Option B (CI-inject): keep Key Vault locked; put CHAT_API_KEY into GitHub Secrets and have CI inject it as an app setting during deploy.
- Option C: iframe/embed if you only need a quick, unsecured integration (not recommended for production).

If you want me to produce a PR/patch for the frontend repo that adds `pages/api/chat.js`, `components/ChatWidget.jsx`, and changes to the homepage, tell me which option (A or B) you prefer and confirm the homepage file path in the repo.

---
Prepared on: 2025-09-09
Resources discovered from subscription id: 1b4303bc-5996-4aee-83bf-99c5f6c8ae62 (SQLOPTIMISEdev)
