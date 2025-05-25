'use client';

import { motion } from "framer-motion";
import { BookOpen, Briefcase, FileSearch, Gavel, Globe, Search, FileText } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PatentPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Define slug mapping for cleaner URLs
  const serviceSlugs: { [key: string]: string } = {
    "Patent Registration": "registration",
    "Patent Search": "search",
    "Patent Drafting": "drafting",
    "Patent Opposition": "opposition",
    "Patent Licensing": "licensing",
    "International Patent": "international",
    "Patent Consultation": "consultation",
  };

  const serviceCards = [
    {
      icon: FileText,
      title: "Patent Registration",
      description: "Secure your intellectual property by registering your patent with expert guidance and compliance.",
    },
    {
      icon: Search,
      title: "Patent Search",
      description: "Conduct comprehensive patent searches to identify existing patents and avoid conflicts.",
    },
    {
      icon: FileText,
      title: "Patent Drafting",
      description: "Prepare detailed and precise patent applications to protect your innovations.",
    },
    {
      icon: Gavel,
      title: "Patent Opposition",
      description: "Handle patent opposition proceedings to defend or challenge patent grants.",
    },
    {
      icon: Briefcase,
      title: "Patent Licensing",
      description: "Facilitate patent licensing agreements to maximize the value of your IP.",
    },
    {
      icon: Globe,
      title: "International Patent",
      description: "Manage filing and prosecution of patents globally for worldwide protection.",
    },
    {
      icon: BookOpen,
      title: "Patent Consultation",
      description: "Receive expert advice to strategize and optimize your patent portfolio.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[170px] font-montserrat overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
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
      <motion.section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center">
        {/* Corner Angles */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#00ADB5] hidden lg:block" />

        <motion.div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Patent Services
            <span className="absolute top-1/2 -left-6 sm:-left-8 md:-left-12 lg:-left-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#00ADB5] opacity-50 animate-pulse">✦</span>
            <span className="absolute top-1/2 -right-6 sm:-right-8 md:-right-12 lg:-right-16 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#00ADB5] opacity-50 animate-pulse">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Protect Your Innovations
          </p>
        </motion.div>
      </motion.section>

      {/* Content Sections */}
      <section className="py-12 sm:py-16 md:py-24 space-y-12 sm:space-y-16 md:space-y-24">
        <div className="max-w-6xl mx-auto">
          {/* Patent Overview */}
          <motion.div
            className="relative max-w-3xl mx-auto px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Corner Angles */}
            <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ADB5]" />

            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-[#00ADB5]">Patent</span>{' '}
                <span className="text-[#393E46]">Overview</span>
              </h2>
              <p className="text-[#393E46] text-lg leading-relaxed">
                For many of our clients, their patent portfolio is their most important asset and is critical to their
                success. We are proud to be recognized as a team of professionals with extensive technical depth
                and strategic expertise. Our strength in patent law and our ability to provide superior service is
                the basis for our having prepared and filed more patent applications than any other firm in India and
                overseas. But our patent practice is not limited to acquiring patent rights. We recognize that obtaining
                strong patents without a developed strategy can result in both increased risks and missed opportunities.
              </p>
              <p className="text-[#393E46] text-lg font-medium">
                📩 Contact us at{' '}
                <a href="mailto:info@brandsecure.in" className="text-[#00ADB5] hover:underline">
                  info@brandsecure.in
                </a>{' '}
                for personalized assistance with your patent needs.
              </p>
            </div>
          </motion.div>

          {/* Our Services */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-[#222831]">Our</span>{' '}
                <span className="text-[#00ADB5]">Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-16">
              {serviceCards.map((service, index) => (
                <Link
                  key={service.title}
                  href={`/service/patent/${serviceSlugs[service.title]}`}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(service.title)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <motion.div
                    className="h-full bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADB5]/10 relative overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="absolute top-4 right-4 text-[#00ADB5] text-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300">✦</span>
                    <div className="flex flex-col gap-5 relative z-10">
                      <div className="w-12 h-12 bg-[#00ADB5] rounded-lg flex items-center justify-center text-white">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">{service.title}</h3>
                        <p className="text-[#393E46]/80 text-base leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ADB5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </motion.div>
                </Link>
              ))}
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