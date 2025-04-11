// /blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getBlogs } from '@/app/(frontend)/data'; 
import { Blog } from '../types';

export default async function BlogPage() {
  const blogs: Blog[] = await getBlogs();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Blog</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Explore my thoughts, experiences, and insights on technology, development, and more.
          </p>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 w-full">
                    <Image
                      src={blog.url}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{blog.title}</h2>
                    <p className="text-gray-600 mb-4">{blog.content.substring(0, 150)}...</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">By {blog.author}</span>
                      <Link 
                        href={`/blog/${blog.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            // No blogs found message
            <div className="text-center py-20">
              <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
                <svg 
                  className="w-16 h-16 text-gray-400 mx-auto mb-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" 
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Blog Posts Yet</h3>
                <p className="text-gray-600 mb-6">
                  There are currently no blog posts to display. Check back later for new content!
                </p>
                <Link 
                  href="/"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in my work?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Check out my projects or get in touch to discuss potential collaborations.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
            </Link>
            <Link 
              href="/contact"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
