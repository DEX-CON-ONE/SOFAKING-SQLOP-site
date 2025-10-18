import Link from "next/link";

export default function ADBAProduct() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              aDBA: <span className="text-accent">Automation-First</span> Database Management
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              The intelligent SQL Server automation framework that keeps your databases healthy, fast, and reliable.
            </p>
            
            {/* Development Status Notice */}
            <div className="bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-lg p-6 max-w-3xl mx-auto mt-8">
              <div className="flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-bold text-accent">Private Development</h3>
              </div>
              <p className="text-white/95 mb-4">
                aDBA is currently in private development and has not yet been released. We are actively working on finalizing our release plan.
              </p>
              <p className="text-white/95">
                Interested in contributing to the project or staying updated on our progress? <Link href="/contact" className="text-accent hover:text-accent/80 underline font-semibold">Contact us</Link> to learn more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content with Static Background */}
      <div className="content-background">
        {/* What is aDBA */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg text-shadow-lg">What is aDBA?</h2>
              <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                aDBA is our proprietary SQL Server automation framework that combines industry best practices with 
                intelligent monitoring and proactive maintenance. Built on proven tools like Ola Hallengren&apos;s maintenance 
                solution, First Responder Kit, WhoIsActive, and SQLWatch.
              </p>
            </div>
          </div>
        </section>

        {/* Core Modules */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Core Modules</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Health Check Module */}
              <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md text-shadow">Health Check</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  Automated daily health assessments covering configuration, performance, security, and best practices.
                </p>
              </div>

              {/* Index Audit & Optimizer */}
              <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md text-shadow">Index Audit & Optimizer</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  Intelligent index analysis and recommendations to optimize query performance and reduce storage costs.
                </p>
              </div>

              {/* Performance Logging */}
              <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md text-shadow">Performance Logging</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  Continuous monitoring of wait stats, blocking, slow queries, and resource utilization with trend analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Built on Industry Standards</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                aDBA integrates with the best open-source SQL Server tools and frameworks
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 text-center">
                <h4 className="text-lg font-bold text-white drop-shadow-md text-shadow">Ola Hallengren</h4>
                <p className="text-white/80 text-sm mt-2">Maintenance Solution</p>
              </div>
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 text-center">
                <h4 className="text-lg font-bold text-white drop-shadow-md text-shadow">First Responder Kit</h4>
                <p className="text-white/80 text-sm mt-2">Diagnostics & Tuning</p>
              </div>
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 text-center">
                <h4 className="text-lg font-bold text-white drop-shadow-md text-shadow">WhoIsActive</h4>
                <p className="text-white/80 text-sm mt-2">Real-time Monitoring</p>
              </div>
              <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 text-center">
                <h4 className="text-lg font-bold text-white drop-shadow-md text-shadow">SQLWatch</h4>
                <p className="text-white/80 text-sm mt-2">Performance Metrics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="scroll-reveal">
                <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg text-shadow-lg">
                  Easy Installation via dbatools
                </h2>
                <p className="text-xl text-white/95 mb-6 leading-relaxed drop-shadow-md text-shadow">
                  aDBA is deployed using PowerShell dbatools with a simple JSON configuration file. 
                  No manual scripts or complex setup required.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 text-lg drop-shadow-sm text-shadow">One-command installation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 text-lg drop-shadow-sm text-shadow">JSON-based configuration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 text-lg drop-shadow-sm text-shadow">Environment-specific customization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 text-lg drop-shadow-sm text-shadow">Automated updates and patches</span>
                  </li>
                </ul>
              </div>
              
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="bg-gray-900/80 rounded-lg p-6">
                  <code className="text-accent text-sm">
                    <div className="mb-2"># Install aDBA</div>
                    <div className="mb-4">Install-DbaADBA -SqlInstance MYSERVER -ConfigFile config.json</div>
                    <div className="mb-2"># Verify Installation</div>
                    <div>Get-DbaADBAHealth -SqlInstance MYSERVER</div>
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Roadmap</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Continuous improvement and new features
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40">
                <div className="text-accent font-bold text-sm mb-2">Q1 2025</div>
                <h4 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Query Store Integration</h4>
                <p className="text-white/90 drop-shadow-sm text-shadow">
                  Automated query performance regression detection and plan forcing recommendations
                </p>
              </div>
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40">
                <div className="text-accent font-bold text-sm mb-2">Q2 2025</div>
                <h4 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Azure SQL Support</h4>
                <p className="text-white/90 drop-shadow-sm text-shadow">
                  Extended modules for Azure SQL Database and Managed Instance environments
                </p>
              </div>
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40">
                <div className="text-accent font-bold text-sm mb-2">Q3 2025</div>
                <h4 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">ML-Powered Insights</h4>
                <p className="text-white/90 drop-shadow-sm text-shadow">
                  Machine learning models for predictive performance analysis and capacity planning
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/8 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-shadow-lg">
                Get Involved with aDBA Development
              </h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Want to contribute to the project or stay updated on our release plans? Get in touch with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" 
                  className="btn-primary text-lg"
                >
                  Schedule a Discussion
                </a>
                <Link href="/contact" className="btn-secondary text-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
