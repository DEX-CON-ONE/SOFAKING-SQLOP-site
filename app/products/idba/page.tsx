import Link from "next/link";

export default function IDBAProduct() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              iDBA: <span className="text-accent">Intelligence Layer</span> for Database Management
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Advanced AI-powered intelligence that transforms database insights into actionable recommendations.
            </p>
            
            {/* Development Status Notice */}
            <div className="bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-lg p-6 max-w-3xl mx-auto mt-8">
              <div className="flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-bold text-accent">Early Development</h3>
              </div>
              <p className="text-white/95 mb-4">
                iDBA is in very early stages of development. We are actively exploring AI and machine learning capabilities to enhance database management.
              </p>
              <p className="text-white/95">
                Interested in shaping the future of intelligent database management? <Link href="/contact" className="text-accent hover:text-accent/80 underline font-semibold">Contact us</Link> to learn more about contributing or staying updated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content with Static Background */}
      <div className="content-background">
        {/* What is iDBA */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg text-shadow-lg">What is iDBA?</h2>
              <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                iDBA is the intelligence layer of our database management offering. It builds on top of the automation provided by 
                aDBA to deliver AI-powered insights, predictive analytics, and intelligent recommendations for your SQL Server environments.
              </p>
            </div>
          </div>
        </section>

        {/* Planned Capabilities */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Planned Capabilities</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow mb-12">
                Exploring the future of intelligent database management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Predictive Analytics */}
              <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md text-shadow">Predictive Analytics</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  Machine learning models to predict performance issues before they impact users, enabling proactive intervention.
                </p>
              </div>

              {/* Intelligent Insights */}
              <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md text-shadow">Intelligent Insights</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  AI-driven analysis of performance data to surface hidden patterns and provide actionable recommendations.
                </p>
              </div>

              {/* Natural Language Queries */}
              <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md text-shadow">Natural Language Interface</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  Query your database metrics and health status using natural language, making complex analysis accessible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration with aDBA */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="scroll-reveal">
                <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg text-shadow-lg">
                  Built on aDBA Foundation
                </h2>
                <p className="text-xl text-white/95 mb-6 leading-relaxed drop-shadow-md text-shadow">
                  iDBA leverages the comprehensive data collected by aDBA to provide intelligent insights and recommendations.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 text-lg drop-shadow-sm text-shadow">Analyzes aDBA performance metrics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 text-lg drop-shadow-sm text-shadow">Identifies trends across environments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 text-lg drop-shadow-sm text-shadow">Provides context-aware recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 text-lg drop-shadow-sm text-shadow">Learns from your database workloads</span>
                  </li>
                </ul>
              </div>
              
              <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-accent/20 rounded-full mb-4">
                    <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">aDBA + iDBA</h3>
                  <p className="text-white/90">Automation meets Intelligence</p>
                </div>
                <p className="text-white/95 leading-relaxed text-center">
                  Together, aDBA and iDBA form a comprehensive database management solution that automates routine tasks 
                  while providing intelligent insights to optimize performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Our Vision</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Transforming database management through intelligent automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40">
                <h4 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Proactive Problem Prevention</h4>
                <p className="text-white/90 drop-shadow-sm text-shadow">
                  Move beyond reactive troubleshooting to predict and prevent issues before they impact your users.
                </p>
              </div>
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40">
                <h4 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Continuous Learning</h4>
                <p className="text-white/90 drop-shadow-sm text-shadow">
                  AI models that learn from your environment and improve recommendations over time.
                </p>
              </div>
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40">
                <h4 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Simplified Complexity</h4>
                <p className="text-white/90 drop-shadow-sm text-shadow">
                  Make complex database performance analysis accessible through intuitive interfaces and natural language.
                </p>
              </div>
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40">
                <h4 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Enterprise Scale</h4>
                <p className="text-white/90 drop-shadow-sm text-shadow">
                  Manage hundreds of database instances with intelligent prioritization and resource optimization.
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
                Shape the Future of iDBA
              </h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                We are in the early stages of development and would love your input. Contact us to learn how you can contribute or stay updated on our progress.
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
