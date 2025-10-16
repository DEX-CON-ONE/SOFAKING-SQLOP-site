import Link from "next/link";
import Image from "next/image";

export default function PerformanceTuning() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              SQL <span className="text-accent">Performance Tuning</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Identify and eliminate SQL bottlenecks for faster query execution and improved database performance.
            </p>
          </div>
        </div>
      </section>

      {/* Content with Static Background */}
      <div className="content-background">
        {/* Breadcrumb */}
        <section className="py-8">
          <div className="container-max">
            <nav className="text-white/80 text-lg">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-3">/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-3">/</span>
              <span className="text-secondary">Performance Tuning</span>
            </nav>
          </div>
        </section>

        {/* Service Overview */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-md text-shadow">What Is Performance Tuning?</h2>
                  <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                    SQL Performance Tuning is the systematic process of identifying, analyzing, and resolving 
                    database bottlenecks to improve query execution speed and overall system performance.
                  </p>
                  <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                    Our senior consultants use advanced diagnostic tools and proven methodologies to pinpoint 
                    performance issues and implement targeted optimizations that deliver measurable results.
                  </p>
                  <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                    From slow-running reports to unresponsive applications, we tackle performance problems 
                    at their source with precision and expertise.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Typical Performance Gains</h3>
                  <div className="text-3xl font-bold text-accent mb-2 drop-shadow-md">10-100x</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Query execution speed improvement</p>
                </div>
                
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Average Timeline</h3>
                  <div className="text-2xl font-bold text-secondary mb-2 drop-shadow-md">1-4 weeks</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">From assessment to implementation</p>
                </div>
                
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">ROI Impact</h3>
                  <div className="text-2xl font-bold text-primary mb-2 drop-shadow-md">300-500%</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Typical return on investment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">What's Included</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                Our comprehensive performance tuning service covers all aspects of SQL optimization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Query Plan Analysis</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Deep dive into execution plans to identify inefficient operations, missing indexes, and suboptimal query structures.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Execution plan capture and analysis</li>
                  <li>• Index usage assessment</li>
                  <li>• Join optimization recommendations</li>
                  <li>• Statistics and cardinality evaluation</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Index Design & Implementation</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Strategic index creation and optimization to dramatically improve query performance while minimizing storage overhead.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Missing index identification</li>
                  <li>• Duplicate index elimination</li>
                  <li>• Covering index strategies</li>
                  <li>• Clustered index optimization</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Parameter Sniffing Resolution</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Address parameter sniffing issues that cause inconsistent query performance and plan cache problems.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Plan cache analysis</li>
                  <li>• Parameter sensitivity detection</li>
                  <li>• Query hint optimization</li>
                  <li>• Forced parameterization strategies</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Wait Stats & Blocking Analysis</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Comprehensive analysis of system wait statistics and blocking patterns to identify and resolve resource contention.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Wait statistics interpretation</li>
                  <li>• Blocking chain analysis</li>
                  <li>• Lock escalation optimization</li>
                  <li>• Deadlock prevention strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Our Process</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                A systematic approach to identifying and resolving performance issues
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Assessment</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Comprehensive baseline performance analysis and problem identification</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Diagnosis</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Root cause analysis using advanced diagnostic tools and techniques</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Optimization</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Targeted optimization implementation with minimal system disruption</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Validation</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Performance verification and documentation of measurable improvements</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/8 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-shadow-lg">Ready to Speed Up Your Queries?</h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Get your free performance assessment and discover how much faster your database can run.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary text-lg">
                  Schedule Free Assessment
                </a>
                <Link href="/services" className="btn-secondary text-lg">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}