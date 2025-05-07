"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

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
    <div className="min-h-screen bg-[#EEEEEE]">
      {/* Hero Section */}
      <motion.section
        className="bg-[#00ADB5] text-white py-8 px-4 md:px-16 lg:px-24 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative text-center mb-12 w-full">
          <span className="text-4xl font-bold text-[#222831] tracking-wider">
            <strong className="text-white mr-2">CONTACT</strong>
            US
          </span>
          <span className="absolute top-1/2 left-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
          <span className="absolute top-1/2 right-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
        </div>
      </motion.section>

      {/* Contact Information Section */}
      <section className="py-12 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Contacting Us */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-8 mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#222831] mb-4">Contacting Us</h2>
            <p className="text-[#393E46] text-lg leading-relaxed">
              Upon request, we shall provide you with access to any personal information that we have collected about you
              through our website. In the event that the personal information is not accurate, kindly contact us at{" "}
              <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                info@leonardsolutions.in
              </a>{" "}
              so that we may update this information and answer any questions that you may have.
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              We reserve the right to change this privacy policy at any time by posting a new or revised policy at this
              location.
            </p>
          </motion.div>

          {/* Head Office */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-8 mb-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#222831] mb-6">Head Office (Mumbai)</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Location */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <MapPin className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Location</h3>
                  <p className="text-[#393E46] text-lg">
                    Office No. 305, Creative Industrial Estate,
                    <br />
                    Sunder Nagar Road No. 02, Kalina,
                    <br />
                    Santacruz (East), Mumbai,
                    <br />
                    Maharashtra, 400 098.
                  </p>
                </div>
              </motion.div>
              {/* Phone & Fax Number */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Phone className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Phone & Fax Number</h3>
                  <p className="text-[#393E46] text-lg">
                    Landline: +91-22-26652048
                    <br />
                    +91-22-26651538
                    <br />
                    Fax No: +91-22-265619248
                    <br />
                    Mobile: +91 9930032215
                  </p>
                </div>
              </motion.div>
              {/* Email Us */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Mail className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Email Us</h3>
                  <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline text-lg">
                    info@leonardsolutions.in
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Our Branches In India */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#222831] mb-4">Our Branches In India</h2>
            <motion.img
              src="/contact-map-color.png"
              alt="Indian Branches"
              className="max-w-4xl w-full h-auto rounded-lg mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* International Associates */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#222831] mb-4">International Associates (Partners)</h2>
            <motion.img
              src="/word-map.png"
              alt="International Associates"
              className="max-w-4xl w-full h-auto rounded-lg mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Get In Touch Form */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#222831] mb-6">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-[#222831] font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#393E46]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-[#222831] font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#393E46]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#222831] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#393E46]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                  required
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-[#222831] font-medium mb-2">
                  Mobile No.
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#393E46]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                  required
                />
              </div>
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
        </div>
      </section>
    </div>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}