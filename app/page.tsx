import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">SQLOPTIMISE</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/services" className="text-secondary hover:text-primary transition-colors">Services</Link>
              <Link href="/about" className="text-secondary hover:text-primary transition-colors">About</Link>
              <Link href="/blog" className="text-secondary hover:text-primary transition-colors">Blog</Link>
              <Link href="/contact" className="text-secondary hover:text-primary transition-colors">Contact</Link>
            </nav>
            <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary">Schedule a Call</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-hero-gradient text-white section-padding">
        <div className="container-max text-center">
          <p className="text-pink-200 text-lg mb-4">SQL Server Performance & Cost Optimisation: Made Simple</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Make SQL reliably{" "}
            <span className="text-accent">faster and cheaper</span>
          </h1>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Measurable improvements with expert tuning, health checks, and best‑practice automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary text-lg px-8 py-4">
              Schedule a Call
            </a>
            <Link href="/blog" className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Read more
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Senior experts, not juniors</h3>
              <p className="text-gray-600">Experienced SQL professionals with proven track records</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Guaranteed measurable improvements</h3>
              <p className="text-gray-600">Proven performance gains you can measure and trust</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Transparent fixed-fee engagements</h3>
              <p className="text-gray-600">Clear pricing with no hidden costs or surprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Brief statement about what you offer overall.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Performance Tuning */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Performance Tuning</h3>
              <p className="text-gray-600 mb-6">Find and fix bottlenecks in SQL workloads.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Query plan analysis and indexing strategy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Parameter sniffing and cache optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Wait stats and blocking diagnostics</span>
                </li>
              </ul>
              <Link href="/services/performance-tuning" className="text-primary font-semibold hover:underline">
                Explore →
              </Link>
            </div>

            {/* Health Check */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Health Check</h3>
              <p className="text-gray-600 mb-6">Baseline health and prioritized remediation plan.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Configuration audit and best practices</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Storage and memory optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Backup, HA/DR review</span>
                </li>
              </ul>
              <Link href="/services/health-check" className="text-primary font-semibold hover:underline">
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real clients</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-lg">SJ</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Sarah Johnson</h4>
                  <p className="text-gray-600">CTO, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                "SQLOPTIMISE reduced our query response times by 85% in just two weeks. Outstanding results."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-lg">MC</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Mike Chen</h4>
                  <p className="text-gray-600">Database Administrator, DataFlow Inc</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                "Their health check identified critical issues we didn't even know existed. Saved us from potential disasters."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Database?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Get your free assessment and discover how we can boost your database performance.
          </p>
          <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-secondary bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            Schedule a Call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">SQLOPTIMISE</h3>
              <p className="text-gray-300 mb-4">
                Expert SQL optimization and database performance consulting for enterprise clients.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300">© 2024 SQLOPTIMISE. All rights reserved.</p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-gray-300">info@sqloptimise.com</span>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}