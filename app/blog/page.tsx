import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  // Placeholder blog posts
  const posts = [
    {
      id: 1,
      title: "10 Essential SQL Server Performance Tuning Tips",
      excerpt: "Discover the most effective techniques for optimizing SQL Server performance and reducing query response times.",
      date: "2024-01-15",
      category: "Performance Tuning",
      readTime: "8 min read",
      slug: "sql-server-performance-tuning-tips"
    },
    {
      id: 2,
      title: "Common Database Health Check Issues and Solutions",
      excerpt: "Learn about the most frequent problems uncovered during database health checks and how to resolve them.",
      date: "2024-01-10", 
      category: "Health Check",
      readTime: "12 min read",
      slug: "database-health-check-issues"
    },
    {
      id: 3,
      title: "Index Optimization Strategies for Large Databases",
      excerpt: "Advanced indexing strategies to improve query performance in large-scale database environments.",
      date: "2024-01-05",
      category: "Optimization",
      readTime: "15 min read",
      slug: "index-optimization-strategies"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white section-padding">
        <div className="container-max text-center">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">SQL Performance Blog</h1>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert insights, tips, and best practices for SQL Server optimization and database performance tuning.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="card-elevated p-8 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-primary bg-pink-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-semibold hover:text-opacity-80 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Coming Soon Message */}
          <div className="text-center mt-16">
            <div className="card-elevated p-12 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">More Articles Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                We're working on more in-depth articles about SQL Server optimization, performance tuning strategies, and database best practices.
              </p>
              <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary">
                Get Personalized Advice
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max text-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl font-bold text-secondary mb-4">Need Expert SQL Optimization?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't just read about it - let our experts optimize your database for guaranteed performance improvements.
            </p>
            <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary inline-flex items-center">
              Schedule Free Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 6v5l3 3 3-3v-5M3 12h18" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white section-padding">
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
                Expert SQL optimization and database performance consulting for enterprise clients.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/sqloptimise/" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/DEX-CON-ONE" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
  );
}