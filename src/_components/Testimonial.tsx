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
  // ...existing testimonial data...
];

const TestimonialsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-[#EEEEEE] py-16 px-4 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#00ADB5] text-lg font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </h3>
          <div className="flex items-center justify-center gap-8 mb-4">
            <span className="text-[#00ADB5] text-5xl opacity-80">✦</span>
            <h2 className="text-[#222831] text-4xl md:text-5xl lg:text-6xl font-bold">
              What Our Clients Say
            </h2>
            <span className="text-[#00ADB5] text-5xl opacity-80">✦</span>
          </div>
          <p className="text-[#393E46] text-lg max-w-2xl mx-auto">
            Trusted by industry leaders and businesses across the nation
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="relative min-h-[600px] py-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`
                absolute w-[380px] bg-white p-8 rounded-2xl shadow-lg 
                transition-all duration-300 cursor-pointer
                ${hoveredId === testimonial.id ? 'shadow-xl scale-[1.02] -translate-y-1 z-10' : ''}
                lg:block
                ${index === 0 ? 'left-[10%]' : 
                  index === 1 ? 'left-[40%] top-12 -rotate-3' : 
                  'left-[70%] top-6 rotate-3'}
                md:relative md:w-full md:left-0 md:top-0 md:mb-8 md:rotate-0
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
