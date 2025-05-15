"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { notFound } from "next/navigation"

// Define the interface for renewal info
interface RenewalInfo {
  id: number;
  title: string;
  description: string;
  category: string;
}

// Sample renewal data (same as in TrademarkRenewalPage)
const renewalInfo: RenewalInfo[] = [
  {
    id: 1,
    title: "What is Trademark Renewal?",
    description: "Trademark renewal extends the legal protection of your brand for another ten years, ensuring continued exclusivity of your logo, name, or slogan in the market.",
    category: "Renewal Basics"
  },
  {
    id: 2,
    title: "Benefits of Renewal",
    description: "Renewing your trademark maintains brand protection, prevents loss of rights, enables legal action against infringements, and supports licensing opportunities.",
    category: "Brand Protection"
  },
  {
    id: 3,
    title: "Renewal Process",
    description: "The process involves filing Form TM-R, scrutiny by the Trademark Registry, journal publication, and issuance of a renewal certificate if unopposed.",
    category: "Process Guide"
  },
  {
    id: 4,
    title: "Trademark Restoration",
    description: "If a trademark expires, it can be restored within one year from the expiry date by filing an application with the required fees and documentation.",
    category: "Restoration"
  },
  {
    id: 5,
    title: "Timelines and Forms",
    description: "Renewal can be filed up to one year before expiry, with specific forms like TM-R and TM-18, along with applicable fees for physical or e-filing.",
    category: "Filing Requirements"
  }
]

export default function RenewalDetailPage({ params }: { params: { id: string } }) {
  // Convert id to number and find the renewal info
  const id = parseInt(params.id)
  const renewal = renewalInfo.find((info) => info.id === id)

  // If renewal not found, trigger 404
  if (!renewal) {
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
                {renewal.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-[#222831] mb-4">{renewal.title}</h1>
            <p className="text-[#393E46]/80 mb-6">{renewal.description}</p>
            <Link
              href="/service/trademark/renewal"
              className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
            >
              Back to Trademark Renewal
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