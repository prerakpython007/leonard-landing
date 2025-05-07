"use client"

import { motion } from "framer-motion"
import { Briefcase, FileText, Gavel, Shield, FileCheck, Scale } from "lucide-react"
import Link from "next/link"

export default function CopyrightPage() {
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
            <strong className="text-white mr-2">COPYRIGHT</strong>
            SERVICES
          </span>
          <span className="absolute top-1/2 left-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
          <span className="absolute top-1/2 right-10 -translate-y-1/2 text-white text-5xl hidden md:block">✦</span>
        </div>
      </motion.section>

      {/* Copyright Information Section */}
      <section className="py-12 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Copyright Overview */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-8 mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#222831] mb-4">Copyright Overview</h2>
            <p className="text-[#393E46] text-lg leading-relaxed">
              We have significant expertise in all aspects of copyright law, from the clearance, acquisition and
              registration of copyright to sophisticated customs and anti-counterfeiting enforcement across India. We
              provide advice on a wide range of subject matters including software, literature, photography, toys,
              architectural works, video, film, product designs, television, telecommunications and the Internet. We also
              have considerable experience in due diligence, contractual and transactional issues concerning copyright.
            </p>
            <p className="text-[#393E46] text-lg leading-relaxed mt-4">
              Contact us at{" "}
              <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                info@leonardsolutions.in
              </a>{" "}
              for personalized assistance with your copyright needs.
            </p>
          </motion.div>

          {/* Our Services */}
          <motion.div
            className="bg-white rounded-xl shadow-sm p-8 mb-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#222831] mb-6">Our Copyright Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Copyright Registration */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <FileCheck className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Copyright Registration</h3>
                  <p className="text-[#393E46] text-lg">
                    Secure copyright protection for works like software, literature, and designs through expert registration.
                  </p>
                </div>
              </motion.div>
              {/* Copyright Clearance */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Shield className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Copyright Clearance</h3>
                  <p className="text-[#393E46] text-lg">
                    Assess works to ensure they are free from infringement risks before use or publication.
                  </p>
                </div>
              </motion.div>
              {/* Anti-Counterfeiting Enforcement */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Scale className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Anti-Counterfeiting Enforcement</h3>
                  <p className="text-[#393E46] text-lg">
                    Protect copyrights through customs measures and enforcement actions across India.
                  </p>
                </div>
              </motion.div>
              {/* Due Diligence for Transactions */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <FileText className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Due Diligence</h3>
                  <p className="text-[#393E46] text-lg">
                    Evaluate copyright assets in contractual and transactional matters for secure deals.
                  </p>
                </div>
              </motion.div>
              {/* Copyright Licensing */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Briefcase className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Copyright Licensing</h3>
                  <p className="text-[#393E46] text-lg">
                    Negotiate and draft licensing agreements to maximize the value of your copyrighted works.
                  </p>
                </div>
              </motion.div>
              {/* Copyright Litigation */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Gavel className="h-6 w-6 text-[#00ADB5] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#222831]">Copyright Litigation</h3>
                  <p className="text-[#393E46] text-lg">
                    Represent clients in copyright disputes to enforce rights and defend against infringement.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}