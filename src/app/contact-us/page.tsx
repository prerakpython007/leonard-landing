"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import IndiaMap from "~/components/IndiaMap"

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

      <section className="py-32 px-4 md:px-16 lg:px-24 space-y-24">
        <div className="max-w-6xl mx-auto">
          {/* Privacy & Contact Information */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm mb-10 rounded-2xl shadow-lg p-8 md:p-12 border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-[#222831] mb-8 relative inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="relative z-10">Privacy & Contact Information</span>
              <span className="absolute bottom-0 left-0 h-3 w-full bg-[#00ADB5]/20 -z-10"></span>
            </motion.h2>
            <motion.div 
              className="space-y-6 text-lg text-[#393E46] leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>
                We value your privacy and are committed to protecting your personal information. Our team is here to assist you with any inquiries or concerns you may have regarding your data.
              </p>
              <div className="bg-[#F7F7F7] p-6 rounded-lg border-l-4 border-[#00ADB5]">
                <p className="font-medium text-[#222831]">
                  For any privacy-related questions or data access requests, please contact us at:{" "}
                  <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                    info@leonardsolutions.in
                  </a>
                </p>
              </div>
              <p>
                We maintain strict protocols to ensure the accuracy and security of your personal information. If you notice any inaccuracies in your data, our dedicated team will assist you in updating the information promptly.
              </p>
            </motion.div>
          </motion.div>

          {/* Get In Touch Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#222831] mb-8 relative inline-block">
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute bottom-0 left-0 h-3 w-full bg-[#00ADB5]/20 -z-10"></span>
            </h2>
            <p className="text-lg text-[#393E46] mb-8">
              We're here to help! Fill out the form below, and our team will get back to you promptly.
            </p>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              {[
                { name: "firstName", label: "First Name", type: "text" },
                { name: "lastName", label: "Last Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "mobile", label: "Mobile No.", type: "tel" },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor={field.name} className="block text-[#222831] font-medium mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#393E46]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                    required
                  />
                </motion.div>
              ))}
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-[#222831] font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#393E46]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5] min-h-[150px]"
                  required
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <motion.button
                  type="submit"
                  className="inline-flex items-center justify-center bg-[#00ADB5] hover:bg-[#222831] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* India Map */}
          <motion.div
            className="mb-16 pt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#222831] mb-8 relative inline-block">
              <span className="relative z-10">Our Presence Across India</span>
              <span className="absolute bottom-0 left-0 h-3 w-full bg-[#00ADB5]/20 -z-10"></span>
            </h2>
            <p className="text-lg text-[#393E46] mb-12">
              Explore our network of offices and partners across India
            </p>
            <IndiaMap />
          </motion.div>

          {/* Our Branches In India */}
         
        </div>
      </section>
    </div>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}