"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Share2, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "~/lib/blogData"
import { notFound } from "next/navigation"
import { use } from "react"

interface BlogPageProps {
  params: Promise<{
    id: string
  }>
}

export default function BlogTemplate({ params }: BlogPageProps) {
  // Use the `use` hook to unwrap the Promise
  const { id } = use(params)
  
  const blog = blogPosts.find((post) => post.id === id)

  if (!blog) {
    notFound()
  }

  // Function to add line breaks and images to content
  const formatContentWithBreaks = (content: string) => {
    return content
      .replace(/<p>/g, '<p class="mb-6">')
      .replace(/<h2>/g, '<h2 class="mt-10 mb-4">')
      .replace(/<h3>/g, '<h3 class="mt-8 mb-3">')
  }

  const formattedContent = formatContentWithBreaks(blog.content)

  return (
    <div className="min-h-screen bg-[#0f3460] font-montserrat">
      {/* Navigation */}

      {/* Blog Header with enhanced overlapping layout - RECTANGULAR DESIGN */}
      <section className="pt-24 pb-8 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Right Column - Blog Image (RECTANGULAR - NO ROUNDED CORNERS) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8 lg:col-start-5 relative z-10"
            >
              <div className="relative h-80 md:h-[500px] md:w-[1000px] overflow-hidden">
                <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

            {/* Left Column - Author Info (White Component) - RECTANGULAR with MORE OVERLAP */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 lg:col-start-1 lg:row-start-1 relative z-20"
            >
              <div className="bg-white p-8 shadow-2xl lg:absolute mt-20  w-[600px] border-[#00ADB5]">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00ADB5] to-[#00959c] flex items-center justify-center shadow-lg">
                    <User className="w-7 h-7 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 text-lg">{blog.author}</h3>
                    <p className="text-sm text-gray-600 font-medium">Legal Expert</p>
                  </div>
                </div>

                <div className="space-y-4 border-t pt-6">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-3 text-[#00ADB5]" />
                    <span className="text-sm font-medium">
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 mr-3 text-[#00ADB5]" />
                    <span className="text-sm font-medium">{blog.readTime} read</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <div className="w-5 h-5 mr-3 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#00ADB5]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{blog.topic}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <button className="w-full bg-gradient-to-r from-[#00ADB5] to-[#00959c] text-white py-3 px-6 hover:shadow-lg transition-all duration-300 flex items-center justify-center font-medium">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Title Section below image/component */}
      <section className="pb-16 px-4 md:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <span className="text-[#00ADB5] text-sm font-medium mb-2 inline-block">{blog.topic}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">{blog.title}</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto text-pretty">{blog.summary}</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content with enhanced formatting */}
      <section className="py-16 px-4 md:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="text-white content-container" dangerouslySetInnerHTML={{ __html: formattedContent }} />
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 md:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">
            Related <span className="text-[#00ADB5]">Articles</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => post.id !== id && post.topic === blog.topic)
              .slice(0, 3)
              .map((relatedBlog, index) => (
                <motion.div
                  key={relatedBlog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/blogs/${relatedBlog.id}`}>
                    <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={relatedBlog.image || "/placeholder.svg"}
                        alt={relatedBlog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-[#00ADB5] text-sm">{relatedBlog.topic}</span>
                    <h3 className="text-white text-xl font-semibold mt-2 group-hover:text-[#00ADB5] transition-colors">
                      {relatedBlog.title}
                    </h3>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Enhanced custom styles for the content */}
      <style jsx>{`
        .content-container h2 {
          color: #00ADB5;
          font-size: 1.875rem;
          font-weight: bold;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        .content-container h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #00ADB5, #00959c);
          border-radius: 2px;
        }
        .content-container h3 {
          color: #00ADB5;
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .content-container p {
          color: #D1D5DB;
          margin-bottom: 2rem;
          line-height: 1.8;
          font-size: 1.125rem;
        }
        .content-container .content-image {
          margin: 2.5rem 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
        }
        .content-container ul, .content-container ol {
          color: #D1D5DB;
          margin-bottom: 2rem;
          padding-left: 1.5rem;
          font-size: 1.125rem;
        }
        .content-container li {
          margin-bottom: 0.75rem;
          line-height: 1.8;
        }
        .content-container strong {
          color: #FFFFFF;
          font-weight: 600;
        }
        .content-container blockquote {
          border-left: 4px solid #00ADB5;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #E5E7EB;
          background: rgba(0, 173, 181, 0.1);
          padding: 1.5rem;
          border-radius: 8px;
        }
      `}</style>
    </div>
  )
}