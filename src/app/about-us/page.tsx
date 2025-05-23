"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, BookOpen, Building, Globe, MapPin, Shield, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const TEAM_MEMBERS = [
  // Leadership
  {
    name: "Manisha Sidhpura",
    position: "Founder & Principal Associate – Advocate",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    role: "Leadership"
  },
  {
    name: "Rohit Sidhpura",
    position: "COO – Business Head, Managing Partner",
    image: "/rohitbhai.webp",
    role: "Leadership"
  },

  // Legal & Taxation
  {
    name: "Dr. Farrukh Khan",
    position: "Advocate, Senior Associate",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    role: "Legal"
  },
  {
    name: "Dr. Paresh Dave",
    position: "Patent Agent, Senior Associate",
    image: "https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg",
    role: "Legal"
  },
  {
    name: "Chirag Chanani",
    position: "Advocate, Senior Associate",
    image: "https://images.pexels.com/photos/2381071/pexels-photo-2381071.jpeg",
    role: "Legal"
  },
  {
    name: "Nabendu Bhattacharya",
    position: "Advocate, Senior Associate",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    role: "Legal"
  },
  {
    name: "R.R. Padmanabhan",
    position: "Advocate, Senior Associate",
    image: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg",
    role: "Legal"
  },

  // Strategy & Operations
  {
    name: "Prabodhan Makwana",
    position: "CFO – Taxation, Senior Associate",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    role: "Strategy"
  },
  {
    name: "Urvee Sidhpura",
    position: "VP – Human Resources, Senior Associate",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    role: "Strategy"
  },
  {
    name: "Kaynat Dandekar",
    position: "VP – Operations, Senior Associate",
    image: "https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg",
    role: "Strategy"
  },
  {
    name: "Satyam Patel",
    position: "VP – Business Development, Associate",
    image: "https://images.pexels.com/photos/2381071/pexels-photo-2381071.jpeg",
    role: "Strategy"
  },

  // Administrative & Support
  {
    name: "Prachi Jadhav",
    position: "Administrative Manager, Senior Associate",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    role: "Administrative"
  },
  {
    name: "Abhijeet Powar",
    position: "Foreign Filing Paralegal, Senior Associate",
    image: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg",
    role: "Administrative"
  },
  {
    name: "Vijay Bhattarai",
    position: "Licensing Coordinator, Associate",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    role: "Administrative"
  }
]

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // All scroll related hooks grouped together
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Transform calculations
  const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  // Mount effect
  useEffect(() => {
    setMounted(true)
  }, [])

  // Vision and Mission points defined outside component return
  const visionPoints = [
    {
      icon: "🌍",
      text: "Global Recognition for IP & Corporate Legal Expertise",
      id: "vision-1"
    },
    {
      icon: "💡",
      text: "Innovation Leadership in Legal Services",
      id: "vision-2"
    },
    {
      icon: "🤝",
      text: "Client-Centric Success & Long-Term Partnerships",
      id: "vision-3"
    },
    {
      icon: "🖥️",
      text: "Tech-Driven Legal Solutions for a Digital Economy",
      id: "vision-4"
    }
  ]

  const missionPoints = [
    {
      icon: "🏆",
      title: "Excellence",
      description: "Delivering world-class legal service across every touchpoint",
      id: "mission-1"
    },
    {
      icon: "🛡️",
      title: "Integrity",
      description: "Practicing law with transparency, trust, and ethical rigor",
      id: "mission-2"
    },
    {
      icon: "⚙️",
      title: "Innovation",
      description: "Building scalable, tech-first legal frameworks",
      id: "mission-3"
    },
    {
      icon: "📈",
      title: "Growth",
      description: "Driving continuous evolution for our clients and ourselves",
      id: "mission-4"
    }
  ]

  if (!mounted) return null

  return (
    <div ref={containerRef} className="min-h-screen bg-[#EEEEEE] relative rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[170px] font-montserrat overflow-x-hidden px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          willChange: 'transform'
        }}
      />

      <div className="relative z-10 space-y-12 sm:space-y-16 md:space-y-24">
        {/* Hero Section */}
        <motion.section
          className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Corner Angles with responsive spacing */}
          <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-l-2 border-[#00ADB5] hidden md:block" />
          <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-r-2 border-[#00ADB5] hidden md:block" />
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-l-2 border-[#00ADB5] hidden md:block" />
          <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-r-2 border-[#00ADB5] hidden md:block" />
          
          <motion.div className="max-w-7xl mx-auto text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
              About Us
              <span className="absolute top-1/2 -left-6 sm:-left-8 md:-left-12 lg:-left-16 -translate-y-1/2 text-[#00ADB5] text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-pulse opacity-50">✦</span>
              <span className="absolute top-1/2 -right-6 sm:-right-8 md:-right-12 lg:-right-16 -translate-y-1/2 text-[#00ADB5] text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-pulse opacity-50">✦</span>
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
              Discover Our Expertise and Commitment to Excellence
            </p>
          </motion.div>
        </motion.section>

        {/* Main Content Section */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto relative">
            <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-start">
              {/* Content Section */}
              <motion.div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-[#00ADB5] text-sm sm:text-base font-medium tracking-wider uppercase">
                    Our Story
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#222831] leading-tight">
                    Empowering Brands & Innovators with IP & Corporate Legal Excellence Since 2010
                  </h2>
                </div>

                {/* Text content with angles - Improved spacing */}
                <div className="relative space-y-6 p-6 sm:p-8">
                  {/* Corner Angles */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#00ADB5]" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#00ADB5]" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#00ADB5]" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#00ADB5]" />
                  
                  <p className="text-[#393E46] text-base sm:text-lg leading-relaxed">
                    <span className="absolute -left-4 top-0 text-[#00ADB5] opacity-20">✦</span>
                    Leonard Corporate Solutions Pvt. Ltd. is a leading Indian law firm headquartered in Mumbai, specializing exclusively in Intellectual Property Rights (IPR), Company Law, and Taxation. Since 2010, we’ve been the trusted legal partner for startups, SMEs, and multinational companies, helping them safeguard their innovations and navigate complex legal landscapes.
                  </p>
                  <p>
                    With a highly skilled team of IP attorneys, corporate law experts, and legal consultants, we deliver tailored legal solutions across all areas of intellectual property law — from trademark and patent registration to copyright protection and licensing agreements.
                  </p>
                </div>

                {/* Stats Cards with better spacing */}
                <div className="grid grid-cols-2 gap-6 sm:gap-8 mt-8">
                  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl space-y-2 shadow-lg">
                    <h3 className="text-4xl font-bold text-[#00ADB5]">10+</h3>
                    <p className="text-[#393E46] font-medium">Years of Excellence</p>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl space-y-2 shadow-lg">
                    <h3 className="text-4xl font-bold text-[#00ADB5]">500+</h3>
                    <p className="text-[#393E46] font-medium">Satisfied Clients</p>
                  </div>
                </div>

               
              </motion.div>

              {/* Image Section */}
              <motion.div className="relative h-[250px] sm:h-[350px] md:h-[450px] mt-10 md:mt-0">
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

        {/* Vision & Mission Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-white/50">
          <div className="max-w-7xl mx-auto space-y-20 sm:space-y-24 md:space-y-32">
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
                <div className="text-lg text-[#393E46] leading-relaxed space-y-6">
                  <h3 className="text-2xl font-bold text-[#222831]">Shaping the Future of Intellectual Property & Corporate Law</h3>
                  <p>
                    At Leonard Corporate Solutions Pvt. Ltd., our vision is to be recognized as India's most trusted and globally acclaimed Intellectual Property and Corporate Law Firm. We aim to empower businesses of all sizes — from startups to Fortune 500s — to secure, protect, and monetize their intellectual property assets with confidence.
                  </p>
                  <p>
                    We're building a future where legal innovation meets technology, making it seamless for companies to navigate the complexities of IP rights, corporate compliance, and global legal standards. Our commitment lies in delivering legal solutions driven by excellence, integrity, and forward-thinking strategies.
                  </p>
                </div>

                {/* Vision Points */}
                <div className="mt-8 space-y-4">
                  <h4 className="text-xl font-bold text-[#00ADB5] mb-4">🚀 Pillars of Our Vision:</h4>
                  {visionPoints.map((item, index) => (
                    <motion.div 
                      key={item.id}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-[#393E46]">{item.text}</span>
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
                <div className="text-lg text-[#393E46] leading-relaxed space-y-6">
                  <h3 className="text-2xl font-bold text-[#222831]">Delivering Excellence in IP & Corporate Legal Services</h3>
                  <p>
                    At Leonard Corporate Solutions Pvt. Ltd., our mission is to provide exceptional legal services by combining deep legal expertise with innovative, tech-enabled solutions. We are committed to helping clients protect, manage, and scale their intellectual property assets — all while upholding the highest standards of integrity and professionalism.
                  </p>
                  <p>
                    We're not just legal advisors — we're strategic partners in our clients' growth journey. From trademark and patent filing to IP litigation, corporate structuring, and regulatory compliance, we aim to empower businesses with future-ready legal support.
                  </p>
                </div>
                {/* Mission Points */}
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <h4 className="text-xl font-bold text-[#00ADB5] col-span-2 mb-2">✨ What Drives Us:</h4>
                  {missionPoints.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="bg-white/80 backdrop-blur-sm p-4 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">{item.icon}</span>
                        <h3 className="text-[#00ADB5] font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-sm text-[#393E46]">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12 sm:mb-16 relative"
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
              <p className="text-xl text-[#393E46]/80 mt-4 max-w-3xl mx-auto">
                Expert Professionals Dedicated to Your Intellectual Property & Corporate Law Needs<br/>
                <span className="text-lg block mt-2">
                  At Leonard Corporate Solutions Pvt. Ltd., our strength lies in our people — an elite team of legal, strategic, and technical minds, united by one mission: to protect, manage, and maximize the value of your intellectual property and corporate interests.
                </span>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
              {/* Group headers with responsive margins */}
              <h3 className="col-span-full text-xl sm:text-2xl font-bold text-[#00ADB5] mt-8 sm:mt-12 mb-4 sm:mb-6 first:mt-0">
                👨‍💼 Leadership
              </h3>
              {TEAM_MEMBERS.filter(member => member.role === "Leadership").map((member, index) => (
                <motion.div
                  key={member.name}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
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

              <h3 className="col-span-full text-xl sm:text-2xl font-bold text-[#00ADB5] mt-8 sm:mt-12 mb-4 sm:mb-6">
                ⚖️ Legal & Taxation
              </h3>
              {TEAM_MEMBERS.filter(member => member.role === "Legal").map((member, index) => (
                <motion.div
                  key={member.name}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
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

              <h3 className="col-span-full text-xl sm:text-2xl font-bold text-[#00ADB5] mt-8 sm:mt-12 mb-4 sm:mb-6">
                🧠 Strategy & Operations
              </h3>
              {TEAM_MEMBERS.filter(member => member.role === "Strategy").map((member, index) => (
                <motion.div
                  key={member.name}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
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

              <h3 className="col-span-full text-xl sm:text-2xl font-bold text-[#00ADB5] mt-8 sm:mt-12 mb-4 sm:mb-6">
                🗂️ Administrative & Support
              </h3>
              {TEAM_MEMBERS.filter(member => member.role === "Administrative").map((member, index) => (
                <motion.div
                  key={member.name}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
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
    </div>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}