import Link from "next/link";
import { getPostsByTag, getAllTags } from "@/lib/blog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag.toLowerCase()),
  }))
}

export async function generateMetadata({ params }: { params: { tag: string } }) {
  const decodedTag = decodeURIComponent(params.tag)
  const posts = getPostsByTag(decodedTag)
  
  if (posts.length === 0) {
    return {
      title: 'Tag Not Found'
    }
  }

  const tagTitle = decodedTag.charAt(0).toUpperCase() + decodedTag.slice(1)
  
  return {
    title: `${tagTitle} Articles | SQLOPTIMISE Blog`,
    description: `Browse all blog posts tagged with "${tagTitle}" on SQL optimization, performance tuning, and database best practices.`,
  }
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const decodedTag = decodeURIComponent(params.tag)
  const posts = getPostsByTag(decodedTag)

  if (posts.length === 0) {
    notFound()
  }

  const tagTitle = decodedTag.charAt(0).toUpperCase() + decodedTag.slice(1)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white section-padding">
        <div className="container-max text-center">
          <div className="scroll-reveal">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-pink-100 mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <span>/</span>
              <span className="text-white">Tag: {tagTitle}</span>
            </nav>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">#{tagTitle}</h1>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              {posts.length} article{posts.length !== 1 ? 's' : ''} about {tagTitle.toLowerCase()} in SQL optimization and database performance.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="card-elevated p-8 group">
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
                
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                        className={`text-xs px-2 py-1 rounded transition-colors ${
                          tag.toLowerCase() === decodedTag.toLowerCase()
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
                
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

          {/* Back to Blog */}
          <div className="text-center mt-16">
            <Link 
              href="/blog"
              className="inline-flex items-center text-primary font-semibold hover:text-pink-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Posts
            </Link>
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
    </div>
  );
}