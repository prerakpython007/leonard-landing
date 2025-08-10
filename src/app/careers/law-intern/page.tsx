'use client';

import { motion, number, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Calendar, MapPin, Clock, Book, Users, Star, CheckCircle2, Trophy } from "lucide-react";
import { title } from "process";
import { useRef, useEffect, useState } from 'react';

export default function LawInternPage() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateValue = (start: number, end: number, duration: number, setter: (value: number) => void) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setter(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const stats = [
        { end: 50, setter: setInterns },
        { end: 90, setter: setSuccess },
        { end: 100, setter: setCases },
        { end: 15, setter: setMentors }
      ];

      stats.forEach((stat, index) => {
        setTimeout(() => {
          animateValue(0, stat.end, 2000, stat.setter);
        }, index * 200);
      });
    }
  }, [isInView, hasAnimated]);

  const [interns, setInterns] = useState(0);
  const [success, setSuccess] = useState(0);
  const [cases, setCases] = useState(0);
  const [mentors, setMentors] = useState(0);

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
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1500&q=80"
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
            Law Intern Program
          </h1>
          <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto font-light drop-shadow">
            Launch Your Legal Career with Expert Mentorship
          </p>
        </motion.div>
      </motion.section>

      {/* New Featured Highlights Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">
            Featured <span className="text-[#00ADB5]">Highlights</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Expert Mentorship",
                description: "Learn directly from experienced attorneys and legal professionals",
                image: "https://images.unsplash.com/photo-1515168833906-d503a853e1f4?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Case Studies",
                description: "Work on real intellectual property cases and trademark filings",
                image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative h-[400px] overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>
                <div className="relative h-full p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-4">
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/90 transform opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Interactive Gallery Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">
            Life at <span className="text-[#00ADB5]">Our Firm</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
            ].map((image, index) => (
              <motion.div
                key={index}
                className="group relative aspect-square overflow-hidden cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#00ADB5]/0 group-hover:bg-[#00ADB5]/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
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
                      <span className="text-[#00ADB5]">Launch Your Career</span>{' '}
                      <span className="text-[#393E46]">in IP Law</span>
                    </h2>
                    <p className="text-lg leading-relaxed text-[#393E46]">
                      Our internship program offers hands-on experience in intellectual property law, corporate law, and litigation. Work directly with experienced attorneys on real cases and projects while developing essential legal skills.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#00ADB5]"></span>
                        <span className="text-[#393E46]">3-6 Months Duration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#00ADB5]"></span>
                        <span className="text-[#393E46]">Mumbai Location</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#00ADB5]"></span>
                        <span className="text-[#393E46]">Stipend Offered</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 h-[420px] w-full lg:w-2/5">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400"
                    alt="Law Intern"
                    fill
                    className="object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">Key</span>{' '}
              <span className="text-[#00ADB5]">Responsibilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 px-2 sm:px-4 md:px-16">
            {[
              {
                title: "Legal Research",
                description: "Conduct research on IP laws, precedents, and regulatory requirements.",
                image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Document Drafting",
                description: "Assist in preparing legal documents, applications, and correspondence.",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Case Analysis",
                description: "Review and analyze IP cases and prepare case summaries.",
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
                style={{
                  borderRadius: 0,
                  backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(${item.image})`,
                  backgroundBlendMode: 'multiply',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex flex-col gap-5 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#e0e0e0] text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="py-16 bg-black" ref={statsRef}>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            number: interns,
            suffix: "+",
            label: "Interns Placed",
            Icon: Users
          },
          {
            number: success,
            suffix: "%",
            label: "Success Rate",
            Icon: Trophy
          },
          {
            number: cases,
            suffix: "+",
            label: "Active Cases",
            Icon: Book
          },
          {
            number: mentors,
            suffix: "+",
            label: "Expert Mentors",
            Icon: Star
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <stat.Icon className="w-8 h-8 text-[#00ADB5] mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-white mb-2">
              {stat.number}{stat.suffix}
            </h3>
            <p className="text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
        </div>
      </section>

      {/* Program Overview Cards */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">Program</span>{' '}
              <span className="text-[#00ADB5]">Overview</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Duration & Schedule",
                Icon: Calendar,
                details: ["3-6 months program", "Flexible timing", "40 hours/week"],
                image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Location",
                Icon: MapPin,
                details: ["Mumbai Office", "Hybrid Model", "Modern Workspace"],
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Learning Path",
                Icon: Book,
                details: ["Structured Training", "Real Cases", "Regular Feedback"],
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="group bg-cover bg-center p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#222]/40 hover:border-[#00ADB5] relative overflow-hidden"
                style={{
                  borderRadius: 0,
                  backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.7)), url(${item.image})`,
                  backgroundBlendMode: 'multiply',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex flex-col gap-5 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-white/10">
                      <item.Icon className="w-6 h-6 text-[#00ADB5]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="text-[#e0e0e0] flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#00ADB5]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Replace Timeline Section with Hover Cards */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">
            Your <span className="text-[#00ADB5]">Journey</span> With Us
          </h2>

          <div className="relative flex items-center justify-center min-h-[500px]">
            {[
              {
                phase: "Foundation",
                title: "Week 1-2",
                description: "Start your journey with orientation, understanding firm practices, and mastering basic legal research tools.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
              },
              {
                phase: "Development",
                title: "Week 3-4",
                description: "Shadow senior attorneys, assist in document preparation, and engage in hands-on legal research.",
                image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80"
              },
              {
                phase: "Application",
                title: "Month 2",
                description: "Handle supervised client work, draft documents, and conduct thorough trademark searches.",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80"
              },
              {
                phase: "Mastery",
                title: "Month 3+",
                description: "Take ownership of smaller matters and present findings to the team with confidence.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
              }
            ].map((item, index, array) => (
              <motion.div
                key={item.phase}
                className="absolute w-[400px] h-[500px]"
                style={{
                  left: `calc(50% - 200px - ${(array.length - 1 - index) * 120}px)`,
                  zIndex: array.length - index,
                }}
              >
                <div className="relative w-full h-full overflow-hidden shadow-2xl bg-[#111]">
                  {/* Background with diagonal cut */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${item.image})`,
                      clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)',
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full p-8 flex flex-col justify-between"
                       style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)' }}>
                    <div>
                      <div className="text-[#00ADB5] text-base font-medium mb-3">
                        {item.phase}
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-6">
                        {item.title}
                      </h3>
                      <p className="text-white/90 text-lg">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="w-16 h-1 bg-[#00ADB5]" />
                  </div>

                  {/* Static overlay */}
                  <div 
                    className="absolute inset-0 bg-black/40"
                    style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">
            Why Choose <span className="text-[#00ADB5]">Our Program</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Structured Learning Path",
              "Real Case Experience",
              "Expert Mentorship",
              "Networking Opportunities",
              "Certificate of Completion",
              "Potential Full-time Roles",
              "Modern Work Environment",
              "Professional Development"
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center space-x-4 bg-white/5 p-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle2 className="w-6 h-6 text-[#00ADB5] flex-shrink-0" />
                <p className="text-white">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="absolute left-0 top-0 w-[45%] h-full" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
            opacity: 0.1
          }} />
          
          <div className="absolute right-0 top-0 w-[45%] h-full" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)',
            opacity: 0.1
          }} />

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
              Apply now to join our internship program and gain valuable experience in IP law while working with industry experts.
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
