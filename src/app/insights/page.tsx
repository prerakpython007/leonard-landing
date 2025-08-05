"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CAREERS = [
  {
    id: "associate-ip",
    title: "Associate - IP",
    location: "Mumbai",
    summary: "Handle trademark & patent prosecution, drafting, and client advisory.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "senior-associate",
    title: "Senior Associate - Litigation",
    location: "Mumbai",
    summary: "Manage litigation matters, drafting pleadings, and court appearances.",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "paralegal",
    title: "Paralegal - Foreign Filings",
    location: "Remote/Office",
    summary: "Coordinate foreign filings, docketing, and vendor management.",
    img: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "business-dev",
    title: "Business Development",
    location: "Mumbai",
    summary: "Drive client acquisition and manage relationships for growth.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "hr",
    title: "HR - Talent & Ops",
    location: "Mumbai",
    summary: "Manage recruitment, L&D and people operations.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "intern-ip",
    title: "IP Intern",
    location: "Mumbai",
    summary: "Support attorneys with research, searches and filing prep.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1400",
  },
  {
    id: "compliance",
    title: "Compliance Executive",
    location: "Mumbai",
    summary: "Support regulatory compliance, policies and audits.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#EEEEEE] font-roboto overflow-x-hidden">
      {/* =========================
          HERO / TITLE SECTION
         ========================= */}
    <motion.section
            className="relative min-h-[70vh] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full flex items-center">
              {/* Left Side - About Us Text (Centered Vertically) */}
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
                    CAREERS
                  </motion.h1>
  
                  <div className="mt-8 space-y-4">
                    <p className="text-lg sm:text-xl text-[#393E46] font-light leading-relaxed">
                      {/* Discover Our Expertise and Commitment to Excellence in Intellectual Property & Corporate Law */}
                    </p>
                    <div className="flex items-center space-x-2 text-[#00ADB5]">
                      <span className="text-sm font-medium tracking-wider uppercase">Since 2008</span>
                    </div>
                  </div>
                </div>
              </motion.div>
  
              {/* Right Side - Horizontal Rectangle Image */}
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
          INTRO / BIG PARAGRAPH
         ========================= */}
      <section className="py-12 md:py-20 px-4 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
           <motion.h1
                    className="text-[#000000] text-4xl sm:text-5xl md:text-6xl lg:text-3xl font-extrabold text-left relative mb-10 z-10"
                    style={{
                      letterSpacing: "0.1em",
                      textShadow:
                        "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                     Build your career with Leonard Corporate Solutions
                  </motion.h1>
            <p className="text-lg text-[#393E46] leading-relaxed mb-6">
              We’re a fast-growing IP & corporate law firm that combines legal rigor with technology
              and client-first thinking. Our teams handle complex IP portfolios, cross-border disputes,
              and corporate matters — and we want talented, curious people to grow with us. Whether
              you’re an experienced lawyer, a paralegal, HR professional, or a recent graduate
              looking for an internship, you’ll find meaningful work, mentorship, and career growth.
            </p>

            <p className="text-base text-[#394046] leading-relaxed">
              We value diversity, continuous learning and real ownership. If you’re passionate about law
              and want to make an impact, explore our openings below or reach out to{" "}
              <a href="mailto:careers@leonardsolutions.in" className="text-[#00ADB5] underline">
                careers@leonardsolutions.in
              </a>.
            </p>
          </div>

          <div className="relative h-72 md:h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1400"
              alt="Team working"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* =========================
          CAREER OPENINGS HEADING
         ========================= */}
      <section className="bg-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 py-12">
          <div className="flex items-center">
             <motion.h1
                    className="text-[#000000] text-4xl sm:text-5xl md:text-6xl lg:text-3xl font-extrabold text-center  relative z-10"
                    style={{
                      letterSpacing: "0.3em",
                      textShadow:
                        "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >
              Career Openings at Leonard Corporate Solutions
            </motion.h1>
          </div>
        </div>
      </section>

      {/* =========================
          HORIZONTAL CAREER STRIP - EXPAND ON HOVER
         ========================= */}
      <section className="relative">
        <div className="w-full">
          {/* Container controls heights; each child flex item expands on hover */}
          <div className="flex w-full h-44 md:h-56 lg:h-72 transition-all duration-300 overflow-hidden">
            {CAREERS.map((c, idx) => (
              <article
                key={c.id}
                className="relative flex-1 group hover:flex-[3] transition-[flex] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] min-w-0"
                title={c.title}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover object-center"
                    priority={idx < 2}
                  />
                </div>

                {/* dark overlay that reduces on hover */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/30 transition-colors duration-400" />

                {/* content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <h3 className="text-white text-lg md:text-2xl font-bold tracking-tight">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-white/90">{c.location}</p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    <p className="text-sm md:text-base">{c.summary}</p>
                    <div className="mt-3">
                      <a
                        href={`/careers/${c.id}`}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-[#00ADB5] text-white text-sm font-medium"
                      >
                        Apply <ArrowRight />
                      </a>
                    </div>
                  </div>
                </div>

                {/* right edge divider */}
                <div className="absolute right-0 top-0 h-full w-[1px] bg-white/10" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          VISION SECTION - diagonal cut image on right,
          overlapping left text box
         ========================= */}
      <section className="py-20 md:py-28 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24">
          <div className="relative flex items-stretch">
            {/* Right clipped image */}
            <div
              className="relative flex-1 hidden md:block"
              style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)" }}
            >
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1400"
                  alt="Vision image"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>

            {/* Left text box overlapping image */}
            <div className="w-full md:w-1/2 relative z-20 -mr-8">
              <div className="bg-white/95 p-8 md:p-12 shadow-xl" style={{ marginLeft: 0 }}>
                 <motion.h1
                    className="text-[#000000] text-4xl sm:text-5xl md:text-6xl lg:text-3xl font-extrabold text-left mb-10  relative z-10"
                    style={{
                      letterSpacing: "0.1em",
                      textShadow:
                        "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >Our Vision for Talent</motion.h1>
                <p className="text-[#393E46] leading-relaxed text-lg">
                  At Leonard Corporate Solutions, we want to build teams that are technically
                  excellent, ethically grounded, and driven to deliver client success. We believe in
                  mentorship, continuous learning, and giving our people ownership of meaningful work.
                  Join us to collaborate with market-leading IP and corporate law practitioners while
                  growing your legal career in a supportive, forward-looking firm.
                </p>
                <p className="mt-6 text-[#393E46] leading-relaxed">
                  Our people work across practice areas — IP prosecution, litigation, corporate advisory,
                  compliance and taxation — helping clients across India and abroad. If you thrive in a
                  high-performance environment and value professional development, we’d love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================
    APPLICATION FORM SECTION
   ========================= */}
<section className="relative bg-white lg:pb-32 md:py-20 overflow-hidden">
  {/* Left diagonal image */}
  <div
    className="absolute left-0 top-0 h-full w-1/4 hidden md:block"
    style={{
      clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
    }}
  >
    <Image
      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
      alt="Form Left"
      fill
      className="object-cover"
    />
  </div>

  {/* Right diagonal image */}
  <div
    className="absolute right-0 top-0 h-full w-1/4 hidden md:block"
    style={{
      clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
    }}
  >
    <Image
      src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=800"
      alt="Form Right"
      fill
      className="object-cover"
    />
  </div>

  {/* Form container */}
  <div className="relative max-w-3xl mx-auto px-6">
    <motion.h1
                    className="text-[#000000] text-4xl sm:text-5xl mb-10 md:text-6xl lg:text-3xl font-extrabold text-center  relative z-10"
                    style={{
                      letterSpacing: "0.3em",
                      textShadow:
                        "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >
      Join Our Team
     </motion.h1>
    <p className="text-center text-[#393E46] mb-10 max-w-2xl mx-auto">
      Fill out the form below and our HR team will get back to you shortly. We look forward to having you at Leonard Corporate Solutions.
    </p>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name */}
      <input
        type="text"
        placeholder="Full Name"
        className="border border-[#ccc] px-4 py-3 w-full text-[#222831] focus:outline-none focus:border-[#00ADB5]"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email Address"
        className="border border-[#ccc] px-4 py-3 w-full text-[#222831] focus:outline-none focus:border-[#00ADB5]"
      />

      {/* Phone */}
      <input
        type="tel"
        placeholder="Phone Number"
        className="border border-[#ccc] px-4 py-3 w-full text-[#222831] focus:outline-none focus:border-[#00ADB5]"
      />

      {/* Position */}
      <select
        className="border border-[#ccc] px-4 py-3 w-full text-[#222831] focus:outline-none focus:border-[#00ADB5]"
      >
        <option>Select Position</option>
        {CAREERS.map((career) => (
          <option key={career.id} value={career.title}>
            {career.title}
          </option>
        ))}
      </select>

      {/* Message */}
      <textarea
        rows={4}
        placeholder="Your Message"
        className="border border-[#ccc] px-4 py-3 w-full text-[#222831] focus:outline-none focus:border-[#00ADB5] md:col-span-2"
      ></textarea>

      {/* File Upload */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-[#222831] mb-2">
          Upload Resume
        </label>
        <input
          type="file"
          className="w-full border border-[#ccc] px-4 py-3 text-[#222831] focus:outline-none focus:border-[#00ADB5]"
        />
      </div>

      {/* Submit */}
      <div className="md:col-span-2 text-center">
        <button
          type="submit"
          className="bg-[#00ADB5] text-white px-8 py-3 font-medium tracking-wide hover:bg-[#009aa1] transition-all duration-300"
        >
          Submit Application
        </button>
      </div>
    </form>
  </div>
</section>

      {/* =========================
          3-PART FULL-WIDTH SECTION (no gaps) - panels expand on hover
         ========================= */}
      <section className="w-full pt-20  bg-white">
        <div className="w-full  flex h-[220px] md:h-[320px]">
          {/* Panel 1 */}
          <div className="flex-1 group hover:flex-[2] transition-[flex] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] relative">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1400"
                alt="Law Intern"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/25 transition-colors duration-300" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
              <h4 className="text-white text-xl md:text-2xl font-bold">Law Intern</h4>
              <p className="text-white/90 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Practical experience, research projects, client support and mentorship.
              </p>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="flex-1 group hover:flex-[2] transition-[flex] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] relative">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1400"
                alt="For Students"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/25 transition-colors duration-300" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
              <h4 className="text-white text-xl md:text-2xl font-bold">For Students</h4>
              <p className="text-white/90 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Short internships, research assistance and training opportunities.
              </p>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="flex-1 group hover:flex-[2] transition-[flex] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] relative">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&q=80&w=1400"
                alt="Others"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/25 transition-colors duration-300" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
              <h4 className="text-white text-xl md:text-2xl font-bold">Others</h4>
              <p className="text-white/90 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Roles in operations, finance, HR and business support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* bottom padding to avoid content flush with viewport */}
      {/* <div className="h-20" /> */}
    </div>
  );
}
