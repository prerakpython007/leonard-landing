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

      <div ref={ref} className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.year}
            className="relative flex gap-8 mb-12"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[145px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00ADB5] via-[#00ADB5] to-transparent" />

            {/* Year bubble */}
            <div className="hidden md:flex w-36 h-36 rounded-full bg-[#222831] items-center justify-center flex-shrink-0">
              <span className="text-[#00ADB5] text-2xl font-bold">{exp.year}</span>
            </div>

            {/* Content */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{exp.icon}</span>
                <h3 className="text-[#222831] text-xl font-bold">{exp.title}</h3>
              </div>
              <p className="text-[#393E46]">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
