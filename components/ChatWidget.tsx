"use client";

import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", content: text }, { role: "assistant", content: "" }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "text/event-stream, application/json" },
        body: JSON.stringify({ message: text, history: messages }),
      });

      // Try streaming first
      const ct = res.headers.get("content-type") || "";
      if (res.body && (ct.includes("text/event-stream") || ct.includes("text/plain"))) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let assistantText = "";
        let buffer = "";
        const flushAssistant = () => {
          setMessages((prev) => {
            const copy = [...prev];
            for (let i = copy.length - 1; i >= 0; i--) {
              if (copy[i].role === "assistant") {
                copy[i] = { ...copy[i], content: assistantText };
                break;
              }
            }
            return copy;
          });
        };

        let ended = false;
        while (!ended) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          // Process SSE events separated by double newline
          let idx;
          while ((idx = buffer.indexOf("\n\n")) !== -1) {
            const rawEvent = buffer.slice(0, idx);
            buffer = buffer.slice(idx + 2);
            // Each event may have multiple lines like: "data: {...}"; ignore other fields
            const dataLines = rawEvent
              .split(/\n/)
              .map((l) => l.trim())
              .filter((l) => l.startsWith("data:"))
              .map((l) => l.slice(5).trim());
            if (dataLines.length === 0) continue;
            const dataPayload = dataLines.join("\n");
            // Some servers may send [DONE]
            if (dataPayload === "[DONE]") {
              ended = true;
              break;
            }
            try {
              const evt = JSON.parse(dataPayload);
              const type = evt?.type || "";
              const content = evt?.content ?? "";
              if (type === "message") {
                assistantText += String(content);
                flushAssistant();
              } else if (type === "completed_message") {
                // ensure final content shown
                if (content) {
                  assistantText = String(content);
                }
                flushAssistant();
              } else if (type === "stream_end") {
                ended = true;
                break;
              } else {
                // ignore status/queue events
              }
            } catch {
              // Fallback: treat as plain text chunk
              assistantText += dataPayload;
              flushAssistant();
            }
          }
        }
      } else {
        const data = await res.json();
        const assistant = typeof data === "string" ? data : data.reply || data.message || JSON.stringify(data);
        setMessages((prev) => {
          const copy = [...prev];
          for (let i = copy.length - 1; i >= 0; i--) {
            if (copy[i].role === "assistant") {
              copy[i] = { ...copy[i], content: assistant };
              break;
            }
          }
          return copy;
        });
      }
    } catch (err: any) {
      setError(err?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="ai-chat-simple max-w-4xl mx-auto text-left">
      <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md text-shadow">Need Quick Help?</h3>
      <p className="text-white/95 mb-6 drop-shadow-sm text-shadow">Ask our AI assistant about SQL performance optimization</p>

      <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
        {messages.map((m, i) => (
          <div key={i} className="flex gap-3">
            <div className={`font-semibold ${m.role === "user" ? "text-accent" : "text-secondary"}`}>
              {m.role === "user" ? "You" : "AI"}:
            </div>
            <div className="whitespace-pre-wrap text-white/95">{m.content}</div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form onSubmit={sendMessage} className="flex items-center gap-4 max-w-2xl mx-auto mt-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="...How can we help?"
          className="chat-input"
          disabled={loading}
        />
        <button type="submit" className="chat-send-btn" disabled={loading} aria-label="Send">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
      {error && <p className="text-red-300 mt-3">{error}</p>}
    </div>
  );
}
