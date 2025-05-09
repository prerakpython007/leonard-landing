"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const blogs = [
  {
    id: 1,
    title: "Building Your Dream Home",
    excerpt: "Discover the essential steps to creating your perfect living space...",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    date: "2024-01-15",
    author: "Sarah Johnson",
    category: "Real Estate Law"
  },
  {
    id: 2,
    title: "Modern Interior Design Trends",
    excerpt: "Explore the latest trends in contemporary home design...",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
    date: "2024-01-10",
    author: "Michael Chen",
    category: "Property Law"
  },
  {
    id: 3,
    title: "Understanding Property Rights",
    excerpt: "A comprehensive guide to property rights and regulations...",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    date: "2024-01-05",
    author: "David Leonard",
    category: "Legal Advice"
  }
]

export default function BlogsPage() {
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
            Our Blog
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Stay Updated with Insights on Intellectual Property Law
          </p>
        </motion.div>
      </motion.section>

      {/* Blog Posts Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
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
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <div className="relative h-56">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full text-[#00ADB5]">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-[#393E46]/70">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>5 min read</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#222831] mb-3 group-hover:text-[#00ADB5] transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-[#393E46]/80 mb-4 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-[#393E46]">{blog.author}</span>
                    <Link
                      href={`/blogs/${blog.id}`}
                      className="inline-flex items-center text-[#00ADB5] font-medium hover:text-[#222831] transition-colors duration-300"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}