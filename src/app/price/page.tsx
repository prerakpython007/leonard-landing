"use client"

import { motion } from "framer-motion"
import { ArrowRight, IndianRupee } from "lucide-react"
import Link from "next/link"

const pricingData: {
  trademarks: { sNo: number | null; description: string; govFee: string; ourFee: string; total: string }[];
  copyright: { sNo: number | null; description: string; govFee: string; ourFee: string; total: string }[];
  patents: { sNo: number | null; description: string; govFee: string; ourFee: string; total: string }[];
  industrialDesign: { sNo: number | null; description: string; govFee: string; ourFee: string; total: string }[];
} = {
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
                <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.data.map((item, itemIndex) => (
                  item.description && (
                    <motion.div
                      key={`${section.id}-${itemIndex}`}
                      className="group relative bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent bg-clip-border bg-gradient-to-r from-[#00ADB5]/30 to-[#00959c]/30 overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00ADB5]/10 to-[#00959c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="p-6 relative z-10 flex flex-col h-full">
                        <h3 className="text-2xl font-bold text-[#222831] mb-3 flex items-center">
                          <span className="mr-2 text-[#00ADB5] text-lg">#{item.sNo}</span> {section.title} Service
                        </h3>
                        <p className="text-[#393E46]/80 mb-4 leading-relaxed text-sm flex-grow">{item.description}</p>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-center text-[#393E46]">
                            <IndianRupee className="w-4 h-4 text-[#00ADB5] mr-2" />
                            <span className="font-medium">Gov’t Fee:</span> <span className="ml-2">{item.govFee}</span>
                          </li>
                          <li className="flex items-center text-[#393E46]">
                            <IndianRupee className="w-4 h-4 text-[#00ADB5] mr-2" />
                            <span className="font-medium">Our Fee:</span> <span className="ml-2">{item.ourFee}</span>
                          </li>
                          <li className="flex items-center">
                            <IndianRupee className="w-4 h-4 text-[#00ADB5] mr-2" />
                            <span className="font-medium">Total:</span>
                            <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-[#00ADB5] to-[#00959c] font-bold text-lg">{item.total}</span>
                          </li>
                        </ul>
                        <div className="mt-auto">
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center w-full bg-gradient-to-br from-[#00ADB5] to-[#00959c] hover:bg-gradient-to-br hover:from-[#00959c] hover:to-[#222831] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#00ADB5]/50"
                          >
                            Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </div>
            </div>
          ))}

          {/* Disclaimer section with updated styling */}
          <motion.div
            className="max-w-3xl mx-auto mt-24 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ADB5] to-[#00959c] mb-6 flex items-center justify-center">
                Disclaimer
                <span className="ml-3 text-[#00ADB5] animate-pulse">✦</span>
              </h2>
              <div className="space-y-6 text-center">
                <p className="text-[#393E46] text-lg leading-relaxed relative">
                  <span className="absolute inset-0 bg-[#00ADB5]/5 rounded-lg -z-10"></span>
                  <strong className="font-semibold text-[#222831]">Patent application charges for each sheet of specification (after 30 pages):</strong>
                </p>
                <p className="text-[#393E46] text-lg leading-relaxed relative">
                  <span className="absolute inset-0 bg-[#00ADB5]/5 rounded-lg -z-10"></span>
                  Gov’t Fees: <span className="font-semibold text-[#00ADB5]">₹800.00</span>
                  <br />
                  Our Fees: <span className="font-semibold text-[#00ADB5]">₹1500.00</span>
                </p>
                <p className="text-[#393E46] text-lg leading-relaxed relative">
                  <span className="absolute inset-0 bg-[#00ADB5]/5 rounded-lg -z-10"></span>
                  <strong className="font-semibold text-[#222831]">Patent application charges for each claim (in addition to 10 claims):</strong>
                </p>
                <p className="text-[#393E46] text-lg leading-relaxed relative">
                  <span className="absolute inset-0 bg-[#00ADB5]/5 rounded-lg -z-10"></span>
                  Gov’t Fees: <span className="font-semibold text-[#00ADB5]">₹160.00</span>
                  <br />
                  Our Fees: <span className="font-semibold text-[#00ADB5]">₹300.00</span>
                </p>
                <p className="text-[#393E46] text-lg leading-relaxed italic relative">
                  <span className="absolute inset-0 bg-[#00ADB5]/5 rounded-lg -z-10"></span>
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