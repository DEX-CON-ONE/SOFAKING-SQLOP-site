import type { NextRequest } from "next/server";

function joinUrl(base: string, path: string) {
  const b = base.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${b}${p}`;
}

function corsHeaders(origin: string | null) {
  const allowlist = (process.env.ALLOWED_ORIGINS || process.env.NEXT_PUBLIC_CHAT_HOSTNAME || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  let allowed = "*";
  if (origin && allowlist.length > 0 && allowlist.includes(origin)) {
    allowed = origin;
  }
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Vary": "Origin",
  } as Record<string, string>;
}

export async function POST(req: NextRequest) {
  try {
    const backendBase = process.env.CHAT_BACKEND_URL;
    const backendPath = process.env.CHAT_BACKEND_PATH || "/api/chat";
    if (!backendBase) {
      return new Response(
        JSON.stringify({ error: "CHAT_BACKEND_URL is not set" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const targetUrl = joinUrl(backendBase, backendPath);
    const apiKey = process.env.CHAT_API_KEY;
    const clientPayload = await req.json().catch(() => ({}));

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: req.headers.get("accept") || "application/json",
    };
    if (apiKey) headers["Authorization"] = `Bearer ${apiKey}`;

  const upstream = await fetch(targetUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(clientPayload),
      // Avoid caching
      cache: "no-store",
    });

    // Pass through streaming bodies (e.g., text/event-stream or chunked text)
    const contentType = upstream.headers.get("content-type") || "application/octet-stream";
    if (upstream.body && (contentType.includes("text/event-stream") || contentType.includes("text/plain"))) {
      return new Response(upstream.body, {
        status: upstream.status,
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "no-store",
          ...corsHeaders(req.headers.get("origin")),
        },
      });
    }

    // Otherwise, forward JSON
    const data = await upstream.json().catch(async () => ({ raw: await upstream.text() }));
    return new Response(JSON.stringify(data), {
      status: upstream.status,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
        ...corsHeaders(req.headers.get("origin")),
      },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: "Proxy error", detail: String(err?.message || err) }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders(req.headers.get("origin")) } }
    );
  }
}

export async function OPTIONS() {
  // OPTIONS preflight cannot read request headers in this signature; allow all or a conservative default
  const headers = corsHeaders(null);
  return new Response(null, { status: 204, headers });
}
