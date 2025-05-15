"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { notFound } from "next/navigation"

// Define the interface for assignment info
interface AssignmentInfo {
  id: number;
  title: string;
  description: string;
  category: string;
}

// Sample assignment data (same as in TrademarkAssignmentPage)
const assignmentInfo: AssignmentInfo[] = [
  {
    id: 1,
    title: "What is Trademark Assignment?",
    description: "Trademark assignment involves transferring ownership rights, title, and interest in a trademark from the assignor to the assignee, similar to selling or licensing property.",
    category: "Assignment Basics"
  },
  {
    id: 2,
    title: "Benefits of Assignment",
    description: "It allows the assignor to monetize their brand, while the assignee gains rights to an established mark, supporting business growth for both parties.",
    category: "Advantages"
  },
  {
    id: 3,
    title: "Types of Assignment",
    description: "Assignments can be partial, complete, with goodwill, or without goodwill, each defining the scope of rights transferred between parties.",
    category: "Assignment Types"
  },
  {
    id: 4,
    title: "Assignment Process",
    description: "The process includes drafting a written agreement, filing forms with the Trademark Registry, and advertising the assignment as per the Registrar’s instructions.",
    category: "Procedure"
  },
  {
    id: 5,
    title: "Legal Requirements",
    description: "A valid assignment requires a written agreement, consent from the assignor, adequate consideration, and submission of necessary documents within six months.",
    category: "Compliance"
  }
]

export default function AssignmentDetailPage({ params }: { params: { id: string } }) {
  // Convert id to number and find the assignment info
  const id = parseInt(params.id)
  const assignment = assignmentInfo.find((info) => info.id === id)

  // If assignment not found, trigger 404
  if (!assignment) {
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
                {assignment.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-[#222831] mb-4">{assignment.title}</h1>
            <p className="text-[#393E46]/80 mb-6">{assignment.description}</p>
            <Link
              href="/service/trademark/assignment"
              className="inline-flex items-center px-6 py-3 bg-[#00ADB5] text-white font-medium rounded-full hover:bg-[#222831] transition-colors duration-300"
            >
              Back to Trademark Assignment
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