"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Share2, Twitter, Linkedin, Facebook } from "lucide-react";

const BLOGS = [
  {
    id: "protecting-trade-secrets",
    title: "Protecting Trade Secrets in the Digital Age",
    summary:
      "How companies can safeguard confidential processes, the role of NDAs, and best practices for remote teams.",
    img: "https://images.unsplash.com/photo-1526378721726-6d6f0d9b4b3f?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "patent-drafting-tips",
    title: "Patent Drafting: 7 Practical Tips",
    summary:
      "Clear drafting reduces prosecution time — concrete tips for inventors and in-house counsel.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy & Trademark Selection",
    summary:
      "Choosing strong marks, avoiding generic traps, and planning a global trademark rollout.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "litigation-prep",
    title: "Litigation Prep: From Documenting to Courtroom",
    summary:
      "A practical checklist for managing evidence, timelines, and client communication during litigation.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "cross-border-ip",
    title: "Cross-Border IP Enforcement",
    summary:
      "What to consider when enforcing IP overseas — jurisdiction, local counsel and enforcement strategies.",
    img: "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "compliance-modernization",
    title: "Modernizing Compliance Programs",
    summary:
      "How tech, data and a proactive policy approach reduce regulatory risk and audit headaches.",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "client-communication",
    title: "Client Communication for Law Firms",
    summary:
      "Best practices for status updates, billing transparency, and building long-term client trust.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "legal-tech",
    title: "Legal Tech Tools Worth Trying in 2025",
    summary:
      "Automation, case management, and AI-assisted research — a quick guide for small-to-mid firms.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1400",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#EEEEEE] font-roboto overflow-x-hidden">
      {/* =========================
          HERO SECTION
         ========================= */}
      <motion.section
        className="relative min-h-[70vh] flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full flex items-center">
          {/* Left Side */}
          <motion.div
            className="w-1/2 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-xl">
              <motion.h1
                className="text-[#000000] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-left relative z-10"
                style={{
                  letterSpacing: "0.3em",
                  textShadow:
                    "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                BLOGS
              </motion.h1>
              <div className="mt-8 space-y-4">
                <p className="text-lg sm:text-xl text-[#393E46] font-light leading-relaxed"></p>
                <div className="flex items-center space-x-2 text-[#00ADB5]">
                  <span className="text-sm font-medium tracking-wider uppercase">Since 2008</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="/careers.png"
                  alt="Leonard Corporate Solutions Office"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* =========================
          LATEST BLOGS
         ========================= */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-16 lg:px-24">
          <motion.h1
            className="text-[#000000] text-4xl sm:text-5xl md:text-6xl font-extrabold text-left mb-14 relative z-10"
            style={{
              letterSpacing: "0.3em",
              textShadow:
                "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Latest Blogs
          </motion.h1>

          {/* Bigger Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOGS.map((b) => (
              <article
                key={b.id}
                className="bg-white shadow-md  overflow-hidden transition-transform  w-full"
                style={{ height: "580px" }} // Increased card height
              >
                {/* Bigger Image */}
                <div className="relative h-[260px] w-full">
                  <Image
                    src={b.img}
                    alt={b.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Bigger Text Area */}
                <div className="p-6 flex flex-col justify-between h-[calc(100%-260px)]">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#222831] mb-3">{b.title}</h3>
                    <p className="text-base text-[#555] leading-relaxed mb-5">{b.summary}</p>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                    {/* Share Icons */}
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-[#333] hover:opacity-80">
                        <Twitter size={20} />
                      </a>
                      <a href="#" className="text-[#333] hover:opacity-80">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="text-[#333] hover:opacity-80">
                        <Facebook size={20} />
                      </a>
                      <a href="#" className="text-[#333] hover:opacity-80">
                        <Share2 size={20} />
                      </a>
                    </div>

                    {/* Read More */}
                    <a
                      href={`/blogs/${b.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2  text-black text-sm font-medium rounded"
                    >
                      Read more <ArrowRight />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-14 text-center">
            <button className="px-8 py-4 bg-[#00ADB5] text-white rounded-md font-medium text-lg">
              Load more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
