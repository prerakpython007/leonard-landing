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
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="bg-[#EEEEEE] py-16 px-4 md:px-16 lg:px-24 rounded-b-[5%]">
      <div className="relative text-center mb-16 w-full">
        <span className="text-4xl font-bold text-[#393E46] tracking-wider">
          <strong className="text-[#00ADB5] mr-2">OUR</strong>
          JOURNEY
        </span>
        <span className="absolute top-1/2 left-10 -translate-y-1/2 text-[#00ADB5] text-5xl hidden md:block">✦</span>
        <span className="absolute top-1/2 right-10 -translate-y-1/2 text-[#00ADB5] text-5xl hidden md:block">✦</span>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative">
        {/* Map Trail SVG */}
        <svg 
          className="absolute top-0 left-0 w-full h-full"
          style={{ minHeight: '1200px' }}
          viewBox="0 0 1000 1200"
        >
          <motion.path
            d="M200 100 C 800 200, 800 400, 200 600 C -400 800, 800 800, 800 1100"
            fill="none"
            stroke="#393E46"
            strokeWidth="4"
            strokeDasharray="15 30"
            strokeLinecap="square"
            strokeDashoffset="0"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2 }}
          />

          {/* Location Markers - Better aligned with curves */}
          {[
            { x: 200, y: 100 },   // Start
            { x: 800, y: 400 },   // First curve peak
            { x: 200, y: 600 },   // Middle dip
            { x: 800, y: 1100 }   // End
          ].map((pos, index) => (
            <motion.g
              key={index}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 1 + (index * 0.3) }}
            >
              <circle
                cx={pos.x}
                cy={pos.y}
                r="8"
                fill="#00ADB5"
              />
              <circle
                cx={pos.x}
                cy={pos.y}
                r="16"
                fill="#00ADB5"
                opacity="0.2"
              />
            </motion.g>
          ))}
        </svg>

        {/* Experience Cards - Adjusted to follow curve */}
        <div className="relative" style={{ minHeight: '1200px' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              className="absolute w-[300px]"
              style={{
                left: [0, 2].includes(index) ? '50px' : 'auto',
                right: [1, 3].includes(index) ? '50px' : 'auto',
                top: index === 0 ? '50px' :
                     index === 1 ? '350px' :
                     index === 2 ? '550px' :
                     '1050px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 + (index * 0.3) }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{exp.icon}</span>
                  <h3 className="text-[#222831] text-xl font-bold">{exp.title}</h3>
                </div>
                <p className="text-[#393E46]">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
