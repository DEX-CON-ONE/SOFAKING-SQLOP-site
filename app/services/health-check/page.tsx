import Link from "next/link";
import Image from "next/image";

export default function HealthCheck() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              Database <span className="text-accent">Health Check</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Comprehensive assessment with prioritized remediation roadmap to ensure optimal database health.
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
              <span className="text-secondary">Database Health Check</span>
            </nav>
          </div>
        </section>

        {/* Service Overview */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-md text-shadow">What Is a Database Health Check?</h2>
                  <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                    A Database Health Check is a comprehensive assessment of your SQL Server environment that identifies 
                    potential issues before they become critical problems affecting your business operations.
                  </p>
                  <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                    Our senior consultants perform a thorough evaluation of your database configuration, security, 
                    performance, backup strategies, and operational procedures.
                  </p>
                  <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                    You receive a detailed report with prioritized recommendations and a clear roadmap for improvement.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Assessment Areas</h3>
                  <div className="text-3xl font-bold text-accent mb-2 drop-shadow-md">150+</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Configuration points evaluated</p>
                </div>
                
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Typical Timeline</h3>
                  <div className="text-2xl font-bold text-secondary mb-2 drop-shadow-md">3-5 days</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">From data collection to final report</p>
                </div>
                
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Issues Identified</h3>
                  <div className="text-2xl font-bold text-primary mb-2 drop-shadow-md">15-30</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Average issues found per assessment</p>
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
                Our comprehensive health check covers all critical aspects of database management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Configuration Audit</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Comprehensive review of SQL Server configuration settings against industry best practices.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Server-level configuration settings</li>
                  <li>• Database-level configuration options</li>
                  <li>• Memory and CPU allocation review</li>
                  <li>• Best practice compliance assessment</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Storage & Memory Optimization</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Analysis of storage configuration, file placement, and memory utilization patterns.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• File and filegroup configuration</li>
                  <li>• Disk I/O performance analysis</li>
                  <li>• Memory pressure assessment</li>
                  <li>• Tempdb configuration review</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Backup & Disaster Recovery</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Evaluation of backup strategies, recovery procedures, and high availability configurations.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Backup strategy effectiveness</li>
                  <li>• Recovery time objective (RTO) analysis</li>
                  <li>• Recovery point objective (RPO) assessment</li>
                  <li>• High availability configuration review</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Security & Compliance</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Comprehensive security review and compliance assessment against industry standards.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Authentication and authorization review</li>
                  <li>• Encryption implementation assessment</li>
                  <li>• Audit trail configuration</li>
                  <li>• Compliance framework alignment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">What You Receive</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                Comprehensive documentation and actionable recommendations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-elevated p-8 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-white drop-shadow-md text-shadow">Detailed Report</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">Comprehensive 50+ page report documenting all findings with evidence and recommendations</p>
              </div>
              
              <div className="card-elevated p-8 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-white drop-shadow-md text-shadow">Priority Roadmap</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">Actionable roadmap with prioritized recommendations and estimated impact analysis</p>
              </div>
              
              <div className="card-elevated p-8 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-4 text-white drop-shadow-md text-shadow">Follow-up Session</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">One-hour consultation session to discuss findings and answer implementation questions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/8 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-shadow-lg">Get Your Database Health Check</h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Identify potential issues before they become critical problems. Get your comprehensive health assessment today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary text-lg">
                  Schedule Health Check
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