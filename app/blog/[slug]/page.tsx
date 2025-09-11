import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPostBySlug, getPostSlugs } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'

// Custom components for MDX
const components = {
  pre: ({ children, ...props }: any) => {
    const codeHTML = highlight(children.props?.children || '')
    return <pre {...props} dangerouslySetInnerHTML={{ __html: codeHTML }} />
  },
  code: ({ children, ...props }: any) => (
    <code 
      {...props} 
      className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded text-sm font-mono"
    >
      {children}
    </code>
  ),
  h1: ({ children, ...props }: any) => (
    <h1 {...props} className="text-4xl font-bold text-gray-900 mb-6 mt-8">
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 {...props} className="text-3xl font-bold text-gray-900 mb-4 mt-8">
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 {...props} className="text-2xl font-bold text-gray-900 mb-3 mt-6">
      {children}
    </h3>
  ),
  p: ({ children, ...props }: any) => (
    <p {...props} className="text-gray-700 mb-4 leading-relaxed">
      {children}
    </p>
  ),
  ul: ({ children, ...props }: any) => (
    <ul {...props} className="list-disc list-inside mb-4 space-y-1 text-gray-700">
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol {...props} className="list-decimal list-inside mb-4 space-y-1 text-gray-700">
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li {...props} className="mb-1">
      {children}
    </li>
  ),
  strong: ({ children, ...props }: any) => (
    <strong {...props} className="font-semibold text-gray-900">
      {children}
    </strong>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote {...props} className="border-l-4 border-primary pl-4 italic text-gray-600 mb-4">
      {children}
    </blockquote>
  ),
  a: ({ children, href, ...props }: any) => (
    <a 
      {...props} 
      href={href}
      className="text-primary hover:text-pink-700 underline"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
}

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: `${post.title} | SQLOPTIMISE Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'SQLOPTIMISE Team'],
      tags: post.tags,
    }
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="section-padding">
        <div className="container-max max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>

          {/* Article Meta */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 border-b border-gray-200 pb-6">
              <div className="flex items-center space-x-4">
                <span>By {post.author || 'SQLOPTIMISE Team'}</span>
                <span>•</span>
                <time>
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center space-x-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs hover:bg-primary hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Need Expert SQL Help?</h3>
              <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
                Our SQL optimization experts are ready to help you implement these strategies 
                and optimize your database performance.
              </p>
              <a 
                href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/"
                className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Schedule Free Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center text-primary font-semibold hover:text-pink-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}