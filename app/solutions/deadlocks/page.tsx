import Link from "next/link";
import Image from "next/image";

export default function DeadlockResolution() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              <span className="text-accent">Deadlock Resolution</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Stop application timeouts caused by SQL Server deadlocks with expert analysis and proven solutions.
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
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <span className="mx-3">/</span>
              <span className="text-secondary">Deadlock Resolution</span>
            </nav>
          </div>
        </section>

        {/* Problem Overview */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-md text-shadow">The Problem</h2>
                  <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                    Applications timing out due to SQL Server deadlocks can bring business operations to a halt. 
                    Users experience errors, transactions fail, and data processing grinds to a stop.
                  </p>
                  <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                    Deadlocks occur when two or more processes are waiting for each other to release locks, 
                    creating a circular dependency that SQL Server must break by terminating one of the transactions.
                  </p>
                  <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                    Without expert intervention, deadlocks can become frequent, unpredictable, and increasingly 
                    disruptive to your business.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Impact on Business</h3>
                  <div className="text-3xl font-bold text-accent mb-2 drop-shadow-md">High</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Application timeouts and user complaints</p>
                </div>
                
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Resolution Timeline</h3>
                  <div className="text-2xl font-bold text-secondary mb-2 drop-shadow-md">1-2 weeks</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">From analysis to implementation</p>
                </div>
                
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Success Rate</h3>
                  <div className="text-2xl font-bold text-primary mb-2 drop-shadow-md">95%+</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Deadlock reduction or elimination</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Our Solution</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                A systematic approach to identifying, analyzing, and eliminating deadlock conditions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Deadlock Capture & Analysis</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Enable system health session and trace flags to capture detailed deadlock graphs and execution plans.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Extended Events configuration</li>
                  <li>• Deadlock graph collection</li>
                  <li>• Lock chain analysis</li>
                  <li>• Resource contention identification</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Query & Index Optimization</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Optimize queries and indexes to minimize lock duration and reduce the likelihood of deadlocks.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Query execution plan analysis</li>
                  <li>• Missing index identification</li>
                  <li>• Query rewrite recommendations</li>
                  <li>• Lock hint optimization</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Transaction Design Review</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Review transaction design patterns and recommend architectural changes to prevent deadlocks.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Transaction scope optimization</li>
                  <li>• Access pattern standardization</li>
                  <li>• Isolation level assessment</li>
                  <li>• Row versioning evaluation</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Monitoring & Prevention</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Implement ongoing monitoring to detect and alert on deadlock patterns before they impact users.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Extended Events setup</li>
                  <li>• Alert configuration</li>
                  <li>• Historical trend analysis</li>
                  <li>• Proactive detection strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Resolution Process</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                Our proven four-step methodology for eliminating deadlocks
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Capture</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Enable deadlock monitoring and collect detailed graphs</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Analyze</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Identify root causes and patterns</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Implement</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Apply targeted fixes and optimizations</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Monitor</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Verify resolution and prevent recurrence</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/8 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-shadow-lg">Eliminate Deadlocks for Good</h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Stop losing transactions and frustrating users. Get expert help to resolve your deadlock issues permanently.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary text-lg">
                  Schedule Consultation
                </a>
                <Link href="/solutions" className="btn-secondary text-lg">
                  View All Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
