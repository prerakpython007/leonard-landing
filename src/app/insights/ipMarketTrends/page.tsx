'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Globe, Lightbulb, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Dialog } from '@headlessui/react';

export default function IPMarketTrendsPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', content: '' });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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
    }, 3500); // Scroll slightly faster

    return () => clearInterval(scrollInterval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

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
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
          alt="IP Market Trends"
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
            IP Market Trends
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto"
          >
            A data-driven look at how intellectual property is shaping the
            global economy in 2025.
          </motion.p>
        </div>
      </section>

      {/* IP Trends Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-[90%] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI & Patent Revolution",
                desc: "Artificial intelligence is reshaping the intellectual property landscape, with surge in AI-related patent applications and complex questions around AI inventorship emerging.",
                status: "High Growth Sector",
                trend: "↗ Rising AI patent filings accelerating globally",
                icon: "🧠",
                img: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc"
              },
              {
                title: "Green Tech IP Focus",
                desc: "Sustainability-driven innovation is creating new IP categories, with businesses aligning patent strategies with environmental goals and ESG initiatives.",
                status: "Emerging Sector",
                trend: "↗ Growing Sustainability patents increasing",
                icon: "🌱",
                img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a"
              },
              {
                title: "Litigation Risk Elevation",
                desc: "Patent litigation risk remains high in 2025, driven by complex technologies, aggressive NPE strategies, and the growing number of patents issued across sectors.",
                status: "High Risk",
                trend: "→ Stable High Continued litigation pressure",
                icon: "⚖️",
                img: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c"
              },
              {
                title: "Digital Asset Protection",
                desc: "Blockchain, metaverse, and digital innovations are creating new frontiers for IP protection, requiring novel legal frameworks and enforcement strategies.",
                status: "Frontier Area",
                trend: "↗ Expanding New digital IP categories",
                icon: "🛡️",
                img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
              },
              {
                title: "Global IP Harmonization",
                desc: "International collaboration on IP standards is increasing, with 33 economies improving IP protection frameworks and cross-border enforcement mechanisms.",
                status: "Policy Trend",
                trend: "↗ Improving Enhanced global cooperation",
                icon: "🌍",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              },
              {
                title: "Consolidated IP Solutions",
                desc: "Businesses are demanding integrated platforms that combine domain management, IP protection, and web security to reduce operational complexity.",
                status: "Market Demand",
                trend: "↗ Consolidating Integrated service demand",
                icon: "🔧",
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

      {/* Key Metrics with BG Image */}
      <section className="relative bg-black/20 py-16">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="Stats Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            {
              stat: "↑ 14%",
              label: "Growth in AI-related patent filings (2024–2025)",
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
            },
            {
              stat: "$450B",
              label: "Estimated global IP licensing market value",
              img: "https://images.unsplash.com/photo-1560264418-c4445382edbc",
            },
            {
              stat: "37%",
              label: "Increase in cross-border IP disputes",
              img: "https://images.unsplash.com/photo-1593642634443-44adaa06623a",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative h-[220px] overflow-hidden shadow-lg flex flex-col justify-center items-center text-center"
            >
              {/* Card background image */}
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover"
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Card content */}
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

      {/* Recent Headlines Carousel */}
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
            Recent Headings
          </motion.h1>
          <div
            id="headlines-carousel"
            ref={carouselRef}
            className="flex overflow-x-hidden gap-6 scroll-smooth px-4 md:px-8"
          >
            {[
              {
                headline: "AI Patents Surge as Tech Giants Race for Dominance",
                source: "IP Watchdog",
                date: "Aug 2025",
                img: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
              },
              {
                headline: "Cross-Border IP Disputes Hit Record Highs",
                source: "WIPO News",
                date: "July 2025",
                img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
              },
              {
                headline: "Blockchain Emerges as Key Tool for IP Protection",
                source: "TechCrunch",
                date: "June 2025",
                img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0"
              },
              {
                headline: "Green Tech Patents See Unprecedented Growth",
                source: "Innovation Weekly",
                date: "May 2025",
                img: "https://images.unsplash.com/photo-1500964757637-c85e8a162699"
              },
              {
                headline: "Quantum Computing Patents Reshape IP Landscape",
                source: "Tech Review",
                date: "Apr 2025",
                img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
              },
              {
                headline: "Global IP Framework Undergoes Major Reform",
                source: "Legal Times",
                date: "Mar 2025",
                img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
              },
              {
                headline: "IP Monetization Strategies Transform Markets",
                source: "Financial Times",
                date: "Feb 2025",
                img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0"
              },
              {
                headline: "Healthcare Patents Drive Innovation Surge",
                source: "MedTech Today",
                date: "Jan 2025",
                img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
              },
              {
                headline: "Green Tech Patents See Unprecedented Growth",
                source: "Innovation Weekly",
                date: "May 2025",
                img: "https://images.unsplash.com/photo-1500964757637-c85e8a162699"
              },
              {
                headline: "Quantum Computing Patents Reshape IP Landscape",
                source: "Tech Review",
                date: "Apr 2025",
                img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
              },
              {
                headline: "Global IP Framework Undergoes Major Reform",
                source: "Legal Times",
                date: "Mar 2025",
                img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
              },
            ].map((news, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative min-w-[400px] h-[600px] rounded-xl overflow-hidden shadow-xl flex-shrink-0 group cursor-pointer hover:scale-[1.02] transition-transform duration-500"
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

      {/* Two Column Analysis */}
      <section className="w-full">
        <div className="grid grid-cols-3 grid-rows-3 gap-0">
          {[
            { img: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "AI in IP Strategy" },
            { img: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Patent Market Growth" },
            { img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c", text: "Global IP Collaboration" },
            { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", text: "Tech-driven Licensing" },
            { img: "https://images.unsplash.com/photo-1556157382-97eda2d62296", text: "Startups & IP Valuation" },
            { img: "https://images.unsplash.com/photo-1593642634443-44adaa06623a", text: "IP in Renewable Energy" },
            { img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Cross-border IP Deals" },
            { img: "https://images.unsplash.com/photo-1518770660439-4636190af475", text: "Blockchain & IP Security" },
            { img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Future of IP Markets" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative w-full h-[250px] md:h-[300px] overflow-hidden group transition-all duration-300 ease-in-out hover:z-10 hover:scale-105"
            >
              <Image
                src={item.img}
                alt={`IP Trend ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-[#EEEEEE] text-lg font-semibold px-4 text-center">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial/Quote */}
      <section className="bg-[#F7F7F7] py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="italic text-xl text-gray-700 mb-4"
          >
            “Intellectual property is the currency of the modern economy. Those who understand its value will shape the future.”
          </motion.blockquote>
          <span className="text-gray-500 font-semibold">— Dr. Maya Lin, IP Strategist</span>
        </div>
      </section>

      {/* Market Insights */}
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
                  title: "Strategic IP Portfolio Management",
                  content: "In today's knowledge economy, strategic IP portfolio management has become a cornerstone of business success. Companies are increasingly treating their IP assets as dynamic tools for value creation rather than mere legal protections. This shift reflects a deeper understanding of IP's role in driving innovation, market positioning, and revenue generation.\n\nBy adopting sophisticated portfolio management strategies, organizations can maximize the value of their intellectual property while maintaining competitive advantages in rapidly evolving markets. The convergence of AI, blockchain, and data analytics has revolutionized how companies approach IP portfolio optimization.\n\nKey aspects of modern IP portfolio management include:\n• Strategic patent filing and maintenance decisions\n• Regular portfolio audits and valuations\n• Competitive landscape analysis\n• Integration with business strategy\n• Risk assessment and mitigation\n\nSuccessful implementation requires a holistic approach that balances protection, monetization, and innovation objectives while staying aligned with broader business goals."
                });
                setIsDialogOpen(true);
              }}
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Strategic IP Portfolio Management</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                In today's knowledge economy, strategic IP portfolio management has become a cornerstone of business success. Companies are increasingly treating their IP assets as dynamic tools for value creation rather than mere legal protections.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                alt="IP Strategy"
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
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                alt="Global IP Landscape"
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
                  title: "Global IP Landscape Evolution",
                  content: "The global IP landscape is undergoing rapid transformation, driven by technological advancement and changing market dynamics. Cross-border collaboration, harmonization of IP frameworks, and emerging markets are reshaping how businesses protect and monetize their intellectual assets worldwide.\n\nKey trends shaping the global IP landscape:\n• Increased harmonization of international IP frameworks\n• Rise of digital and virtual asset protection mechanisms\n• Growing importance of emerging markets in IP strategy\n• Evolution of IP valuation methodologies\n• Integration of AI in IP management and enforcement\n\nAs innovation becomes increasingly borderless, organizations must adapt their IP strategies to navigate complex international regulations while maximizing opportunities in diverse markets. This requires a deep understanding of regional differences, cultural nuances, and evolving legal frameworks across jurisdictions.\n\nSuccessful global IP management demands:\n• Comprehensive cross-border protection strategies\n• Effective international enforcement mechanisms\n• Cultural sensitivity in IP negotiations\n• Strategic partnership development\n• Proactive risk management"
                });
                setIsDialogOpen(true);
              }}
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Global IP Landscape Evolution</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The global IP landscape is undergoing rapid transformation, driven by technological advancement and changing market dynamics. Cross-border collaboration and emerging markets are reshaping intellectual property management.
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

      {/* Download Report CTA */}
      <section className="bg-gradient-to-r from-[#22223B] to-[#4A4E69] py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Get the Full 2025 IP Market Report</h3>
          <p className="text-gray-200 mb-6">Download our comprehensive analysis for deeper insights, charts, and expert commentary.</p>
          <a
            href="/downloads/ip-market-report-2025.pdf"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded transition"
            download
          >
            Download Report
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
          The IP market is evolving into a high-stakes arena where innovation,
          finance, and global competition intersect. Businesses that anticipate
          these shifts and adapt their strategies will secure stronger market
          positions in the coming decade.
        </motion.p>
      </section>
    </div>
  );
}