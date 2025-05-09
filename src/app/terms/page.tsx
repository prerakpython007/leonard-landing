"use client"

import { motion } from "framer-motion"

export default function TermsPage() {
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
          Terms of Service
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
          <div className="space-y-8">
            {[
              {
                title: "1. Acceptance of Terms",
                content: "By accessing and using Leonard Corporate Solutions' services, you agree to be bound by these Terms of Service."
              },
              {
                title: "2. Services Description",
                content: "We provide intellectual property, taxation, and corporate law services as described on our website."
              },
              {
                title: "3. User Obligations",
                content: "Users must provide accurate information and maintain confidentiality of any account credentials."
              },
              {
                title: "4. Intellectual Property",
                content: "All content on this website is the property of Leonard Corporate Solutions and is protected by copyright laws."
              },
              {
                title: "5. Limitation of Liability",
                content: "Our liability is limited to the extent permitted by law. We are not responsible for indirect damages."
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:border-[#00ADB5]/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#00ADB5] text-2xl font-bold opacity-20">✦</span>
                  <div>
                    <h2 className="text-xl font-bold text-[#222831] mb-4">{section.title}</h2>
                    <p className="text-lg leading-relaxed text-[#393E46]/80">{section.content}</p>
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
