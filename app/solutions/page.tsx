import Link from "next/link";
import Image from "next/image";
import SolutionsContactForm from "@/components/SolutionsContactForm";

export default function Solutions() {
  const solutions = [
    {
      title: "Deadlock Resolution",
      problem: "Applications timing out due to SQL Server deadlocks",
      icon: "🔒",
      link: "/solutions/deadlocks"
    },
    {
      title: "Backup & DR Risk",
      problem: "Uncertain about backup reliability and disaster recovery readiness",
      icon: "💾",
      link: "/solutions/backup-dr-risk"
    },
    {
      title: "Migration Risk Mitigation",
      problem: "Moving to cloud or newer SQL versions with minimal downtime",
      icon: "🚀",
      link: "/solutions/migration-risk"
    },
    {
      title: "Slow Azure MI Reporting",
      problem: "Reports running slow on Azure SQL Managed Instance subscribers",
      icon: "📊",
      link: "/solutions/slow-azure-mi-reporting"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              Problem-First <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Real SQL Server problems. Expert solutions. Proven results.
            </p>
          </div>
        </div>
      </section>

      {/* Content with Static Background */}
      <div className="content-background">
        {/* Solutions Overview */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg text-shadow-lg">
                Common SQL Server Challenges We Solve
              </h2>
              <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                We&apos;ve seen these problems many times before. Here&apos;s how we solve them for good.
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {solutions.map((solution, index) => (
                <Link 
                  key={index}
                  href={solution.link}
                  className="card-elevated p-10 group bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl hover:border-accent/60 transition-all duration-300"
                >
                  <div className="text-6xl mb-6">{solution.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md text-shadow group-hover:text-accent transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed drop-shadow-sm text-shadow mb-6">
                    {solution.problem}
                  </p>
                  <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                    Learn more
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Contact Form */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="scroll-reveal">
                <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg text-shadow-lg">
                  Don&apos;t See Your Problem Listed?
                </h2>
                <p className="text-xl text-white/95 mb-8 leading-relaxed drop-shadow-md text-shadow">
                  Every SQL Server environment is unique. Let&apos;s discuss your specific challenges and create a tailored solution.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Expert Review</h3>
                      <p className="text-white/90">Our team will review your specific situation and recommend the best approach.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Schedule a Call</h3>
                      <p className="text-white/90">After submission, you&apos;ll be directed to book a convenient time to discuss your needs.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Fast Response</h3>
                      <p className="text-white/90">Our team typically responds within 1 business day with initial recommendations.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <p className="text-white/90 mb-2">
                    <strong className="text-white">Note:</strong> HubSpot CRM integration is ready and waiting for your API keys.
                  </p>
                  <p className="text-sm text-white/70">
                    Set <code className="bg-white/10 px-2 py-1 rounded">NEXT_PUBLIC_HUBSPOT_PORTAL_ID</code> and <code className="bg-white/10 px-2 py-1 rounded">NEXT_PUBLIC_HUBSPOT_FORM_ID</code> environment variables to activate lead tracking.
                  </p>
                </div>
              </div>

              <div className="scroll-reveal">
                <SolutionsContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
