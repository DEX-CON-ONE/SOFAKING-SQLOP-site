import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";

const ChatWidget = dynamic(() => import("../components/ChatWidget"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Fullscreen Hero Section with Dynamic Background */}
      <section className="hero-fullscreen min-h-screen flex flex-col items-center justify-center text-white relative">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/brand/website_BG-dynamic.png"
          aria-hidden="true"
        >
          <source src="/assets/brand/Hero-BG-vid.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        
        <div className="hero-content container-max text-center px-4 z-10">
          <div>
            {/* Tagline: will reveal third (slower) */}
            <p className="scroll-reveal sr-anim-fade sr-delay-3000 text-pink-200 text-base sm:text-lg mb-4 sm:mb-6 font-medium drop-shadow-lg">SQL Server Performance & Cost Optimisation: Made Simple</p>
            {/* Inline "Now that's refreshing" label across all breakpoints: will reveal last (slowest) */}
            <p className="scroll-reveal sr-anim-breathe sr-delay-4300 text-white/90 text-sm md:text-base mb-4">Now that's refreshing</p>
            {/* Headline: reveals first with pop */}
            <h1 className="scroll-reveal sr-anim-pop sr-delay-0 text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-lg">
              Make SQL reliably{" "}
              <span className="text-accent float-animation drop-shadow-lg">faster and cheaper</span>
            </h1>
            {/* Measurable improvements: second (after headline) */}
            <p className="scroll-reveal sr-anim-fade sr-delay-1200 text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Measurable improvements with expert tuning, health checks, and best‑practice automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary text-lg">
                Schedule a Call
              </a>
              <Link href="/services" className="btn-secondary text-lg">
                View Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll-down indicator */}
  <div className="scroll-indicator hidden sm:block">
          <div className="flex flex-col items-center">
            <p className="text-sm mb-2 opacity-80">Scroll to explore</p>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Content with Static Background */}
      <div className="content-background">
        {/* Value Proposition Cards - Three Proof Points */}
        <section className="text-white section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="scroll-reveal sr-anim-fade sr-delay-200 card-elevated bg-white/5 backdrop-blur-sm border border-white/20 p-8 text-center">
                <div className="text-accent text-5xl font-bold mb-4">↑ 85%</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Stability Increase</h3>
                <p className="text-white/90 leading-relaxed">
                  Eliminate outages with proactive monitoring, automated backups, and best-practice configuration.
                </p>
              </div>
              <div className="scroll-reveal sr-anim-fade sr-delay-450 card-elevated bg-white/5 backdrop-blur-sm border border-white/20 p-8 text-center">
                <div className="text-accent text-5xl font-bold mb-4">↓ 40%</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Cost Reduction</h3>
                <p className="text-white/90 leading-relaxed">
                  Optimize resource usage, right-size infrastructure, and reduce licensing costs through efficient tuning.
                </p>
              </div>
              <div className="scroll-reveal sr-anim-fade sr-delay-700 card-elevated bg-white/5 backdrop-blur-sm border border-white/20 p-8 text-center">
                <div className="text-accent text-5xl font-bold mb-4">↑ 10x</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Speed Improvement</h3>
                <p className="text-white/90 leading-relaxed">
                  Transform slow queries into high-performance operations with expert indexing and query optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="text-white section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">How We Work</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                A proven methodology for sustainable SQL Server performance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="scroll-reveal sr-anim-fade sr-delay-200 text-center">
                <div className="bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent">1</div>
                <h3 className="text-xl font-bold mb-2 text-white">Assess</h3>
                <p className="text-white/80">Comprehensive health check identifying bottlenecks and risks</p>
              </div>
              <div className="scroll-reveal sr-anim-fade sr-delay-450 text-center">
                <div className="bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent">2</div>
                <h3 className="text-xl font-bold mb-2 text-white">Fix</h3>
                <p className="text-white/80">Prioritized remediation of critical issues and quick wins</p>
              </div>
              <div className="scroll-reveal sr-anim-fade sr-delay-700 text-center">
                <div className="bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent">3</div>
                <h3 className="text-xl font-bold mb-2 text-white">Automate</h3>
                <p className="text-white/80">Implement best-practice automation and monitoring frameworks</p>
              </div>
              <div className="scroll-reveal sr-anim-fade sr-delay-700 text-center">
                <div className="bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent">4</div>
                <h3 className="text-xl font-bold mb-2 text-white">Monitor</h3>
                <p className="text-white/80">Ongoing health tracking and proactive performance management</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Chat Component */}
        <section className="text-white py-12">
          <div className="container-max">
            <ChatWidget />
          </div>
        </section>

        {/* CTA Section after AI Chat */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/8 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-5xl font-bold mb-6 drop-shadow-lg text-shadow-lg">Ready to <span className="text-accent">optimise</span> your SQL?</h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Get your free assessment and discover how we can boost your database performance with guaranteed results.
              </p>
              <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary text-lg inline-flex items-center shadow-xl">
                Schedule Free Assessment
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 6v5l3 3 3-3v-5M3 12h18" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}