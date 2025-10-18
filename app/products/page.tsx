import Link from "next/link";

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              Our <span className="text-accent">Products</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Intelligent automation and AI-powered insights for comprehensive SQL Server management.
            </p>
          </div>
        </div>
      </section>

      {/* Content with Static Background */}
      <div className="content-background">
        {/* Introduction */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg text-shadow-lg">Complete Database Management Suite</h2>
              <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Our product suite combines automation and intelligence to deliver comprehensive SQL Server management solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Product Cards */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* aDBA Product Card */}
              <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl group hover:border-accent/60 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-3xl font-bold text-white drop-shadow-md text-shadow">aDBA</h3>
                    <p className="text-accent font-semibold">Automation Framework</p>
                  </div>
                </div>
                
                <div className="bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-lg p-4 mb-6">
                  <p className="text-white/95 text-sm font-semibold">
                    🔒 Private Development - Not Yet Released
                  </p>
                </div>

                <p className="text-white/95 text-lg mb-6 leading-relaxed drop-shadow-sm text-shadow">
                  SQL Server automation framework that combines industry best practices with intelligent monitoring and proactive maintenance.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 drop-shadow-sm text-shadow">Automated health checks and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 drop-shadow-sm text-shadow">Index optimization and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 drop-shadow-sm text-shadow">Performance logging and trend analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 drop-shadow-sm text-shadow">Built on proven open-source tools</span>
                  </li>
                </ul>

                <Link href="/products/adba" className="btn-primary w-full text-center block">
                  Learn More About aDBA
                </Link>
              </div>

              {/* iDBA Product Card */}
              <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl group hover:border-accent/60 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-3xl font-bold text-white drop-shadow-md text-shadow">iDBA</h3>
                    <p className="text-accent font-semibold">Intelligence Layer</p>
                  </div>
                </div>
                
                <div className="bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-lg p-4 mb-6">
                  <p className="text-white/95 text-sm font-semibold">
                    🚧 Early Development Stage
                  </p>
                </div>

                <p className="text-white/95 text-lg mb-6 leading-relaxed drop-shadow-sm text-shadow">
                  AI-powered intelligence layer that transforms database insights into actionable recommendations through advanced analytics.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 drop-shadow-sm text-shadow">Predictive performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 drop-shadow-sm text-shadow">AI-driven intelligent insights</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 drop-shadow-sm text-shadow">Natural language query interface</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 drop-shadow-sm text-shadow">Continuous learning from workloads</span>
                  </li>
                </ul>

                <Link href="/products/idba" className="btn-primary w-full text-center block">
                  Learn More About iDBA
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How They Work Together */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg text-shadow-lg">Better Together</h2>
              <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md text-shadow mb-12">
                aDBA provides the automation foundation, while iDBA delivers the intelligence layer for comprehensive database management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 text-center">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Automated Data Collection</h3>
                <p className="text-white/90 drop-shadow-sm text-shadow">
                  aDBA continuously collects performance metrics, health data, and system statistics
                </p>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 text-center">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Intelligent Analysis</h3>
                <p className="text-white/90 drop-shadow-sm text-shadow">
                  iDBA analyzes the collected data using AI to identify patterns, trends, and potential issues
                </p>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 text-center">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Actionable Insights</h3>
                <p className="text-white/90 drop-shadow-sm text-shadow">
                  Receive prioritized recommendations and predictive alerts to prevent issues before they occur
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
                Interested in Our Products?
              </h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Both products are still in development. Contact us to learn how you can contribute or stay updated on our progress.
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
