"use client";
import Link from "next/link";
import { Linkedin, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const tickerVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <footer className="relative overflow-hidden" style={{ background: "#EEEEEE" }}>
      {/* CONNECT block */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 md:px-12 lg:px-24 relative z-20">
        <div className="flex flex-col items-center text-center py-8 sm:py-12">
          <h2
            className="font-extrabold text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] text-white"
            style={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "0.2em",
              lineHeight: "1",
         
          textShadow: "2px 2px 8px rgba(0,0,0,0.10)",
              
              padding: "0.25rem 1rem",
              borderRadius: 6,
            }}
          >
            CONNECT
          </h2>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-3">
              <Phone size={26} className="text-black" />
              <a href="tel:+911234567890" className="text-black font-semibold text-lg sm:text-xl md:text-2xl">
                +91 123 456 7890
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={26} className="text-black" />
              <a href="mailto:info@leonardsolutions.in" className="text-black font-semibold text-lg sm:text-xl md:text-2xl">
                info@leonardsolutions.in
              </a>
            </div>
          </div>

          <hr className="w-full max-w-2xl mt-8 border-t border-black/10" style={{ height: 1 }} />
        </div>
      </div>

      {/* Links section with LEONARD in background */}
      <div className="relative  z-10">
        {/* Big faded LEONARD background */}
        <div
          aria-hidden
          className="absolute inset-0 flex text-[120px] xs:text-[160px] sm:text-[240px] md:text-[320px] lg:text-[380px] justify-center items-center pointer-events-none"
        >
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              
              whiteSpace: "nowrap",
              color: "rgba(255,255,255,0.95)",
              textShadow: "0 8px 30px rgba(0,0,0,0.15)",
              WebkitMaskImage:
                "linear-gradient(90deg, black 0%, black 55%, transparent 100%)",
              maskImage:
                "linear-gradient(90deg, black 0%, black 55%, transparent 100%)",
            }}
          >
            {isMobile ? 'L\nEONARD' : 'LEONARD'}
          </span>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-20 pb-8 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-[#00ADB5] text-xl font-bold">
                Leonard <span className="text-black">Corporate</span> Solutions
              </h3>
              <p className="text-gray-700">
                Providing excellent legal services in intellectual property, taxation, and corporate law since 2008.
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/leonard-corporate-solutions-pvt-ltd/" },
                  { Icon: Twitter, href: "https://twitter.com/leonardsolutions" },
                  { Icon: Instagram, href: "https://www.instagram.com/leonardsolutionspvt?igsh=Y2drampjMGhyN3Yz" },
                ].map(({ Icon, href }, i) => (
                  <Link key={i} href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="text-[#00ADB5] hover:text-black transition-all cursor-pointer" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-6 sm:mt-0">
              <h3 className="text-[#00ADB5] text-xl font-bold mb-4 relative inline-block">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about-us" },
                  { name: "Services", href: "/service" },
                  { name: "Blogs", href: "/blogs" },
                  { name: "Contact", href: "/contact-us" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-[#00ADB5] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="mt-6 lg:mt-0">
              <h3 className="text-[#00ADB5] text-xl font-bold mb-4">Our Services</h3>
              <ul className="space-y-2">
                {[
                  { name: "Intellectual Property", href: "/service#intellectual-property" },
                  { name: "Corporate Law", href: "/service#corporate-law" },
                  { name: "Taxation", href: "/service#taxation" },
                  { name: "Legal Consultation", href: "/service#legal-consultation" },
                  { name: "Documentation", href: "/service#documentation" },
                ].map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-700 hover:text-[#00ADB5] transition-colors cursor-pointer"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mt-6 lg:mt-0">
              <h3 className="text-[#00ADB5] text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-[#00ADB5]" size={20} />
                  <span className="text-gray-700">+91 123 456 7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#00ADB5]" size={20} />
                  <a
                    href="mailto:info@leonardsolutions.in"
                    className="text-gray-700 hover:text-[#00ADB5] transition-colors"
                  >
                    info@leonardsolutions.in
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#00ADB5]" size={20} />
                  <span className="text-gray-700">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker section (unchanged) */}
      <div className="w-full bg-[#eeeeee] overflow-hidden border-t border-white/10 mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-4 sm:py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Leonard Corporate Solutions Pvt. Ltd.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#00ADB5] text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#00ADB5] text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          className="whitespace-nowrap flex items-center py-4 sm:py-6"
          variants={tickerVariants}
          animate="animate"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter">
                <span className="text-[#00ADB5]">IPR IS OUR  </span>
                <span className="text-[#000000]">GAME</span>
              </span>
              <span className="text-[#00ADB5] text-2xl sm:text-4xl md:text-6xl lg:text-7xl mx-4 sm:mx-6 md:mx-8 lg:mx-12">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
