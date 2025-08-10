'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/solid';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  type: 'image' | 'video';
  url?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Voiceover Showreel 2023',
    category: 'voiceover',
    image: '/placeholder-voiceover.jpg',
    type: 'video',
    url: '#',
  },
  {
    id: 2,
    title: 'The Creative Mindset Podcast',
    category: 'podcast',
    image: '/placeholder-podcast.jpg',
    type: 'video',
    url: '#',
  },
  {
    id: 3,
    title: 'Corporate Branding Video',
    category: 'video',
    image: '/placeholder-video.jpg',
    type: 'video',
    url: '#',
  },
  {
    id: 4,
    title: 'Style Transformation Guide',
    category: 'consulting',
    image: '/placeholder-style.jpg',
    type: 'image',
    url: '#',
  },
  {
    id: 5,
    title: 'Public Speaking Workshop',
    category: 'workshop',
    image: '/placeholder-workshop.jpg',
    type: 'image',
    url: '#',
  },
  {
    id: 6,
    title: 'Personal Branding Guide',
    category: 'consulting',
    image: '/placeholder-branding.jpg',
    type: 'image',
    url: '#',
  },
];

const categories = ['all', 'voiceover', 'podcast', 'video', 'consulting', 'workshop'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4"
          >
            My Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Featured Projects
          </motion.h2>
        </div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden bg-gray-100">
                <div className="h-full w-full bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                  <span className="text-gray-400">{project.image.replace('/', '')}</span>
                </div>
                {project.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <PlayIcon className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                    <span className="inline-block mt-1 px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <a 
                    href={project.url} 
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedProject(project);
                    }}
                  >
                    <span className="sr-only">View {project.title}</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            View All Projects
          </motion.a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={() => setSelectedProject(null)}>
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl leading-6 font-bold text-gray-900">
                      {selectedProject.title}
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      onClick={() => setSelectedProject(null)}
                    >
                      <span className="sr-only">Close</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="mt-2">
                    <div className="aspect-w-16 aspect-h-9 w-full bg-gray-100 rounded-lg overflow-hidden">
                      <div className="w-full h-96 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                        <span className="text-gray-400">Project details for {selectedProject.title}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Project Details</h4>
                      <p className="text-gray-600">
                        This is a detailed description of the {selectedProject.title} project. It includes all the relevant details, 
                        client requirements, challenges faced, and the solutions provided. The project showcases my expertise in 
                        {selectedProject.category} and demonstrates my ability to deliver high-quality work.
                      </p>
                      
                      <div className="mt-6 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {selectedProject.category}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Featured
                        </span>
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                        <a
                          href={selectedProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                          View Project
                          <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
