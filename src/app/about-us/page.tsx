"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, BookOpen, Building, Globe, MapPin, Shield, Users } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"about" | "overview">("about")
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <main className="min-h-screen bg-[#EEEEEE]">
      {/* Hero Section */}
      <motion.section
        ref={sectionRef}
        className="bg-[#00ADB5] text-white py-8 px-4 md:px-16 lg:px-24 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative text-center mb-12 w-full">
          <span className="text-4xl font-bold text-[#222831] tracking-wider">
            <strong className="text-white mr-2">ABOUT</strong>
            US
          </span>
          <span className="absolute top-1/2 left-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
          <span className="absolute top-1/2 right-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
        </div>
      </motion.section>

      {/* Tabs Section */}
      <section className="py-12 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("about")}
              className={cn(
                "flex-1 py-4 px-6 text-center font-medium text-lg transition-colors",
                activeTab === "about" ? "text-[#00ADB5] border-b-2 border-[#00ADB5]" : "text-[#393E46] hover:text-[#00ADB5]",
              )}
            >
              ABOUT US
            </button>
            <button
              onClick={() => setActiveTab("overview")}
              className={cn(
                "flex-1 py-4 px-6 text-center font-medium text-lg transition-colors",
                activeTab === "overview" ? "text-[#00ADB5] border-b-2 border-[#00ADB5]" : "text-[#393E46] hover:text-[#00ADB5]",
              )}
            >
              FIRM OVERVIEW
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            {activeTab === "about" && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="bg-[#00ADB5]/10 p-3 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Building className="h-6 w-6 text-[#00ADB5]" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-[#222831]">LEONARD CORPORATE SOLUTIONS PVT. LTD.</h2>
                    <p className="text-[#393E46] text-lg leading-relaxed">
                      We have professionals who are expert in handling all the legal issues and provide appropriate
                      solutions to domestic & international customers, which include multinational, public & private limited
                      companies & other corporate entities including individuals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <motion.div
                    className="bg-[#00ADB5]/10 p-3 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  >
                    <Users className="h-6 w-6 text-[#00ADB5]" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#222831]">Our Team</h3>
                    <p className="text-[#393E46] text-lg leading-relaxed">
                      We have a dedicated team of lawyers, intellectual property experts, technical teams & company law
                      experts, who are highly proficient and are committed to meet the requirements as early as possible.
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <motion.button
                    onClick={() => setActiveTab("overview")}
                    className="inline-flex items-center justify-center bg-[#00ADB5] hover:bg-[#222831] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn more about our firm <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {activeTab === "overview" && (
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="bg-[#00ADB5]/10 p-3 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <BookOpen className="h-6 w-6 text-[#00ADB5]" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-[#222831]">Our Story</h2>
                    <p className="text-[#393E46] text-lg leading-relaxed mb-4">
                      Leonard Corporate Solutions Pvt. Ltd. is India's premier firm practicing exclusively in intellectual
                      property laws, taxation and company laws with head office in Mumbai, India.
                    </p>
                    <p className="text-[#393E46] text-lg leading-relaxed">
                      Our branch offices are located in multiple states and countries; LCS-India's ultimate IP & Corporate
                      Solutions firm - through common partners and associates, offices and people, we have been leaders in
                      intellectual property law for over a decade.
                    </p>
                  </div>
                </div>

                <motion.div
                  className="grid md:grid-cols-2 gap-6 mt-8"
                  style={{ y }}
                >
                  {[
                    { icon: Shield, title: "Technical Strength", text: "Virtually every member of the firm has a legal or scientific educational background and graduate degrees in diverse areas, offering a powerful benefit to our clients." },
                    { icon: MapPin, title: "National Coverage", text: "With offices in 7 of India's major technological and commercial centers, we readily satisfy all of our clients' domestic and global needs." },
                    { icon: Globe, title: "International Reach", text: "Our practice covers the globe with capabilities in 26 foreign languages including Mandarin Chinese, offering strategic counsel and an efficient gateway to the world." },
                    { icon: Users, title: "Trusted Resource", text: "We offer patent, copyright and trademark agency services to firms and in-house counsel seeking to protect intellectual property rights in India." },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-[#222831] p-6 rounded-lg text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.2 } }}
                    >
                      <div className="flex items-center justify-center mb-4">
                        <item.icon className="text-[#00ADB5] mr-3 h-5 w-5" />
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      </div>
                      <p className="text-white text-sm">{item.text}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#00ADB5] hover:bg-[#222831] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Contact our experts <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}