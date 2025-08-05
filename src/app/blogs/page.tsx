"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Twitter, Facebook, Linkedin, Share2 } from "lucide-react"

const blogs = [
  {
    id: 1,
    title: "Understanding Intellectual Property Rights in the Digital Age",
    excerpt:
      "A comprehensive guide to protecting your digital assets and innovations in today's fast-paced technological landscape...",
    image: "https://images.unsplash.com/photo-1581090464573-7585ffb45a6f?q=80&w=1600&auto=format&fit=crop",
    date: "2024-01-15",
    category: "IP Rights",
  },
  {
    id: 2,
    title: "Trademark Registration: A Step-by-Step Guide",
    excerpt:
      "Everything you need to know about the trademark registration process, from initial search to final registration...",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
    date: "2024-01-10",
    category: "Trademarks",
  },
  {
    id: 3,
    title: "Patent Filing Strategies for Startups",
    excerpt:
      "Essential strategies and best practices for startups looking to protect their innovations through patents...",
    image: "https://images.unsplash.com/photo-1505666287802-931dc83948e2?q=80&w=1600&auto=format&fit=crop",
    date: "2024-01-05",
    category: "Patents",
  },
  {
    id: 4,
    title: "Enforcement Strategies for Brand Protection",
    excerpt:
      "Practical approaches to takedowns, customs watchlisting and cross-border enforcement for brand owners...",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
    date: "2024-02-01",
    category: "Enforcement",
  },
  {
    id: 5,
    title: "GDPR & Cross-Border Data Compliance",
    excerpt:
      "Key steps businesses must take to comply with data protection regimes when operating internationally...",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop",
    date: "2024-02-12",
    category: "Compliance",
  },
  {
    id: 6,
    title: "Commercial Contracts: Avoiding Common Pitfalls",
    excerpt:
      "Drafting tips and negotiation strategies to reduce risk and improve commercial outcomes for clients...",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    date: "2024-02-28",
    category: "Contracts",
  },
  {
    id: 7,
    title: "How Startups Should Approach IP Strategy",
    excerpt:
      "A practical playbook for early-stage founders on building an IP-first approach that attracts investment...",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    date: "2024-03-05",
    category: "Startups",
  },
  {
    id: 8,
    title: "Alternatives to Litigation: Mediation & ADR",
    excerpt:
      "When to choose mediation or arbitration — and how it can save time and cost versus courtroom litigation...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    date: "2024-03-18",
    category: "Dispute Resolution",
  },
]

export default function BlogsPage() {
  return (
    <div className="bg-[#EEEEEE]">

      {/* Hero Section - text narrower, image pushed further right */}
      <motion.section
        className="relative min-h-[60vh] flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full flex items-center">
          {/* Left Side - make text slightly narrower (2/5) */}
          <motion.div
            className="w-2/5 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="max-w-lg">
              <motion.h1
                className="text-[#000000] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-left relative z-10"
                style={{
                  letterSpacing: "0.2em",
                  textShadow:
                    "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                BLOGS
              </motion.h1>

              <div className="mt-6 space-y-3">
                <p className="text-base sm:text-lg text-[#393E46] font-light leading-relaxed">
                  Insightful articles on Intellectual Property, corporate law, compliance and dispute resolution — written for founders, legal teams and business leaders.
                </p>
                <div className="flex items-center space-x-2 text-[#00ADB5]">
                  <span className="text-sm font-medium tracking-wider uppercase">Since 2008</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - make image wider (3/5) and push it to the right edge */}
          <motion.div
            className="w-3/5 flex justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <div className="relative h-[320px] sm:h-[380px] md:h-[460px] w-full">
              <Image
                src="/hero-image.png"
                alt="Legal team working"
                fill
                className="object-cover object-right"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#222831] mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-sm text-[#394046]/80 max-w-2xl mx-auto">
              Carefully curated insights from our lawyers and advisors. Read, share, and stay informed.
            </p>
          </motion.div>

          {/* Cards grid (3 columns on large screens) */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative bg-white shadow-lg overflow-hidden transition-all duration-300"
              >
                {/* Larger image area */}
                <div className="relative h-96 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4 text-sm text-[#393E46]/70">
                    <span>
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>{blog.category}</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-[#222831] mb-3">
                    {blog.title}
                  </h3>

                  <p className="text-[#393E46]/80 mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/blogs/${blog.id}`}
                      className="inline-flex items-center gap-2 text-[#00ADB5] font-medium"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <div className="text-sm text-[#777]">5 min read</div>
                  </div>

                  {/* small hr divider */}
                  <hr className="my-4 border-t border-gray-100" />

                  {/* share / social row */}
                  <div className="flex items-center justify-between text-[#394046]">
                    <div className="text-sm font-medium">Share</div>
                    <div className="flex items-center gap-3">
                      <a href="#" aria-label="Share" className="hover:text-[#00ADB5]">
                        <Share2 className="w-5 h-5" />
                      </a>
                      <a href="#" aria-label="Twitter" className="hover:text-[#00ADB5]">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="#" aria-label="Facebook" className="hover:text-[#00ADB5]">
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a href="#" aria-label="LinkedIn" className="hover:text-[#00ADB5]">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
