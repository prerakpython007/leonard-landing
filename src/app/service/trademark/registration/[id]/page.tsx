"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { notFound } from "next/navigation"

// Define the interface for trademark info
interface TrademarkInfo {
  id: number;
  title: string;
  description: string;
  category: string;
}

// Sample trademark data (same as in your provided code)
const trademarkInfo: TrademarkInfo[] = [
  {
    id: 1,
    title: "Understanding Trademarks",
    description: "A trademark is a unique symbol, design, or expression that sets your products or services apart from competitors. It includes logos, brand names, slogans, and other identifiable features.",
    category: "Trademark Basics"
  },
  {
    id: 2,
    title: "Why Register a Trademark?",
    description: "Trademark registration secures your exclusive rights to use the mark, protects against unauthorized use, and allows legal action against infringements, ensuring brand protection.",
    category: "Legal Protection"
  },
  {
    id: 3,
    title: "Trademark Registration Process",
    description: "The process involves conducting a trademark search, filing an application, examination by the trademark office, publication in the journal, and final registration if unopposed.",
    category: "Process Guide"
  },
  {
    id: 4,
    title: "Trademark Maintenance",
    description: "Post-registration, trademarks need periodic renewals every ten years and active use to maintain validity. Monitoring for infringements is key to protecting your rights.",
    category: "Trademark Management"
  },
  {
    id: 5,
    title: "Global Trademark Protection",
    description: "Safeguarding your trademark internationally requires filing in each country or using systems like the Madrid Protocol for efficient multi-country registration.",
    category: "Global Trademarks"
  }
]

export default function TrademarkDetailPage({ params }: { params: { id: string } }) {
  // Convert id to number and find the trademark info
  const id = parseInt(params.id)
  const trademark = trademarkInfo.find((info) => info.id === id)

  // If trademark not found, trigger 404
  if (!trademark) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative font-montserrat">
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

      {/* Main Content Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full text-[#00ADB5]">
                {trademark.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-[#222831] mb-4">{trademark.title}</h1>
            <p className="text-[#393E46]/80 mb-6">{trademark.description}</p>
            <Link
              href="/service/trademark/registration"
              className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
            >
              Back to Trademark Registration
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}