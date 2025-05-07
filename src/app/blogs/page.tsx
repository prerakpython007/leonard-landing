"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const blogs = [
  {
    id: 1,
    title: "Building Your Dream Home",
    excerpt: "Discover the essential steps to creating your perfect living space...",
    image: "/blog1.jpg",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Modern Interior Design Trends",
    excerpt: "Explore the latest trends in contemporary home design...",
    image: "/blog2.jpg",
    date: "2024-01-10",
  },
  // Add more blog posts as needed
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EEEEEE] via-white to-[#EEEEEE]">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-[#00ADB5] to-[#00959c] text-white py-16 px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.1]" />
        <div className="relative text-center mb-12 w-full">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <span className="text-5xl md:text-6xl font-bold tracking-wider">
              <strong className="text-white mr-2 relative">
                OUR
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/20 rounded-full"></span>
              </strong>
              <span className="text-black">BLOG</span>
            </span>
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-white text-5xl hidden md:block animate-pulse">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-white text-5xl hidden md:block animate-pulse">✦</span>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl mt-6 text-white/90 max-w-2xl mx-auto"
          >
            Stay Updated with Insights on Intellectual Property Law
          </motion.p>
        </div>
      </motion.section>

      {/* Blog Posts Section */}
      <section className="py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#222831] mb-4">Latest Blog Posts</h2>
            <div className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/20 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-[#00ADB5] to-[#00959c] p-2 rounded-lg text-white">
                      <span className="text-sm">{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <span className="mx-2 text-[#393E46]/80">•</span>
                    <span className="text-[#393E46]/80 text-sm">5 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#222831] mb-3">{blog.title}</h3>
                  <p className="text-[#393E46]/80 mb-4">{blog.excerpt}</p>
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="inline-flex items-center text-[#00ADB5] hover:text-[#222831] transition-colors duration-300"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}