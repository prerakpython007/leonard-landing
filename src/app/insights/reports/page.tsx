'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Dialog } from '@headlessui/react';

export default function ReportsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', content: '' });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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
          src="https://images.unsplash.com/photo-1590402494587-44b71d7772f6"
          alt="IP Reports"
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
            IP Reports & Analysis
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto"
          >
            Get detailed insights and expert analysis tailored to your intellectual property needs.
          </motion.p>
        </div>
      </section>

      {/* Available Reports */}
      <section className="py-20 bg-white">
        <div className="max-w-[90%] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "IP Portfolio Analysis",
                desc: "Comprehensive evaluation of your IP assets, including patents, trademarks, and copyrights. Includes valuation and strategic recommendations.",
                price: "$2,500",
                time: "2-3 weeks",
                icon: "📊",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              },
              {
                title: "Market Competition Report",
                desc: "Detailed analysis of competitor IP portfolios, market positioning, and potential threats to your intellectual property.",
                price: "$3,000",
                time: "3-4 weeks",
                icon: "🎯",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              },
              {
                title: "Technology Landscape",
                desc: "Deep dive into emerging technologies and patent trends in your industry, with focus on opportunity identification.",
                price: "$4,500",
                time: "4-5 weeks",
                icon: "💡",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
              },
              {
                title: "Risk Assessment",
                desc: "Evaluation of potential IP risks, infringement analysis, and mitigation strategies for your business operations.",
                price: "$2,800",
                time: "2-3 weeks",
                icon: "⚠️",
                img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              },
              {
                title: "Licensing Strategy",
                desc: "Strategic analysis for IP monetization through licensing, including market opportunity and revenue projections.",
                price: "$3,500",
                time: "3-4 weeks",
                icon: "💰",
                img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
              },
              {
                title: "Custom Analysis",
                desc: "Tailored analysis and reporting based on your specific needs and requirements. Contact us for custom pricing.",
                price: "Custom",
                time: "Variable",
                icon: "🎨",
                img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f"
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative h-[500px] overflow-hidden group cursor-pointer rounded-xl shadow-lg"
                onClick={() => {
                  setDialogContent({
                    title: item.title,
                    content: `${item.desc}\n\nDelivery Time: ${item.time}\nInvestment: ${item.price}\n\nOur report includes:\n• Comprehensive data analysis\n• Expert insights and recommendations\n• Strategic action items\n• Future outlook and opportunities\n• Executive summary\n\nContact us to discuss your specific requirements and how we can tailor this analysis to your needs.`
                  });
                  setIsDialogOpen(true);
                }}
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
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">{item.time}</span>
                      <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold">{item.price}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="relative bg-gradient-to-br from-blue-900 to-black py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434626881859-194d67b2b86f')] bg-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          >
            Our Process
          </motion.h2>
          
          <div className="relative grid md:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Initial discussion to understand your needs and objectives",
                icon: "💬",
                color: "from-blue-400/20 to-blue-600/20"
              },
              {
                step: "02",
                title: "Analysis",
                desc: "Deep dive into data and comprehensive research phase",
                icon: "🔍",
                color: "from-indigo-400/20 to-indigo-600/20"
              },
              {
                step: "03",
                title: "Review",
                desc: "Collaborative review and refinement of findings",
                icon: "📝",
                color: "from-violet-400/20 to-violet-600/20"
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Final report with strategic insights and action plan",
                icon: "✨",
                color: "from-purple-400/20 to-purple-600/20"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-60`} />
                <div className="relative bg-black/50 backdrop-blur-sm rounded-xl p-8 h-full border border-white/10 hover:border-white/20 transition-colors">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <div className="text-5xl font-bold text-white/80 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-white/20 transform rotate-45" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reports */}
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
                  title: "Industry Technology Report 2025",
                  content: "Our comprehensive industry technology report provides detailed analysis of emerging trends, patent landscapes, and strategic opportunities.\n\nKey Features:\n• Technology trend analysis\n• Patent filing patterns\n• Key player profiles\n• Opportunity mapping\n• Risk assessment\n\nThis report helps organizations understand the evolving technology landscape and make informed decisions about their IP strategy."
                });
                setIsDialogOpen(true);
              }}
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Industry Technology Report 2025</h3>
              <div className="text-lg text-gray-700 leading-relaxed">
                Comprehensive analysis of technology trends, patent landscapes, and strategic opportunities in your industry.
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
                alt="Technology Report"
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Market Analysis"
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
                  title: "Market Competition Analysis",
                  content: "Our market competition analysis provides deep insights into competitor IP strategies and market positioning.\n\nKey Features:\n• Competitor portfolio analysis\n• Market positioning assessment\n• Threat identification\n• Strategic recommendations\n• Opportunity mapping\n\nThis report helps organizations understand their competitive landscape and develop effective IP strategies."
                });
                setIsDialogOpen(true);
              }}
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Market Competition Analysis</h3>
              <div className="text-lg text-gray-700 leading-relaxed">
                In-depth analysis of competitor IP portfolios, market positioning, and potential opportunities.
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
            <div className="flex justify-between">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors"
              >
                Close
              </button>
              <a
                href="#contact"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                Request Report
              </a>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Request Form */}
      <section className="bg-black py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full -skew-x-12 origin-top transform overflow-hidden opacity-50">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
            alt="Background"
            fill
            className="object-cover scale-150"
          />
        </div>
        <div className="absolute top-0 left-0 w-1/2 h-full skew-x-12 origin-top transform overflow-hidden opacity-50">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            alt="Background"
            fill
            className="object-cover scale-150"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-white/95 backdrop-blur-sm p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Request Custom Analysis</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border-0 border-b-2 border-gray-200 focus:border-blue-500 outline-none transition-colors bg-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border-0 border-b-2 border-gray-200 focus:border-blue-500 outline-none transition-colors bg-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input type="text" className="w-full px-4 py-2 border-0 border-b-2 border-gray-200 focus:border-blue-500 outline-none focus:ring-0 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
                <select className="w-full px-4 py-2 border-0 border-b-2 border-gray-200 focus:border-blue-500 outline-none transition-colors bg-transparent [&>*]:bg-blue-600 [&>*]:text-white">
                  <option>IP Portfolio Analysis</option>
                  <option>Market Competition Report</option>
                  <option>Technology Landscape</option>
                  <option>Risk Assessment</option>
                  <option>Licensing Strategy</option>
                  <option>Custom Analysis</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea className="w-full px-4 py-2 border-0 border-b-2 border-gray-200 focus:border-blue-500 outline-none transition-colors bg-transparent h-32"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors">
                Submit Request
              </button>
            </form>
          </div>
        </div>
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
          Make informed decisions about your intellectual property strategy
          with our comprehensive reports and expert analysis. Contact us to
          discuss your specific needs and how we can help.
        </motion.p>
      </section>
    </div>
  );
}