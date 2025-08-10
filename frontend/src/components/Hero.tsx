'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-purple-600 font-medium mb-4"
            >
              Hello, I'm Christina Charan
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  'Digital Creator',
                  2000,
                  'Voiceover Artist',
                  2000,
                  'Podcast Host',
                  2000,
                  'Image Consultant',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                repeat={Infinity}
              />
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Helping brands and individuals find their unique voice and style through creative content, 
              impactful storytelling, and professional image consulting.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 inline-flex items-center"
              >
                Get In Touch
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-white text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg border border-gray-200 inline-flex items-center space-x-2"
              >
                <PlayCircleIcon className="h-5 w-5 text-purple-600" />
                <span>Watch Showreel</span>
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-500"
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                      <div className="h-full w-full bg-gray-200"></div>
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium">1000+ Happy Clients</span>
              </div>
              <div className="h-6 w-px bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">5+</span>
                </div>
                <span className="text-sm font-medium">Years Experience</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 w-full max-w-lg mx-auto">
              <div className="aspect-w-4 aspect-h-5 w-full overflow-hidden rounded-2xl bg-gray-200 shadow-2xl">
                {/* Replace with actual image */}
                <div className="h-full w-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <span className="text-gray-400">Christina's Image</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-100 rounded-full -z-10"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-yellow-100 rounded-xl transform -rotate-12 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-purple-600 transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <motion.span
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-2 bg-gray-500 rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
