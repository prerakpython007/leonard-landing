"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, X } from "lucide-react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] animate-pulse rounded-xl bg-gray-100" />
  ),
});

import "leaflet/dist/leaflet.css";

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
    if (typeof window !== "undefined") {
      const L = require("leaflet");
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    }
  }, []);

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
    <div className="font-montserrat relative min-h-screen rounded-b-[5%] bg-[#EEEEEE]">
      {/* Grid Pattern Overlay */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

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

      {/* Hero Section */}
      <motion.section
        className="relative flex h-[80vh] items-center justify-center overflow-hidden px-4 md:px-16 lg:px-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-8 left-8 hidden h-12 w-12 border-t-2 border-l-2 border-[#00ADB5] lg:block" />
        <div className="absolute top-8 right-8 hidden h-12 w-12 border-t-2 border-r-2 border-[#00ADB5] lg:block" />
        <div className="absolute bottom-8 left-8 hidden h-12 w-12 border-b-2 border-l-2 border-[#00ADB5] lg:block" />
        <div className="absolute right-8 bottom-8 hidden h-12 w-12 border-r-2 border-b-2 border-[#00ADB5] lg:block" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl text-center"
        >
          <h1 className="relative inline-block text-6xl font-extrabold tracking-tight text-[#222831] md:text-8xl">
            Contact Us
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 animate-pulse text-5xl text-[#00ADB5] opacity-50">
              ✦
            </span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 animate-pulse text-5xl text-[#00ADB5] opacity-50">
              ✦
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl font-light text-[#393E46]/80">
            Get in Touch with Our Expert Team
          </p>
        </motion.div>
      </motion.section>

      {/* Contact Information Section */}
      <section className="px-4 py-32 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-12 relative px-8 py-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#00ADB5]" />

            <h2 className="mb-6 text-3xl font-bold text-[#222831]">
              Contacting Us
            </h2>
            <p className="text-lg leading-relaxed text-[#393E46]">
              At Leonard Corporate Solutions, your privacy and data security
              matter most to us. If you’d like to access any personal
              information we have collected about you through our website, just
              reach out! If you notice any inaccuracies or want to update your
              details, please email us at{" "}
              <a
                href="mailto:info@leonardsolutions.in"
                className="text-[#00ADB5] hover:underline"
              >
                info@leonardsolutions.in
              </a>{" "}
              We’re here to answer your questions and ensure your information is
              accurate and up-to-date.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#393E46]">
              We take your privacy seriously and are committed to protecting
              your personal data in compliance with applicable laws. Please note
              that we reserve the right to update or modify our Privacy Policy
              at any time. Changes will be posted here to keep you informed.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#393E46]">
              For any queries related to your personal data, privacy concerns, or our legal policies, don’t hesitate to contact Leonard Corporate Solutions at{" "}
              <a
                href="mailto:info@leonardsolutions.in"
                className="text-[#00ADB5] hover:underline"
              >
                info@leonardsolutions.in
              </a>{" "}
            </p>
          </motion.div>

          <motion.div
            className="mb-12 rounded-2xl border border-white/20 bg-white/80 p-8 shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="relative mb-6 text-3xl font-bold text-[#222831]">
              <span className="relative z-10">Head Office (Mumbai)</span>
              <span className="absolute bottom-0 left-0 -z-10 h-3 w-20 bg-[#00ADB5]/20"></span>
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={detail.title}
                  className="group flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="transform rounded-lg bg-gradient-to-br from-[#00ADB5] to-[#00959c] p-3 text-white transition-transform duration-300 group-hover:scale-110">
                    <detail.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-[#222831]">
                      {detail.title}
                    </h3>
                    {detail.title === "Email Us" ? (
                      <a
                        href="mailto:info@leonardsolutions.in"
                        className="text-lg text-[#00ADB5] hover:underline"
                      >
                        info@leonardsolutions.in
                      </a>
                    ) : (
                      <p className="text-[#393E46]/80">{detail.text}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mb-12 relative px-8 py-12 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#00ADB5]/5 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#00ADB5]/5 blur-3xl" />
            
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#00ADB5]" />

            <div className="relative">
              <h2 className="mb-8 text-3xl font-bold text-[#222831] text-center">
                Get In Touch
              </h2>
              <p className="text-center text-[#393E46]/80 mb-12 max-w-2xl mx-auto">
                Have questions or need assistance? We're here to help! Fill out the form below and our team will get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                <div className="group">
                  <label htmlFor="firstName" className="mb-2 block font-medium text-[#222831] transition-colors group-focus-within:text-[#00ADB5]">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-[#393E46]/10 p-3 bg-white/50 backdrop-blur-sm transition-all duration-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none"
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="lastName" className="mb-2 block font-medium text-[#222831] transition-colors group-focus-within:text-[#00ADB5]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-[#393E46]/10 p-3 bg-white/50 backdrop-blur-sm transition-all duration-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none"
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="mb-2 block font-medium text-[#222831] transition-colors group-focus-within:text-[#00ADB5]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-[#393E46]/10 p-3 bg-white/50 backdrop-blur-sm transition-all duration-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none"
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="mobile" className="mb-2 block font-medium text-[#222831] transition-colors group-focus-within:text-[#00ADB5]">
                    Mobile No.
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-[#393E46]/10 p-3 bg-white/50 backdrop-blur-sm transition-all duration-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none"
                    required
                  />
                </div>
                <div className="md:col-span-2 group">
                  <label htmlFor="message" className="mb-2 block font-medium text-[#222831] transition-colors group-focus-within:text-[#00ADB5]">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px] w-full rounded-lg border-2 border-[#393E46]/10 p-3 bg-white/50 backdrop-blur-sm transition-all duration-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none"
                    required
                  ></textarea>
                </div>
                <div className="text-center md:col-span-2">
                  <motion.button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#00ADB5] to-[#00959c] px-8 py-4 font-medium text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:to-[#00ADB5]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="relative px-8 py-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#00ADB5]" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#00ADB5]" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#00ADB5]" />

            <h2 className="mb-8 text-3xl font-bold text-[#222831]">
              Our Global Locations
            </h2>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-sm">
              <MapComponent />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

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