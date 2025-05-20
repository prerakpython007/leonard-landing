'use client';

import { motion } from "framer-motion";
import { 
  BookOpen, FileText, Gavel, Shield, Globe, UserCheck, Package, Lock, Scale, 
  PenTool, Watch, Truck, AlertTriangle 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function InternationalServices() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const internationalServices = [
    { name: "International Trademark Filing", icon: Shield, description: "File trademarks via Madrid Protocol or national filings in USA, EU, UK, UAE, Australia, and more.", route: "service/international/trademark-filing" },
    { name: "International Patent Filing", icon: PenTool, description: "File global patents via PCT applications and handle national phase entries efficiently.", route: "service/international/patent-filing" },
    { name: "Global Copyright Protection", icon: BookOpen, description: "Secure your work internationally under the Berne Convention.", route: "service/international/copyright-protection" },
    { name: "International Design Protection", icon: Scale, description: "File under the Hague Agreement for international industrial design rights.", route: "service/international/design-protection" },
    { name: "IP & Legal Consulting Across Borders", icon: Globe, description: "Strategic advisory for multinational IP portfolios, licensing, and market entry strategies.", route: "service/international/ip-legal-consulting" },
    { name: "IP Watch Services", icon: Watch, description: "Monitor and protect trademarks, patents, and designs across jurisdictions.", route: "service/international/ip-watch" },
    { name: "Anti-Counterfeiting for Exporters", icon: AlertTriangle, description: "Customs watchlisting, global cease & desist, and enforcement in international markets.", route: "service/international/anti-counterfeiting" },
    { name: "Customs Watch Listing in International Markets", icon: Truck, description: "Register IP with customs to stop counterfeits at borders.", route: "service/international/customs-watch" },
    { name: "Cease & Desist + Enforcement in Foreign Jurisdictions", icon: Gavel, description: "Enforce IP rights through notices and legal actions abroad.", route: "service/international/enforcement" },
    { name: "Commercial Contracts", icon: FileText, description: "Draft, negotiate, and vet business contracts with airtight legal precision.", route: "service/international/commercial-contracts" },
    { name: "Employment & HR Law", icon: UserCheck, description: "Stay compliant with labour laws, HR policies, and employee agreements.", route: "service/international/employment-hr-law" },
    { name: "Outsourcing & Procurement", icon: Package, description: "Manage vendor and procurement contracts with risk-free strategies.", route: "service/international/outsourcing-procurement" },
    { name: "Privacy & Data Protection", icon: Lock, description: "Get GDPR and India DPDP compliance right with privacy-first legal consulting.", route: "service/international/privacy-data-protection" },
    { name: "FSSAI Licensing & Compliance", icon: Scale, description: "Legal assistance for obtaining food licenses and staying compliant in the F&B industry.", route: "service/international/fssai-licensing" },
  ];

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[5%] font-montserrat">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <motion.section
        className="relative h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
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
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            International Services
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Comprehensive Legal & IP Solutions for a Modern Business World
          </p>
        </motion.div>
      </motion.section>

      <section className="py-24 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#222831] mb-6 relative">
              <span className="relative z-10">International Services</span>
              <span className="absolute bottom-0 left-0 h-3 w-20 bg-[#00ADB5]/20 -z-10"></span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed">
              At Leonard Corporate Solutions, we deliver sharp, scalable legal services built to protect innovation, fuel growth, and ensure compliance — in India and globally. Whether you're a startup, enterprise, or multinational, our legal strategies are crafted to give your business a competitive legal edge.
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              📩 Need tailored legal support? Reach out at{" "}
              <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                info@leonardsolutions.in
              </a>
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              💬 “At Leonard, our services evolve with your business needs. We continuously update and expand our offerings to serve you better. Stay connected, and we’ll take care of the law.”
            </p>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {internationalServices.map((service) => (
                <Link
                  key={service.name}
                  href={service.route}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(service.name)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <motion.div
                    className="h-full bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 relative overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-4 relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00ADB5] to-[#00959c] rounded-lg flex items-center justify-center text-white">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-[#222831] mb-2">{service.name}</h3>
                        <p className="text-[#393E46]/80 text-sm md:text-base">{service.description}</p>
                      </div>
                    </div>
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ADB5] to-[#00959c]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}