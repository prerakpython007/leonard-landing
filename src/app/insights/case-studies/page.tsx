'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Dialog } from '@headlessui/react';

export default function CaseStudiesPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', content: '' });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (carouselRef.current) {
        const isAtEnd = carouselRef.current.scrollLeft >= (carouselRef.current.scrollWidth - carouselRef.current.clientWidth);
        if (isAtEnd) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 420, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="bg-[#EEEEEE] text-black">
      {/* Custom cursor */}
      {isHovering && (
        <div 
          className="fixed w-14 h-8 bg-black rounded-full pointer-events-none z-50 flex items-center justify-center text-white text-lg font-bold"
          style={{
            left: `${cursorPosition.x - 14}px`,
            top: `${cursorPosition.y - 14}px`,
            transition: 'all 0.1s ease-out',
            transform: 'scale(1)',
            animation: 'popIn 0.3s ease-out'
          }}
        >
          VIEW
        </div>
      )}

      {/* Banner */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center px-6">
        <Image
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
          alt="Case Studies"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[#EEEEEE]/70" />
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Case Studies
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto"
          >
            Real-world examples of successful IP strategies and their impact
            on business outcomes.
          </motion.p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-[90%] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Tech Giant Patent Victory",
                desc: "How a leading technology company successfully defended its AI-related patents against infringement, setting new precedents for AI IP protection.",
                status: "Landmark Case",
                trend: "↗ Strategic Success",
                icon: "💡",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
              },
              {
                title: "Startup IP Strategy",
                desc: "A startup's journey in building a robust IP portfolio that led to successful funding rounds and market expansion.",
                status: "Growth Story",
                trend: "↗ Rapid Scaling",
                icon: "🚀",
                img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd"
              },
              {
                title: "Cross-Border Enforcement",
                desc: "Successfully navigating international IP protection and enforcement across multiple jurisdictions for a global brand.",
                status: "Global Success",
                trend: "→ Multi-jurisdictional",
                icon: "🌎",
                img: "https://images.unsplash.com/photo-1557804506-669a67965ba0"
              },
              {
                title: "Innovation Protection",
                desc: "Protecting breakthrough medical technology through strategic patent filing and enforcement strategies.",
                status: "Healthcare IP",
                trend: "↗ Market Leader",
                icon: "🏥",
                img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
              },
              {
                title: "Digital Rights Management",
                desc: "Implementing effective digital rights management for a media company's global content distribution.",
                status: "Digital Success",
                trend: "↗ Revenue Growth",
                icon: "💻",
                img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
              },
              {
                title: "Licensing Excellence",
                desc: "Strategic licensing program that transformed IP assets into significant revenue streams.",
                status: "Revenue Success",
                trend: "↗ Portfolio Value",
                icon: "📈",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative h-[600px] overflow-hidden group cursor-pointer rounded-sm shadow-lg"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-4">
                    <span className="text-4xl mb-4 block">{item.icon}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">{item.status}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{item.trend}</p>
                  </div>
                  <p className="text-gray-400 text-sm transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="relative bg-black/20 py-16">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          alt="Results Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            {
              stat: "85%",
              label: "Success rate in patent litigation cases",
              img: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c"
            },
            {
              stat: "$2.8B",
              label: "Total value generated through IP monetization",
              img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            },
            {
              stat: "250+",
              label: "Successful case resolutions across industries",
              img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative h-[220px] overflow-hidden shadow-lg flex flex-col justify-center items-center text-center"
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10">
                <p className="text-4xl font-bold text-white">{item.stat}</p>
                <p className="mt-2 text-gray-200 text-sm max-w-[90%] mx-auto">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="bg-[#eeeeee] py-16 overflow-hidden">
        <div className="w-full px-4">
          <motion.h1
            className="text-[#000000] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-24 md:mb-48 relative z-10 pt-10 px-4"
            style={{
              letterSpacing: "0.2em",
              textShadow:
                "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            Success Stories
          </motion.h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-8">
            {[
              {
                headline: "AI Startup's Patent Portfolio",
                source: "Tech Success",
                date: "Aug 2025",
                impact: "+300% Valuation",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
              },
              {
                headline: "Global Brand Protection",
                source: "Brand Weekly",
                date: "July 2025",
                impact: "95% Success Rate",
                img: "https://images.unsplash.com/photo-1557804506-669a67965ba0"
              },
              {
                headline: "Healthcare Tech Defense",
                source: "MedTech Review",
                date: "June 2025",
                impact: "$50M Saved",
                img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
              },
              {
                headline: "Digital Rights Victory",
                source: "Digital IP Today",
                date: "May 2025",
                impact: "Global Protection",
                img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
              },
              {
                headline: "Record License Deal",
                source: "IP Business",
                date: "Apr 2025",
                impact: "$1B+ Value",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              },
              {
                headline: "Startup IP Strategy",
                source: "Innovation Weekly",
                date: "Mar 2025",
                impact: "Series C Secured",
                img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd"
              },
              {
                headline: "Biotech Patent Win",
                source: "BioIP Review",
                date: "Feb 2025",
                impact: "Market Dominance",
                img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
              },
              {
                headline: "Software IP Defense",
                source: "Tech Law Today",
                date: "Jan 2025",
                impact: "100% Win Rate",
                img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
              },
              {
                headline: "Clean Tech Portfolio",
                source: "Green Tech Weekly",
                date: "Dec 2024",
                impact: "$200M Value",
                img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e"
              },
              {
                headline: "Gaming IP Victory",
                source: "Digital Rights News",
                date: "Nov 2024",
                impact: "Global Rights",
                img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f"
              },
            ].map((news, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative rounded-xl overflow-hidden shadow-xl group cursor-pointer hover:scale-[1.02] transition-all duration-500 ${
                  idx % 2 === 0 ? 'h-[500px]' : 'h-[400px]'
                } ${
                  idx % 3 === 0 ? 'bg-blue-100' :
                  idx % 3 === 1 ? 'bg-green-100' :
                  'bg-yellow-100'
                } hover:shadow-2xl`}
              >
                <Image
                  src={news.img}
                  alt={news.headline}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="text-2xl font-bold text-white mb-3">{news.headline}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-gray-200">
                      <span className="text-sm">{news.source}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm">{news.date}</span>
                    </div>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">{news.impact}</span>
                  </div>
                  <div className="w-full h-1 bg-gradient-to-r from-white/0 via-white to-white/0 opacity-30" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 group cursor-none hover:bg-gray-50/50 rounded-lg transition-all duration-300 relative"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => {
                setDialogContent({
                  title: "AI Innovation Protection Strategy",
                  content: "This case study examines how a leading AI company successfully protected its core innovations while maintaining rapid development cycles.\n\nKey Achievements:\n• Strategic patent portfolio development\n• Successful defense against competitors\n• Significant increase in company valuation\n• Enhanced market position\n• Strong licensing revenue stream\n\nThe company's approach demonstrates how effective IP strategy can support business growth while protecting core innovations. Their success provides valuable lessons for other technology companies navigating the complex landscape of AI-related intellectual property protection."
                });
                setIsDialogOpen(true);
              }}
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-900">AI Innovation Protection Strategy</h3>
              <div className="text-lg text-gray-700 leading-relaxed relative overflow-hidden">
                How a leading AI company successfully protected its core innovations while maintaining rapid development cycles. Their strategic approach led to significant market advantages and licensing opportunities.
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="relative flex items-center gap-2">
                
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                alt="AI Innovation"
                fill
                className="object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-16 opacity-50" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] overflow-hidden order-2 md:order-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                alt="Global Success"
                fill
                className="object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 group cursor-none hover:bg-gray-50/50 rounded-lg transition-all duration-300 order-1 md:order-2"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => {
                setDialogContent({
                  title: "Global Brand Protection Success",
                  content: "This case study reveals how a global brand successfully protected its intellectual property across multiple international markets.\n\nKey Achievements:\n• Coordinated international IP protection strategy\n• Successful enforcement actions in key markets\n• Enhanced brand value and recognition\n• Effective anti-counterfeiting measures\n• Streamlined global IP management\n\nThe company's success demonstrates the importance of a comprehensive global IP strategy and provides valuable insights for businesses operating in international markets."
                });
                setIsDialogOpen(true);
              }}
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Global Brand Protection Success</h3>
              <div className="text-lg text-gray-700 leading-relaxed relative overflow-hidden">
                Discover how a global brand successfully protected its intellectual property across multiple international markets, leading to enhanced brand value and market presence.
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="relative flex items-center gap-2">
              
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dialog */}
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-3xl rounded-lg bg-white p-8 whitespace-pre-line">
            <Dialog.Title className="text-2xl font-bold mb-4 text-gray-900">
              {dialogContent.title}
            </Dialog.Title>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {dialogContent.content}
            </p>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Request Custom Case Study */}
      <section className="bg-gradient-to-r from-[#22223B] to-[#4A4E69] py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto px-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Custom Case Analysis?</h3>
          <p className="text-gray-200 mb-6">Let our experts analyze your specific situation and provide tailored recommendations.</p>
          <a
            href="#contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded transition"
          >
            Request Analysis
          </a>
        </motion.div>
      </section>

      {/* Looking Ahead */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Looking Ahead
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-lg"
        >
          Every successful IP strategy tells a unique story. Learn from these
          real-world examples to build a stronger intellectual property
          portfolio for your organization.
        </motion.p>
      </section>
    </div>
  );
}