import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              About <span className="text-accent">SQLOPTIMISE</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Senior SQL experts delivering measurable database performance improvements for enterprise clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Content with Static Background */}
      <div className="content-background">
        {/* Our Story Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg text-shadow-lg">Our Story</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md text-shadow">Built by Database Experts</h3>
                  <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                    SQLOPTIMISE was founded by senior database professionals who saw too many businesses struggling with 
                    SQL performance issues that could be easily resolved with the right expertise.
                  </p>
                  <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                    We believe that every business deserves fast, reliable database performance without breaking the budget 
                    or dealing with junior consultants learning on the job.
                  </p>
                  <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                    Our transparent, fixed-fee approach ensures you get senior-level expertise with predictable costs and 
                    guaranteed measurable results.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Performance Focus</h4>
                  <p className="text-white/90 drop-shadow-sm text-shadow">We specialize exclusively in SQL performance optimization, giving us deep expertise in what matters most.</p>
                </div>
                
                <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Proven Results</h4>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Our clients consistently see 10x+ performance improvements with measurable ROI from day one.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Our Approach</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                Three principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-elevated p-8 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-white drop-shadow-md text-shadow">Senior Expertise Only</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  No junior developers or trainees. Only experienced SQL professionals with proven enterprise track records work on your project.
                </p>
              </div>
              
              <div className="card-elevated p-8 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-white drop-shadow-md text-shadow">Measurable Guarantee</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  We guarantee measurable performance improvements. If we don't deliver the results we promise, you don't pay.
                </p>
              </div>
              
              <div className="card-elevated p-8 text-center bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-white drop-shadow-md text-shadow">Transparent Pricing</h3>
                <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                  Fixed-fee engagements with no hidden costs. You know exactly what you're paying upfront, with no surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/8 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-shadow-lg">Ready to Work Together?</h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Let's discuss how we can help optimize your database performance with guaranteed measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary text-lg">
                  Schedule a Call
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