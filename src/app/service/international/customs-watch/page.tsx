'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

// Define the interface for Customs Watch info
interface CustomsWatchInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  detailedContent: string;
}

const customsWatchInfo: CustomsWatchInfo[] = [
  {
    id: 1,
    title: 'What is Customs Watch Listing?',
    description: 'Customs watch listing registers IP with customs authorities to monitor and intercept counterfeit goods at international borders.',
    category: 'Service Basics',
    detailedContent: `
      • Registers trademarks, patents, and designs with customs.
      • Enables border officials to identify and seize counterfeits.
      • Monitors imports and exports in key markets.
      • Reduces the flow of fake goods into supply chains.
      • Supports global brand protection strategies.
      • Aligns with international customs regulations.
    `,
  },
  {
    id: 2,
    title: 'Benefits of Customs Watch Listing',
    description: 'Customs watch listing prevents counterfeit goods from entering markets, protecting brand integrity and consumer safety.',
    category: 'Advantages',
    detailedContent: `
      • Stops counterfeits at borders before market entry.
      • Minimizes financial losses from fake goods.
      • Enhances brand reputation and consumer trust.
      • Strengthens supply chain integrity.
      • Supports compliance with global IP laws.
      • Deters counterfeiters through proactive measures.
    `,
  },
  {
    id: 3,
    title: 'Customs Watch Process',
    description: 'The process involves registering IP, training customs officials, monitoring borders, and enforcing seizures.',
    category: 'Process Guide',
    detailedContent: `
      • Register IP assets with customs authorities.
      • Provide training to identify counterfeit goods.
      • Monitor border activities for suspicious shipments.
      • Coordinate with customs for inspections and seizures.
      • Report seized goods and pursue legal actions.
      • Maintain ongoing communication with customs.
    `,
  },
  {
    id: 4,
    title: 'Global Customs Collaboration',
    description: 'Customs watch listing leverages international customs networks to protect IP in multiple markets efficiently.',
    category: 'Global Integration',
    detailedContent: `
      • Collaborates with customs in key jurisdictions (e.g., US, EU, China).
      • Uses global databases like WCO's CEN for monitoring.
      • Aligns with treaties like TRIPS for IP enforcement.
      • Streamlines registration across multiple countries.
      • Enhances cross-border coordination for seizures.
      • Provides centralized reporting for global operations.
    `,
  },
  {
    id: 5,
    title: 'Challenges of Customs Watch Listing',
    description: 'Registering and enforcing IP with customs involves navigating diverse regulations, costs, and logistical complexities.',
    category: 'Considerations',
    detailedContent: `
      • Variations in customs regulations across jurisdictions.
      • High costs for multi-country IP registrations.
      • Challenges in training customs officials globally.
      • Complexity of monitoring diverse supply chains.
      • Need for local expertise in key markets.
      • Risk of undetected counterfeits without robust systems.
    `,
  },
];

export default function CustomsWatchListingInternationalMarketsPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<CustomsWatchInfo | null>(null);

  const handleExploreClick = (info: CustomsWatchInfo) => {
    setSelectedInfo(info);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedInfo(null);
  };

  return (
    <div className="min-h-screen bg-black relative font-sans overflow-hidden">
      {/* Popup */}
      {showPopup && selectedInfo && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closePopup}
        >
          <motion.div
            className="bg-white rounded-xl max-w-5xl w-full max-h-[95vh] overflow-y-auto p-10 shadow-xl border border-[#00ADB5]/20 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#00ADB5 #222831' }}
          >
            <style>{`
              ::-webkit-scrollbar { width: 8px; }
              ::-webkit-scrollbar-track { background: #222831; border-radius: 4px; }
              ::-webkit-scrollbar-thumb { background: #00ADB5; border-radius: 4px; }
              ::-webkit-scrollbar-thumb:hover { background: #008b91; }
            `}</style>
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 text-[#393E46] hover:text-[#00ADB5] hover:bg-[#00ADB5]/10 rounded-full"
            >
              <X size={32} />
            </button>
            <h2 className="text-3xl font-bold text-[#222831] mb-6 border-b-2 border-[#00ADB5]/30 pb-2">{selectedInfo.title}</h2>
            <div className="text-[#393E46]/85 text-lg leading-relaxed">
              {selectedInfo.detailedContent.split('\n').map((line, index) => {
                line = line.trim();
                if (!line) return null;
                return (
                  <p key={index} className="mb-2">
                    {line.startsWith('•') ? line : `• ${line}`}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.section
        className="relative h-[90vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://imgs.search.brave.com/ypi-tsMrVcWWTsF6aNYYKNnkRmZzB4eRReqeXfsQn2k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE5/ODEwNjc4Mi9waG90/by9qdWRnZS1oYW5k/c2hha2UtYW5kLWxh/d3llci1pbi1vZmZp/Y2Utd2l0aC1nYXZl/bC1vbi10YWJsZS1m/b3ItbGVnYWwtYWdy/ZWVtZW50LWF0dG9y/bmV5LndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1qWm1oeDBKeWw3/dTcxbG1faUF5VHJQ/QVBwdzB0ZlNlMWRL/UVRUUlJQeDdVPQ)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-white relative inline-block tracking-tight">
            Customs Watch Listing
          </h1>
          <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto font-light">
            Stop Counterfeits at the Border
          </p>
        </motion.div>
      </motion.section>

      {/* Introduction Section */}
      <section className="relative bg-white px-4 py-28 md:px-16 lg:px-24">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative flex items-center flex-col lg:flex-row">
              <div
                className="relative w-full lg:w-3/5 z-20 mb-8 lg:mb-0 lg:mr-[-120px] ml-[-10px]"
                style={{ filter: "drop-shadow(0 25px 80px rgba(0, 0, 0, 0.12))" }}
              >
                <div
                  className="bg-white/98 p-8 md:p-10"
                  style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 100%, 0 100%)" }}
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                      <span className="text-[#00ADB5]">Protect Your IP</span>{" "}
                      <span className="text-[#393E46]">at Borders</span>
                    </h2>
                    <p className="text-base sm:text-lg text-[#393E46] leading-relaxed">
                      Customs watch listing is a critical tool for businesses to prevent counterfeit goods from crossing international borders. At BrandSecure, we register your IP with customs authorities, enabling effective monitoring and seizure of fake products, safeguarding your brand and supply chain in global markets.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#393E46] text-lg font-medium mb-4">
                      📩 Contact us at{" "}
                      <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                        info@brandsecure.in
                      </a>{" "}
                      to secure your borders today.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 h-[420px] w-full lg:w-2/5">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://imgs.search.brave.com/b6xsmTJnizuGckX75x7IQLm3rh9qUR1VDt1OsEBmhYw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9sZWdh/bC1jb250cmFjdC0x/OTI1NTE4Ni5qcGc"
                    alt="Customs watch listing visual"
                    className="h-full w-full object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customs Watch Info Section */}
      <section className="py-32 px-4 md:px-16 bg-black lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">Customs Watch</span>{" "}
              <span className="text-[#00ADB5]">Essentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {customsWatchInfo.map((info: CustomsWatchInfo, index: number) => {
              const images = [
                "https://imgs.search.brave.com/Rt3k-BNsyGXkwgypyD3pYjn0Y_YCTU4dYIOqEn4jGxA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL2xhd3ll/ci1sZWdhbC1jb3Vu/c2VsLXByZXNlbnRz/LWNsaWVudC00NTB3/LTI0OTk1MDU2MzEu/anBn",
                "https://imgs.search.brave.com/x1UvdSxP-vApS4C1Wt3lO-bPeRBViXpp1wgHQ7Zi-OU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9sZWdhbC1jb3Vu/c2VsLWlzLWRpc2N1/c3NpbmctbGF3LWNv/bmNlcHQtbGVnYWwt/anVzdGljZV8xMDE2/Njc1LTU1OTQuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MA",
                "https://imgs.search.brave.com/8UwOmASCt8cEisGuUVeL34op1DQD6OjzPAU0omdLBpM/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/MTA1LzI1OS9zbWFs/bC9idXNpbmVzcy1h/bmQtbGF3eWVycy1k/aXNjdXNzaW5nLWNv/bnRyYWN0LXBhcGVy/cy13aXRoLWJyYXNz/LXNjYWxlLW9uLWRl/c2staW4tb2ZmaWNl/LWxhdy1sZWdhbC1z/ZXJ2aWNlcy1hZHZp/Y2UtanVzdGljZS1h/bmQtbGF3LWNvbmNl/cHQtcGljdHVyZS13/aXRoLWZpbG0tZ3Jh/aW4tZWZmZWN0LWZy/ZWUtcGhvdG8uanBn",
                "https://imgs.search.brave.com/bpxzmOTIeccZOYJSvx07Up03bdN9rRzNBpApyBo7xH0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTIv/MDAyLzYyMC9zbWFs/bC9jb25zdWx0YXRp/b24tb2YtYnVzaW5l/c3NtYW4tb3ItbGF3/eWVyLXRlYW0tbWVl/dGluZy13aXRoLWNs/aWVudC1sYXctYW5k/LWxlZ2FsLXNlcnZp/Y2VzLWNvbmNlcHQt/Z29vZC1zZXJ2aWNl/LWNvb3BlcmF0aW9u/LWhhbmRzLXVzaW5n/LXRhYmxldC1hbmQt/bGFwdG9wLXBob3Rv/LmpwZw",
                "https://imgs.search.brave.com/bpxzmOTIeccZOYJSvx07Up03bdN9rRzNBpApyBo7xH0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTIv/MDAyLzYyMC9zbWFs/bC9jb25zdWx0YXRp/b24tb2YtYnVzaW5l/c3NtYW4tb3ItbGF3/eWVyLXRlYW0tbWVl/dGluZy13aXRoLWNs/aWVudC1sYXctYW5k/LWxlZ2FsLXNlcnZp/Y2VzLWNvbmNlcHQt/Z29vZC1zZXJ2aWNl/LWNvb3BlcmF0aW9u/LWhhbmRzLXVzaW5n/LXRhYmxldC1hbmQt/bGFwdG9wLXBob3Rv/LmpwZw",
              ]
              const bgImg = images[index % images.length]
              return (
                <motion.div
                  key={info.id}
                  className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
                  style={{
                    borderRadius: 0,
                    backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(${bgImg})`,
                    backgroundBlendMode: "multiply",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex flex-col gap-5 relative z-10">
                    <div
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider"
                      style={{ borderRadius: 0 }}
                    >
                      {info.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                    <p className="text-[#e0e0e0] text-base leading-relaxed">{info.description}</p>
                    <button
                      onClick={() => handleExploreClick(info)}
                      className="inline-flex items-center text-[#00ADB5] font-medium hover:text-white transition-colors duration-300 mt-4 cursor-pointer group"
                    >
                      Explore
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">Key Customs Watch</span>{" "}
              <span className="text-[#00ADB5]">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {[
              { 
                title: 'IP Registration', 
                description: 'Register trademarks and patents with customs authorities globally.',
                category: 'Registration'
              },
              { 
                title: 'Customs Training', 
                description: 'Train officials to identify and seize counterfeit goods effectively.',
                category: 'Training'
              },
              { 
                title: 'Border Monitoring', 
                description: 'Monitor imports/exports for suspicious shipments in key markets.',
                category: 'Monitoring'
              },
              { 
                title: 'Seizure Coordination', 
                description: 'Coordinate with customs for inspections and seizures of fakes.',
                category: 'Enforcement'
              },
              { 
                title: 'Legal Support', 
                description: 'Pursue legal actions against counterfeiters post-seizure.',
                category: 'Legal'
              },
              { 
                title: 'Reporting and Analytics', 
                description: 'Provide reports on seizures and trends for strategic planning.',
                category: 'Analytics'
              },
            ].map((service, index) => {
              const images = [
                "https://imgs.search.brave.com/qVhJK5wQbD0aVCEbcnyPWmDspm6ZFVCMFyck47YfRfg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/NzgxNDA5Mi9waG90/by9idXNpbmVzc21h/bi1hbmQtbGF3eWVy/LWRpc2N1c3MtYW5k/LWFkdmljZS1vbi1j/b250cmFjdC1kb2N1/bWVudHMtbGVnYWwt/dHJlYXR5LWFncmVl/bWVudC53ZWJwP2E9/MSZiPTEmcz02MTJ4/NjEyJnc9MCZrPTIw/JmM9akc4NWc2Tzdh/Y0VJbEdRNEZxXzk4/YURrNU9McG1zcXlY/ZTVRd3RtZzl6ST0",
                "https://imgs.search.brave.com/b8X8fwcNystVc1jRrdY5zOmr29SKwCvZQYHF6koUOEk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9sZWdh/bC0zNTk5OTEwLmpw/Zw",
                "https://imgs.search.brave.com/qVhJK5wQbD0aVCEbcnyPWmDspm6ZFVCMFyck47YfRfg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/NzgxNDA5Mi9waG90/by9idXNpbmVzc21h/bi1hbmQtbGF3eWVy/LWRpc2N1c3MtYW5k/LWFkdmljZS1vbi1j/b250cmFjdC1kb2N1/bWVudHMtbGVnYWwt/dHJlYXR5LWFncmVl/bWVudC53ZWJwP2E9/MSZiPTEmcz02MTJ4/NjEyJnc9MCZrPTIw/JmM9akc4NWc2Tzdh/Y0VJbEdRNEZxXzk4/YURrNU9McG1zcXlY/ZTVRd3RtZzl6ST0",
                "https://imgs.search.brave.com/K6ICzmAoS6vRNVTf7SZa_Z2-O98dkIKLTM5CS9FPx7k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wZW4t/c2lnbmluZy1sZWdh/bC1kb2N1bWVudC1n/b2xkLWJhbGxwb2lu/dC00OTE5Mjk3OC5q/cGc",
                "https://imgs.search.brave.com/qVhJK5wQbD0aVCEbcnyPWmDspm6ZFVCMFyck47YfRfg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/NzgxNDA5Mi9waG90/by9idXNpbmVzc21h/bi1hbmQtbGF3eWVy/LWRpc2N1c3MtYW5k/LWFkdmljZS1vbi1j/b250cmFjdC1kb2N1/bWVudHMtbGVnYWwt/dHJlYXR5LWFncmVl/bWVudC53ZWJwP2E9/MSZiPTEmcz02MTJ4/NjEyJnc9MCZrPTIw/JmM9akc4NWc2Tzdh/Y0VJbEdRNEZxXzk4/YURrNU9McG1zcXlY/ZTVRd3RtZzl6ST0",
                "https://imgs.search.brave.com/K6ICzmAoS6vRNVTf7SZa_Z2-O98dkIKLTM5CS9FPx7k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wZW4t/c2lnbmluZy1sZWdh/bC1kb2N1bWVudC1n/b2xkLWJhbGxwb2lu/dC00OTE5Mjk3OC5q/cGc",
              ]
              const bgImg = images[index % images.length]
              return (
                <motion.div
                  key={service.title}
                  className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
                  style={{
                    borderRadius: 0,
                    backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(${bgImg})`,
                    backgroundBlendMode: "multiply",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex flex-col gap-5 relative z-10">
                    <div
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider"
                      style={{ borderRadius: 0 }}
                    >
                      {service.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-[#e0e0e0] text-base leading-relaxed">{service.description}</p>
                    <button className="inline-flex items-center text-[#00ADB5] font-medium hover:text-white transition-colors duration-300 mt-4 cursor-pointer group">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Customs Watch Process Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">How Customs Watch</span>{" "}
              <span className="text-[#00ADB5]">Listing Works</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {[
              {
                step: "1. IP Registration",
                description: "Register IP assets with customs authorities in target markets.",
                category: "Step 1",
              },
              {
                step: "2. Training Programs",
                description: "Train customs officials to recognize counterfeit goods.",
                category: "Step 2",
              },
              {
                step: "3. Border Surveillance",
                description: "Monitor shipments for potential counterfeit activity.",
                category: "Step 3",
              },
              {
                step: "4. Seizure Execution",
                description: "Coordinate inspections and seizures of counterfeit goods.",
                category: "Step 4",
              },
              {
                step: "5. Follow-Up Actions",
                description: "Report seizures and pursue legal actions against violators.",
                category: "Step 5",
              },
            ].map((step, index) => {
              const images = [
                "https://imgs.search.brave.com/AtQSxMJJtSVAtxb9zFCNJSImLYScG1YLxy76ECQq7Nk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTEv/MzQwLzE2NS9zbWFs/bC9idXNpbmVzcy1h/bmQtbGF3eWVycy1k/aXNjdXNzaW5nLWNv/bnRyYWN0LXBhcGVy/cy13aXRoLWJyYXNz/LXNjYWxlLW9uLWRl/c2staW4tb2ZmaWNl/LWxhdy1sZWdhbC1z/ZXJ2aWNlcy1hZHZp/Y2UtanVzdGljZS1h/bmQtbGF3LWNvbmNl/cHQtcGljdHVyZS13/aXRoLWZpbG0tZ3Jh/aW4tZWZmZWN0LXBo/b3RvLmpwZw",
                "https://imgs.search.brave.com/XEy6WxexowUgUh1mBR_NfFkE6sqfh1uNMPESpysI0N4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDIv/MDIyLzY5Ni9zbWFs/bC9jb25jZXB0LW9m/LWxlZ2FsLWNvdXJ0/LWdhdmVsLW9uLWFz/c29ydGVkLWNhc2gt/Y2xvc2UtdXAtcGhv/dG8uanBn",
                "https://imgs.search.brave.com/jEvdSucqq8LRZZ_Q6raXyN105WbO71LKk_deEE9CZZU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcy/ODE3MDM2MC9waG90/by90aGUtc3RhdHVl/LW9mLWp1c3RpY2Ut/bGVnYWwtbGF3LWNv/bmNlcHQtaW1hZ2Uu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTZsZGJCR3RDZDZV/ZDMtZkhYUDFQSDhf/ajFZOThkYjlEMHBU/RFpYNTV1bkE9",
                "https://imgs.search.brave.com/W37Y8GUn7BsHVNNWshr5WASzOIQ6DtFpqqRffe44HmU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE4/OTc0MDgzNS9waG90/by9nYXZlbC13aXRo/LWV1cm8tYmFua25v/dGVzLWFuZC1jb2lu/cy1zeW1ib2xzLW9m/LWZpbmFuY2lhbC1h/bmQtbGVnYWwtbWF0/dGVycy5qcGc_Yj0x/JnM9NjEyeDYxMiZ3/PTAmaz0yMCZjPWY5/NEdwS2tpYnZiTW9Q/Rmh6RW9JNEhVRW5V/cVRjX2lTaE9oVXBW/TXd5d1U9",
                "https://imgs.search.brave.com/FcQCJKxbb-yGic-2LFPWK7ZphVJKr_UeHYko8YVLpRY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90aW1l/LWxlZ2FsLWFpZC0y/MjY4NDc2Mi5qcGc",
              ]
              const bgImg = images[index % images.length]
              return (
                <motion.div
                  key={step.step}
                  className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
                  style={{
                    borderRadius: 0,
                    backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(${bgImg})`,
                    backgroundBlendMode: "multiply",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex flex-col gap-5 relative z-10">
                    <div
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider"
                      style={{ borderRadius: 0 }}
                    >
                      {step.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.step}</h3>
                    <p className="text-[#e0e0e0] text-base leading-relaxed">{step.description}</p>
                    <button className="inline-flex items-center text-[#00ADB5] font-medium hover:text-white transition-colors duration-300 mt-4 cursor-pointer group">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Eligibility and Requirements Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#eeeeee]">Who Can</span> <span className="text-[#00ADB5]">Benefit?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 px-2 sm:px-4 md:px-16">
            <motion.div
              className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
              style={{
                borderRadius: 0,
                backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(https://imgs.search.brave.com/ppM_ARXSu59Ax7zskQwlVG57eRxv--ZR2rWdJ5kWe5E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTEv/MzI5LzMxNC9zbWFs/bC9idXNpbmVzcy1h/bmQtbGF3eWVycy1k/aXNjdXNzaW5nLWNv/bnRyYWN0LXBhcGVy/cy13aXRoLWJyYXNz/LXNjYWxlLW9uLWRl/c2staW4tb2ZmaWNl/LWxhdy1sZWdhbC1z/ZXJ2aWNlcy1hZHZp/Y2UtanVzdGljZS1h/bmQtbGF3LWNvbmNl/cHQtcGljdHVyZS13/aXRoLWZpbG0tZ3Jh/aW4tZWZmZWN0LXBo/b3RvLmpwZw)`,
                backgroundBlendMode: "multiply",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex flex-col gap-5 relative z-10">
                <div
                  className="px-3 py-1 text-xs font-medium bg-white/10 text-white w-fit uppercase tracking-wider"
                  style={{ borderRadius: 0 }}
                >
                  Eligibility
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Eligible Clients</h3>
                <ul className="text-[#e0e0e0] list-disc list-inside mb-6">
                  <li>Businesses with IP assets in international markets</li>
                  <li>Brands in consumer goods, luxury, or tech sectors</li>
                  <li>Companies facing counterfeiting risks at borders</li>
                  <li>Multinationals seeking supply chain protection</li>
                  <li>Exporters/importers needing customs enforcement</li>
                </ul>
                <h3 className="text-xl font-bold text-white mb-3">Requirements for Engagement</h3>
                <p className="text-[#e0e0e0] mb-4">Requirements vary by case but generally include:</p>
                <ul className="text-[#e0e0e0] list-disc list-inside">
                  <li>Inventory of IP assets (trademarks, patents, etc.)</li>
                  <li>Details of target markets for customs monitoring</li>
                  <li>Business objectives for border protection</li>
                  <li>Documentation of existing IP registrations</li>
                </ul>
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Left Diagonal Image */}
          <div
            className="absolute left-0 top-0 w-[45%] h-full"
            style={{
              backgroundImage: `url(https://imgs.search.brave.com/7UkfHAkSoc0sjJQn0WXcUoUmQTnxMG8tKSvifn7SrfA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/NjU3NjQ1L3Bob3Rv/L2NvdXJ0aG91c2Ut/ZGV0YWlsLWxhdy1s/ZWdhbC1jb3VydC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/cVRyT1dqMU9XVVJx/Mm1NdVZxQVF1aFpq/ZE5vTlNIT3NOV28x/TUdHazdrUT0)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
              opacity: 0.1,
            }}
          />

          {/* Right Diagonal Image */}
          <div
            className="absolute right-0 top-0 w-[45%] h-full"
            style={{
              backgroundImage: `url(https://imgs.search.brave.com/-QUsZ9qaGWiO0ZbNMIg2OjMmchiwEXEQIAbBF9LJZKk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/NTk2LzI4Ny9zbWFs/bC9qdWRnZS1nYXZl/bC13aXRoLWp1c3Rp/Y2UtbGF3eWVycy1o/YXZpbmctdGVhbS1t/ZWV0aW5nLWF0LWxh/dy1maXJtLWluLWJh/Y2tncm91bmQtY29u/Y2VwdHMtb2YtbGF3/LWdlbmVyYXRpdmUt/YWktcGhvdG8uanBn)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
              opacity: 0.1,
            }}
          />

          <motion.div
            className="relative max-w-3xl mx-auto px-8 text-center z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Secure <br />
              <span className="text-[#00ADB5]">Your Borders?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e0e0e0] leading-relaxed mb-8">
              Partner with BrandSecure for expert customs watch listing services to protect your IP and prevent counterfeits from crossing international borders. Start today to safeguard your brand's integrity.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-[#00ADB5] text-white font-medium hover:bg-[#222831] transition-colors duration-300 group"
              style={{ borderRadius: 0 }}
            >
              Get Started
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
     
    </div>
  );
}