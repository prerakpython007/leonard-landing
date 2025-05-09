"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, UserCheck, Bell } from "lucide-react"

export default function PrivacyPolicyPage() {
  const policies = [
    {
      icon: Shield,
      title: "Information Collection",
      content: "We collect information that you provide directly to us, including personal and contact information."
    },
    {
      icon: Lock,
      title: "Data Protection",
      content: "We implement appropriate security measures to protect your personal information."
    },
    {
      icon: Eye,
      title: "Information Usage",
      content: "Your information is used to provide our services, communicate with you, and improve our offerings."
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information."
    },
    {
      icon: Bell,
      title: "Updates to Policy",
      content: "We may update this privacy policy from time to time. We will notify you of any changes."
    }
  ]

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[5%] font-montserrat">
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

      {/* Hero Section */}
      <motion.section
        className="relative h-[40vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-[#222831] relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Privacy Policy
          <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-4xl animate-pulse opacity-50">✦</span>
          <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-4xl animate-pulse opacity-50">✦</span>
        </motion.h1>
      </motion.section>

      <motion.section
        className="relative py-24 px-4 md:px-16 lg:px-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:border-[#00ADB5]/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="flex gap-6">
                  <div className="bg-[#00ADB5]/10 p-3 rounded-xl group-hover:bg-[#00ADB5]/20 transition-colors duration-300">
                    <policy.icon className="w-6 h-6 text-[#00ADB5]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#222831] mb-3">{policy.title}</h2>
                    <p className="text-lg leading-relaxed text-[#393E46]/80">{policy.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
