'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Dialog } from '@headlessui/react';

export default function LegalUpdatesPage() {
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
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a"
          alt="Legal Updates"
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
            Legal Updates
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto"
          >
            Stay informed about the latest developments in intellectual property law
            and their implications for your business.
          </motion.p>
        </div>
      </section>

      {/* Legal Trends Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-[90%] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Patent Law Reform",
                desc: "Major changes in patent legislation affecting application processes, examination standards, and enforcement mechanisms across key jurisdictions.",
                status: "Active Development",
                trend: "↗ Increasing legislative activity",
                icon: "⚖️",
                img: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c"
              },
              {
                title: "Digital Rights Evolution",
                desc: "New frameworks emerging for protecting intellectual property in digital spaces, including virtual environments and blockchain-based assets.",
                status: "Emerging Framework",
                trend: "↗ Rapid policy development",
                icon: "💻",
                img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
              },
              {
                title: "International Harmonization",
                desc: "Progress in aligning IP protection standards across jurisdictions, with focus on streamlining cross-border enforcement.",
                status: "Ongoing Process",
                trend: "→ Steady advancement",
                icon: "🌐",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              },
              {
                title: "AI & IP Rights",
                desc: "Legal frameworks adapting to address AI-generated innovations and the complexities of machine learning patent applications.",
                status: "Emerging Policy",
                trend: "↗ Growing significance",
                icon: "🤖",
                img: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc"
              },
              {
                title: "Enforcement Updates",
                desc: "Enhanced mechanisms for IP rights enforcement, including new remedies and streamlined dispute resolution processes.",
                status: "Policy Reform",
                trend: "↗ Strengthening measures",
                icon: "🛡️",
                img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744"
              },
              {
                title: "SME Protection Measures",
                desc: "New legal provisions and support mechanisms designed to help small and medium enterprises protect their intellectual property.",
                status: "Support Initiative",
                trend: "↗ Expanding access",
                icon: "🏢",
                img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
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

      {/* Key Statistics */}
      <section className="relative bg-black/20 py-16">
        <Image
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744"
          alt="Stats Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            {
              stat: "450+",
              label: "New IP-related legislations proposed globally in 2024",
              img: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c"
            },
            {
              stat: "92%",
              label: "Increase in digital IP protection measures adoption",
              img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
            },
            {
              stat: "75+",
              label: "Countries implementing harmonized IP frameworks",
              img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
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

      {/* Recent Updates */}
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
            Recent Updates
          </motion.h1>
          <div 
            ref={carouselRef}
            className="flex overflow-x-hidden gap-0 scroll-smooth w-full"
          >
            {[
              {
                headline: "Major Patent Law Reform Passes in EU",
                source: "Legal Times",
                date: "Aug 2025",
                img: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c"
              },
              {
                headline: "New Digital Rights Framework Announced",
                source: "Tech Law Review",
                date: "July 2025",
                img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
              },
              {
                headline: "Global IP Harmonization Treaty Signed",
                source: "International Law Weekly",
                date: "June 2025",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              },
              {
                headline: "AI Patent Guidelines Updated",
                source: "IP Insider",
                date: "May 2025",
                img: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc"
              },
              {
                headline: "Enhanced IP Enforcement Measures",
                source: "Legal Brief",
                date: "Apr 2025",
                img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744"
              },
            ].map((news, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative min-w-[500px] h-[700px] overflow-hidden shadow-xl flex-shrink-0 group cursor-pointer hover:scale-[1.01] transition-transform duration-500"
              >
                <Image
                  src={news.img}
                  alt={news.headline}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xl font-bold text-white mb-2">{news.headline}</p>
                  <div className="flex items-center text-gray-200">
                    <span className="text-sm">{news.source}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{news.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
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
                  title: "Digital IP Rights Framework",
                  content: "The landscape of digital intellectual property rights is undergoing a fundamental transformation. New legal frameworks are emerging to address the unique challenges posed by digital assets, virtual environments, and blockchain-based innovations.\n\nKey Developments:\n• Expanded definitions of digital property rights\n• Novel protection mechanisms for virtual assets\n• Blockchain-based IP registration systems\n• Smart contract enforcement protocols\n• Cross-border digital rights management\n\nThese changes reflect the growing importance of digital assets and the need for robust legal protection in the virtual space. Organizations must adapt their IP strategies to leverage these new frameworks effectively."
                });
                setIsDialogOpen(true);
              }}
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Digital IP Rights Framework</h3>
              <p className="text-lg text-gray-700 leading-relaxed relative overflow-hidden">
                The landscape of digital intellectual property rights is undergoing a fundamental transformation. New legal frameworks are emerging to address the unique challenges posed by digital assets and virtual environments.
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="relative flex items-center gap-2">


                  </div>
                </div>
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                alt="Digital IP"
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
                src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c"
                alt="IP Enforcement"
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
                  title: "Enhanced IP Enforcement Mechanisms",
                  content: "Recent legal reforms have significantly strengthened intellectual property enforcement mechanisms globally. These changes aim to provide rights holders with more effective tools for protecting their IP assets.\n\nKey Improvements:\n• Streamlined injunctive relief procedures\n• Enhanced damages calculations\n• Specialized IP courts and tribunals\n• Cross-border enforcement coordination\n• Alternative dispute resolution mechanisms\n\nThese developments represent a major step forward in ensuring effective IP protection and enforcement across jurisdictions. Organizations now have access to more powerful tools for defending their intellectual property rights."
                });
                setIsDialogOpen(true);
              }}
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Enhanced IP Enforcement Mechanisms</h3>
              <p className="text-lg text-gray-700 leading-relaxed relative overflow-hidden">
                Recent legal reforms have significantly strengthened intellectual property enforcement mechanisms globally. These changes aim to provide rights holders with more effective tools for protecting their IP assets.
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="relative flex items-center gap-2">
                  
                  </div>
                </div>
              </p>
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

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-[#22223B] to-[#4A4E69] py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto px-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with Legal Changes</h3>
          <p className="text-gray-200 mb-6">Subscribe to our newsletter for regular updates on IP law developments and their business implications.</p>
          <a
            href="#subscribe"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded transition"
          >
            Subscribe Now
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
          The legal landscape of intellectual property continues to evolve rapidly.
          Staying informed about these changes is crucial for maintaining effective
          IP protection and maximizing the value of your intellectual assets.
        </motion.p>
      </section>
    </div>
  );
}