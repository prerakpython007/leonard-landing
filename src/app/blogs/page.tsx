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
      {/* Main Blog Layout */}
      <section className="pt-16 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Blog Posts */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-8">Latest Posts</h2>
            {featuredBlogs.slice(0, 2).map((blog, index) => (
              <motion.div
                key={blog.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-40 mb-4 overflow-hidden">
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
                <h3 className="text-white text-base font-semibold group-hover:text-[#00ADB5] transition-colors">
                  {blog.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Center Column - Featured Blog */}
          <div className="lg:col-span-4">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[800px] mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"
                  alt="Featured Blog"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <div className="flex justify-between items-start mb-4">
                    <div className="max-w-xl">
                      <span className="text-[#00ADB5] text-sm mb-4 inline-block">Featured Article</span>
                      <h2 className="text-white text-4xl font-bold">The Evolution of AI Patents: A Legal Perspective</h2>
                      <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                        Exploring the intersection of artificial intelligence and patent law in the modern era...
                      </p>
                    </div>
                    <Share2 className="w-6 h-6 text-white hover:text-[#00ADB5] cursor-pointer" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Blog Posts */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-8">Popular Posts</h2>
            {featuredBlogs.slice(2, 4).map((blog, index) => (
              <motion.div
                key={blog.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-40 mb-4 overflow-hidden">
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
                <h3 className="text-white text-base font-semibold group-hover:text-[#00ADB5] transition-colors">
                  {blog.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Blog with Summary Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* First Article */}
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[600px] mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
                  alt="Large Blog"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
              <span className="text-[#00ADB5] text-sm">FEATURED ARTICLE</span>
              <h2 className="text-white text-3xl font-bold mt-4 mb-4 group-hover:text-[#00ADB5] transition-colors">
                The Impact of AI on Intellectual Property Rights
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Artificial Intelligence is revolutionizing how we think about intellectual property...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Read Time: 8 min</span>
                <Share2 className="w-6 h-6 text-gray-400 group-hover:text-[#00ADB5] transition-colors" />
              </div>
            </motion.div>

            {/* Second Article */}
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-[600px] mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80"
                  alt="Large Blog"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
              <span className="text-[#00ADB5] text-sm">INTELLECTUAL PROPERTY</span>
              <h2 className="text-white text-3xl font-bold mt-4 mb-4 group-hover:text-[#00ADB5] transition-colors">
                Understanding Global Patent Protection
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Navigating international patent laws requires a deep understanding...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Read Time: 6 min</span>
                <Share2 className="w-6 h-6 text-gray-400 group-hover:text-[#00ADB5] transition-colors" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Blog Cards */}
      <section className="py-20 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Latest <span className="text-[#00ADB5]">Insights</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "NFTs and IP Rights",
                category: "Digital Assets",
                image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Patent Filing Strategies",
                category: "Patents",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Copyright in the Digital Age",
                category: "Copyright",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
              }
            ].map((blog, index) => (
              <motion.div
                key={blog.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="text-[#00ADB5] text-sm">{blog.category}</span>
                <h3 className="text-white text-xl font-semibold mt-2 group-hover:text-[#00ADB5] transition-colors">
                  {blog.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
