"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface PatentSearchInfo {
  id: number;
  title: string;
  description: string;
  category: string;
}

const patentSearchInfo: PatentSearchInfo[] = [
  {
    id: 1,
    title: "What is a Patent Search?",
    description: "A patent search involves reviewing existing patents and publications to determine if an invention is novel and non-obvious.",
    category: "Search Basics"
  },
  {
    id: 2,
    title: "Benefits of Patent Search",
    description: "Identifies prior art, reduces the risk of rejection, and helps strategize patent applications effectively.",
    category: "Advantages"
  },
  {
    id: 3,
    title: "Types of Searches",
    description: "Includes novelty searches, infringement searches, and validity searches to suit different needs.",
    category: "Search Types"
  },
  {
    id: 4,
    title: "Search Process",
    description: "Involves defining the invention, querying patent databases, and analyzing results with expert insights.",
    category: "Procedure"
  },
  {
    id: 5,
    title: "Importance of Search",
    description: "Ensures your invention is unique, saving time and costs by avoiding conflicts with existing patents.",
    category: "Significance"
  }
]

export default function PatentSearchPage() {
  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[5%] font-montserrat">
      <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
      <motion.section className="relative h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Patent Search
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">Ensure Your Invention’s Uniqueness with Comprehensive Searches</p>
        </motion.div>
      </motion.section>
      {/* Additional sections for introduction, info, criteria, benefits, and call-to-action follow the same structure as PatentRegistrationPage */}
    </div>
  )
}