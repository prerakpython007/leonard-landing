"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for form submission logic (e.g., API call)
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ firstName: "", lastName: "", email: "", mobile: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[5%] font-montserrat scroll-smooth">
      {/* Grid Pattern Overlay */}
      <motion.div 
        className="fixed inset-0 pointer-events-none" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Background Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-[#00ADB5] opacity-[0.07] text-7xl"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.07, 0.03, 0.07],
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            ✦
          </motion.span>
        ))}
      </div>

      {/* Hero Section */}
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
            Contact Us
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Get in Touch with Our Expert Team
          </p>
        </motion.div>
      </motion.section>

      <section className="py-20 px-4 md:px-16 lg:px-24 relative">
        <div className="max-w-7xl mx-auto">
          {/* Background Stars for Contact Section */}
          <span className="absolute left-0 top-1/4 text-[#00ADB5] text-8xl opacity-10">✦</span>
          <span className="absolute right-0 bottom-1/4 text-[#00ADB5] text-8xl opacity-10">✦</span>
          
          {/* Introduction Text */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#222831] mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg md:text-xl text-[#393E46]/80 max-w-3xl mx-auto leading-relaxed">
              Whether you're looking to protect your intellectual property, need legal consultation, 
              or want to discuss your business needs, we're here to help. Our team of experts is 
              ready to provide you with comprehensive solutions.
            </p>
          </motion.div>

          {/* Contact Grid with enhanced styling */}
          <div className="grid lg:grid-cols-2 gap-12 mb-32">
            {/* Contact Info Section with improved layout */}
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#222831]">
                  Get in Touch
                </h3>
                <p className="text-lg text-[#393E46]/80 leading-relaxed">
                  Our dedicated team is available to assist you with any inquiries. 
                  Reach out through your preferred channel:
                </p>
              </div>
              
              {/* Enhanced contact cards */}
              <div className="space-y-6">
                {[
                  { 
                    icon: Mail, 
                    text: "info@leonardsolutions.in", 
                    label: "Email us",
                    description: "24/7 response for your queries"
                  },
                  { 
                    icon: Phone, 
                    text: "+91 1234567890", 
                    label: "Call us",
                    description: "Mon-Fri from 9am to 6pm"
                  },
                  { 
                    icon: MapPin, 
                    text: "Mumbai, Maharashtra, India", 
                    label: "Visit us",
                    description: "Corporate headquarters"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white/90 transition-all duration-300 shadow-sm hover:shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-[#00ADB5]/10 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-[#00ADB5]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#00ADB5] font-medium mb-1">{item.label}</p>
                      <p className="text-[#222831] font-medium mb-1">{item.text}</p>
                      <p className="text-sm text-[#393E46]/70">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg border border-white/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: "firstName", label: "First Name", type: "text" },
                    { name: "lastName", label: "Last Name", type: "text" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="text-sm font-medium text-[#222831] mb-1 block">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        className="w-full p-3 bg-white/50 border border-[#393E46]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition-all"
                        required
                      />
                    </div>
                  ))}
                </div>

                {[
                  { name: "email", label: "Email", type: "email" },
                  { name: "mobile", label: "Mobile No.", type: "tel" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="text-sm font-medium text-[#222831] mb-1 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      className="w-full p-3 bg-white/50 border border-[#393E46]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition-all"
                      required
                    />
                  </div>
                ))}

                <div>
                  <label className="text-sm font-medium text-[#222831] mb-1 block">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full p-3 bg-white/50 border border-[#393E46]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5] transition-all"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-[#00ADB5] text-white py-4 rounded-lg font-medium hover:bg-[#222831] transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Maps Section with improved styling */}
          <div className="space-y-32 relative">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#00ADB5] text-[350px] opacity-[0.03] transform rotate-45">✦</span>
            
            {/* India Map */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#222831] mb-4">Our Presence in India</h2>
                <p className="text-lg text-[#393E46]/80 max-w-2xl mx-auto">
                  Strategically located offices across major cities to serve you better
                </p>
              </div>
              <div className="relative h-[600px] rounded-xl">
                <Image
                  src="/indian-map.png"
                  alt="Our Branches in India"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Global Map */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#222831] mb-4">Global Network</h2>
                <p className="text-lg text-[#393E46]/80 max-w-2xl mx-auto">
                  Connected worldwide to provide comprehensive international services
                </p>
              </div>
              <div className="relative h-[600px] rounded-xl">
                <Image
                  src="/world-map.png"
                  alt="Our International Associates"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}