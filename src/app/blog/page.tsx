'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Share2 } from "lucide-react";

export default function BlogPage() {
  // Featured blog posts data
  const featuredBlogs = [
    {
      title: "Understanding IP Rights in the Digital Age",
      topic: "Intellectual Property",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f1faaa?auto=format&fit=crop&w=1200&q=80",
      summary: "A comprehensive guide to protecting your digital assets..."
    },
    {
      title: "The Future of Patent Law",
      topic: "Patent Law",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80",
      summary: "Exploring upcoming changes in patent legislation..."
    },
    {
      title: "Trademark Strategies for Startups",
      topic: "Trademark Law",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      summary: "Essential trademark protection strategies for new businesses..."
    },
    {
      title: "International IP Protection",
      topic: "Global IP",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
      summary: "Navigating international intellectual property rights..."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f3460] font-montserrat">
      {/* Top Section with Blog Posts */}
      <section className="pt-16 px-4 md:px-16 lg:px-24 bg-black">
        <h1 className="text-4xl font-bold text-white mb-12">Our Blogs</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBlogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 mb-4 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[#00ADB5] text-sm">{blog.topic}</span>
                <Share2 className="w-4 h-4 text-gray-400 hover:text-[#00ADB5] cursor-pointer" />
              </div>
              <h3 className="text-white text-lg font-semibold group-hover:text-[#00ADB5] transition-colors">
                {blog.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-20 px-4 md:px-16 lg:px-24 bg-black">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-[500px] mb-8">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"
              alt="Featured Blog"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-[#00ADB5] text-sm mb-2 block">Technology & IP</span>
              <h2 className="text-white text-3xl font-bold">The Evolution of AI Patents: A Legal Perspective</h2>
            </div>
            <Share2 className="w-6 h-6 text-gray-400 hover:text-[#00ADB5] cursor-pointer" />
          </div>
        </motion.div>
      </section>

      {/* Alternating Content Sections */}

    </div>
  );
}
