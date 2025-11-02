import Link from "next/link";
import Image from "next/image";

export default function SlowAzureMI() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              <span className="text-accent">Slow Azure MI Reporting</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Optimize reports running slow on Azure SQL Managed Instance subscribers with targeted performance tuning.
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
              <span className="text-secondary">Slow Azure MI Reporting</span>
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
                    Reports that ran fine on-premises are now timing out or running unacceptably slow on Azure SQL 
                    Managed Instance subscribers. This is a common challenge when implementing transactional replication 
                    to Azure SQL MI for reporting workloads.
                  </p>
                  <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                    The subscriber database on Azure MI may experience different performance characteristics due to 
                    resource limitations, network latency, storage differences, or replication overhead. Without proper 
                    optimization, reporting queries can become painfully slow.
                  </p>
                  <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                    Users become frustrated, report deadlines are missed, and the business questions the value of 
                    the cloud migration.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Performance Improvement</h3>
                  <div className="text-3xl font-bold text-accent mb-2 drop-shadow-md">5-20x</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Typical reporting query speedup</p>
                </div>
                
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Optimization Timeline</h3>
                  <div className="text-2xl font-bold text-secondary mb-2 drop-shadow-md">1-2 weeks</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">From analysis to implementation</p>
                </div>
                
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Common Root Causes</h3>
                  <div className="text-2xl font-bold text-primary mb-2 drop-shadow-md">3-5</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Issues typically found per environment</p>
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
                Comprehensive performance analysis and optimization for Azure SQL MI reporting workloads
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Query Performance Analysis</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Deep dive into slow-running reports using Query Store and execution plan analysis specific to Azure MI.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Query Store historical analysis</li>
                  <li>• Execution plan regression detection</li>
                  <li>• Wait statistics interpretation</li>
                  <li>• Resource consumption patterns</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Azure MI Configuration Optimization</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Optimize Azure SQL MI specific settings and configurations for optimal reporting performance.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Service tier evaluation</li>
                  <li>• vCore and storage optimization</li>
                  <li>• Read scale-out configuration</li>
                  <li>• Resource governor settings</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Index Strategy Redesign</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Create optimized indexing strategy specifically for the reporting workload on the subscriber.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Reporting-specific index design</li>
                  <li>• Columnstore index evaluation</li>
                  <li>• Index maintenance strategy</li>
                  <li>• Statistics optimization</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Replication Optimization</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Optimize transactional replication configuration to minimize latency and resource overhead.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Replication article tuning</li>
                  <li>• Distribution agent optimization</li>
                  <li>• Conflict resolution strategy</li>
                  <li>• Latency monitoring setup</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Common Root Causes</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                Issues we frequently identify and resolve
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Missing Indexes</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">
                  Indexes from source not replicated or not optimal for reporting queries on subscriber
                </p>
              </div>
              
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Outdated Statistics</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">
                  Statistics not updating properly on subscriber, leading to poor execution plans
                </p>
              </div>
              
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Resource Constraints</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">
                  Azure MI tier too small for the reporting workload requirements
                </p>
              </div>
              
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Parameter Sniffing</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">
                  Different data distribution on subscriber causing parameter sniffing issues
                </p>
              </div>
              
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Replication Overhead</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">
                  Distribution agent consuming resources during report execution windows
                </p>
              </div>
              
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Read Scale Not Utilized</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">
                  Applications not configured to use read-only replicas for reporting
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Optimization Process</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                Our systematic approach to resolving Azure MI reporting performance issues
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Baseline</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Capture current performance metrics and problematic queries</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Diagnose</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Identify root causes using Azure MI diagnostics</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Optimize</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Implement targeted fixes and tuning</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Validate</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Measure improvements and document results</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/8 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-shadow-lg">Speed Up Your Azure MI Reports</h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Stop suffering with slow reporting performance. Get expert Azure SQL MI optimization today.
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
