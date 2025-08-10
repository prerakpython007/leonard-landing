'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Clock,
  Code,
  FileText,
  Users,
  Globe
} from "lucide-react";

export default function OtherCareersPage() {
  const opportunities = [
    {
      title: "Legal Content Writer",
      type: "Full-time / Part-time",
      description: "Create engaging legal content, blogs, and articles on IP law and related topics.",
      requirements: [
        "Law degree or equivalent",
        "Strong writing skills",
        "Knowledge of IP law",
        "Content marketing experience is a plus"
      ],
      icon: FileText
    },
    {
      title: "Legal Tech Developer",
      type: "Full-time",
      description: "Develop and maintain legal tech solutions and automation tools.",
      requirements: [
        "Computer Science degree",
        "Experience with legal software",
        "Full-stack development skills",
        "Understanding of legal processes"
      ],
      icon: Code
    },
    {
      title: "Business Development Associate",
      type: "Full-time",
      description: "Drive growth through client acquisition and relationship management.",
      requirements: [
        "Business/Law background",
        "Sales experience",
        "Strong communication skills",
        "Market research abilities"
      ],
      icon: Users
    },
    {
      title: "International Relations Specialist",
      type: "Full-time",
      description: "Manage international client relations and cross-border legal coordination.",
      requirements: [
        "International law experience",
        "Multiple language proficiency",
        "Cultural awareness",
        "Client relationship skills"
      ],
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f3460] font-montserrat">
      {/* Hero Section */}
      <motion.section
        className="relative h-[95vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1500&q=80"
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
            Career Opportunities
          </h1>
          <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto font-light drop-shadow">
            Join Our Dynamic Team in Various Roles
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
                      <span className="text-[#00ADB5]">Join Our</span>{' '}
                      <span className="text-[#393E46]">Professional Team</span>
                    </h2>
                    <p className="text-lg leading-relaxed text-[#393E46]">
                      We're looking for talented individuals across various roles to support our growing practice. From legal content writers to tech specialists, discover opportunities that match your expertise and career goals.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#00ADB5]"></span>
                        <span className="text-[#393E46]">Flexible Roles</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#00ADB5]"></span>
                        <span className="text-[#393E46]">Professional Growth</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#00ADB5]"></span>
                        <span className="text-[#393E46]">Modern Workplace</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 h-[420px] w-full lg:w-2/5">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
                    alt="Professional team"
                    fill
                    className="object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="text-white">Available</span>{' '}
              <span className="text-[#00ADB5]">Positions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((job, index) => (
              <motion.div
                key={job.title}
                className="group bg-[#111] p-8 border border-[#222]/40 hover:border-[#00ADB5] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-none">
                    <job.icon className="w-6 h-6 text-[#00ADB5]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                        <span className="text-[#00ADB5] text-sm">{job.type}</span>
                      </div>
                      <Clock className="w-5 h-5 text-gray-400" />
                    </div>
                    <p className="text-gray-400 mb-6">{job.description}</p>
                    <div className="space-y-3">
                      {job.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-[#00ADB5]" />
                          <span className="text-gray-300 text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/careers#apply"
                      className="inline-flex items-center text-[#00ADB5] mt-6 group/link"
                    >
                      Apply Now
                      <svg 
                        className="w-4 h-4 ml-2 transform transition-transform group-hover/link:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
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

      {/* Call to Action */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Don't See Your <span className="text-[#00ADB5]">Perfect Role?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/careers"
                className="inline-flex items-center px-6 py-3 border border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5] hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Careers
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-3 bg-[#00ADB5] text-white hover:bg-[#222831] transition-colors duration-300"
              >
                Contact Us
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
