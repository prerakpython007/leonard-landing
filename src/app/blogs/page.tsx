'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Share2 } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "~/lib/blogData";
import { useState } from "react";

// Type definitions for better type safety
interface BlogPost {
  id: string;
  title: string;
  image: string;
  topic: string;
  summary: string;
  readTime: string;
}

export default function BlogPage() {
  const [videoError, setVideoError] = useState(false);
  
  // Validate blogPosts exists and is an array
  const validBlogPosts = Array.isArray(blogPosts) ? blogPosts : [];
  
  // Get featured blog posts with proper validation
  const featuredBlogs = validBlogPosts.slice(0, 4);
  const featuredArticle = validBlogPosts[4] || validBlogPosts[0]; // Fallback to first article
  const largeArticles = [
    validBlogPosts[5] || validBlogPosts[1] || validBlogPosts[0], // Multiple fallbacks
    validBlogPosts[6] || validBlogPosts[2] || validBlogPosts[0]
  ].filter(Boolean); // Remove any undefined values
  
  const latestInsights = validBlogPosts.length > 7 
    ? validBlogPosts.slice(7, 10) 
    : validBlogPosts.slice(0, Math.min(3, validBlogPosts.length));

  // If no blog posts exist, show empty state
  if (validBlogPosts.length === 0) {
    return (
      <div className="min-h-screen bg-[#0f3460] font-montserrat flex items-center justify-center">
        <div className="text-white text-xl">No blog posts available</div>
      </div>
    );
  }

  // Handle video error
  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="min-h-screen bg-[#0f3460] font-montserrat">
      {/* Main Blog Layout */}
      <section className="pt-16 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Blog Posts */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-8">Latest Posts</h2>
            {featuredBlogs.slice(0, 2).map((blog, index) => (
              blog && blog.id ? (
                <motion.div
                  key={blog.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blogs/${blog.id}`} aria-label={`Read article: ${blog.title}`}>
                    <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={blog.image}
                        alt={blog.title || 'Blog post image'}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Handle image load error
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder-blog.jpg'; // Add a fallback image
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[#00ADB5] text-sm">{blog.topic || 'General'}</span>
                      <button 
                        className="text-gray-400 hover:text-[#00ADB5] transition-colors"
                        aria-label="Share this article"
                        onClick={(e) => {
                          e.preventDefault();
                          // Add share functionality here
                          navigator.share?.({
                            title: blog.title,
                            url: `/blogs/${blog.id}`
                          });
                        }}
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                    <h3 className="text-white text-base font-semibold group-hover:text-[#00ADB5] transition-colors">
                      {blog.title || 'Untitled Article'}
                    </h3>
                  </Link>
                </motion.div>
              ) : null
            ))}
          </div>

          {/* Center Column - Featured Blog with Earth Video */}
          <div className="lg:col-span-4">
            {featuredArticle && (
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link href={`/blogs/${featuredArticle.id}`} aria-label={`Read featured article: ${featuredArticle.title}`}>
                  <div className="relative h-[800px] mb-6 rounded-xl overflow-hidden">
                    {/* Earth Video with proper error handling */}
                    {!videoError ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"
                        onError={handleVideoError}
                      >
                        <source src="https://cdn.pixabay.com/video/2022/01/13/102255-667115339_large.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      // Fallback image if video fails
                      <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"
                        alt="Earth from space"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                      <div className="flex justify-between items-start mb-4">
                        <div className="max-w-xl">
                          <span className="text-[#00ADB5] text-sm mb-4 inline-block">Featured Article</span>
                          <h2 className="text-white text-3xl md:text-4xl font-bold">
                            {featuredArticle.title || 'Featured Article'}
                          </h2>
                          {featuredArticle.summary && (
                            <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                              {featuredArticle.summary}
                            </p>
                          )}
                        </div>
                        <button 
                          className="text-white hover:text-[#00ADB5] transition-colors"
                          aria-label="Share featured article"
                          onClick={(e) => {
                            e.preventDefault();
                            navigator.share?.({
                              title: featuredArticle.title,
                              url: `/blogs/${featuredArticle.id}`
                            });
                          }}
                        >
                          <Share2 className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Right Column - Blog Posts */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-8">Popular Posts</h2>
            {featuredBlogs.slice(2, 4).map((blog, index) => (
              blog && blog.id ? (
                <motion.div
                  key={blog.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blogs/${blog.id}`} aria-label={`Read article: ${blog.title}`}>
                    <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={blog.image}
                        alt={blog.title || 'Blog post image'}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder-blog.jpg';
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[#00ADB5] text-sm">{blog.topic || 'General'}</span>
                      <button 
                        className="text-gray-400 hover:text-[#00ADB5] transition-colors"
                        aria-label="Share this article"
                        onClick={(e) => {
                          e.preventDefault();
                          navigator.share?.({
                            title: blog.title,
                            url: `/blogs/${blog.id}`
                          });
                        }}
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                    <h3 className="text-white text-base font-semibold group-hover:text-[#00ADB5] transition-colors">
                      {blog.title || 'Untitled Article'}
                    </h3>
                  </Link>
                </motion.div>
              ) : null
            ))}
          </div>
        </div>
      </section>

      {/* Large Blog with Summary Section */}
      {largeArticles.length >= 2 && (
        <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
          <div className="max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {largeArticles.slice(0, 2).map((article, index) => (
                article && article.id ? (
                  <motion.div
                    key={article.id}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Link href={`/blogs/${article.id}`} aria-label={`Read article: ${article.title}`}>
                      <div className="relative h-[600px] mb-8 rounded-xl overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title || 'Featured article image'}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder-blog.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      </div>
                      <span className="text-[#00ADB5] text-sm">
                        {index === 0 ? 'FEATURED ARTICLE' : (article.topic || 'GENERAL').toUpperCase()}
                      </span>
                      <h2 className="text-white text-3xl font-bold mt-4 mb-4 group-hover:text-[#00ADB5] transition-colors">
                        {article.title || 'Untitled Article'}
                      </h2>
                      {article.summary && (
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                          {article.summary}
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">
                          Read Time: {article.readTime || '5 min read'}
                        </span>
                        <button 
                          className="text-gray-400 group-hover:text-[#00ADB5] transition-colors"
                          aria-label="Share this article"
                          onClick={(e) => {
                            e.preventDefault();
                            navigator.share?.({
                              title: article.title,
                              url: `/blogs/${article.id}`
                            });
                          }}
                        >
                          <Share2 className="w-6 h-6" />
                        </button>
                      </div>
                    </Link>
                  </motion.div>
                ) : null
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Blog Cards */}
      {latestInsights.length > 0 && (
        <section className="py-20 px-4 md:px-16 lg:px-24 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-white">
              Latest <span className="text-[#00ADB5]">Insights</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestInsights.map((blog, index) => (
                blog && blog.id ? (
                  <motion.div
                    key={blog.id}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={`/blogs/${blog.id}`} aria-label={`Read article: ${blog.title}`}>
                      <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={blog.image}
                          alt={blog.title || 'Blog post image'}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder-blog.jpg';
                          }}
                        />
                      </div>
                      <span className="text-[#00ADB5] text-sm">{blog.topic || 'General'}</span>
                      <h3 className="text-white text-xl font-semibold mt-2 group-hover:text-[#00ADB5] transition-colors">
                        {blog.title || 'Untitled Article'}
                      </h3>
                    </Link>
                  </motion.div>
                ) : null
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}