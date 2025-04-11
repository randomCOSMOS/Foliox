import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogs } from '@/app/(frontend)/data'; // Adjust import path as needed
import { Blog } from '../../types';

// Generate static params for all blogs
export async function generateStaticParams() {
  const blogs: Blog[] = await getBlogs();
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default async function BlogPost({ params }) {
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.id.toString() === params.id);
  
  if (!blog) {
    notFound();
  }

  // Format date if blog has a date property
  const formattedDate = blog.createdAt 
    ? new Date(blog.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Cover Image and Title Overlay */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={blog.url}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-end">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
              {blog.title}
            </h1>
            <div className="flex items-center text-gray-200 mb-6">
              <span className="mr-4">By {blog.author}</span>
              {formattedDate && (
                <>
                  <span className="mx-2">•</span>
                  <span>{formattedDate}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
            <div className="prose prose-lg max-w-none">
              {/* Render blog content - you might want to use a markdown renderer here */}
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {blog.content}
              </p>
            </div>

            {/* Back to Blogs Button */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <Link 
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                  />
                </svg>
                Back to All Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
