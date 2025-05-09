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
    text: "The legal expertise and professionalism demonstrated by the team was exceptional. They handled our corporate litigation with remarkable precision and dedication.",
    tag: "Corporate Law"
  },
  { 
    id: 2,
    name: "Sarah Chen",
    position: "CFO, Tech Innovations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200",
    rating: 5,
    text: "Outstanding service! Their attention to detail in handling our intellectual property matters was impressive.",
    tag: "IP Law"
  },
  { 
    id: 3,
    name: "Michael Rodriguez",
    position: "Founder, StartUp Hub",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=200&h=200",
    rating: 5,
    text: "Their expertise in startup law proved invaluable during our company's formation and funding rounds.",
    tag: "Startup Law"
  },
  { 
    id: 4,
    name: "Emily Thompson",
    position: "Director, Global Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=200&h=200",
    rating: 5,
    text: "Exceptional guidance through complex international legal matters. Highly recommended!",
    tag: "International Law"
  }
];

const TestimonialsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const getRotation = (index: number) => {
    const rotations = [-3, 3, -3, 3]; // Alternating left and right rotations
    return rotations[index] || 0;
  };

  return (
    <section className="bg-[#EEEEEE] py-16 px-4 md:px-16 lg:px-24 relative overflow-hidden">
      <span className="absolute left-0 top-1/2 text-[#00ADB5] text-[200px] opacity-10 transform -translate-y-1/2">
        ✦
      </span>
      <span className="absolute right-0 top-1/2 text-[#00ADB5] text-[200px] opacity-10 transform -translate-y-1/2">
        ✦
      </span>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#00ADB5] text-4xl font-bold uppercase tracking-wider mb-4">
            Testimonials
          </h3>
          <h2 className="text-5xl md:text-6xl lg:text-lg font-bold mb-4">
            <span className="text-[#00ADB5]">What Our </span>
            <span className="text-[#222831]">Clients Say</span>
          </h2>
          <p className="text-[#393E46] text-lg max-w-2xl mx-auto">
            Trusted by industry leaders and businesses across the nation
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`
                bg-white p-8 rounded-2xl shadow-lg 
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
              <div className="text-6xl text-[#00ADB5] opacity-10 absolute top-4 right-6">
                "
              </div>
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[#00ADB5]/10 text-[#00ADB5] mb-4">
                {testimonial.tag}
              </span>
              <p className="text-[#393E46] text-lg mb-6 min-h-[100px]">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4 mt-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[#222831] font-semibold">{testimonial.name}</h4>
                  <p className="text-[#393E46] text-sm">{testimonial.position}</p>
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
