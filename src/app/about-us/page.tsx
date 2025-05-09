"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, BookOpen, Building, Globe, MapPin, Shield, Users } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import Image from "next/image"

const TEAM_MEMBERS = [
  {
    name: "Robert Wilson",
    position: "Managing Partner",
    image: "https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg",
    role: "Leadership"
  },
  {
    name: "Sarah Parker",
    position: "Senior IP Attorney",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    role: "Legal"
  },
  {
    name: "David Chen",
    position: "Patent Specialist",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    role: "Legal"
  },
  {
    name: "Emily Thompson",
    position: "Corporate Counsel",
    image: "https://images.pexels.com/photos/2381071/pexels-photo-2381071.jpeg",
    role: "Legal"
  },
  {
    name: "Michael Ross",
    position: "Trademark Expert",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    role: "Strategy"
  },
  {
    name: "Jessica Lee",
    position: "IP Strategy Lead",
    image: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg",
    role: "Strategy"
  }
]

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef(null)

  // Fix hydration by mounting after client-side render
  useEffect(() => {
    setMounted(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  if (!mounted) {
    return null // Return null on server-side
  }

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[5%] font-montserrat overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Hero Section with improved responsiveness */}
      <motion.section
        className="relative min-h-[60vh] sm:h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24 py-20"
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
            About Us
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Discover Our Expertise and Commitment to Excellence
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content Section with better spacing */}
      <section className="py-16 sm:py-24 px-4 md:px-16 lg:px-24 relative mt-16 sm:mt-32">
        <div className="max-w-7xl mx-auto relative">
          {/* Background Decorations */}
          <div className="absolute -top-20 right-10 text-[#00ADB5] text-7xl animate-pulse opacity-30">✦</div>
          <div className="absolute bottom-10 left-0 text-[#00ADB5] text-6xl animate-pulse opacity-20">✦</div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center relative">
            {/* Content Section - Now First */}
            <motion.div
              className="space-y-8 relative z-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <span className="text-[#00ADB5] font-medium tracking-wider uppercase">Our Story</span>
                <h2 className="text-5xl font-bold text-[#222831] mt-2 leading-tight">
                  Leading IP & Corporate Solutions Since 2010
                </h2>
              </div>

              <div className="space-y-6 text-lg text-[#393E46] leading-relaxed">
                <p className="relative">
                  <span className="absolute -left-4 top-0 text-[#00ADB5] opacity-20">✦</span>
                  Leonard Corporate Solutions Pvt. Ltd. is India's premier firm practicing exclusively in intellectual
                  property laws, taxation and company laws with head office in Mumbai, India.
                </p>
                <p>
                  With a dedicated team of professionals and experts, we provide comprehensive solutions for all intellectual
                  property matters, serving both domestic and international clients across various industries.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl space-y-2 shadow-lg">
                  <h3 className="text-4xl font-bold text-[#00ADB5]">10+</h3>
                  <p className="text-[#393E46] font-medium">Years of Excellence</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl space-y-2 shadow-lg">
                  <h3 className="text-4xl font-bold text-[#00ADB5]">500+</h3>
                  <p className="text-[#393E46] font-medium">Satisfied Clients</p>
                </div>
              </div>

              <motion.button
                className="inline-flex items-center px-8 py-4 bg-[#00ADB5] text-white rounded-lg hover:bg-[#222831] transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>

            {/* Image Section - Now Second with Decorative Elements */}
            <motion.div
              className="relative h-[700px] -mt-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Background Shape */}
              <div className="absolute inset-0 bg-[#00ADB5]/10 rounded-[30px] transform rotate-6"></div>
              
              {/* Image Container */}
              <div className="absolute inset-0 transform -rotate-3 transition-transform duration-500 hover:rotate-0">
                <div className="relative h-full w-full overflow-hidden rounded-[30px] shadow-2xl">
                  <Image
                    src="/rohitbhai.webp"
                    alt="About Us"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
              
              {/* Decorative Star */}
              <span className="absolute -right-10 top-10 text-[#00ADB5] text-5xl animate-pulse">✦</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Sections with improved mobile layout */}
      <section className="py-16 sm:py-32 px-4 md:px-16 lg:px-24 relative bg-white/50">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-32">
          {/* Vision Section */}
          <motion.div 
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <span className="absolute -top-10 -left-10 text-[#00ADB5] text-7xl animate-pulse opacity-20">✦</span>
              <h2 className="text-4xl font-bold text-[#222831] mb-6">Our Vision</h2>
              <p className="text-lg text-[#393E46] leading-relaxed">
                To become India's leading intellectual property and corporate law firm, recognized globally for our innovative solutions, unwavering integrity, and commitment to excellence. We envision a future where businesses can seamlessly protect and leverage their intellectual property assets.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Global Recognition",
                  "Innovation Leadership",
                  "Client Success",
                  "Technological Excellence"
                ].map((item, index) => (
                  <motion.div 
                    key={item}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="text-[#00ADB5] text-2xl">✦</span>
                    <span className="text-[#393E46]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[#00ADB5]/10 rounded-2xl transform rotate-3"></div>
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
                alt="Our Vision"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div 
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative order-2 md:order-1 h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[#00ADB5]/10 rounded-2xl transform -rotate-3"></div>
              <Image
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80"
                alt="Our Mission"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="order-1 md:order-2 relative">
              <span className="absolute -top-10 -right-10 text-[#00ADB5] text-7xl animate-pulse opacity-20">✦</span>
              <h2 className="text-4xl font-bold text-[#222831] mb-6">Our Mission</h2>
              <p className="text-lg text-[#393E46] leading-relaxed">
                To deliver exceptional legal services through innovative solutions and unwavering commitment to our clients' success. We strive to protect and enhance our clients' intellectual property assets while maintaining the highest standards of professionalism and integrity.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  {
                    title: "Excellence",
                    description: "Delivering outstanding service"
                  },
                  {
                    title: "Integrity",
                    description: "Maintaining highest ethics"
                  },
                  {
                    title: "Innovation",
                    description: "Pioneering solutions"
                  },
                  {
                    title: "Growth",
                    description: "Continuous improvement"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="text-[#00ADB5] font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-[#393E46]">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section with better grid layout */}
      <section className="py-16 sm:py-32 px-4 md:px-16 lg:px-24 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#00ADB5] text-6xl animate-pulse opacity-20">✦</span>
            <h2 className="text-5xl font-bold text-[#222831] mb-4 relative inline-block">
              Meet Our Team
              <span className="absolute -right-8 top-0 text-[#00ADB5] text-4xl animate-pulse">✦</span>
            </h2>
            <p className="text-xl text-[#393E46]/80 mt-4 max-w-2xl mx-auto">
              Expert professionals dedicated to your intellectual property needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-[300px] sm:h-[350px] lg:h-[400px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-white/90 rounded-full text-[#00ADB5] mb-3">
                      {member.role}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.name}
                    </h3>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}