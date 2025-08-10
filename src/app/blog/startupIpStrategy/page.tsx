'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function StartupIPStrategyPage() {
  const blog = {
    title: "Startup IP Strategy",
    image: "https://imgs.search.brave.com/PAe9rj6ZFX2Q_IhnqxYO1V-_oGt1iT1JEjexseYljl8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zdGFy/dHVwLWNpcmNsZS1w/cm9jZXNzLWJ1c2lu/ZXNzLWNvbmNlcHQt/NjA0ODUxMTkuanBn",
    sectionBg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    sectionContent: [
      `For startups, intellectual property (IP) is often the most valuable asset — sometimes more valuable than the 
      product itself. A strong IP strategy can give a young company a competitive edge, attract investors, and 
      protect it from copycats. Understanding how to build and implement an IP strategy from day one is essential 
      for long-term success.`,

      `The first step is to identify what IP your startup already owns or is in the process of developing. 
      This can include trademarks for your brand, patents for inventions, copyrights for original content, 
      and trade secrets for proprietary processes or formulas. Conducting an early IP audit ensures you know 
      exactly what needs protection.`,

      `For brand recognition, securing trademarks early is critical. A unique and protected brand name, logo, 
      or slogan can differentiate your startup in a crowded market. Make sure to conduct clearance searches 
      to avoid infringing on someone else’s mark.`,

      `If your startup involves new technology, consider whether aspects of it are patentable. Filing provisional 
      patents can be a cost-effective way to secure an early filing date while refining your product. In some 
      cases, protecting trade secrets rather than patents may be the smarter move to avoid public disclosure.`,

      `Don’t overlook copyright protection for creative assets — such as your website design, marketing materials, 
      software code, or product manuals. Copyright safeguards the unique expression of your ideas and can be a 
      valuable part of your overall IP portfolio.`,

      `Finally, put contracts and policies in place to ensure IP ownership is clear. This includes employee and 
      contractor agreements with IP assignment clauses, NDAs with potential partners, and clear licensing terms 
      for customers. A well-documented IP strategy not only protects your startup but also builds investor 
      confidence, helping secure funding and partnerships.`
    ],
    extraImages: [
      "https://images.unsplash.com/photo-1543269865-cbf427effbad",
      "https://images.unsplash.com/photo-1521790797524-b2497295b8a0",
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
    ]
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="w-full h-screen flex">
        {/* Left - Title */}
        <div className="flex-1 flex items-center justify-center p-10">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold leading-tight"
          >
            {blog.title}
          </motion.h1>
        </div>

        {/* Right - Image */}
        <div className="flex-1 relative h-full">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Background Section with Text */}
      <section className="relative w-full min-h-[140vh] flex items-center px-6 py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={blog.sectionBg}
            alt="Section Background"
            fill
            className="object-cover opacity-50"
          />
          {/* Light Overlay */}
          <div className="absolute inset-0 bg-white/50" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-5xl mx-auto space-y-8 text-black">
          {blog.sectionContent.map((para, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="text-lg leading-relaxed font-medium"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Extra Images */}
      <section className="max-w-5xl mx-auto py-20 px-6 space-y-10">
        {blog.extraImages.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="relative w-full h-[500px]"
          >
            <Image
              src={img}
              alt={`Blog extra ${idx + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        ))}

        {/* Closing Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed"
        >
          A strong IP strategy is not just about protecting ideas — it’s about 
          building a foundation for growth, attracting investors, and ensuring 
          your startup stands out in the market for years to come.
        </motion.p>
      </section>
    </div>
  );
}
