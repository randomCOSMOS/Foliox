'use client'
import { useState } from 'react'
import getData from "./data"

// Define TypeScript interfaces for our data
interface SkillTag {
  id?: string | null;
  tag: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  skillTags?: SkillTag[] | null;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState<Project[]>([])

  const handleClick = async () => {
    setLoading(true)
    try {
      const result = await getData()
      setProjects(result.docs || [])
      console.log('Data fetched successfully')
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">Project Showcase</h1>
      
      <button 
        onClick={handleClick} 
        disabled={loading}
        className="block mx-auto mb-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? 'Loading...' : 'Load Projects'}
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
            <h2 className="text-xl font-medium mb-4 text-center text-black">{project.title}</h2>
            <p className="text-gray-700 mb-6 line-clamp-3">{project.description}</p>
            <div className="flex justify-between items-end mt-auto">
              <div className="flex flex-wrap gap-2">
                {(project.skillTags?.map(tag => (
                  <span key={tag.id} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                    {tag.tag}
                  </span>
                ))) || []}
              </div>
              <div className="text-sm text-gray-500 italic">By {project.author}</div>
            </div>
          </div>
        ))}
      </div>

      <a href="/login"><button>Login?</button></a>
      <a href="/signup"><button>Signup?</button></a>
    </main>
  )
}
