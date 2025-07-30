"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  { 
    id: 1,
    name: "James Wilson",
    position: "CEO, Wilson Enterprises",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200",
    rating: 5,
    text: "“The legal expertise and strategic insight provided by Leonard Corporate Solutions was exceptional. Their team managed our corporate litigation with professionalism, precision, and efficiency.”",
    tag: "Corporate Law Services"
  },
  { 
    id: 2,
    name: "Sarah Chen",
    position: "CFO, Tech Innovations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200",
    rating: 5,
    text: "“Outstanding service and attention to detail. Leonard Corporate Solutions expertly managed our trademark and patent filings, ensuring our IP assets were fully protected.”",
    tag: "Intellectual Property Law"
  },
  { 
    id: 3,
    name: "Michael Rodriguez",
    position: "Founder, StartUp Hub",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=200&h=200",
    rating: 5,
    text: "“Their in-depth knowledge of startup law was instrumental during our incorporation and fundraising stages. Leonard's legal team provided clarity and confidence at every step.”",
    tag: "Startup Legal Advisory"
  },
  { 
    id: 4,
    name: "Emily Thompson",
    position: "Director, Global Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=200&h=200",
    rating: 5,
    text: "“We received comprehensive legal support for complex cross-border matters. Leonard Corporate Solutions navigated international compliance with unmatched professionalism.”",
    tag: "International Legal Services"
  }
];

const TestimonialsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const getRotation = (index: number) => {
    const rotations = [-3, 3, -3, 3]; // Alternating left and right rotations
    return rotations[index] || 0;
  };

  return (
    <section className="bg-[#EEEEEE] py-16 sm:py-20 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 xl:px-24 relative overflow-hidden">
      {/* Background Stars */}
      <span className="absolute left-0 top-1/2 text-[#00ADB5] text-[100px] sm:text-[150px] md:text-[200px] opacity-10 transform -translate-y-1/2">
        ✦
      </span>
      <span className="absolute right-0 top-1/2 text-[#00ADB5] text-[100px] sm:text-[150px] md:text-[200px] opacity-10 transform -translate-y-1/2">
        ✦
      </span>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.h1
        className="text-[#000000] text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-48 relative"
        style={{ 
          letterSpacing: "0.4em",
          textShadow: "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4), -14px 6px 0px rgba(40, 40, 40, 0.3), -18px 8px 0px rgba(20, 20, 20, 0.2)"
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        TESTIMONIALS
      </motion.h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#00ADB5]">What Our </span>
            <span className="text-[#222831] block sm:inline mt-2 sm:mt-0">Clients Say</span>
          </h2>
          <p className="text-[#393E46] text-base sm:text-lg max-w-2xl mx-auto px-4">
            Trusted by industry leaders, startups, and global businesses for intellectual property, corporate, and international legal services.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative px-2 sm:px-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`
                bg-white p-6 sm:p-8 rounded-2xl shadow-lg 
                transition-all duration-300 cursor-pointer
                ${hoveredId === testimonial.id ? 'shadow-xl scale-[1.02] rotate-0 z-10' : ''}
              `}
              initial={{ opacity: 0, y: 20, rotate: getRotation(index) }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotate: getRotation(index)
              }}
              whileHover={{ 
                scale: 1.02, 
                rotate: 0,
                transition: { duration: 0.3 }
              }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(testimonial.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl text-[#00ADB5] opacity-10 absolute top-4 right-6">
                "
              </div>
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-[#00ADB5]/10 text-[#00ADB5] mb-4">
                {testimonial.tag}
              </span>
              <p className="text-[#393E46] text-base sm:text-lg mb-6 min-h-[80px] sm:min-h-[100px]">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[#222831] font-semibold text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#393E46] text-xs sm:text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
