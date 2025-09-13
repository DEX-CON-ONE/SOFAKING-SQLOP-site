import Link from 'next/link'

export default function TagNotFound() {
  return (
    <div className="min-h-screen bg-white">
      <section className="section-padding">
        <div className="container-max text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tag Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, we couldn't find any blog posts with that tag.
            </p>
            <div className="space-y-4">
              <Link 
                href="/blog"
                className="btn-primary inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}