import Link from "next/link";
import Image from "next/image";

// Note: This page contains placeholder pricing. 
// Actual pricing would need to be provided by SQLOPTIMISE.

export default function Pricing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              Transparent <span className="text-accent">Pricing</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Fixed-fee engagements with no hidden costs. Know exactly what you're paying upfront.
            </p>
          </div>
        </div>
      </section>

      {/* Content with Static Background */}
      <div className="content-background">
        {/* Pricing Approach */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg text-shadow-lg">Our Pricing Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Fixed-Fee Projects</h3>
                  <p className="text-white/90 drop-shadow-sm text-shadow">No hourly billing surprises. You know the total cost upfront with clear deliverables.</p>
                </div>
                
                <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Performance Guarantee</h3>
                  <p className="text-white/90 drop-shadow-sm text-shadow">We guarantee measurable improvements. If we don't deliver, you don't pay.</p>
                </div>
                
                <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Value-Based Pricing</h3>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Pricing based on the value delivered, not just time spent. Typically 300%+ ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Pricing - Placeholder ranges */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Service Pricing Ranges</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                Typical project ranges. Exact pricing depends on scope and complexity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md text-shadow">Database Health Check</h3>
                <div className="text-4xl font-bold text-primary mb-6">$X,XXX</div>
                <ul className="space-y-3 mb-8 text-white/90">
                  <li>• Comprehensive assessment</li>
                  <li>• 50+ page detailed report</li>
                  <li>• Priority roadmap</li>
                  <li>• Follow-up consultation</li>
                  <li>• 3-5 day delivery</li>
                </ul>
                <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary w-full text-center block">
                  Get Quote
                </a>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-primary/40 shadow-xl border-2">
                <div className="text-center mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md text-shadow">Performance Tuning</h3>
                <div className="text-4xl font-bold text-accent mb-6">$X,XXX</div>
                <ul className="space-y-3 mb-8 text-white/90">
                  <li>• Query optimization</li>
                  <li>• Index strategy</li>
                  <li>• Wait stats analysis</li>
                  <li>• Parameter sniffing fixes</li>
                  <li>• 1-4 week timeline</li>
                </ul>
                <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary w-full text-center block">
                  Get Quote
                </a>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md text-shadow">Query Optimization</h3>
                <div className="text-4xl font-bold text-secondary mb-6">$X,XXX</div>
                <ul className="space-y-3 mb-8 text-white/90">
                  <li>• Complex query rewriting</li>
                  <li>• Stored procedure optimization</li>
                  <li>• View & function improvement</li>
                  <li>• Dynamic SQL enhancement</li>
                  <li>• 1-3 week timeline</li>
                </ul>
                <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary w-full text-center block">
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">What's Always Included</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                Every engagement includes these value-adds at no extra cost
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2 drop-shadow-md text-shadow">Free Consultation</h3>
                <p className="text-white/80 text-sm drop-shadow-sm text-shadow">Initial assessment and strategy discussion</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2 drop-shadow-md text-shadow">Documentation</h3>
                <p className="text-white/80 text-sm drop-shadow-sm text-shadow">Comprehensive reports and implementation guides</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2 drop-shadow-md text-shadow">Ongoing Support</h3>
                <p className="text-white/80 text-sm drop-shadow-sm text-shadow">30-day support period after delivery</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2 drop-shadow-md text-shadow">Performance Guarantee</h3>
                <p className="text-white/80 text-sm drop-shadow-sm text-shadow">Money-back guarantee on measurable results</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Custom Pricing */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/8 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-shadow-lg">Need Custom Pricing?</h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Large enterprises, multiple-phase projects, or ongoing partnerships may qualify for custom pricing arrangements.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary text-lg">
                  Schedule Free Consultation
                </a>
                <Link href="/contact" className="btn-secondary text-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900/50 backdrop-blur-sm text-white section-padding border-t border-white/10">
          <div className="container-max">
            <div className="text-center py-8">
              <div className="flex items-center justify-center mb-6">
                <Image 
                  src="/assets/brand/Brand_Logo-stacked.png" 
                  alt="SQLOPTIMISE Logo" 
                  width={120} 
                  height={60}
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 text-lg mb-6">© 2024 SQLOPTIMISE. All rights reserved.</p>
              <div className="flex justify-center space-x-8">
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}