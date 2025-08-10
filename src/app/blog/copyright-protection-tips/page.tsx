'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CopyrightProtectionPage() {
  const blog = {
    title: "Copyright Protection Tips",
    image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    sectionBg: "https://images.unsplash.com/photo-1555435026-3f0e5a2c06f3",
    sectionContent: [
      `Copyright is a legal framework that protects original works of authorship — such as books, music, films, 
      photographs, software, and artwork — from unauthorized use. By securing copyright, creators gain exclusive 
      rights to reproduce, distribute, display, and adapt their work, ensuring they maintain control over how 
      their creations are used.`,

      `The first step in protecting your copyright is understanding that protection exists automatically once 
      an original work is fixed in a tangible form. However, registering your copyright with the relevant 
      authority, such as the U.S. Copyright Office, adds an extra layer of legal strength, enabling you to take 
      formal action against infringement and claim statutory damages.`,

      `Clearly marking your work with a copyright notice (©, your name, and the year) is a simple but effective 
      deterrent against unauthorized use. It communicates to others that your work is protected and that you 
      take your intellectual property rights seriously.`,

      `For digital works, using watermarks, metadata, and technological protection measures can help prevent 
      unauthorized copying or distribution. Content creators should also monitor the internet for potential 
      infringement, using tools and services that track unauthorized usage across websites, social media, 
      and marketplaces.`,

      `If you find that your work has been used without permission, act promptly. This may involve sending a 
      takedown notice under the Digital Millennium Copyright Act (DMCA) or seeking legal advice on enforcing 
      your rights. In some cases, a negotiated settlement or licensing agreement may resolve the issue without 
      the need for litigation.`,

      `Ultimately, protecting your copyright is about preserving the value of your creative efforts. By taking 
      proactive steps — from registration to monitoring and enforcement — you ensure that your hard work remains 
      both respected and legally secure.`
    ],
    extraImages: [
      "https://images.unsplash.com/photo-1607083204968-3fbe8ddf2d9b",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
      "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc"
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
          Protecting your copyright is not just a legal step — it’s a way to
          ensure your creativity is respected, your work remains valuable, and your
          career as a creator thrives.
        </motion.p>
      </section>
    </div>
  );
}
