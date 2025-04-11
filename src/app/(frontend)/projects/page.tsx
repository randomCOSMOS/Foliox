// /projects/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '@/app/(frontend)/data'; // Adjust import path as needed
import { Project } from '../types';

export default async function ProjectsPage() {
  const projects: Project[] = await getProjects();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Explore my portfolio of work spanning various technologies and domains.
            Each project represents a unique challenge and solution.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div 
                key={project.id}
                className={`mb-24 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
              >
                {/* Project Image */}
                <div className="w-full md:w-1/2 h-[400px] relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={project.url}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Details */}
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800">{project.title}</h2>
                  <p className="text-gray-600 text-lg">{project.description}</p>
                  
                  {/* Skills/Technologies */}
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.skillTags && project.skillTags.map((tags) => (
                      <span 
                        key={tags.id} 
                        className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {tags.tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Author */}
                  {project.author && (
                    <p className="text-gray-500">
                      Created by <span className="font-medium">{project.author}</span>
                    </p>
                  )}
                  
                  {/* Project Details Button - Redirects to GitHub repository */}
                  <Link 
                    href={project.repository || `https://github.com/randomCOSMOS`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
                  >
                    View on GitHub
                    <svg 
                      className="inline-block ml-2 w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24" 
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            // No projects found message
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Projects Found</h3>
                <p className="text-gray-600 mb-6">
                  There are currently no projects to display. New projects will appear here once they're added.
                </p>
                <Link 
                  href="/"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-block"
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
          <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium shadow-md hover:shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
