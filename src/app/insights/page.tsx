"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * INSIGHTS page — updated visuals and extra sections for legal editorial content.
 * Title/hero kept unchanged per request.
 */

/* Featured horizontal items */
const INSIGHTS = [
  {
    id: "ip-market-trends-2024",
    title: "IP Market Trends — 2024 Outlook",
    category: "IP Market Trends",
    summary:
      "Patent filing growth, emerging geographies and sectoral hotspots shaping IP investment.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "legal-updates-gdpr",
    title: "Legal Update: Data Protection & Cross-border Compliance",
    category: "Legal Updates",
 
    summary:
      "Regulatory changes affecting cross-border data flows, privacy compliance and IP consequences.",
    img: "https://images.unsplash.com/photo-1567969950290-0b1b19f9b3d3?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "case-study-brand-defence",
    title: "Case Study: Brand Defence in E-Commerce",
    category: "Case Studies",
    summary:
      "A coordinated enforcement strategy that stopped counterfeiting and recovered client revenue.",
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "industry-report-ai-ip",
    title: "Industry Report: AI & IP — Licensing Models",
    category: "Industry Reports",
    summary:
      "Emerging licensing frameworks for AI-generated inventions and data-driven products.",
    img: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1400&auto=format&fit=crop",
  },
];

/* Extra content: Deep dives, briefs, reports */
const DEEP_DIVES = [
  {
    id: "dd1",
    title: "How Patent Portfolios Drive Startup Valuation",
    excerpt:
      "Practical methods to convert patent strategy into investor-facing valuation narratives.",
    img: "https://images.unsplash.com/photo-1542751371-29b0f74f9713?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "dd2",
    title: "Cross-Border Enforcement: Practical Playbook",
    excerpt:
      "Step-by-step enforcement strategies when infringers operate across jurisdictions.",
    img: "https://images.unsplash.com/photo-1555375771-51f8a2cfb8f8?q=80&w=1400&auto=format&fit=crop",
  },
];

const LEGAL_BRIEFS = [
  {
    id: "lb1",
    title: "SC issues guidance on trademark confusion test",
    date: "2025-04-22",
  },
  {
    id: "lb2",
    title: "New data localization rule — quick take",
    date: "2025-04-10",
  },
  {
    id: "lb3",
    title: "IPO trends: IP-backed M&A increase Q1",
    date: "2025-03-30",
  },
];

const REPORTS = [
  {
    id: "r1",
    title: "AI & IP: Market Sizing (2025)",
    short: "40-page report with licensing models and valuation implications.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "r2",
    title: "Trademark Filings by Sector",
    short: "Data-led maps and heatmaps for the last 5 years.",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#EEEEEE] font-roboto overflow-x-hidden">
      {/* =========================
          HERO / TITLE SECTION (unchanged structure)
         ========================= */}
      <motion.section
        className="relative min-h-[60vh] flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full flex items-center">
          {/* Left Side - Title */}
          <motion.div
            className="w-1/2 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-xl">
              <motion.h1
                className="text-[#000000] text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-left relative z-10 leading-tight"
                style={{
                  letterSpacing: "0.18em",
                  textShadow:
                    "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6)",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                INSIGHTS
              </motion.h1>

              <div className="mt-6 space-y-4">
                <p className="text-lg sm:text-xl text-[#393E46] font-light leading-relaxed">
                  Expert analysis, timely legal updates and in-depth reports to keep you ahead in IP,
                  corporate law and related industries.
                </p>
                <div className="flex items-center space-x-2 text-[#00ADB5]">
                  <span className="text-sm font-medium tracking-wider uppercase">
                    Curated by Leonard Corporate Solutions
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image pushed more to the right */}
          <motion.div
            className="w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-[260px] sm:h-[300px] md:h-[360px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop"
                alt="Insights hero"
                fill
                className="object-cover object-right"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* =========================
          INTRO / BIG PARAGRAPH
         ========================= */}
      <section className="py-12 md:py-20 px-4 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#222831] mb-4">
              Thought leadership & practical insights for legal teams
            </h2>
            <p className="text-lg text-[#393E46] leading-relaxed mb-6">
              Our insights combine market analysis, regulatory commentary, case studies and practical reports.
              We aim to deliver concise takeaways and deeper research for counsel, executives and innovators.
            </p>

            <p className="text-base text-[#394046] leading-relaxed">
              Use the sections below to browse featured content, deep dives, short briefs and reports.
            </p>
          </div>

          <div className="relative h-72 md:h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1508385082359-da2b51169166?q=80&w=1400&auto=format&fit=crop"
              alt="Editorial team"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* =========================
          FEATURED INSIGHTS (horizontal expandable strip)
         ========================= */}
      <section className="relative">
        <div className="w-full">
          <div className="max-w-7xl mx-auto">
            <div className="px-4 md:px-0 py-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#222831] mb-4">
                Featured Insights
              </h3>
              <p className="text-sm text-[#5a6066] mb-6">
                Hand-picked long reads and actionable briefs across IP Market Trends, Legal Updates, Case Studies and Reports.
              </p>
            </div>

            <div className="flex w-full h-56 md:h-72 lg:h-80 transition-all duration-300 overflow-hidden">
              {INSIGHTS.map((it, idx) => (
                <article
                  key={it.id}
                  className="relative flex-1 group hover:flex-[3] transition-[flex] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] min-w-0"
                  title={it.title}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={it.img}
                      alt={it.title}
                      fill
                      className="object-cover object-center"
                      priority={idx < 2}
                    />
                  </div>

                  <div className="absolute inset-0 bg-black/36 group-hover:bg-black/22 transition-colors duration-400" />

                  <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                    <div>
                      <span className="inline-block px-2 py-1 text-xs bg-white/90 text-[#222831] font-semibold mb-3">
                        {it.category}
                      </span>
                      <h3 className="text-white text-lg md:text-2xl font-bold tracking-tight mt-2">
                        {it.title}
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-white/90 line-clamp-2">
                        {it.summary}
                      </p>
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={`/insights/${it.id}`}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-[#00ADB5] text-white text-sm font-medium"
                      >
                        Read <ArrowRight />
                      </a>
                    </div>
                  </div>

                  <div className="absolute right-0 top-0 h-full w-[1px] bg-white/10" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          DEEP DIVES — big cards with diagonal imagery
         ========================= */}
      <section className="py-16 bg-[#F7FAFB]">
        <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#222831]">Deep Dives</h3>
            <p className="text-sm text-[#5a6066] mt-2">Long-form research and practical playbooks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DEEP_DIVES.map((d) => (
              <article key={d.id} className="group relative bg-white shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="relative md:w-1/2 h-64 md:h-auto">
                    {/* diagonal clipped image */}
                    <div
                      className="absolute inset-0"
                      style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
                    >
                      <Image src={d.img} alt={d.title} fill className="object-cover object-center" />
                    </div>
                  </div>

                  <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-[#222831] mb-3">{d.title}</h4>
                      <p className="text-[#394046] mb-4">{d.excerpt}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <a href={`/insights/${d.id}`} className="inline-flex items-center gap-2 text-[#00ADB5] font-medium">
                        Read deep dive <ArrowRight />
                      </a>
                      <span className="text-sm text-[#6b7280]">Approx. 12 min read</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          LEGAL BRIEFS — compact list of short updates
         ========================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#222831]">Legal Briefs</h3>
            <p className="text-sm text-[#5a6066] mt-2">Short takes on recent rulings and regulatory updates.</p>
          </div>

          <div className="space-y-4">
            {LEGAL_BRIEFS.map((b) => (
              <div key={b.id} className="flex items-center justify-between bg-[#FBFCFD] border border-[#e8eef0] p-4">
                <div>
                  <h5 className="text-md font-semibold text-[#222831]">{b.title}</h5>
                  <p className="text-sm text-[#6b7280]">{b.date}</p>
                </div>
                <a href={`/insights/${b.id}`} className="text-[#00ADB5] font-medium inline-flex items-center gap-2">
                  Read <ArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          REPORTS & DATA — grid of reports
         ========================= */}
      <section className="py-16 bg-[#F7FAFB]">
        <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#222831]">Reports & Data</h3>
            <p className="text-sm text-[#5a6066] mt-2">Downloadable reports, datasets and executive summaries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REPORTS.map((r) => (
              <div key={r.id} className="relative bg-white shadow-lg overflow-hidden p-6 flex gap-6">
                <div className="relative w-40 h-28 flex-shrink-0">
                  <Image src={r.img} alt={r.title} fill className="object-cover object-center" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-[#222831]">{r.title}</h4>
                  <p className="text-sm text-[#394046] mt-2">{r.short}</p>
                  <div className="mt-4 flex items-center gap-4">
                    <a href={`/insights/${r.id}`} className="text-[#00ADB5] font-medium inline-flex items-center gap-2">
                      View report <ArrowRight />
                    </a>
                    <span className="text-sm text-[#6b7280]">PDF • 40 pages</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* bottom padding */}
      <div className="h-20" />
    </div>
  );
}
