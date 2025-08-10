'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Elevate Your Brand?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto"
          >
            Let's collaborate to create something extraordinary. Whether you need a captivating voiceover, 
            engaging content, or expert image consulting, I'm here to help you shine.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-purple-700 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Get In Touch
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors text-center"
            >
              View My Work
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex items-center justify-center space-x-6"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                  <div className="h-full w-full bg-gray-200"></div>
                </div>
              ))}
            </div>
            <p className="text-purple-100 text-sm font-medium">
              Trusted by <span className="text-white font-bold">1000+</span> clients worldwide
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
