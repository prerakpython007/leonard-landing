'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Share2 } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "~/lib/blogData";
import { useState } from "react";

// Types
interface BlogPost {
  id: string;
  title: string;
  image: string;
  topic: string;
  summary?: string;
  readTime?: string;
}

export default function BlogPage() {
  const [videoError, setVideoError] = useState(false);

  const validBlogPosts: BlogPost[] = Array.isArray(blogPosts) ? blogPosts : [];
  if (!validBlogPosts.length) {
    return (
      <div className="min-h-screen bg-[#0f3460] font-montserrat flex items-center justify-center">
        <div className="text-white text-xl">No blog posts available</div>
      </div>
    );
  }

  // Blog data sectioning
  const featuredBlogs = validBlogPosts.slice(0, 4);
  const featuredArticle = validBlogPosts[4] || validBlogPosts[0];
  const largeArticles = [
    validBlogPosts[5] || validBlogPosts[1],
    validBlogPosts[6] || validBlogPosts[2],
  ].filter(Boolean);
  const latestInsights = validBlogPosts.slice(
    validBlogPosts.length > 7 ? 7 : 0,
    validBlogPosts.length > 7 ? 10 : Math.min(3, validBlogPosts.length)
  );

  // Helpers
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).src = "/placeholder-blog.jpg";
  };
  const shareArticle = (title: string, id: string) =>
    navigator.share?.({ title, url: `/blogs/${id}` });
  const handleVideoError = () => setVideoError(true);

  // Motion defaults
  const fadeInLeft = (index = 0) => ({
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: index * 0.1 },
  });
  const fadeInRight = (index = 0) => ({
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: index * 0.1 },
  });
  const fadeInUp = (index = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: index * 0.1 },
    viewport: { once: true },
  });

  return (
    <div className="min-h-screen bg-[#0f3460] font-montserrat">
      {/* Main Layout */}
      <section className="pt-16 px-4 md:px-16 lg:px-24 bg-black">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column - Latest Posts */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-8">Latest Posts</h2>
            {featuredBlogs.slice(0, 2).map(
              (blog, index) =>
                blog?.id && (
                  <motion.div
                    key={blog.id}
                    className="group cursor-pointer"
                    {...fadeInLeft(index)}
                  >
                    <Link href={`/blogs/${blog.id}`} aria-label={`Read article: ${blog.title}`}>
                      <div className="relative h-40 mb-4 overflow-hidden">
                        <Image
                          src={blog.image}
                          alt={blog.title || "Blog post image"}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={handleImageError}
                        />
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[#00ADB5] text-sm">{blog.topic || "General"}</span>
                        <button
                          className="text-gray-400 hover:text-[#00ADB5] transition-colors"
                          aria-label="Share"
                          onClick={(e) => {
                            e.preventDefault();
                            shareArticle(blog.title, blog.id);
                          }}
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                      <h3 className="text-white text-base font-semibold group-hover:text-[#00ADB5] transition-colors">
                        {blog.title || "Untitled Article"}
                      </h3>
                    </Link>
                  </motion.div>
                )
            )}
          </div>

          {/* Middle Column - Featured Article with Video */}
          <div className="lg:col-span-4">
            {featuredArticle?.id && (
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link href={`/blogs/${featuredArticle.id}`} aria-label={`Read featured article: ${featuredArticle.title}`}>
                  <div className="relative h-[800px] mb-6 overflow-hidden">
                    {!videoError ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"
                        onError={handleVideoError}
                      />
                    ) : (
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
                            {featuredArticle.title}
                          </h2>
                          {featuredArticle.summary && (
                            <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                              {featuredArticle.summary}
                            </p>
                          )}
                        </div>
                        <button
                          className="text-white hover:text-[#00ADB5] transition-colors"
                          aria-label="Share"
                          onClick={(e) => {
                            e.preventDefault();
                            shareArticle(featuredArticle.title, featuredArticle.id);
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

          {/* Right Column - Popular Posts */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-8">Popular Posts</h2>
            {featuredBlogs.slice(2, 4).map(
              (blog, index) =>
                blog?.id && (
                  <motion.div
                    key={blog.id}
                    className="group cursor-pointer"
                    {...fadeInRight(index)}
                  >
                    <Link href={`/blogs/${blog.id}`} aria-label={`Read article: ${blog.title}`}>
                      <div className="relative h-40 mb-4 overflow-hidden">
                        <Image
                          src={blog.image}
                          alt={blog.title || "Blog post image"}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={handleImageError}
                        />
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[#00ADB5] text-sm">{blog.topic || "General"}</span>
                        <button
                          className="text-gray-400 hover:text-[#00ADB5] transition-colors"
                          aria-label="Share"
                          onClick={(e) => {
                            e.preventDefault();
                            shareArticle(blog.title, blog.id);
                          }}
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                      <h3 className="text-white text-base font-semibold group-hover:text-[#00ADB5] transition-colors">
                        {blog.title || "Untitled Article"}
                      </h3>
                    </Link>
                  </motion.div>
                )
            )}
          </div>
        </div>
      </section>

      {/* Large Articles */}
      {largeArticles.length >= 2 && (
        <section className="py-32 px-4 md:px-16 lg:px-24 bg-black">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {largeArticles.slice(0, 2).map(
              (article, index) =>
                article?.id && (
                  <motion.div
                    key={article.id}
                    className="group cursor-pointer"
                    {...fadeInUp(index)}
                  >
                    <Link href={`/blogs/{article.id}`} aria-label={`Read article: ${article.title}`}>
                      <div className="relative h-[600px] mb-8 overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title || "Featured article image"}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={handleImageError}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      </div>
                      <span className="text-[#00ADB5] text-sm">
                        {index === 0 ? "FEATURED ARTICLE" : (article.topic || "GENERAL").toUpperCase()}
                      </span>
                      <h2 className="text-white text-3xl font-bold mt-4 mb-4 group-hover:text-[#00ADB5] transition-colors">
                        {article.title}
                      </h2>
                      {article.summary && (
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">{article.summary}</p>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">
                          Read Time: {article.readTime || "5 min read"}
                        </span>
                        <button
                          className="text-gray-400 group-hover:text-[#00ADB5] transition-colors"
                          aria-label="Share"
                          onClick={(e) => {
                            e.preventDefault();
                            shareArticle(article.title, article.id);
                          }}
                        >
                          <Share2 className="w-6 h-6" />
                        </button>
                      </div>
                    </Link>
                  </motion.div>
                )
            )}
          </div>
        </section>
      )}

      {/* Latest Insights */}
      {!!latestInsights.length && (
        <section className="py-20  bg-black">
          <div className="w-[1370px] mx-auto">
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {latestInsights.map(
                (blog, index) =>
                  blog?.id && (
                    <motion.div
                      key={blog.id}
                      className="group cursor-pointer"
                      {...fadeInUp(index)}
                    >
                      <Link href={`/blogs/${blog.id}`} aria-label={`Read article: ${blog.title}`}>
                        <div className="relative h-64 mb-4 overflow-hidden">
                          <Image
                            src="/blog-3.webp"
                            alt={blog.title || "Blog post image"}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={handleImageError}
                          />
                        </div>
                        <span className="text-[#00ADB5] text-sm">{blog.topic || "General"}</span>
                        <h3 className="text-white text-xl font-semibold mt-2 group-hover:text-[#00ADB5] transition-colors">
                          {blog.title}
                        </h3>
                      </Link>
                    </motion.div>
                  )
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
