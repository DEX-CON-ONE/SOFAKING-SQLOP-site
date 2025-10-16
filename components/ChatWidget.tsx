"use client";

export default function ChatWidget() {
  return (
    <div className="ai-chat-simple max-w-4xl mx-auto text-left">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-white drop-shadow-md text-shadow">AI Assistant</h3>
        <span className="bg-secondary/90 text-gray-900 px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
          Coming Soon
        </span>
      </div>
      <p className="text-white/95 mb-6 drop-shadow-sm text-shadow">
        We&apos;re building an intelligent SQL performance assistant to help answer your questions instantly. 
        In the meantime, feel free to <a href="/contact" className="text-accent hover:underline font-semibold">contact us directly</a> or{" "}
        <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="text-accent hover:underline font-semibold">schedule a call</a>.
      </p>

      <div className="bg-white/10 rounded-lg p-8 text-center border border-white/20">
        <svg className="w-16 h-16 mx-auto mb-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <p className="text-white/80 text-lg">
          This feature is currently under development and will be available soon.
        </p>
      </div>
    </div>
  );
}
