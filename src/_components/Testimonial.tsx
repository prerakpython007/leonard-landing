/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client"
import { useState, useEffect } from 'react';

const testimonials = [
  { 
    id: 1,
    name: "James Wilson",
    position: "CEO, Wilson Enterprises",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "The legal expertise and strategic insight provided by Leonard Corporate Solutions was exceptional.Their team managed our corporate litigation with professionalism, precision, and efficiency.",
    tag: "Corporate Law Services"
  },
  { 
    id: 2,
    name: "Sarah Chen",
    position: "CFO, Tech Innovations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Outstanding service and attention to detail. Leonard Corporate Solutions expertly managed our trademark and patent filings, ensuring our IP assets were fully protected.",
    tag: "Intellectual Property Law"
  },
  { 
    id: 3,
    name: "Michael Rodriguez",
    position: "Founder, StartUp Hub",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Their in-depth knowledge of startup law was instrumental during our incorporation and fundraising stages. Leonard's legal team provided clarity and confidence at every step.",
    tag: "Startup Legal Advisory"
  },
  { 
    id: 4,
    name: "Emily Thompson",
    position: "Director, Global Solutions",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "We received comprehensive legal support for complex cross-border matters. Leonard Corporate Solutions navigated international compliance with unmatched professionalism.",
    tag: "International Legal Services"
  },
  { 
    id: 5,
    name: "David Park",
    position: "CTO, Innovation Labs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Leonard Corporate Solutions provided exceptional guidance through our complex merger process. Their attention to detail and strategic thinking was invaluable.",
    tag: "Mergers & Acquisitions"
  },
  { 
    id: 6,
    name: "Lisa Anderson",
    position: "VP Legal, GlobalTech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Their expertise in regulatory compliance helped us navigate complex international laws seamlessly. Highly professional and knowledgeable team.",
    tag: "Regulatory Compliance"
  },
  { 
    id: 7,
    name: "Robert Kumar",
    position: "Managing Director, FinCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Outstanding contract negotiation skills and deep understanding of commercial law. Leonard Corporate Solutions exceeded our expectations.",
    tag: "Commercial Law"
  },
  { 
    id: 8,
    name: "Alexandra White",
    position: "Founder, EcoVentures",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Their environmental law expertise was crucial for our sustainability initiatives. Professional, responsive, and incredibly knowledgeable.",
    tag: "Environmental Law"
  }
];

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []) ;

  const bgColors = [
    'from-blue-50 to-blue-100',
    'from-green-50 to-green-100', 
    'from-purple-50 to-purple-100',
    'from-orange-50 to-orange-100',
    'from-pink-50 to-pink-100',
    'from-indigo-50 to-indigo-100',
    'from-yellow-50 to-yellow-100',
    'from-red-50 to-red-100'
  ];

  const handleImageError = (testimonialId: number) => {
    setImageErrors(prev => ({
      ...prev,
      [testimonialId]: true
    }));
  };

  const handleContactClick = (name: string) => {
    alert(`Contact functionality for ${name} would be implemented here`);
  };

  const handleCaseStudyClick = (name: string) => {
    alert(`Case study for ${name} would be displayed here`);
  };

  const handleFullReviewClick = (name: string) => {
    alert(`Full review for ${name} would be displayed here`);
  };

  return (
    <section className="py-16 sm:py-32 px-4 md:px-16 lg:px-24 relative bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Header */}
        <div 
          className={`text-center mb-12 sm:mb-16 relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1
            className="text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-12 relative z-10 px-4 transition-all duration-700"
            style={{
              letterSpacing: "0.3em",
              textShadow: "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
            }}
          >
            TESTIMONIALS
          </h1>

            
<p>Trusted by industry leaders, startups, <br /> and global businesses for intellectual property, corporate, and
international legal services.</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group bg-white rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              onMouseEnter={() => setHoveredCard(testimonial.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Section */}
              <div className={`relative h-48 bg-gradient-to-br ${bgColors[index % bgColors.length]} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-24 h-24 overflow-hidden rounded-full border-4 border-white shadow-lg bg-gray-200">
                    {!imageErrors[testimonial.id] ? (
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} - ${testimonial.position}`}
                        className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        onError={() => handleImageError(testimonial.id)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600 text-2xl font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                </div>
                {/* Quote mark */}
                <div className="absolute top-2 right-2 text-3xl text-white opacity-30 font-serif select-none">
                  "
                </div>
                {/* Tag */}
                <div className="absolute bottom-2 left-2 right-2 flex justify-center">
                  <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-90 text-teal-600 text-center">
                    {testimonial.tag}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 space-y-2">
                {/* Name */}
                <h3 className="text-lg font-bold text-gray-800 text-center">
                  {testimonial.name}
                </h3>
                
                {/* Position & Rating */}
                <div className="text-center space-y-1">
                  <p className="text-xs text-gray-600 font-medium">
                    {testimonial.position}
                  </p>
                  <div className="flex justify-center gap-1" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-teal-600 text-sm select-none">★</span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 pt-2">
                  <button 
                    className="flex-1 bg-teal-600 text-white py-1.5 px-2 text-xs font-medium hover:bg-teal-700 transition-colors duration-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    onClick={() => handleContactClick(testimonial.name)}
                    aria-label={`Contact ${testimonial.name}`}
                  >
                    Contact
                  </button>
                  <button 
                    className="flex-1 border border-teal-600 text-teal-600 py-1.5 px-2 text-xs font-medium hover:bg-teal-50 transition-colors duration-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    onClick={() => handleCaseStudyClick(testimonial.name)}
                    aria-label={`View case study for ${testimonial.name}`}
                  >
                    Case Study
                  </button>
                </div>
              </div>

              {/* Hover Overlay with Testimonial Text */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${bgColors[index % bgColors.length]} transition-opacity duration-300 flex flex-col justify-center text-gray-800 p-4 rounded-lg ${
                  hoveredCard === testimonial.id ? 'opacity-95' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="text-center">
                  <h4 className="text-lg font-extrabold mb-3">Client Review</h4>
                  <p className="text-sm font-medium italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-center gap-1 mb-3" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-teal-600 text-lg select-none">★</span>
                    ))}
                  </div>
                  <button 
                    className="text-sm font-semibold cursor-pointer hover:underline transition-all duration-200 bg-transparent border-none text-gray-800 focus:outline-none focus:underline"
                    onClick={() => handleFullReviewClick(testimonial.name)}
                    aria-label={`Read full review from ${testimonial.name}`}
                  >
                    [Read full review]
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;