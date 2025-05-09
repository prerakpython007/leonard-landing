"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const experiences = [
  {
    year: "2013",
    title: "Firm Establishment",
    description: "Founded in Mumbai with a vision to provide excellent IP services.",
    icon: "🏛️"
  },
  {
    year: "2015",
    title: "International Expansion",
    description: "Extended services to international clients across 25+ countries.",
    icon: "🌏"
  },
  {
    year: "2018",
    title: "Digital Innovation",
    description: "Implemented AI-driven legal research and documentation systems.",
    icon: "💡"
  },
  {
    year: "2023",
    title: "Industry Leadership",
    description: "Recognized as one of India's top IP law firms.",
    icon: "⭐"
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="bg-gradient-to-b from-[#EEEEEE] to-white py-16 md:py-24 relative overflow-hidden">
      {/* Background Stars */}
      <span className="absolute left-0 top-[45%] text-[#00ADB5] text-[150px] md:text-[300px] opacity-10">✦</span>
      <span className="absolute right-0 top-[45%] text-[#00ADB5] text-[150px] md:text-[300px] opacity-10">✦</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#393E46] tracking-wider">
            <span className="text-[#00ADB5] inline-block mb-2 sm:mb-0 sm:mr-2">OUR</span>
            JOURNEY
          </h2>
        </motion.div>

        {/* Mobile Timeline View */}
        <div className="block md:hidden">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#00ADB5] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✦</span>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00ADB5]/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{exp.icon}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-[#00ADB5] font-bold text-lg block mb-1">{exp.year}</span>
                    <h3 className="text-[#222831] text-xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-[#393E46] text-sm">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline View */}
        <div ref={ref} className="hidden md:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#00ADB5]/20" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              className={`flex items-center justify-${index % 2 === 0 ? 'end' : 'start'} w-full mb-16`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 * index, duration: 0.5 }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 ${
                  index % 2 === 0 ? 'mr-4' : 'ml-4'
                }`}>
                  <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="flex-shrink-0 w-12 h-12 bg-[#00ADB5]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{exp.icon}</span>
                    </div>
                    <div>
                      <span className="text-[#00ADB5] text-sm font-semibold block">{exp.year}</span>
                      <h3 className="text-[#222831] text-lg font-bold">{exp.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-[#00ADB5] border-4 border-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
