import Link from "next/link";
import Image from "next/image";

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

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/8 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-shadow-lg">
                Don&apos;t See Your Problem Listed?
              </h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Every SQL Server environment is unique. Let&apos;s discuss your specific challenges and create a tailored solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" 
                  className="btn-primary text-lg"
                >
                  Schedule a Call
                </a>
                <Link href="/contact" className="btn-secondary text-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900/50 backdrop-blur-sm text-white section-padding border-t border-white/10">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center mb-6">
                  <Image 
                    src="/assets/brand/Brand_Logo-stacked.png" 
                    alt="SQLOPTIMISE Logo" 
                    width={120} 
                    height={60}
                    className="h-12 w-auto brightness-0 invert"
                  />
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-lg">
                  Expert SQL optimization and database performance consulting for enterprise clients. Guaranteed measurable improvements with transparent pricing.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/sqloptimise/" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/DEX-CON-ONE" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-xl mb-6 text-secondary">Company</h4>
                <ul className="space-y-3">
                  <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors text-lg">About</Link></li>
                  <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-lg">Privacy</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-lg">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-xl mb-6 text-secondary">Resources</h4>
                <ul className="space-y-3">
                  <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-lg">Blog</Link></li>
                  <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors text-lg">Services</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-300 text-lg">© 2024 SQLOPTIMISE. All rights reserved.</p>
                <div className="flex items-center space-x-8">
                  <a href="mailto:info@sqloptimise.com" className="text-gray-300 hover:text-white transition-colors text-lg">
                    info@sqloptimise.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
