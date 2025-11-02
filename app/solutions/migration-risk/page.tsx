import Link from "next/link";
import Image from "next/image";

export default function MigrationRisk() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              <span className="text-accent">Migration Risk Mitigation</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Move to cloud or newer SQL versions with minimal downtime and maximum confidence.
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
              <span className="text-secondary">Migration Risk Mitigation</span>
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
                    Moving to cloud platforms or upgrading to newer SQL Server versions carries significant risk. 
                    Extended downtime, compatibility issues, performance degradation, and data integrity problems 
                    can all derail your migration project.
                  </p>
                  <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                    Without proper planning, assessment, and testing, migrations often exceed planned downtime windows, 
                    encounter unexpected compatibility issues, or result in post-migration performance problems that 
                    frustrate users and impact business operations.
                  </p>
                  <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                    The stakes are high: failed migrations can cost hundreds of thousands in lost productivity and 
                    emergency remediation.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Migration Success Rate</h3>
                  <div className="text-3xl font-bold text-accent mb-2 drop-shadow-md">98%</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">With proper planning and testing</p>
                </div>
                
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Downtime Reduction</h3>
                  <div className="text-2xl font-bold text-secondary mb-2 drop-shadow-md">60-80%</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Compared to unplanned migrations</p>
                </div>
                
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Planning Timeline</h3>
                  <div className="text-2xl font-bold text-primary mb-2 drop-shadow-md">2-4 weeks</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Assessment to execution plan</p>
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
                Comprehensive migration planning and execution to minimize risk and downtime
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Compatibility Assessment</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Comprehensive analysis of your current environment to identify compatibility issues before migration.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Database Compatibility Advisor analysis</li>
                  <li>• Deprecated feature identification</li>
                  <li>• Third-party tool compatibility check</li>
                  <li>• Application dependency mapping</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Performance Baseline & Testing</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Establish performance baselines and validate that post-migration performance meets or exceeds expectations.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Pre-migration performance baseline</li>
                  <li>• Query Store analysis</li>
                  <li>• Post-migration performance validation</li>
                  <li>• Regression testing framework</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Migration Runbook</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Detailed step-by-step procedures including rollback plans and validation checkpoints.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Pre-migration checklist</li>
                  <li>• Detailed execution steps</li>
                  <li>• Validation procedures</li>
                  <li>• Rollback procedures</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Downtime Minimization</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Employ proven techniques to minimize downtime during the migration window.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Log shipping or replication setup</li>
                  <li>• Database Mirroring/AlwaysOn evaluation</li>
                  <li>• Cutover strategy optimization</li>
                  <li>• Parallel processing techniques</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Types */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Migration Scenarios We Handle</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                Expert guidance for all types of SQL Server migrations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-elevated p-8 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="text-5xl mb-6">☁️</div>
                <h3 className="font-bold text-xl mb-4 text-white drop-shadow-md text-shadow">Cloud Migration</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  On-premises to Azure SQL Database, Azure SQL MI, or SQL Server on Azure VMs
                </p>
              </div>
              
              <div className="card-elevated p-8 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="text-5xl mb-6">⬆️</div>
                <h3 className="font-bold text-xl mb-4 text-white drop-shadow-md text-shadow">Version Upgrades</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  SQL Server 2012/2014/2016/2017 to SQL Server 2019/2022
                </p>
              </div>
              
              <div className="card-elevated p-8 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="text-5xl mb-6">🔄</div>
                <h3 className="font-bold text-xl mb-4 text-white drop-shadow-md text-shadow">Platform Changes</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  Moving between Azure SQL offerings or consolidating instances
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Migration Process</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                Our proven five-phase migration methodology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Assess</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Environment analysis and compatibility check</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Plan</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Detailed runbook and timeline development</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Test</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Dry run in test environment</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Execute</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Production migration with monitoring</p>
              </div>
              
              <div className="card-elevated p-6 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">5</span>
                </div>
                <h3 className="font-bold text-lg mb-3 text-white drop-shadow-md text-shadow">Validate</h3>
                <p className="text-white/90 text-sm drop-shadow-sm text-shadow">Post-migration verification and optimization</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/8 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-shadow-lg">Plan Your Migration with Confidence</h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Minimize risk and downtime with expert migration planning and execution. Get your assessment today.
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
