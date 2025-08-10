'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'BrandVista',
    image: '/testimonial-1.jpg',
    content: 'Working with Christina was an absolute pleasure. Her voiceover work brought our brand story to life in ways we couldn\'t have imagined. The quality and professionalism were outstanding!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'TechPulse Media',
    image: '/testimonial-2.jpg',
    content: 'Christina\'s podcast production skills are top-notch. She took our raw ideas and transformed them into engaging, high-quality content that our audience loves. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'StyleMatters',
    image: '/testimonial-3.jpg',
    content: 'The image consulting session with Christina was transformative. Her keen eye for detail and personalized approach helped me refine my professional image with confidence.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Event Manager',
    company: 'Global Conferences Inc.',
    image: '/testimonial-4.jpg',
    content: 'Christina was the keynote speaker at our annual conference, and she was phenomenal! Her engaging delivery and valuable insights left our audience inspired and eager for more.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what people I've worked with have to say about my work.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg text-purple-600 hover:bg-purple-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg text-purple-600 hover:bg-purple-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 text-purple-50">
              <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.4852 2H0V144H108.538V41.4852L41.4852 2Z" fill="currentColor" fillOpacity="0.1" />
                <path d="M78.7695 0L144 41.4852V144H35.0769V0H78.7695Z" fill="currentColor" fillOpacity="0.05" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 font-bold text-xl">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{currentTestimonial.name}</h4>
                  <p className="text-purple-600">{currentTestimonial.role}, {currentTestimonial.company}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill={i < currentTestimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-lg text-gray-700 italic mb-8">
                "{currentTestimonial.content}"
              </blockquote>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeftIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-1">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-purple-600 w-6' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Brand Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-center text-gray-500 text-sm font-medium mb-6">TRUSTED BY COMPANIES WORLDWIDE</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {['BrandVista', 'TechPulse', 'StyleMatters', 'GlobalConf', 'MediaWave', 'CreativeX'].map((company, index) => (
              <div key={index} className="text-gray-400 font-bold text-xl opacity-70 hover:opacity-100 transition-opacity">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
