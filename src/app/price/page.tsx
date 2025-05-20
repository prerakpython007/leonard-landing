"use client"

import { motion } from "framer-motion"
import { ArrowRight, IndianRupee } from "lucide-react"
import Link from "next/link"

// Pricing data
const pricingData = {
  trademarks: [
    {
      sNo: 1,
      description: "Filing of Trade Mark (TM A): Preparing, filing of application form as per information provided and forwarding filing particulars.",
      govFee: "₹9000.00",
      ourFee: "₹3000.00",
      total: "₹12000.00",
    },
    {
      sNo: 2,
      description: "Amendment (TM-M): Amendment in trademark application, Extension of time / Inspection of document and forwarding filing particulars.",
      govFee: "₹900.00",
      ourFee: "₹500.00",
      total: "₹1400.00",
    },
    {
      sNo: 3,
      description: "Assignment (TM-P): Filing of Application for transfer and forwarding filing particulars.",
      govFee: "₹9000.00",
      ourFee: "₹15000.00",
      total: "₹24000.00",
    },
    {
      sNo: 4,
      description: "Renewal (TM-R): Renewing a registration and forwarding filing particulars.",
      govFee: "₹9000.00",
      ourFee: "₹3000.00",
      total: "₹12000.00",
    },
  ],
  copyright: [
    {
      sNo: 1,
      description: "Filing of Form (TM C): Application for Logo Copyright of Company, Organization or Incorporation.",
      govFee: "₹9000.00",
      ourFee: "₹15000.00",
      total: "₹24000.00",
    },
    {
      sNo: 2,
      description: "Filing of Form (Form XIV): Application for Registration of Literary, Dramatic, Musical, Sound Recording and Artistic work in relation to any goods.",
      govFee: "₹2000.00",
      ourFee: "₹5000.00",
      total: "₹7000.00",
    },
    {
      sNo: 3,
      description: "Filing of Form (Form XIV): For Copyright of a Cinematographic Film.",
      govFee: "₹5000.00",
      ourFee: "₹10000.00",
      total: "₹15000.00",
    },
    {
      sNo: 4,
      description: "Filing of Form (Amendment): Change of Particulars in the Register of Copyrights for Cinematographic Film.",
      govFee: "₹2000.00",
      ourFee: "₹500.00",
      total: "₹2500.00",
    },
  ],
  patents: [
    {
      sNo: 1,
      description: "Prior Art Global Search: Conducting Prior Art, accompanied by complete specification as per information provided.",
      govFee: "N/A",
      ourFee: "₹20000.00",
      total: "₹20000.00",
    },
    {
      sNo: 2,
      description: "Forms 1, 2, 3 & 5: Drafting an application for patent, accompanied by complete specification as per information provided.",
      govFee: "₹8000.00",
      ourFee: "₹70000.00",
      total: "₹78000.00",
    },
    {
      sNo: 3,
      description: "Form 9: Request for publication of patent application. Forwarding particulars of publication gadget.",
      govFee: "₹12500.00",
      ourFee: "₹2500.00",
      total: "₹15000.00",
    },
    {
      sNo: null,
      description: "",
      govFee: "N/A",
      ourFee: "₹15000.00",
      total: "₹15000.00",
    },
    {
      sNo: 4,
      description: "Form 18: Request for examination of patent application. Reply for request for examination of application.",
      govFee: "₹2000.00",
      ourFee: "₹2500.00",
      total: "₹22500.00",
    },
    {
      sNo: null,
      description: "",
      govFee: "N/A",
      ourFee: "₹40000.00",
      total: "₹40000.00",
    },
  ],
  industrialDesign: [
    {
      sNo: 1,
      description: "Form 1: Preparing, filing of application form as per information provided and forwarding filing particulars.",
      govFee: "₹1000.00",
      ourFee: "₹5000.00",
      total: "₹6000.00",
    },
    {
      sNo: 2,
      description: "Form 21: Form of authorization of agent.",
      govFee: "₹0.00",
      ourFee: "₹2500.00",
      total: "₹2500.00",
    },
    {
      sNo: 3,
      description: "Form 15: Certificate of registration and forwarding particulars.",
      govFee: "₹500.00",
      ourFee: "₹2000.00",
      total: "₹2500.00",
    },
  ],
}

const sections = [
  {
    id: "trademarks",
    title: "Trademarks",
    data: pricingData.trademarks
  },
  {
    id: "copyright",
    title: "Copyright",
    data: pricingData.copyright
  },
  {
    id: "patents",
    title: "Patents",
    data: pricingData.patents
  },
  {
    id: "industrialDesign",
    title: "Industrial Design",
    data: pricingData.industrialDesign
  }
] as const;

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[150px] font-montserrat">
      {/* Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          willChange: 'transform'
        }}
      />

      {/* Hero Section with Corner Angles */}
      <motion.section
        className="relative h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Corner Angles only for title section */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#00ADB5] hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#00ADB5] hidden lg:block" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Our Pricing
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Transparent Pricing for Intellectual Property Services
          </p>
        </motion.div>
      </motion.section>

      {/* Pricing Cards Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-24">
          {sections.map((section) => (
            <div key={section.id}>
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-[#222831] mb-4">{section.title}</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.data.map((item, itemIndex) => (
                  item.description && (
                    <motion.div
                      key={`${section.id}-${itemIndex}`}
                      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-white/95 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      {/* Decorative elements */}
                      <div className="absolute top-0 left-0 w-20 h-20 bg-[#00ADB5]/5 rounded-br-[100px]" />
                      <div className="absolute top-4 left-4 w-2 h-2 bg-[#00ADB5] rounded-full" />
                      
                      <div className="p-8 relative">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-xl bg-[#00ADB5]/10 flex items-center justify-center">
                            <span className="text-[#00ADB5] font-bold">#{item.sNo}</span>
                          </div>
                          <h3 className="text-lg font-medium text-[#222831] flex-1">
                            {section.title} Service
                          </h3>
                        </div>
                        
                        <p className="text-[#393E46]/80 mb-6 text-sm">{item.description}</p>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex justify-between items-center p-3 bg-[#F8F9FA] rounded-lg">
                            <span className="text-[#393E46]/70 text-sm">Gov't Fee</span>
                            <span className="text-[#222831] font-medium">{item.govFee}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-[#F8F9FA] rounded-lg">
                            <span className="text-[#393E46]/70 text-sm">Our Fee</span>
                            <span className="text-[#222831] font-medium">{item.ourFee}</span>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-[#00ADB5]/5 rounded-lg">
                            <span className="text-[#222831] font-bold">Total</span>
                            <span className="text-[#00ADB5] font-bold text-xl">{item.total}</span>
                          </div>
                        </div>
                        
                        <Link
                          href="/contact"
                          className="w-full bg-[#222831] text-white py-3.5 rounded-xl hover:bg-[#00ADB5] transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                        >
                          <span className="relative z-10">Get in Touch</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
                          <div className="absolute inset-0 bg-[#00ADB5] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </Link>
                      </div>
                    </motion.div>
                  )
                ))}
              </div>
            </div>
          ))}

          {/* Disclaimer section with corner angles */}
          <motion.div
            className="max-w-3xl mx-auto mt-24 p-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Corner Angles */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[#00ADB5]" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-[#00ADB5]" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-[#00ADB5]" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[#00ADB5]" />

            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#222831] mb-8 flex items-center justify-center gap-3">
                Disclaimer
                <span className="text-[#00ADB5] animate-pulse">✦</span>
              </h2>
              <div className="space-y-6">
                <p className="text-[#393E46] text-lg leading-relaxed">
                  <strong className="font-semibold text-[#222831] block mb-3">
                    Patent application charges for each sheet of specification (after 30 pages):
                  </strong>
                  Gov't Fees: <span className="font-semibold text-[#00ADB5]">₹800.00</span>
                  <br />
                  Our Fees: <span className="font-semibold text-[#00ADB5]">₹1500.00</span>
                </p>
                <p className="text-[#393E46] text-lg leading-relaxed">
                  <strong className="font-semibold text-[#222831] block mb-3">
                    Patent application charges for each claim (in addition to 10 claims):
                  </strong>
                  Gov't Fees: <span className="font-semibold text-[#00ADB5]">₹160.00</span>
                  <br />
                  Our Fees: <span className="font-semibold text-[#00ADB5]">₹300.00</span>
                </p>
                <p className="text-[#393E46]/80 text-lg leading-relaxed italic mt-8">
                  These fees are the minimum charges for the activity described. Subject to change without notice.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pricing Note */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-[#393E46]/70 text-sm italic">
              * All prices mentioned are subject to change. Please contact us for the most current pricing information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#393E46] hover:text-[#00ADB5] transition-colors"
        >
          <span className="mr-2">←</span> Back to Home
        </Link>
      </div>
    </div>
  )
}