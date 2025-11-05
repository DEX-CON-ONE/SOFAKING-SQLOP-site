import Link from "next/link";

export default function BackupDRRisk() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              <span className="text-accent">Backup & DR Risk</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Ensure backup reliability and disaster recovery readiness with comprehensive validation and testing.
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
              <span className="text-secondary">Backup & DR Risk</span>
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
                    Are your backups actually working? Can you really restore when disaster strikes? Many organizations 
                    assume their backup strategy is solid, only to discover critical gaps when it&apos;s too late.
                  </p>
                  <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                    Uncertain backup reliability and disaster recovery readiness create significant business risk. 
                    Without regular testing and validation, you cannot be confident in your ability to recover from 
                    data loss, corruption, or system failures.
                  </p>
                  <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                    The cost of discovering backup failures during an actual disaster can be catastrophic to your business.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Business Risk Level</h3>
                  <div className="text-3xl font-bold text-accent mb-2 drop-shadow-md">Critical</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Data loss can be catastrophic</p>
                </div>
                
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Assessment Timeline</h3>
                  <div className="text-2xl font-bold text-secondary mb-2 drop-shadow-md">1 week</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Comprehensive backup validation</p>
                </div>
                
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Common Issues Found</h3>
                  <div className="text-2xl font-bold text-primary mb-2 drop-shadow-md">60%</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Of assessments reveal critical gaps</p>
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
                Comprehensive backup validation and disaster recovery planning to ensure business continuity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Backup Validation Testing</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Validate that your backups are actually restorable and contain the data you expect.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Restore testing in isolated environment</li>
                  <li>• Backup integrity verification</li>
                  <li>• Data consistency checks</li>
                  <li>• Recovery time measurement</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">RTO/RPO Analysis</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Define and validate your Recovery Time Objective (RTO) and Recovery Point Objective (RPO) requirements.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Business requirements assessment</li>
                  <li>• Current capability measurement</li>
                  <li>• Gap analysis and recommendations</li>
                  <li>• Cost-benefit optimization</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">DR Plan Development</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Create comprehensive disaster recovery procedures tailored to your environment and requirements.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Step-by-step recovery procedures</li>
                  <li>• Roles and responsibilities definition</li>
                  <li>• Communication protocols</li>
                  <li>• Recovery runbooks</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Automated Testing Framework</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Implement automated backup testing to continuously validate your disaster recovery capability.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Scheduled restore testing</li>
                  <li>• Automated validation scripts</li>
                  <li>• Alert configuration</li>
                  <li>• Compliance reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Common Issues We Find</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                Critical backup and DR gaps that put businesses at risk
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Untested Backups</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Backups running daily but never validated through actual restore testing</p>
              </div>
              
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Incomplete Coverage</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Critical databases or files missing from backup strategy</p>
              </div>
              
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Silent Failures</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Backup jobs failing without proper alerting or monitoring</p>
              </div>
              
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Inadequate Retention</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Retention policies that don&apos;t meet compliance or recovery needs</p>
              </div>
              
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Missing Documentation</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">No documented recovery procedures or runbooks</p>
              </div>
              
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Unvalidated RTO/RPO</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Recovery objectives not aligned with actual capabilities</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/8 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-shadow-lg">Ensure Your Recovery Readiness</h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Don&apos;t wait for a disaster to discover your backups don&apos;t work. Get comprehensive backup validation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary text-lg">
                  Schedule Assessment
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
