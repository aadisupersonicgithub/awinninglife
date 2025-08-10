'use client';

import { motion } from 'framer-motion';
import { MicrophoneIcon, VideoCameraIcon, PencilSquareIcon, SparklesIcon, ChatBubbleLeftRightIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Voiceover Artistry',
    description: 'Professional voiceovers that bring your scripts to life with clarity, emotion, and perfect timing for commercials, animations, and more.',
    icon: MicrophoneIcon,
  },
  {
    title: 'Podcast Production',
    description: 'End-to-end podcast creation including concept development, recording, editing, and distribution to major platforms.',
    icon: VideoCameraIcon,
  },
  {
    title: 'Content Creation',
    description: 'Engaging digital content that tells your brand\'s story across multiple platforms to captivate and grow your audience.',
    icon: PencilSquareIcon,
  },
  {
    title: 'Image Consulting',
    description: 'Personalized style and image consulting to help you present your best self in both personal and professional settings.',
    icon: SparklesIcon,
  },
  {
    title: 'Public Speaking',
    description: 'Dynamic and impactful speaking engagements for events, workshops, and corporate training sessions.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'Author & Writer',
    description: 'Compelling written content including books, articles, and blog posts that engage and inspire readers.',
    icon: BookOpenIcon,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4"
          >
            My Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            How I Can Help You
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            I offer a range of services designed to help you amplify your voice, enhance your image, and engage your audience effectively.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a 
                href="#contact" 
                className="mt-4 inline-flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
