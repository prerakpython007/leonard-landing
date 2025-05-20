'use client';

import { motion } from "framer-motion";
import { 
  BookOpen, 
  Briefcase, 
  FileText, 
  Gavel, 
  Shield, 
  Globe, 
  UserCheck, 
  Package, 
  Lock, 
  Scale, 
  PenTool, 
  Watch, 
  Truck, 
  AlertTriangle, 
  MapPin, 
  Monitor, 
  DollarSign 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const nationalServices = [
    {
      name: "Trademark Services",
      icon: Shield,
      description: "Protect your brand name, logo, and tagline with expert registration, enforcement, and litigation support.",
      route: "service/trademark",
    },
    {
      name: "Patent Services",
      icon: FileText,
      description: "Safeguard your inventions with professional drafting, filing, prosecution, and patent litigation.",
      route: "service/patent",
    },
    {
      name: "Copyright Services",
      icon: BookOpen,
      description: "Secure your creative work across digital, media, and tech with bulletproof copyright protection.",
      route: "service/copyright",
    },
    {
      name: "Design IP",
      icon: Package,
      description: "Protect the aesthetic value of your products with industrial design registration and legal protection.",
      route: "service/design",
    },
    {
      name: "Geographical Indications",
      icon: Globe,
      description: "Register and protect GI tags to preserve and promote regional specialties.",
      route: "service/geographical",
    },
    {
      name: "Domain Name Law",
      icon: Globe,
      description: "Defend your digital identity through domain dispute resolution and cybersquatting actions.",
      route: "service/domain",
    },
    {
      name: "Anti-Counterfeiting",
      icon: Shield,
      description: "Combat fakes with strategic cease & desist, customs watchlisting, and enforcement support.",
      route: "service/anti-counterfeiting",
    },
    {
      name: "Corporate Legal Services",
      icon: Briefcase,
      description: "Navigate company law, regulatory compliance, and governance with precision and clarity.",
      route: "service/corporate",
    },
    {
      name: "Startup Legal Support",
      icon: UserCheck,
      description: "From incorporation to investor agreements — everything your startup needs to stay legally sound.",
      route: "service/startup",
    },
    {
      name: "Business Law & Compliance",
      icon: Scale,
      description: "Ensure your operations are legally compliant with expert business law guidance.",
      route: "service/business-law",
    },
    {
      name: "Investment & Fundraising",
      icon: Package,
      description: "Legal advisory for venture capital, angel rounds, SAFE notes, and investor relations.",
      route: "service/investment",
    },
    {
      name: "Litigation & Disputes",
      icon: Gavel,
      description: "Resolve commercial disputes swiftly — from pre-litigation notices to courtroom representation.",
      route: "service/litigation",
    },
  ]

  // Removed duplicate declaration of internationalServices to fix redeclaration error.

  const internationalServices = [
    {
      name: "International Trademark Filing",
      icon: Globe,
      description: "Via Madrid Protocol and National filings in the USA, EU, UK, UAE, Australia, and more.",
      route: "service/international/trademark",
    },
    {
      name: "International Patent Filing",
      icon: FileText,
      description: "File global patents via PCT applications and handle National Phase Entries efficiently with expert support.",
      route: "service/international/patent",
    },
    {
      name: "Global Copyright Protection",
      icon: BookOpen,
      description: "Secure your work internationally under the Berne Convention.",
      route: "service/international/copyright",
    },
    {
      name: "International Design Protection",
      icon: Package,
      description: "File under the Hague Agreement for international industrial design rights.",
      route: "service/international/design",
    },
    {
      name: "IP & Legal Consulting Across Borders",
      icon: Briefcase,
      description: "Strategic advisory for multinational IP portfolios, licensing, enforcement, market entry legal strategy, and guidance for Indian startups going global.",
      route: "service/international/consulting",
    },
    {
      name: "IP Watch Services",
      icon: Shield,
      description: "Monitor and protect trademarks, patents, and designs across jurisdictions.",
      route: "service/international/watch",
    },
    {
      name: "Anti-Counterfeiting for Exporters",
      icon: Shield,
      description: "Customs Watch Listing, global cease & desist, and enforcement in international markets.",
      route: "service/international/anti-counterfeiting",
    }
  ]

  const extendedServices = [
    {
      name: "Commercial Contracts",
      icon: FileText,
      description: "Draft, negotiate, and vet business contracts with airtight legal precision.",
      route: "service/extended/contracts",
    },
    {
      name: "Employment & HR Law",
      icon: Gavel,
      description: "Stay compliant with labour laws, HR policies, and employee agreements.",
      route: "service/extended/hr-law",
    },
    {
      name: "Outsourcing & Procurement",
      icon: Package,
      description: "Manage vendor and procurement contracts with risk-free strategies.",
      route: "service/extended/outsourcing",
    },
    {
      name: "Privacy & Data Protection",
      icon: Lock,
      description: "Get GDPR and India DPDP compliance right with privacy-first legal consulting.",
      route: "service/extended/privacy",
    },
    {
      name: "FSSAI Licensing & Compliance",
      icon: Scale,
      description: "Legal assistance for obtaining food licenses and staying compliant in the F&B industry.",
      route: "service/extended/fssai",
    },
  ]

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[170px] font-montserrat overflow-hidden">
      {/* Grid Pattern Overlay */}
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

      {/* Hero Section */}
      <motion.section
        className="relative h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Corner Angles for Hero Section */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#00ADB5] hidden lg:block" />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Our Services
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Comprehensive Legal & IP Solutions for a Modern Business World
          </p>
        </motion.div>
      </motion.section>

      {/* Our Expertise Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 relative">
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center mb-16">
              <motion.div
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <h2 className="text-4xl font-bold mb-4 relative inline-block">
                  <span className="text-[#00ADB5]">Our</span>{" "}
                  <span className="text-[#393E46]">Expertise</span>
                </h2>
                <p className="mt-6 text-lg text-[#393E46]/80 max-w-2xl">
                  Comprehensive Legal & IP Solutions for a Modern Business World
                </p>
              </motion.div>
            </div>

            <div className="relative max-w-3xl mx-auto px-8">
              {/* Corner Angles */}
              <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />
              
              <div className="text-center space-y-6">
                <p className="text-[#393E46] text-lg leading-relaxed">
                  At Leonard Corporate Solutions, we deliver sharp, scalable legal services built to protect innovation, fuel growth, and ensure compliance — in India and globally. Whether you're a startup, enterprise, or multinational, our legal strategies are crafted to give your business a competitive legal edge
                </p>
                <p className="text-[#393E46] text-lg font-medium">
                  📩 Need tailored legal support? Reach out at{" "}
                  <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                    info@leonardsolutions.in
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Services Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">National Legal Services</span>{" "}
              <span className="text-[#00ADB5]">(India-Focused)</span>
            </h2>
          </div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {nationalServices.map((service, index) => (
              <Link
                key={service.name}
                href={service.route}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.name)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className="h-full bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute top-4 right-4 text-[#00ADB5] text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="flex flex-col gap-5 relative z-10">
                    <div className="w-14 h-14 bg-[#00ADB5] rounded-xl flex items-center justify-center text-white">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-[#393E46]/80 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ADB5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* International Services Section Title */}
          <div className="text-center mb-16 mt-32">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">International Legal Services</span>{" "}
              <span className="text-[#00ADB5]">(Global Solutions)</span>
            </h2>
          </div>

          {/* International Services Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {internationalServices.map((service, index) => (
              <Link
                key={service.name}
                href={service.route}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.name)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className="h-full bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute top-4 right-4 text-[#00ADB5] text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="flex flex-col gap-5 relative z-10">
                    <div className="w-14 h-14 bg-[#00ADB5] rounded-xl flex items-center justify-center text-white">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-[#393E46]/80 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ADB5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Extended Legal Services Section Title */}
          <div className="text-center mb-16 mt-32">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#222831]">Extended Legal Support</span>{" "}
              <span className="text-[#00ADB5]">(Specialized Solutions)</span>
            </h2>
          </div>

          {/* Extended Services Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {extendedServices.map((service, index) => (
              <Link
                key={service.name}
                href={service.route}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.name)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className="h-full bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="absolute top-4 right-4 text-[#00ADB5] text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                  <div className="flex flex-col gap-5 relative z-10">
                    <div className="w-14 h-14 bg-[#00ADB5] rounded-xl flex items-center justify-center text-white">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-[#393E46]/80 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ADB5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Closing Message */}
          <motion.div
            className="mt-32 relative max-w-3xl mx-auto px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative py-12">
              {/* Corner Angles */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />
              
              <p className="text-[#393E46] text-lg text-center leading-relaxed">
                At Leonard, our services evolve with your business needs. We continuously update and expand our offerings to serve you better. Stay connected, and we'll take care of the law.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
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