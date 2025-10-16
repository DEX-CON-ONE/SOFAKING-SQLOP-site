import Link from "next/link";
import Image from "next/image";

export default function QueryOptimization() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-fullscreen min-h-[60vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              Query <span className="text-accent">Optimization</span>
            </h1>
            <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Transform slow queries into high-performance database operations with expert rewriting and optimization.
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
              <span className="text-secondary">Query Optimization</span>
            </nav>
          </div>
        </section>

        {/* Service Overview */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-md text-shadow">What Is Query Optimization?</h2>
                  <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                    Query Optimization is the process of rewriting and restructuring SQL queries to achieve maximum 
                    performance while maintaining the same functional results.
                  </p>
                  <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                    Our experts analyze slow-performing queries, stored procedures, views, and functions to identify 
                    inefficiencies and implement targeted optimizations.
                  </p>
                  <p className="text-white/90 leading-relaxed drop-shadow-sm text-shadow">
                    From complex reporting queries to critical business operations, we transform your most challenging 
                    SQL into high-performance, maintainable code.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Performance Improvement</h3>
                  <div className="text-3xl font-bold text-accent mb-2 drop-shadow-md">50-1000x</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Faster query execution times</p>
                </div>
                
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Average Project</h3>
                  <div className="text-2xl font-bold text-secondary mb-2 drop-shadow-md">1-3 weeks</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">From analysis to optimized queries</p>
                </div>
                
                <div className="card-elevated p-6 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md text-shadow">Success Rate</h3>
                  <div className="text-2xl font-bold text-primary mb-2 drop-shadow-md">100%</div>
                  <p className="text-white/90 drop-shadow-sm text-shadow">Guaranteed performance improvement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Services Included</h2>
              <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md text-shadow">
                Comprehensive query optimization covering all aspects of SQL performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m5 0V2a1 1 0 011-1h4a1 1 0 011 1v2m-5 4h4l-2 6h-2V8zm-8 0h4l2 6H8V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Complex Query Rewriting</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Complete rewrite of inefficient queries using advanced SQL techniques and optimization patterns.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Multi-table join optimization</li>
                  <li>• Subquery to CTE conversion</li>
                  <li>• Window function optimization</li>
                  <li>• Complex aggregation improvement</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Stored Procedure Enhancement</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Optimize stored procedures for better performance, maintainability, and scalability.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Logic flow optimization</li>
                  <li>• Temporary table strategies</li>
                  <li>• Error handling improvement</li>
                  <li>• Parameter optimization</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">View & Function Optimization</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Optimize database views and user-defined functions for better performance and maintainability.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• View materialization strategies</li>
                  <li>• Scalar function optimization</li>
                  <li>• Table-valued function improvement</li>
                  <li>• Nested view optimization</li>
                </ul>
              </div>

              <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md text-shadow">Dynamic SQL Improvement</h3>
                <p className="text-white/90 mb-4 drop-shadow-sm text-shadow">
                  Optimize dynamic SQL generation for better performance and security.
                </p>
                <ul className="space-y-2 text-white/80 drop-shadow-sm text-shadow">
                  <li>• Dynamic query optimization</li>
                  <li>• SQL injection prevention</li>
                  <li>• Parameter validation</li>
                  <li>• Plan cache efficiency</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/8 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-shadow-lg">Transform Your Slow Queries</h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Get expert query optimization that delivers dramatic performance improvements with guaranteed results.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary text-lg">
                  Schedule Consultation
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