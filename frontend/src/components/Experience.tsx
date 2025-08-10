'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    id: 1,
    role: 'Senior Digital Content Creator',
    company: 'CreativeMinds Media',
    period: '2020 - Present',
    description: 'Leading content strategy and creation for high-profile clients, managing a team of creators, and developing engaging multimedia content that drives audience engagement and brand awareness.',
    icon: BriefcaseIcon,
    iconBackground: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    id: 2,
    role: 'Voiceover Artist',
    company: 'Freelance',
    period: '2018 - Present',
    description: 'Providing professional voiceover services for commercials, animations, audiobooks, and corporate videos for clients worldwide.',
    icon: BriefcaseIcon,
    iconBackground: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    id: 3,
    role: 'Podcast Host & Producer',
    company: 'The Creative Mindset',
    period: '2019 - Present',
    description: 'Hosting and producing a top-rated podcast about creativity, personal development, and entrepreneurship, featuring interviews with industry leaders.',
    icon: BriefcaseIcon,
    iconBackground: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
];

const education = [
  {
    id: 1,
    degree: 'Masters in Media & Communication',
    institution: 'Stanford University',
    year: '2018',
    description: 'Specialized in Digital Media Production and Strategic Communication',
    icon: AcademicCapIcon,
    iconBackground: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: 2,
    degree: 'Bachelor of Arts in Journalism',
    institution: 'University of California, Berkeley',
    year: '2016',
    description: 'Minor in Digital Arts and New Media',
    icon: AcademicCapIcon,
    iconBackground: 'bg-green-100',
    iconColor: 'text-green-600',
  },
];

const certifications = [
  {
    id: 1,
    name: 'Certified Image Consultant',
    issuer: 'Association of Image Consultants International',
    year: '2020',
    icon: TrophyIcon,
    iconBackground: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    id: 2,
    name: 'Professional Voiceover Certification',
    issuer: 'Global Voice Acting Academy',
    year: '2019',
    icon: TrophyIcon,
    iconBackground: 'bg-red-100',
    iconColor: 'text-red-600',
  },
];

const ExperienceCard = ({ item }: { item: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative pl-8 pb-8 border-l-2 border-gray-200 group"
  >
    <div className="absolute top-0 -left-2.5 w-4 h-4 rounded-full bg-white border-4 border-purple-600 group-hover:bg-purple-600 transition-colors"></div>
    <div className="absolute -left-9 top-0 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: item.iconBackground.replace('bg-', '').replace('-100', '-50') }}>
      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-bold text-gray-900">{item.role || item.degree || item.name}</h4>
      <p className="text-purple-600 font-medium">{item.company || item.institution || item.issuer}</p>
      <p className="text-sm text-gray-500 mb-2">{item.period || `Completed: ${item.year}`}</p>
      <p className="text-gray-600">{item.description}</p>
    </div>
  </motion.div>
);

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4"
          >
            My Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Experience & Education
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            A summary of my professional journey, education, and certifications that have shaped my career.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-lg bg-purple-100 text-purple-600 mr-4">
                  <BriefcaseIcon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
              </div>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <ExperienceCard key={exp.id} item={exp} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
                  <AcademicCapIcon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-8">
                {education.map((edu) => (
                  <ExperienceCard key={edu.id} item={edu} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-yellow-100 text-yellow-600 mr-4">
                  <TrophyIcon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
              </div>
              <div className="space-y-6">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex items-start">
                    <div className={`p-2 rounded-lg ${cert.iconBackground} ${cert.iconColor} mr-4`}>
                      <cert.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                      <p className="text-xs text-gray-500">{cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skills Progress */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">My Skills</h3>
            <div className="space-y-6">
              {[
                { name: 'Voice Acting', level: '95%' },
                { name: 'Content Strategy', level: '90%' },
                { name: 'Public Speaking', level: '92%' },
                { name: 'Podcast Production', level: '88%' },
                { name: 'Image Consulting', level: '85%' },
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm">{skill.level}</span>
                  </div>
                  <div className="w-full bg-white bg-opacity-20 rounded-full h-2.5">
                    <div 
                      className="bg-white h-2.5 rounded-full" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
