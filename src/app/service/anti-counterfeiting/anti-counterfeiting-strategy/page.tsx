'use client';

import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Search, Settings, Shield, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useCallback, useMemo, type JSX } from 'react';

// Define the interface for Strategy service info
interface StrategyServiceInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  detailedContent: string;
}

// Strategy services data
const strategyServices = [
  {
    id: 1,
    icon: Search,
    title: 'Risk Assessment',
    description: 'We identify vulnerabilities in your supply chain and markets.',
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Assessment",
    detailedContent: `• Comprehensive analysis of your supply chain vulnerabilities
• Market-specific risk evaluation
• Identification of potential counterfeit hotspots
• Assessment of existing protection measures
• Customized risk scoring methodology
• Detailed reporting with actionable insights`
  },
  {
    id: 2,
    icon: Settings,
    title: 'Custom Solutions',
    description: 'We create strategies tailored to your brand\'s specific needs.',
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Solutions",
    detailedContent: `• Brand-specific strategy development
• Multi-layered protection approaches
• Technology integration planning
• Implementation roadmap creation
• Cross-border strategy coordination
• Ongoing optimization and adjustments
• Performance metrics and reporting`
  },
  {
    id: 3,
    icon: Shield,
    title: 'Proactive Measures',
    description: 'We implement monitoring and enforcement to prevent counterfeiting.',
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Protection",
    detailedContent: `• 24/7 market monitoring systems
• Online platform surveillance
• Supply chain authentication protocols
• Enforcement action coordination
• Customs recordation assistance
• Training programs for stakeholders
• Regular strategy reviews and updates`
  }
];

const benefits = [
  'Stay ahead of counterfeiters with proactive protection',
  'Minimize the impact of fakes on your brand and revenue',
  'Strengthen your overall IP protection framework',
];

export default function AntiCounterfeitingStrategyPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<StrategyServiceInfo | null>(null);

  const handleExploreClick = useCallback((info: StrategyServiceInfo) => {
    setSelectedInfo(info);
    setShowPopup(true);
  }, []);

  const closePopup = useCallback(() => {
    setShowPopup(false);
    // Small delay to allow animation to complete before clearing state
    setTimeout(() => setSelectedInfo(null), 300);
  }, []);

  // Memoize the services to prevent unnecessary re-renders
  const serviceElements = useMemo(() => 
    strategyServices.map((service, index) => (
      <ServiceCard 
        key={service.title} 
        service={service} 
        index={index} 
        onClick={handleExploreClick} 
      />
    )), [handleExploreClick]
  );

  return (
    <LazyMotion features={domAnimation}>
      <div className="font-montserrat relative min-h-screen overflow-hidden bg-[#EEEEEE]">
        {/* Popup */}
        {showPopup && selectedInfo && (
          <Popup selectedInfo={selectedInfo} onClose={closePopup} />
        )}

        {/* HERO */}
        <HeroSection />

        {/* Overview Section */}
        <OverviewSection />

        {/* Services Section */}
        <ServicesSection serviceElements={serviceElements} benefits={benefits} />
        
        {/* Back to Home Link */}
        <BackToHome />
      </div>
    </LazyMotion>
  );
}

// Extracted Popup Component for better code organization
const Popup = ({ selectedInfo, onClose }: { selectedInfo: StrategyServiceInfo; onClose: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      style={{ willChange: 'opacity' }}
    >
      <motion.div
        className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-md relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        style={{ 
          scrollbarWidth: 'thin', 
          scrollbarColor: '#00ADB5 #222831',
          willChange: 'transform, opacity'
        }}
      >
        <style>{`
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #222831; border-radius: 4px; }
          ::-webkit-scrollbar-thumb { background: #00ADB5; border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: #008b91; }
        `}</style>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#393E46] hover:text-[#00ADB5] hover:bg-[#00ADB5]/10 rounded-full"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222831] mb-4 sm:mb-6">{selectedInfo.title}</h2>
        <ul className="text-[#393E46]/85 text-sm sm:text-base leading-relaxed space-y-2">
          {selectedInfo.detailedContent.split('\n').map((line, index) => {
            line = line.trim();
            if (!line) return null;
            return (
              <li key={index} className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#00ADB5]">
                {line.replace(/^•\s*/, '')}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </motion.div>
  );
};

// Extracted Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Anti-Counterfeiting Strategy hero"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-6xl h-full flex flex-col justify-center items-center text-center px-4 sm:px-6"
        style={{ willChange: 'transform, opacity' }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
          Anti-Counterfeiting Strategy
        </h1>
        <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-white/90 font-light px-4">
          Proactively Combat Counterfeiting with Tailored Strategies
        </p>
      </motion.div>
    </section>
  );
};

// Extracted Overview Section Component
const OverviewSection = () => {
  return (
    <section className="relative bg-white px-4 py-16 md:px-16 lg:px-24 md:py-32">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="relative flex flex-col lg:flex-row items-center">
            <div
              className="relative w-full lg:w-3/5 z-20 lg:mr-[-150px] lg:ml-[-100px] mb-8 lg:mb-0"
              style={{
                filter: "drop-shadow(0 25px 80px rgba(0, 0, 0, 0.25))",
              }}
            >
              <div className="bg-white/95 p-6 md:p-8 lg:p-12" style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 100%, 0 100%)" }}>
                <div className="space-y-4 md:space-y-6">
                  <motion.h1
                    className="text-[#000000] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold relative z-10 px-2 md:px-4"
                    style={{
                      letterSpacing: "0.1em",
                      textShadow:
                        "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  >
                    Anti-Counterfeiting Strategy
                  </motion.h1>

                  <p className="text-base md:text-lg leading-relaxed text-[#393E46]">
                    A proactive approach is key to combating counterfeiting. At Leonard Corporate Solutions, we develop tailored anti-counterfeiting strategies to protect your brand from fake products in India and international markets.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-[#393E46]">
                    Our comprehensive approach includes risk assessment, custom solutions, and proactive measures to ensure your brand is protected before counterfeiting becomes a problem.
                  </p>
                  <p className="text-base md:text-lg font-medium text-[#393E46]">
                    📩 For expert strategy development:{" "}
                    <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">info@leonardsolutions.in</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 h-64 md:h-96 lg:h-[520px] w-full lg:w-4/5">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Anti-Counterfeiting Strategy visual" 
                  className="h-full w-full object-cover object-right" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Extracted Service Card Component
const ServiceCard = ({ service, index, onClick }: { 
  service: StrategyServiceInfo; 
  index: number; 
  onClick: (info: StrategyServiceInfo) => void; 
}) => {
  return (
    <motion.div
      className="relative h-64 sm:h-72 md:h-80 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      onClick={() => onClick(service)}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover" 
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
      </div>

      {/* Service Name - Center */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">{service.title}</h3>
      </div>

      {/* Category Badge - Top Right */}
      <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-80">
        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-white/90 text-gray-800">{service.category}</span>
      </div>

      {/* Learn More - Bottom on Hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex justify-between items-center">
          <p className="text-white text-sm">{service.description}</p>
          <button
            className="text-[#00ADB5] hover:text-white text-xs font-medium px-3 py-1 rounded-full border border-[#00ADB5] hover:bg-[#00ADB5] transition-colors duration-300"
          >
            Explore
          </button>
        </div>
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00ADB5] transition-colors duration-300" />
    </motion.div>
  );
};

// Extracted Services Section Component
const ServicesSection = ({ serviceElements, benefits }: { 
  serviceElements: JSX.Element[]; 
  benefits: string[]; 
}) => {
  return (
    <section className="relative px-4 bg-[#000000] py-12 md:py-16 lg:py-24 md:px-16 lg:px-24">
      <div className="relative mx-auto max-w-7xl">
        <div className="mt-16 md:mt-24 lg:mt-32">
          <motion.h2
            className="text-[#eeeeee] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center mb-8 md:mb-12 lg:mb-16"
            style={{
              letterSpacing: "0.2em",
              textShadow: "-1px 0px 0px rgba(100, 100, 100, 0.6), -3px 1px 0px rgba(80, 80, 80, 0.4)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Our Strategy Services
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4 md:px-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ willChange: 'transform, opacity' }}
          >
            {serviceElements}
          </motion.div>
        </div>

        {/* Benefits Section */}
        <Benefits benefits={benefits} />
        
        {/* Closing Message */}
        <ClosingMessage />
      </div>
    </section>
  );
};

// Extracted Benefits Component
const Benefits = ({ benefits }: { benefits: string[] }) => {
  return (
    <motion.div 
      className="relative mx-auto mt-16 md:mt-24 lg:mt-32 max-w-3xl px-4 md:px-8" 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true }}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="relative rounded-xl md:rounded-2xl py-8 md:py-12 backdrop-blur-sm">
        <h2 className="text-[#eeeeee] text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-6 md:mb-8"
            style={{
              letterSpacing: "0.1em",
              textShadow: "-1px 0px 0px rgba(100, 100, 100, 0.6)",
            }}>
          Why a Proactive Strategy?
        </h2>
        <ul className="space-y-4 list-none text-[#eeeeee]">
          {benefits.map((benefit, index) => (
            <li key={index} className="relative pl-6 text-sm sm:text-base md:text-lg before:content-['•'] before:absolute before:left-0 before:text-[#00ADB5] before:text-lg">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Extracted Closing Message Component
const ClosingMessage = () => {
  return (
    <motion.div 
      className="relative mx-auto mt-16 md:mt-24 lg:mt-32 max-w-3xl px-4 md:px-8" 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: true }}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="relative rounded-xl md:rounded-2xl py-8 md:py-12 backdrop-blur-sm text-center">
        <p className="text-center text-base md:text-lg leading-relaxed text-[#eeeeee] mb-6">
          At Leonard Corporate Solutions, our anti-counterfeiting strategy services ensure your brand is protected through comprehensive planning and proactive measures.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-white hover:text-[#00ADB5] transition-all duration-300 text-sm sm:text-base shadow-lg"
        >
          Protect Your Brand
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

// Extracted Back to Home Component
const BackToHome = () => {
  return (
    <div className="bg-[#EEEEEE] px-4 sm:px-6 md:px-16 lg:px-24 py-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors text-sm sm:text-base font-medium"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
};