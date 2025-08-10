'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function About() {
  const skills = [
    'Voice Acting',
    'Content Strategy',
    'Brand Storytelling',
    'Image Consulting',
    'Public Speaking',
    'Podcast Production',
    'Creative Writing',
    'Personal Branding',
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-w-4 aspect-h-5 w-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <span className="text-gray-400">Christina's Image</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-600 bg-opacity-10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-600 bg-opacity-10 rounded-full -z-10"></div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-xl shadow-lg flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <CheckCircleIcon className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">5+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4"
            >
              About Me
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Crafting Stories That Resonate
            </motion.h2>
            
            <motion.div 
              className="prose prose-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="mb-4">
                Hello! I'm Christina Charan, a passionate digital creator, voiceover artist, and image consultant 
                with over 5 years of experience in helping brands and individuals find their unique voice and style.
              </p>
              <p className="mb-4">
                My journey began in the world of radio, where I discovered my love for storytelling and voice acting. 
                Since then, I've expanded my expertise to include podcast production, content creation, and personal 
                branding, working with clients from various industries to create compelling narratives that connect 
                with their audience.
              </p>
              <p>
                When I'm not behind the microphone or crafting content, you can find me hosting workshops, 
                speaking at events, or writing my next book on personal development and creative expression.
              </p>
            </motion.div>
            
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">My Expertise:</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl text-center"
              >
                Let's Work Together
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-white text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg border border-gray-200 flex items-center justify-center space-x-2"
              >
                <span>Download CV</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
