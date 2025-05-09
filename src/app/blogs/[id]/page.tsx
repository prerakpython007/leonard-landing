"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const blogs = [
  {
    id: 1,
    title: "Building Your Dream Home",
    content: {
      introduction: `Understanding property law is crucial when embarking on the journey of building your dream home. This comprehensive guide will walk you through the essential legal considerations and steps.`,
      sections: [
        {
          title: "1. Legal Fundamentals",
          content: `Before breaking ground on your new home, it's essential to understand the legal framework that governs property development. This includes:`,
          bulletPoints: [
            "Zoning regulations and building codes",
            "Property boundary restrictions",
            "Environmental compliance requirements",
            "Permit acquisition processes"
          ]
        },
        {
          title: "2. Expert Insights",
          quote: {
            text: "The most successful home construction projects begin with a solid legal foundation, ensuring every aspect complies with local regulations.",
            author: "John Smith",
            title: "Senior Property Lawyer"
          }
        },
        {
          title: "3. Key Considerations",
          content: `When planning your dream home, consider these critical factors:`,
          keyPoints: [
            {
              title: "Location Analysis",
              description: "Thoroughly research zoning laws and future development plans in your chosen area."
            },
            {
              title: "Contract Review",
              description: "Have all construction contracts reviewed by a qualified legal professional."
            }
          ]
        }
      ],
      conclusion: `Building your dream home is an exciting journey that requires careful legal consideration. By following these guidelines and working with qualified professionals, you can ensure a smooth and compliant construction process.`
    },
    image: "/blog-1.png",
    date: "2024-01-15",
    author: "Sarah Johnson",
    category: "Real Estate Law"
  },
  {
    id: 2,
    title: "Modern Interior Design Trends",
    content: {
      introduction: `Stay ahead of the curve with the latest interior design trends that are reshaping modern homes. From sustainable materials to smart technology integration, discover how contemporary design is evolving.`,
      sections: [
        {
          title: "1. Sustainable Design",
          content: `The shift towards eco-friendly interiors continues to gain momentum. Here's what's trending:`,
          bulletPoints: [
            "Recycled and upcycled materials",
            "Energy-efficient lighting solutions",
            "Natural and organic textures",
            "Biophilic design elements"
          ]
        },
        {
          title: "2. Designer's Perspective",
          quote: {
            text: "Modern interior design is no longer just about aesthetics. It's about creating sustainable, functional spaces that enhance wellbeing and productivity.",
            author: "Emma Rodriguez",
            title: "Lead Interior Designer"
          }
        },
        {
          title: "3. Technology Integration",
          content: `Smart home features are becoming standard in modern interiors:`,
          keyPoints: [
            {
              title: "Smart Lighting",
              description: "Automated systems that adjust to natural light patterns and daily routines."
            },
            {
              title: "Connected Living",
              description: "Seamless integration of smart devices for enhanced comfort and convenience."
            }
          ]
        }
      ],
      conclusion: `As we embrace these modern design trends, remember that the key is to balance aesthetics with functionality while maintaining a sustainable approach to interior design.`
    },
    image: "/blog-2.png",
    date: "2024-01-10",
    author: "Michael Chen",
    category: "Property Law"
  },
  {
    id: 3,
    title: "Understanding Property Rights",
    content: {
      introduction: `Property rights form the foundation of real estate law. This comprehensive guide explores the essential aspects of property rights and their implications for property owners.`,
      sections: [
        {
          title: "1. Types of Property Rights",
          content: `Understanding different property rights is crucial for any property owner:`,
          bulletPoints: [
            "Ownership rights and title deeds",
            "Easements and right of way",
            "Mineral and water rights",
            "Air rights and development potential"
          ]
        },
        {
          title: "2. Legal Expert's View",
          quote: {
            text: "Property rights are not absolute; they exist within a framework of laws and regulations designed to balance individual ownership with community interests.",
            author: "David Leonard",
            title: "Property Rights Attorney"
          }
        },
        {
          title: "3. Common Challenges",
          content: `Property owners often face these key challenges:`,
          keyPoints: [
            {
              title: "Boundary Disputes",
              description: "Understanding and resolving property line conflicts through legal channels."
            },
            {
              title: "Zoning Restrictions",
              description: "Navigating local regulations that affect property use and development."
            }
          ]
        }
      ],
      conclusion: `A thorough understanding of property rights is essential for protecting your interests and making informed decisions about real estate investments.`
    },
    image: "/blog-3.webp",
    date: "2024-01-05",
    author: "David Leonard",
    category: "Legal Advice"
  }
]

export default function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params)
  const blog = blogs.find(b => b.id === parseInt(resolvedParams.id))
  const relatedBlogs = blogs.filter(b => b.id !== parseInt(resolvedParams.id)).slice(0, 2)

  if (!blog) return <div>Blog not found</div>

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

      <div className="max-w-4xl mx-auto px-4 py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blogs"
            className="inline-flex items-center text-[#00ADB5] hover:text-[#222831] transition-colors duration-300 mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Go Back
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="relative h-[400px] rounded-xl overflow-hidden mb-8"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image src={blog.image} alt={blog.title} fill className="object-cover" />
          </motion.div>
          
          <motion.div 
            className="mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-[#00ADB5] text-sm">{blog.category}</span>
            <h1 className="text-4xl font-bold text-[#222831] mt-2">{blog.title}</h1>
            <div className="flex items-center mt-4 space-x-4">
              <span className="text-[#393E46]">{blog.author}</span>
              <span className="text-[#393E46]">•</span>
              <span className="text-[#393E46]">{new Date(blog.date).toLocaleDateString()}</span>
            </div>
          </motion.div>

          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Introduction */}
            <p className="text-xl text-[#393E46] mb-8 leading-relaxed">
              {blog.content.introduction}
            </p>

            {/* Sections */}
            {blog.content.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold text-[#222831] mb-4">{section.title}</h2>
                
                {section.content && (
                  <p className="text-[#393E46] mb-4">{section.content}</p>
                )}

                {section.bulletPoints && (
                  <ul className="list-disc list-inside space-y-2 text-[#393E46] mb-6">
                    {section.bulletPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}

                {section.quote && (
                  <blockquote className="border-l-4 border-[#00ADB5] pl-6 my-8 italic">
                    <p className="text-xl text-[#393E46] mb-2">{section.quote.text}</p>
                    <footer className="text-sm">
                      <span className="font-semibold">{section.quote.author}</span>
                      <span className="text-[#393E46]"> • {section.quote.title}</span>
                    </footer>
                  </blockquote>
                )}

                {section.keyPoints && (
                  <div className="grid gap-6 md:grid-cols-2 my-8">
                    {section.keyPoints.map((point, i) => (
                      <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-[#222831] mb-2">{point.title}</h3>
                        <p className="text-[#393E46]">{point.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Conclusion */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-[#393E46]">{blog.content.conclusion}</p>
            </div>
          </motion.div>
        </motion.article>

        <motion.section 
          className="mt-16"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#222831] mb-8">Similar Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedBlogs.map(relatedBlog => (
              <Link key={relatedBlog.id} href={`/blogs/${relatedBlog.id}`}>
                <motion.div
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48">
                    <Image src={relatedBlog.image} alt={relatedBlog.title} fill className="object-cover rounded-t-xl" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#222831] mb-2">{relatedBlog.title}</h3>
                    <p className="text-[#393E46] text-sm">{relatedBlog.author}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
