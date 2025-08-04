"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, X } from "lucide-react";
import Image from "next/image";
import { WorldMap } from "~/_components/ui/world-map";

const contactDetails = [
  {
    icon: MapPin,
    title: "Location",
    text: "Office No. 305, Creative Industrial Estate,\nSunder Nagar Road No. 02, Kalina,\nSantacruz (East), Mumbai,\nMaharashtra, 400 098.",
  },
  {
    icon: Phone,
    title: "Phone & Fax Number",
    text: "Landline: +91-22-26652048\n+91-22-26651538\nFax No: +91-22-265619248\nMobile: +91 9930032215",
  },
  {
    icon: Mail,
    title: "Email Us",
    text: "info@leonardsolutions.in",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      message: "",
    });
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative font-roboto overflow-x-hidden">
      {/* Large Gradient "L" Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className="text-[60rem] sm:text-[80rem] md:text-[100rem] lg:text-[120rem] font-extrabold opacity-[0.08] select-none"
          style={{
            background:
              "linear-gradient(135deg, #00ADB5 0%, #0099A8 50%, #007B8A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            transform: "translateX(-5%) translateY(-5%)",
          }}
        >
          L
        </div>
      </div>

      {/* Centered Popup Confirmation */}
      {showPopup && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative flex flex-col items-center gap-4 rounded-xl bg-white p-8 shadow-2xl max-w-lg w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-[#393E46] hover:text-[#00ADB5] transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <span className="text-4xl text-[#00ADB5]">✦</span>
            <p className="text-xl font-semibold text-[#222831] text-center">
              Your message was sent successfully!
            </p>
          </motion.div>
        </motion.div>
      )}

      <div className="relative z-10 space-y-12 sm:space-y-16 md:space-y-24">
        {/* Hero Section with Contact Us and Image */}
        <motion.section
          className="relative min-h-[70vh] flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full flex items-center">
            {/* Left Side - Contact Us Text (Centered Vertically) */}
            <motion.div
              className="w-1/2 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="max-w-xl">
                <motion.h1
                  className="text-[#000000] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-left relative z-10"
                  style={{
                    letterSpacing: "0.3em",
                    textShadow:
                      "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  CONTACT US
                </motion.h1>
              </div>
            </motion.div>

            {/* Right Side - Horizontal Rectangle Image */}
            <motion.div
              className="w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/WhatWeDo.jpg"
                    alt="Contact Leonard Corporate Solutions"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Head Office & Contact Form Section */}
        <section className="py-16 sm:py-32 px-4 md:px-16 lg:px-24 relative bg-[#EEEEEE]">
          <div className="max-w-7xl mx-auto space-y-16 sm:space-y-32">
            {/* Head Office Section */}
            <motion.div 
              className="grid md:grid-cols-2 gap-16 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="relative h-[500px] overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-[#00ADB5]/10 transform rotate-3"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                    alt="Our Office"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="relative">
                <h2 className="text-4xl font-bold text-[#222831] mb-6">Head Office (Mumbai)</h2>
                <div className="space-y-8">
                  {contactDetails.map((detail, index) => (
                    <motion.div
                      key={detail.title}
                      className="group flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-center w-16 h-16 text-[#00ADB5] transition-transform duration-300 group-hover:scale-110">
                        <detail.icon className="h-10 w-10" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-[#222831]">
                          {detail.title}
                        </h3>
                        {detail.title === "Email Us" ? (
                          <a
                            href="mailto:info@leonardsolutions.in"
                            className="text-lg text-[#00ADB5] hover:underline font-medium"
                          >
                            info@leonardsolutions.in
                          </a>
                        ) : (
                          <p className="text-[#393E46] whitespace-pre-line leading-relaxed">
                            {detail.text}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div 
              className="grid md:grid-cols-2 gap-20 items-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-[#222831] mb-6">Get In Touch</h2>
                <p className="text-lg text-[#393E46] leading-loose mb-8">
                  Have questions or need assistance? We're here to help! Fill out the form and our team will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="firstName"
                        className="mb-2 block font-semibold text-[#222831] transition-colors group-focus-within:text-[#00ADB5]"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border-2 border-[#393E46]/20 p-3 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none"
                        required
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="lastName"
                        className="mb-2 block font-semibold text-[#222831] transition-colors group-focus-within:text-[#00ADB5]"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border-2 border-[#393E46]/20 p-3 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="mb-2 block font-semibold text-[#222831] transition-colors group-focus-within:text-[#00ADB5]"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-2 border-[#393E46]/20 p-3 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none"
                        required
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="mobile"
                        className="mb-2 block font-semibold text-[#222831] transition-colors group-focus-within:text-[#00ADB5]"
                      >
                        Mobile No.
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full border-2 border-[#393E46]/20 p-3 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label
                      htmlFor="message"
                      className="mb-2 block font-semibold text-[#222831] transition-colors group-focus-within:text-[#00ADB5]"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[120px] w-full border-2 border-[#393E46]/20 p-3 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none"
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-[#00ADB5] to-[#00959c] px-8 py-3 font-bold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:to-[#00ADB5]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </form>
              </div>

              <div className="relative h-[700px] overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
                  alt="Contact Form"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* World Map Section - Full Width */}
        <section className="w-full bg-white">
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Our Offices Title */}
            <div className="text-center py-16">
              <motion.h2
                className="text-[#000000] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold relative z-10"
                style={{
                  letterSpacing: "0.2em",
                  textShadow:
                    "-1px 0px 0px rgba(100, 100, 100, 0.6), -3px 1px 0px rgba(80, 80, 80, 0.4), -5px 2px 0px rgba(60, 60, 60, 0.3)",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                OUR OFFICES
              </motion.h2>
            </div>

            <WorldMap
              dots={[
                {
                  start: { lat: 64.2008, lng: -149.4937 },
                  end: { lat: 34.0522, lng: -118.2437 },
                },
                {
                  start: { lat: 64.2008, lng: -149.4937 },
                  end: { lat: -15.7975, lng: -47.8919 },
                },
                {
                  start: { lat: -15.7975, lng: -47.8919 },
                  end: { lat: 38.7223, lng: -9.1393 },
                },
                {
                  start: { lat: 51.5074, lng: -0.1278 },
                  end: { lat: 28.6139, lng: 77.2090 },
                },
                {
                  start: { lat: 28.6139, lng: 77.2090 },
                  end: { lat: 43.1332, lng: 131.9113 },
                },
                {
                  start: { lat: 28.6139, lng: 77.2090 },
                  end: { lat: -1.2921, lng: 36.8219 },
                },
              ]}
            />
          </motion.div>
        </section>
      </div>
    </div>
  );
}