import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getAllTags } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPosts = posts.filter(post => post.featured).slice(0, 3);
  const recentPosts = posts.slice(0, 9);
  const allTags = getAllTags();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Static Background */}
      <section className="hero-fullscreen min-h-[50vh] flex flex-col items-center justify-center text-white relative">
        <div className="hero-overlay"></div>
        <div className="hero-content container-max text-center px-4 z-10">
          <div className="scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">SQL Server Performance <span className="text-accent">Insights</span></h1>
            <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Expert insights, proven techniques, and best practices from industry leaders and real-world experience.
            </p>
            <p className="text-sm text-white/80">
              Drawing from the wisdom of Glenn Berry, Brent Ozar, Paul Randal, Kendra Little, Erik Darling, and other SQL Server experts.
            </p>
          </div>
        </div>
      </section>

      {/* Content with Static Background */}
      <div className="content-background">

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="section-padding">
            <div className="container-max">
              <div className="scroll-reveal text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Featured Articles</h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md text-shadow">
                  In-depth guides on the most critical SQL Server performance topics
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.slug} className="card-elevated p-8 group bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-secondary bg-accent/20 px-3 py-1 rounded-full border border-accent/40">
                        ⭐ FEATURED
                      </span>
                      <span className="text-sm text-white/80">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-white drop-shadow-md text-shadow group-hover:text-accent transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                      {post.excerpt.substring(0, 120)}...
                    </p>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Link
                            key={tag}
                            href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                            className="bg-white/10 text-white/90 px-2 py-1 rounded text-xs hover:bg-accent hover:text-white transition-colors border border-white/20"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <time className="text-sm text-white/70">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
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
            </div>
          </section>
        )}

        {/* All Blog Posts Grid */}
        <section className="section-padding">
          <div className="container-max">
            <div className="scroll-reveal text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg text-shadow-lg">Latest Articles</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md text-shadow">
                Practical SQL Server optimization guides and tutorials
              </p>
            </div>

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                <article key={post.slug} className="card-elevated p-8 group bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-accent bg-white/10 px-3 py-1 rounded-full border border-white/20">
                      {post.category}
                    </span>
                    <span className="text-sm text-white/70">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md text-shadow group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-white/90 mb-6 leading-relaxed drop-shadow-sm text-shadow">
                    {post.excerpt.substring(0, 150)}...
                  </p>
                  
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                          className="bg-white/10 text-white/80 px-2 py-1 rounded text-xs hover:bg-accent hover:text-white transition-colors border border-white/20"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-white/70">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
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
          ) : (
            /* Fallback if no posts found */
            <div className="text-center">
              <div className="card-elevated p-12 max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Blog Posts Coming Soon</h3>
                <p className="text-gray-600 mb-6">
                  We're working on in-depth articles about SQL Server optimization, performance tuning strategies, and database best practices.
                </p>
                <a href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" className="btn-primary">
                  Get Personalized Advice
                </a>
              </div>
            </div>
          )}
          
            {/* Tag Cloud */}
            {allTags.length > 0 && (
              <div className="mt-16">
                <div className="card-elevated p-10 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-md text-shadow text-center">Browse by Topic</h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {allTags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                        className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-all duration-300 border border-white/30 hover:scale-105 hover:border-accent/60 drop-shadow-md"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/8 backdrop-blur-sm text-white section-padding">
          <div className="container-max text-center">
            <div className="scroll-reveal">
              <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-shadow-lg">Need Expert <span className="text-accent">SQL Optimization?</span></h2>
              <p className="text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-shadow">
                Don't just read about it - let our experts optimize your database for guaranteed performance improvements with automated monitoring through aDBA.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/" 
                  className="btn-primary text-lg inline-flex items-center justify-center"
                >
                  Schedule Free Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 6v5l3 3 3-3v-5M3 12h18" />
                  </svg>
                </a>
                <Link href="/products" className="btn-secondary text-lg inline-flex items-center justify-center">
                  Learn About aDBA
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}