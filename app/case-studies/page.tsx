import Link from "next/link";
import Image from "next/image";

// Note: This is a placeholder page with inferred content. 
// The actual case studies would need specific client examples and results.

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              Case <span className="text-accent">Studies</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Real-world examples of how we've transformed database performance for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Content with Static Background */}
      <div className="content-background">
        {/* Sample Case Studies - These would be replaced with real client examples */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg text-shadow-lg">Client Success Stories</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                See how we've helped businesses achieve dramatic performance improvements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Sample Case Study 1 */}
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="mb-6">
                  <div className="text-sm text-secondary font-bold mb-2">E-COMMERCE PLATFORM</div>
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md text-shadow">85% Query Performance Improvement</h3>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                  A growing e-commerce company was experiencing slow page load times during peak traffic. 
                  Our performance tuning optimized their product catalog queries, resulting in 85% faster response times.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">85%</div>
                    <div className="text-white/80 text-sm">Faster Queries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">2 weeks</div>
                    <div className="text-white/80 text-sm">Implementation</div>
                  </div>
                </div>
                <div className="text-sm text-white/80 italic">
                  "SQLOPTIMISE reduced our query response times by 85% in just two weeks. Outstanding results." - Sarah Johnson, CTO
                </div>
              </div>

              {/* Sample Case Study 2 */}
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="mb-6">
                  <div className="text-sm text-secondary font-bold mb-2">FINANCIAL SERVICES</div>
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md text-shadow">Critical Issue Prevention</h3>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                  Our database health check identified critical configuration issues and potential disaster recovery gaps 
                  before they could impact business operations.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">23</div>
                    <div className="text-white/80 text-sm">Issues Found</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                    <div className="text-white/80 text-sm">Resolved</div>
                  </div>
                </div>
                <div className="text-sm text-white/80 italic">
                  "Their health check identified critical issues we didn't even know existed. Saved us from potential disasters." - Mike Chen, DBA
                </div>
              </div>
            </div>

            {/* Results Summary */}
            <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-8 drop-shadow-md text-shadow">Typical Results Across All Clients</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">10-100x</div>
                  <div className="text-white/90">Performance Improvement</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">300%+</div>
                  <div className="text-white/90">Average ROI</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">2-4</div>
                  <div className="text-white/90">Weeks Timeline</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-white/90">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/8 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-shadow-lg">Ready for Your Success Story?</h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Join our satisfied clients and get guaranteed measurable database performance improvements.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary text-lg">
                  Schedule Free Assessment
                </a>
                <Link href="/services" className="btn-secondary text-lg">
                  View Our Services
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