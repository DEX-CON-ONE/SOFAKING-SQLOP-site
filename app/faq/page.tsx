import Link from "next/link";
import Image from "next/image";

export default function FAQ() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Find answers to common questions about our SQL optimization services.
            </p>
          </div>
        </div>
      </section>

      {/* Content with Static Background */}
      <div className="content-background">
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* FAQ Items */}
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">How quickly can you improve our database performance?</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  Most performance improvements are delivered within 1-4 weeks, depending on the complexity of your environment. 
                  Simple query optimizations can often be completed in days, while comprehensive performance tuning projects 
                  typically take 2-4 weeks from start to finish.
                </p>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Do you guarantee performance improvements?</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  Yes, we guarantee measurable performance improvements. If we don't deliver the results we promise, 
                  you don't pay. This guarantee is backed by our proven track record and expertise in SQL optimization.
                </p>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">What SQL Server versions do you support?</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  We support all current and recent versions of SQL Server, including SQL Server 2016, 2017, 2019, 2022, 
                  and Azure SQL Database. Our experts stay current with the latest features and optimization techniques 
                  for each platform.
                </p>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">How does your fixed-fee pricing work?</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  After understanding your requirements, we provide a fixed-price quote with clearly defined deliverables 
                  and timeline. No hourly billing, no surprise costs. You know exactly what you're paying upfront, 
                  and payment is typically structured around project milestones.
                </p>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Can you work with our existing database team?</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  Absolutely. We work closely with your internal database administrators and development teams, 
                  providing knowledge transfer and documentation so your team can maintain the improvements long-term. 
                  We complement your team's skills rather than replace them.
                </p>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Do you provide ongoing support after optimization?</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  Yes, every engagement includes 30 days of support to address any questions or issues that arise 
                  after implementation. We also offer optional ongoing maintenance and monitoring services for clients 
                  who want continued support.
                </p>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">What if our database is hosted in the cloud?</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  We work with all major cloud platforms including Azure SQL Database, Amazon RDS for SQL Server, 
                  and Google Cloud SQL. Cloud environments often have unique optimization opportunities that we're 
                  experienced in leveraging.
                </p>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">How do you measure success?</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  We measure success through concrete metrics like query execution times, CPU utilization, 
                  I/O performance, and user response times. Every project includes before-and-after benchmarks 
                  so you can see the exact improvements achieved.
                </p>
              </div>
            </div>
            
            {/* Still have questions CTA */}
            <div className="mt-16 text-center">
              <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg text-shadow">Still Have Questions?</h2>
                <p className="text-white/90 mb-8 text-lg leading-relaxed drop-shadow-md text-shadow">
                  Get personalized answers to your specific database performance questions in a free consultation.
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