'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PatentFilingPage() {
  const blog = {
    title: "The Patent Filing Process Explained",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    sectionBg: "https://imgs.search.brave.com/HYNf5ee-QgW-hJL8IWj9RBdaEF5Jz9beMv4DODd0S3A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMzExNjQw/Ny82NTYyMi9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzY1NjIyNzcx/OC1zdG9jay1waG90/by1oYW5kLWhvbGRp/bmctbm90ZXBhZC1w/YXRlbnQtY29uY2Vw/dC5qcGc",
    sectionContent: [
      `Patents are powerful tools that grant inventors exclusive rights to their innovations, preventing others 
      from making, using, or selling their creations without permission. The process of filing a patent can be 
      complex, but understanding each step ensures inventors protect their ideas effectively. Whether it’s a 
      groundbreaking machine, a new manufacturing method, or a unique product design, securing a patent is a 
      strategic move to safeguard innovation and gain a competitive edge in the marketplace.`,

      `The journey begins with determining whether your invention is truly patentable. This involves conducting 
      a thorough prior art search to confirm that no similar invention has already been patented or publicly 
      disclosed. In many cases, inventors work closely with patent attorneys or agents who can help assess the 
      novelty, utility, and non-obviousness of the invention — all key requirements for patent eligibility.`,

      `Once the invention is confirmed as patentable, the next step is preparing a strong patent application. 
      This document should include a detailed written description, drawings or diagrams where applicable, and 
      clearly defined claims that outline the scope of protection sought. Careful drafting is crucial; overly 
      broad claims may be rejected, while overly narrow claims may fail to protect the full value of the invention.`,

      `After filing the application with the relevant patent office — such as the United States Patent and Trademark 
      Office (USPTO) or the European Patent Office (EPO) — the examination process begins. Patent examiners review 
      the application, often issuing office actions that require responses or amendments. This back-and-forth may 
      take months or even years, depending on the complexity of the invention and the backlog at the patent office.`,

      `When the examiner is satisfied that the invention meets all legal requirements, the patent is granted. 
      From this point forward, the inventor holds exclusive rights for a defined period (typically 20 years from 
      the filing date for utility patents), provided maintenance fees are paid. A granted patent can be licensed, 
      sold, or enforced through legal action if infringed upon, making it a valuable business asset.`,

      `Ultimately, the patent filing process is more than just a legal formality — it is a strategic investment 
      in the future of innovation. By understanding the process and seeking expert guidance, inventors can 
      secure their place in a competitive marketplace and ensure their ideas are fully protected.`
    ],
    extraImages: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296",
      "https://images.unsplash.com/photo-1504691342899-8d2d2d7a3f93",
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818"
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
          Filing a patent is not just about securing legal rights — it’s about laying the foundation for 
          sustainable innovation, market leadership, and long-term business success.
        </motion.p>
      </section>
    </div>
  );
}
