import Link from "next/link";
import Image from "next/image";

export default function Services() {
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
              <Link href="/services" className="text-secondary font-medium drop-shadow-md">Services</Link>
              <Link href="/case-studies" className="text-white hover:text-secondary transition-colors font-medium drop-shadow-md">Case Studies</Link>
              <Link href="/pricing" className="text-white hover:text-secondary transition-colors font-medium drop-shadow-md">Pricing</Link>
              <Link href="/about" className="text-white hover:text-secondary transition-colors font-medium drop-shadow-md">About</Link>
              <Link href="/contact" className="text-white hover:text-secondary transition-colors font-medium drop-shadow-md">Contact</Link>
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
              SQL Performance <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Comprehensive SQL optimization and database performance consulting services for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Content with Static Background */}
      <div className="content-background">
        {/* Services Overview */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg text-shadow-lg">Expert SQL Optimization</h2>
              <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                We provide comprehensive SQL optimization and database performance consulting services 
                for businesses of all sizes, delivering guaranteed measurable improvements.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Performance Tuning */}
              <div className="card-elevated p-10 group bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-pink-500 rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-md text-shadow">Performance Tuning</h3>
                <p className="text-white/90 mb-8 text-lg leading-relaxed drop-shadow-sm text-shadow">
                  Identify and eliminate SQL bottlenecks for faster query execution.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 font-medium drop-shadow-sm text-shadow">Query plan analysis and optimization strategies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 font-medium drop-shadow-sm text-shadow">Index design and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 font-medium drop-shadow-sm text-shadow">Parameter sniffing and plan cache optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 font-medium drop-shadow-sm text-shadow">Wait stats analysis and blocking resolution</span>
                  </li>
                </ul>
                <Link href="/services/performance-tuning" className="btn-secondary bg-primary text-white hover:bg-primary/80">
                  Learn More
                </Link>
              </div>

              {/* Database Health Check */}
              <div className="card-elevated p-10 group bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-green-400 rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-md text-shadow">Database Health Check</h3>
                <p className="text-white/90 mb-8 text-lg leading-relaxed drop-shadow-sm text-shadow">
                  Comprehensive assessment with prioritized remediation roadmap.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 font-medium drop-shadow-sm text-shadow">Configuration audit and best practice recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 font-medium drop-shadow-sm text-shadow">Storage and memory optimization analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 font-medium drop-shadow-sm text-shadow">Backup strategy and disaster recovery review</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 font-medium drop-shadow-sm text-shadow">Security and compliance assessment</span>
                  </li>
                </ul>
                <Link href="/services/health-check" className="btn-secondary bg-accent text-white hover:bg-accent/80">
                  Learn More
                </Link>
              </div>

              {/* Query Optimization */}
              <div className="card-elevated p-10 group bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-yellow-400 rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m5 0V2a1 1 0 011-1h4a1 1 0 011 1v2m-5 4h4l-2 6h-2V8zm-8 0h4l2 6H8V8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-md text-shadow">Query Optimization</h3>
                <p className="text-white/90 mb-8 text-lg leading-relaxed drop-shadow-sm text-shadow">
                  Transform slow queries into high-performance database operations.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 font-medium drop-shadow-sm text-shadow">Complex query rewriting and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 font-medium drop-shadow-sm text-shadow">Stored procedure performance enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 font-medium drop-shadow-sm text-shadow">View and function optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 font-medium drop-shadow-sm text-shadow">Dynamic SQL performance improvement</span>
                  </li>
                </ul>
                <Link href="/services/query-optimization" className="btn-secondary bg-secondary text-white hover:bg-secondary/80">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Why Choose SQLOPTIMISE</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                Three key differentiators that set our services apart
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-elevated p-8 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-white drop-shadow-md text-shadow">Senior experts, not juniors</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">Experienced SQL professionals with proven track records delivering enterprise-grade solutions</p>
              </div>
              
              <div className="card-elevated p-8 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-white drop-shadow-md text-shadow">Guaranteed measurable improvements</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">Proven performance gains you can measure and trust, backed by our performance guarantee</p>
              </div>
              
              <div className="card-elevated p-8 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-white drop-shadow-md text-shadow">Transparent fixed-fee engagements</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">Clear pricing with no hidden costs or surprises. Know exactly what you're paying upfront</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/8 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-shadow-lg">Ready to Optimize Your Database?</h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Get your free assessment and discover how we can boost your database performance with guaranteed results.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary text-lg">
                  Schedule Free Assessment
                </a>
                <Link href="/pricing" className="btn-secondary text-lg">
                  View Pricing
                </Link>
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
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
                <h4 className="font-bold text-xl mb-6 text-secondary">Company</h4>
                <ul className="space-y-3">
                  <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors text-lg">About Us</Link></li>
                  <li><Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors text-lg">Case Studies</Link></li>
                  <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors text-lg">Pricing</Link></li>
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