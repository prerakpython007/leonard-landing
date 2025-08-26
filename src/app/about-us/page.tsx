"use client"
import { TEAM_MEMBERS } from "~/lib/teamData";


import { useState, useEffect, useRef } from "react"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight, BookOpen, Building, Globe, MapPin, Shield, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// const TEAMMEMBERS = [
//   // Leadership
//   {
//     name: "Manisha Sidhpura",
//     position: "Founder & Principal Associate – Advocate",
//     image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
//     role: "Leadership"
//   },
//   {
//     name: "Rohit Sidhpura",
//     position: "COO – Business Head, Managing Partner",
//     image: "/rohitbhai.webp",
//     role: "Leadership"
//   },
//   // Legal & Taxation
//   {
//     name: "Dr. Farrukh Khan",
//     position: "Advocate, Senior Associate",
//     image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
//     role: "Legal"
//   },
//   {
//     name: "Dr. Paresh Dave",
//     position: "Patent Agent, Senior Associate",
//     image: "https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg",
//     role: "Legal"
//   },
//   {
//     name: "Chirag Chanani",
//     position: "Advocate, Senior Associate",
//     image: "https://images.pexels.com/photos/2381071/pexels-photo-2381071.jpeg",
//     role: "Legal"
//   },
//   {
//     name: "Nabendu Bhattacharya",
//     position: "Advocate, Senior Associate",
//     image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
//     role: "Legal"
//   },
//   {
//     name: "R.R. Padmanabhan",
//     position: "Advocate, Senior Associate",
//     image: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg",
//     role: "Legal"
//   },
//   // Strategy & Operations
//   {
//     name: "Prabodhan Makwana",
//     position: "CFO – Taxation, Senior Associate",
//     image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
//     role: "Strategy"
//   },
//   {
//     name: "Urvee Sidhpura",
//     position: "VP – Human Resources, Senior Associate",
//     image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
//     role: "Strategy"
//   },
//   {
//     name: "Kaynat Dandekar",
//     position: "VP – Operations, Senior Associate",
//     image: "https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg",
//     role: "Strategy"
//   },
//   {
//     name: "Satyam Patel",
//     position: "VP – Business Development, Associate",
//     image: "https://images.pexels.com/photos/2381071/pexels-photo-2381071.jpeg",
//     role: "Strategy"
//   },
//   // Administrative & Support
//   {
//     name: "Prachi Jadhav",
//     position: "Administrative Manager, Senior Associate",
//     image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
//     role: "Administrative"
//   },
//   {
//     name: "Abhijeet Powar",
//     position: "Foreign Filing Paralegal, Senior Associate",
//     image: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg",
//     role: "Administrative"
//   },
//   {
//     name: "Vijay Bhattarai",
//     position: "Licensing Coordinator, Associate",
//     image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
//     role: "Administrative"
//   }
// ]

// Add counting animation hook
const useCountAnimation = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number;
      let animationFrame: number;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * target));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      // Cleanup function
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, hasAnimated, target, duration]);

  return { count, ref };
}

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

  // Add count animations
  const { count: yearsCount, ref: yearsRef } = useCountAnimation(18, 2000)
  const { count: clientsCount, ref: clientsRef } = useCountAnimation(500, 2500)

  if (!mounted) return null

  return (
    <div ref={containerRef} className="min-h-screen bg-[#EEEEEE] relative font-roboto overflow-x-hidden">
      {/* Remove Grid Pattern - commented out */}
      
      {/* Large Gradient "L" Background */}
     

      <div className="relative z-10 space-y-12 sm:space-y-16 md:space-y-24">
        {/* New Hero Section with About Us and Image */}
        <motion.section
          className="relative min-h-[70vh] flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full flex flex-col md:flex-row items-center">
            {/* Left Side - About Us Text (Centered) */}
            <motion.div
              className="w-full md:w-1/2 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 mb-8 md:mb-0 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="max-w-xl">
                <motion.h1
                  className="text-[#000000] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-center md:text-left relative z-10"
                  style={{
                    letterSpacing: "0.3em",
                    textShadow:
                      "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  ABOUT US
                </motion.h1>

                <div className="mt-8 space-y-4">
                  <p className="text-lg sm:text-xl text-[#393E46] font-light leading-relaxed">
                    Discover Our Expertise and Commitment to Excellence in Intellectual Property & Corporate Law
                  </p>
                  <div className="flex items-center space-x-2 text-[#00ADB5]">
                    <span className="text-sm font-medium  tracking-wider uppercase">Since 2008</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Horizontal Rectangle Image */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/office.png"
                    alt="Leonard Corporate Solutions Office"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content Section with better spacing */}
        <section className="py-16 sm:py-24 px-4 md:px-16 lg:px-24 relative">
          <div className="max-w-7xl mx-auto relative">
            <div className="grid md:grid-cols-2 gap-20 items-center relative">
              {/* Content Section - Now First */}
              <motion.div
                className="space-y-8 relative z-10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Text content with improved line spacing */}
                <div className="space-y-8">
                  <p className="text-[#393E46] text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose px-2 sm:px-0">
                    <strong>Leonard Corporate Solutions Pvt. Ltd.</strong> is a leading Indian law firm headquartered in <strong>Mumbai</strong>, specializing exclusively in <strong>Intellectual Property Rights (IPR)</strong>, <strong>Company Law</strong>, and <strong>Taxation</strong>. Since <strong>2008</strong>, we've been the trusted legal partner for <strong>startups</strong>, <strong>SMEs</strong>, and <strong>multinational companies</strong>, helping them safeguard their innovations and navigate complex legal landscapes.
                  </p>
                  <p className="text-[#393E46] text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose mt-4 px-2 sm:px-0">
                    With a highly skilled team of <strong>IP attorneys</strong>, <strong>corporate law experts</strong>, and <strong>legal consultants</strong>, we deliver tailored legal solutions across all areas of intellectual property law — from <strong>trademark and patent registration</strong> to <strong>copyright protection</strong> and <strong>licensing agreements</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                  <div className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl space-y-2 shadow-lg">
                    <div
                      ref={yearsRef}
                      className="flex items-baseline "
                    >
                      <span className="text-4xl font-bold text-black">
                        18
                      </span>
                      <span className="text-4xl font-bold text-[#00ADB5]">
                        +
                      </span>
                    </div>
                    <p className="text-[#393E46] font-medium">Years of Excellence</p>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl space-y-2 shadow-lg">
                    <div
                      ref={clientsRef}
                      className="flex items-baseline "
                    >
                      <span className="text-4xl font-bold text-black">
                        500
                      </span>
                      <span className="text-4xl font-bold text-[#00ADB5]">
                        +
                      </span>
                    </div>
                    <p className="text-[#393E46] font-medium">Satisfied Clients</p>
                  </div>
                </div>
              </motion.div>

              {/* Image Section - Simplified */}
              <motion.div
                className="relative h-[600px] sm:h-[700px] md:h-[800px]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/rohitbhai.webp"
                    alt="About Us"
                    fill
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Sections with EEEEEE background */}
     <section className="pt-8 sm:pt-2 pb-16 sm:pb-24 px-4 md:px-16 lg:px-24 relative bg-[#EEEEEE]">
          <div className="max-w-7xl mx-auto space-y-16 sm:space-y-32">
            {/* Vision Section */}
            <motion.div 
              className="grid md:grid-cols-2 gap-16 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {/* Image */}
                <div className="relative h-[500px] overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-[#00ADB5]/10 transform rotate-3"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
                    alt="Our Vision"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="relative">
                 <motion.h1
        className="text-[#000000] text-3xl sm:text-5xl md:text-xl lg:text-3xl font-extrabold text-center mb-24  relative z-10 px-4"
        style={{
          letterSpacing: "0.3em",
          textShadow:
            "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >Our Vision</motion.h1>
                <div className="text-lg text-[#393E46] leading-loose space-y-8">
                  <h3 className="text-2xl font-bold text-[#222831]">Shaping the Future of Intellectual Property & Corporate Law</h3>
                  <p className="text-[#393E46] text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose px-2 sm:px-0">
                    At <strong>Leonard Corporate Solutions Pvt. Ltd.</strong>, our vision is to be recognized as <strong>India's most trusted</strong> and <strong>globally acclaimed Intellectual Property and Corporate Law Firm</strong>. We aim to empower businesses of all sizes — from <strong>startups to Fortune 500s</strong> — to secure, protect, and monetize their <strong>intellectual property assets</strong> with confidence.
                  </p>
                  <p className="text-[#393E46] text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose px-2 sm:px-0">
                    We're building a future where <strong>legal innovation meets technology</strong>, making it seamless for companies to navigate the complexities of <strong>IP rights</strong>, <strong>corporate compliance</strong>, and <strong>global legal standards</strong>. Our commitment lies in delivering legal solutions driven by <strong>excellence</strong>, <strong>integrity</strong>, and <strong>forward-thinking strategies</strong>.
                  </p>
                </div>

                {/* Navigation moved here */}
                
              </div>
            </motion.div>

            {/* Mission Section */}
            <motion.div 
              className="grid md:grid-cols-2 gap-20 items-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10">
                <motion.h1
        className="text-[#000000] text-3xl sm:text-5xl md:text-xl lg:text-3xl font-extrabold text-center mb-24  relative z-10 px-4"
        style={{
          letterSpacing: "0.3em",
          textShadow:
            "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >Our Mission</motion.h1>
                <div className="text-lg text-[#393E46] leading-loose space-y-8">
                  <h3 className="text-2xl font-bold text-[#222831]">Delivering Excellence in IP & Corporate Legal Services</h3>
                  <p className="text-[#393E46] text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose px-2 sm:px-0">
                    At <strong>Leonard Corporate Solutions Pvt. Ltd.</strong>, our mission is to provide <strong>exceptional legal services</strong> by combining <strong>deep legal expertise</strong> with <strong>innovative, tech-enabled solutions</strong>. We are committed to helping clients <strong>protect, manage, and scale</strong> their intellectual property assets — all while upholding the highest standards of <strong>integrity and professionalism</strong>.
                  </p>
                  <p>
                    We're not just <strong>legal advisors</strong> — we're <strong>strategic partners</strong> in our clients' growth journey. From <strong>trademark and patent filing</strong> to <strong>IP litigation</strong>, <strong>corporate structuring</strong>, and <strong>regulatory compliance</strong>, we aim to empower businesses with <strong>future-ready legal support</strong>.
                  </p>
                </div>
              </div>

              <div className="relative h-[700px] overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* What Drives Us Section - Single big box with 4 sections */}
            <motion.div 
              className="flex flex-col items-center "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h1
        className="text-[#000000] text-3xl sm:text-5xl md:text-xl lg:text-3xl font-extrabold text-center mb-24  relative z-10 px-4"
        style={{
          letterSpacing: "0.3em",
          textShadow:
            "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        What Drives Us:
      </motion.h1>

              <div className="max-w-5xl w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2">
                  {missionPoints.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="group relative bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl aspect-square"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={
                            index === 0 ? "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80" : // Excellence - Scales of justice
                            index === 1 ? "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80" : // Integrity - Handshake
                            index === 2 ? "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80" : // Innovation - Technology/Digital
                            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" // Growth - Business charts
                          }
                          alt={item.title}
                          fill
                          className="object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                        />
                      </div>
                      
                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300"></div>
                      
                      {/* Name overlay on hover - centered */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <h3 className="text-white font-bold text-3xl text-center">
                          {item.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section with better grid layout */}
        <section className=" px-4 md:px-16 lg:px-24 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12 sm:mb-16 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h1
        className="text-[#000000] text-3xl sm:text-5xl md:text-xl lg:text-3xl font-extrabold text-center mb-24  relative z-10 px-4"
        style={{
          letterSpacing: "0.3em",
          textShadow:
            "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
Meet Our Team
      </motion.h1>

              <p className="text-xl text-[#393E46]/80 mt-4 max-w-4xl mx-auto">
                Expert Professionals Dedicated to Your Intellectual Property & Corporate Law Needs<br/>
                
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {TEAM_MEMBERS.map((member, index) => {
                // Different light background colors for variety
                console.log(member.name, member.slug); 
                const bgColors = [
                  'from-blue-50/80 to-blue-100/80',
                  'from-green-50/80 to-green-100/80', 
                  'from-purple-50/80 to-purple-100/80',
                  'from-orange-50/80 to-orange-100/80',
                  'from-pink-50/80 to-pink-100/80',
                  'from-indigo-50/80 to-indigo-100/80',
                  'from-yellow-50/80 to-yellow-100/80',
                  'from-red-50/80 to-red-100/80'
                ];
                
                return (
                  <div key={member.name} className="space-y-4">
                    <motion.div
                      className="group bg-white  overflow-hidden transition-all duration-300 hover:shadow-xl relative min-h-[450px]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {/* Image Section - Even larger image */}
                      <div className={`relative h-80 bg-gradient-to-br ${bgColors[index % bgColors.length]} overflow-visible`}>
                        <div className="absolute inset-0 flex items-start justify-center pt-6">
                          <div className="relative w-64 h-72 overflow-hidden">
                            <Image
                              src={`/people${(index % 15) + 1}.png`}
                              alt={member.name}
                              width={256}
                              height={288}
                              className="object-cover object-top w-full h-full"
                              style={{ 
                                objectPosition: 'center top'
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content Section - Much smaller height */}
                      <div className="p-3 space-y-1 pt-4 h-24 flex flex-col justify-center">
                        {/* Name */}
                        <h3 className="text-lg font-bold text-[#222831] text-center">
                          {member.name}
                        </h3>
                        
                        {/* Position & Role */}
                        <div className="text-center">
                          <p className="text-xs text-[#393E46] font-medium">
                            {member.position}
                          </p>
                          <p className="text-xs text-[#00ADB5] font-semibold uppercase tracking-wider">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      {/* Hover Overlay with Practice Areas - Adjusted positioning */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${bgColors[index % bgColors.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between text-[#222831] p-6 pt-12`}>
                        <div className="text-center mt-5">
                          <h4 className="text-xl font-extrabold mb-3  text-center">Practice Areas</h4>
                          <div className="text-center  leading-tight">
                            <p className="text-lg font-bold">Family Law</p>
                            <p className="text-lg font-bold">Family Law Mediation</p>
                            <p className="text-lg font-bold">Employment Law</p>
                            <p className="text-lg font-bold">Intellectual Property</p>
                            <p className="text-lg font-bold">Corporate Law</p>
                          </div>
                        </div>
                       
<button className="flex-1 border border-[#00ADB5] text-[#00ADB5] py-2 px-3 text-xs font-medium hover:bg-[#00ADB5]/10 transition-colors duration-200">
<Link href={`/about-us/${member.slug}`}>
  <p>Read Full Bio</p>
</Link>

</button>
                      </div>
                    </motion.div>

                    {/* Buttons below the card */}
                    <div className="flex gap-2">
                      
                      <button className="flex-1 border border-[#00ADB5] text-[#00ADB5] py-2 px-3 text-xs font-medium hover:bg-[#00ADB5]/10 transition-colors duration-200">
                        Read Full Bio
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}








