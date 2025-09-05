import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container-max">
          <div className="flex flex-col items-center justify-center py-6 space-y-4 md:flex-row md:justify-between md:space-y-0">
            <div className="flex items-center">
              <Link href="/">
                <Image 
                  src="/assets/brand/Brand_Logo-stacked.png" 
                  alt="SQLOPTIMISE Logo" 
                  width={120} 
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            
            <nav className="flex space-x-8">
              <Link href="/services" className="text-white hover:text-secondary transition-colors font-medium drop-shadow-md">Services</Link>
              <Link href="/case-studies" className="text-white hover:text-secondary transition-colors font-medium drop-shadow-md">Case Studies</Link>
              <Link href="/pricing" className="text-white hover:text-secondary transition-colors font-medium drop-shadow-md">Pricing</Link>
              <Link href="/about" className="text-white hover:text-secondary transition-colors font-medium drop-shadow-md">About</Link>
              <Link href="/contact" className="text-secondary font-medium drop-shadow-md">Contact</Link>
            </nav>
            
            <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary">
              Schedule a Call
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              Contact <span className="text-accent">SQLOPTIMISE</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Get your free assessment and discover how we can boost your database performance with guaranteed results.
            </p>
          </div>
        </div>
      </section>

      {/* Content with Static Background */}
      <div className="content-background">
        {/* Contact Options */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Primary Contact Method */}
              <div>
                <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-md text-shadow">Schedule a Call</h2>
                  <p className="text-white/90 mb-8 leading-relaxed drop-shadow-sm text-shadow">
                    The fastest way to get started is to schedule a free consultation call. We'll discuss your 
                    database performance challenges and recommend the best approach for your needs.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md text-shadow">30-Minute Free Consultation</h3>
                        <p className="text-white/90 drop-shadow-sm text-shadow">No commitment, no sales pressure. Just expert advice about your database performance needs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md text-shadow">Same-Day Response</h3>
                        <p className="text-white/90 drop-shadow-sm text-shadow">We respond to all scheduling requests within the same business day.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md text-shadow">Immediate Value</h3>
                        <p className="text-white/90 drop-shadow-sm text-shadow">Get actionable insights and recommendations even from our initial conversation.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" 
                       className="btn-primary text-lg w-full text-center inline-block">
                      Schedule Free Consultation
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Alternative Contact Methods */}
              <div className="space-y-8">
                <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Email Us</h3>
                  <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                    Prefer email? Send us your questions and we'll respond with detailed information about how we can help.
                  </p>
                  <a href="mailto:info@sqloptimise.com" className="text-accent font-bold text-lg hover:text-opacity-80 transition-colors drop-shadow-md">
                    info@sqloptimise.com
                  </a>
                </div>
                
                <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Connect on LinkedIn</h3>
                  <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                    Follow us on LinkedIn for SQL optimization tips, case studies, and industry insights.
                  </p>
                  <a href="https://www.linkedin.com/company/sqloptimise/" className="text-accent font-bold text-lg hover:text-opacity-80 transition-colors drop-shadow-md">
                    linkedin.com/company/sqloptimise
                  </a>
                </div>
                
                <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Frequently Asked Questions</h3>
                  <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                    Find answers to common questions about our services, pricing, and process.
                  </p>
                  <Link href="/faq" className="text-accent font-bold text-lg hover:text-opacity-80 transition-colors drop-shadow-md">
                    View FAQ →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">What Happens Next</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                Here's what you can expect when you contact us
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Initial Discussion</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">We understand your performance challenges and business requirements</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Free Assessment</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Quick evaluation of your current setup with preliminary recommendations</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Proposal</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Fixed-price proposal with clear deliverables and timeline</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Get Results</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Measurable performance improvements with full documentation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900/50 backdrop-blur-sm text-white section-padding border-t border-white/10">
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
                  <a href="https://github.com/sqloptimise" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-xl mb-6 text-secondary">Services</h4>
                <ul className="space-y-3">
                  <li><Link href="/services/performance-tuning" className="text-gray-300 hover:text-white transition-colors text-lg">Performance Tuning</Link></li>
                  <li><Link href="/services/health-check" className="text-gray-300 hover:text-white transition-colors text-lg">Health Check</Link></li>
                  <li><Link href="/services/query-optimization" className="text-gray-300 hover:text-white transition-colors text-lg">Query Optimization</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-xl mb-6 text-secondary">Support</h4>
                <ul className="space-y-3">
                  <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors text-lg">FAQ</Link></li>
                  <li><Link href="/contact" className="text-secondary font-bold text-lg">Contact</Link></li>
                  <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-lg">Privacy Policy</Link></li>
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