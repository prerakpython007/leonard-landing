'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Calendar, MapPin, Book, Users, Star, CheckCircle2, Trophy } from "lucide-react";

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-[#0f3460] font-montserrat">
      {/* Hero Section - Modified */}
      <motion.section
        className="relative h-[95vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1500&q=80"
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white relative inline-block tracking-tight drop-shadow-lg">
            Student Opportunities
          </h1>
          <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto font-light drop-shadow">
            Start Your Legal Journey With Us
          </p>
        </motion.div>
      </motion.section>

      {/* Info Section */}
      <section className="relative bg-white px-4 py-28 md:px-16 lg:px-24">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative flex items-center flex-col lg:flex-row">
              <div
                className="relative w-full lg:w-3/5 z-20 mb-8 lg:mb-0 lg:mr-[-120px] ml-[-10px]"
                style={{ filter: "drop-shadow(0 25px 80px rgba(0, 0, 0, 0.12))" }}
              >
                <div
                  className="bg-white/98 p-8 md:p-10"
                  style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 100%, 0 100%)" }}
                >
                  <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                      <span className="text-[#00ADB5]">Student Opportunities</span>{' '}
                      <span className="text-[#393E46]">at Our Firm</span>
                    </h2>
                    <p className="text-lg leading-relaxed text-[#393E46]">
                      Join our dynamic team and kickstart your legal career. We offer comprehensive programs designed for law students to gain practical experience and professional growth through hands-on learning and expert mentorship.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#00ADB5]"></span>
                        <span className="text-[#393E46]">Law Internships</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#00ADB5]"></span>
                        <span className="text-[#393E46]">Summer Programs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#00ADB5]"></span>
                        <span className="text-[#393E46]">Mentorship</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 h-[420px] w-full lg:w-2/5">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
                    alt="Students at work"
                    fill
                    className="object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Available Programs Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">
            Available <span className="text-[#00ADB5]">Programs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Law Intern Program",
                duration: "3-6 months",
                location: "Mumbai",
                description: "Gain hands-on experience in IP law and litigation while working with experienced attorneys.",
                link: "/careers/law-intern",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Summer Associate",
                duration: "2-3 months",
                location: "Mumbai, Delhi",
                description: "Join our summer program to experience real-world legal practice and mentorship.",
                link: "/careers/summer-associate",
                image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80"
              },
            ].map((program, index) => (
              <motion.div
                key={program.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={program.link}>
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/40" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="px-3 py-1 bg-[#00ADB5] text-white text-sm">
                            {program.duration}
                          </div>
                          <div className="px-3 py-1 bg-white/10 text-white text-sm">
                            {program.location}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {program.title}
                        </h3>
                        <p className="text-white/90">
                          {program.description}
                        </p>
                      </div>
                      <div className="flex items-center text-[#00ADB5] font-medium group/link">
                        Learn More
                        <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="relative max-w-3xl mx-auto px-8 text-center z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Start Your <br />
              <span className="text-[#00ADB5]">Legal Journey?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e0e0e0] leading-relaxed mb-8">
              Explore our student programs and take the first step towards your legal career.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/careers"
                className="inline-flex items-center px-6 py-3 border border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5] hover:text-white transition-colors duration-300"
                style={{ borderRadius: 0 }}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Careers
              </Link>
              <Link
                href="/careers#apply"
                className="inline-flex items-center px-8 py-3 bg-[#00ADB5] text-white hover:bg-[#222831] transition-colors duration-300"
                style={{ borderRadius: 0 }}
              >
                Apply Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
