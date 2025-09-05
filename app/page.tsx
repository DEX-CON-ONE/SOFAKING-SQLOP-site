import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Centered Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container-max">
          <div className="flex flex-col items-center justify-center py-6 space-y-4 md:flex-row md:justify-between md:space-y-0">
            {/* Logo - Centered on mobile, left on desktop */}
            <div className="flex items-center">
              <Image 
                src="/assets/brand/Brand_Logo-stacked.png" 
                alt="SQLOPTIMISE Logo" 
                width={120} 
                height={60}
                className="h-12 w-auto"
              />
            </div>
            
            {/* Navigation - Centered */}
            <nav className="flex space-x-8">
              <Link href="/services" className="text-secondary hover:text-primary transition-colors font-medium">Services</Link>
              <Link href="/about" className="text-secondary hover:text-primary transition-colors font-medium">About</Link>
              <Link href="/blog" className="text-secondary hover:text-primary transition-colors font-medium">Blog</Link>
              <Link href="/contact" className="text-secondary hover:text-primary transition-colors font-medium">Contact</Link>
            </nav>
            
            {/* CTA Button */}
            <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary">
              Schedule a Call
            </a>
          </div>
        </div>
      </header>

      {/* Fullscreen Hero Section with Dynamic Background */}
      <section className="hero-fullscreen min-h-screen flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        
        {/* "Now that's refreshing" text box */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="refreshing-box">
            Now that's refreshing
          </div>
        </div>
        
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <p className="text-pink-200 text-lg mb-6 font-medium">SQL Server Performance & Cost Optimisation: Made Simple</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Make SQL reliably{" "}
              <span className="text-accent float-animation">faster and cheaper</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Measurable improvements with expert tuning, health checks, and best‑practice automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary text-lg">
                Schedule a Call
              </a>
              <Link href="/blog" className="btn-secondary text-lg">
                Read more
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll-down indicator */}
        <div className="scroll-indicator">
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
        {/* Differentiators - Infographic Style */}
        <section className="bg-white/80 backdrop-blur-sm section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-4">Why Choose SQLOPTIMISE</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three key differentiators that set us apart from the competition
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-elevated p-8 text-center bg-white/90">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">Senior experts, not juniors</h3>
                <p className="text-gray-600 leading-relaxed">Experienced SQL professionals with proven track records delivering enterprise-grade solutions</p>
              </div>
              
              <div className="card-elevated p-8 text-center bg-white/90">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">Guaranteed measurable improvements</h3>
                <p className="text-gray-600 leading-relaxed">Proven performance gains you can measure and trust, backed by our performance guarantee</p>
              </div>
              
              <div className="card-elevated p-8 text-center bg-white/90">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">Transparent fixed-fee engagements</h3>
                <p className="text-gray-600 leading-relaxed">Clear pricing with no hidden costs or surprises. Know exactly what you're paying upfront</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Infographic Style */}
        <section className="bg-white/60 backdrop-blur-sm section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert SQL optimization services tailored to your enterprise needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Performance Tuning */}
              <div className="card-elevated p-10 group bg-white/90">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-pink-500 rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Performance Tuning</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">Find and fix bottlenecks in SQL workloads with precision diagnostics and optimization.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">Query plan analysis and indexing strategy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">Parameter sniffing and cache optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">Wait stats and blocking diagnostics</span>
                  </li>
                </ul>
                <Link href="/services/performance-tuning" className="inline-flex items-center text-primary font-bold text-lg hover:text-opacity-80 transition-colors">
                  Explore Service 
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Health Check */}
              <div className="card-elevated p-10 group bg-white/90">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-green-400 rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Health Check</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">Comprehensive baseline health assessment with prioritized remediation plan.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">Configuration audit and best practices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">Storage and memory optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">Backup, HA/DR review</span>
                  </li>
                </ul>
                <Link href="/services/health-check" className="inline-flex items-center text-primary font-bold text-lg hover:text-opacity-80 transition-colors">
                  Explore Service 
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-5xl font-bold mb-6">Ready to Optimize Your Database?</h2>
              <p className="text-xl text-pink-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Get your free assessment and discover how we can boost your database performance with guaranteed results.
              </p>
              <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-secondary bg-white text-primary hover:bg-gray-100 text-lg inline-flex items-center">
                Schedule Free Assessment
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 6v5l3 3 3-3v-5M3 12h18" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Simple AI Chat Component - Bottom of page */}
        <section className="bg-white/20 backdrop-blur-sm text-white py-12">
          <div className="container-max">
            <div className="ai-chat-simple max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Need Quick Help?</h3>
              <p className="text-white/90 mb-6">Ask our AI assistant about SQL performance optimization</p>
              
              <div className="flex items-center gap-4 max-w-2xl mx-auto">
                <input 
                  type="text" 
                  placeholder="...How can we help?" 
                  className="chat-input"
                />
                <button className="chat-send-btn">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="bg-gray-900/90 backdrop-blur-sm text-white section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center mb-6">
                  <Image 
                    src="/assets/brand/Brand_Logo-stacked.png" 
                    alt="SQLOPTIMISE Logo" 
                    width={120} 
                    height={60}
                    className="h-12 w-auto brightness-0 invert"
                  />
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-lg">
                  Expert SQL optimization and database performance consulting for enterprise clients. Guaranteed measurable improvements with transparent pricing.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/sqloptimise/" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/DEX-CON-ONE" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-xl mb-6 text-secondary">Company</h4>
                <ul className="space-y-3">
                  <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors text-lg">About</Link></li>
                  <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-lg">Privacy</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-lg">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-xl mb-6 text-secondary">Resources</h4>
                <ul className="space-y-3">
                  <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-lg">Blog</Link></li>
                  <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors text-lg">Services</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-300 text-lg">© 2024 SQLOPTIMISE. All rights reserved.</p>
                <div className="flex items-center space-x-8">
                  <a href="mailto:info@sqloptimise.com" className="text-gray-300 hover:text-white transition-colors text-lg">
                    info@sqloptimise.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}