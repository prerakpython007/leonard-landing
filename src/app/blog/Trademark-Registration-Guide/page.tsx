'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BlogPage() {
  const blog = {
    title: "Understanding IP Rights in the Digital Age",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    sectionBg: "https://imgs.search.brave.com/w_rZZGCrpvt9ymIHWi5hAYj3jA4mpyH4twOB2BQ0oyI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/NDY0NDEyNy9waG90/by93aGl0ZS1yZWdp/c3RlcmVkLXRyYWRl/bWFyay1zaWduLW5l/YXItZG9jdW1lbnRz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1FcVRaYkNuSEtX/N1Nnd0lmeUQzT2xo/WlpZNEpVWGlSQm9k/Q19JYU4zOEZVPQ",
    sectionContent: [
  `In today's interconnected world, intellectual property rights have taken on a new level of importance. 
  With the rapid advancement of technology and the increasing digitization of content, businesses, creators, 
  and innovators face both unprecedented opportunities and significant challenges. Protecting ideas, inventions, 
  and creative works is no longer confined to traditional legal frameworks; it requires a robust understanding 
  of how IP functions in the digital landscape. From software applications and music compositions to product 
  designs and brand identities, every form of intellectual output has the potential to be replicated, shared, 
  or misused in an instant. This makes proactive protection and awareness more critical than ever before.`,

  `The rise of global trade, e-commerce platforms, and digital media sharing means that a creative work or 
  innovative product can be accessed worldwide in seconds. While this offers vast opportunities for growth 
  and collaboration, it also exposes creators to greater risks of infringement, counterfeiting, and unauthorized 
  distribution. These challenges have amplified the importance of international treaties, cross-border cooperation, 
  and digital rights management tools. Businesses that fail to adapt to these realities may find their competitive 
  edge eroded, not because their ideas lack value, but because they were left vulnerable to exploitation.`,

  `Modern businesses must adapt quickly to these changes, ensuring their intellectual assets are protected 
  across multiple jurisdictions. Without proper IP strategies, even the most innovative products risk being 
  copied, misused, or lost in a competitive global market. This involves not just securing patents, copyrights, 
  or trademarks, but also implementing monitoring systems, engaging legal expertise, and maintaining a vigilant 
  watch over emerging markets. In a world where imitation is just a click away, the companies that thrive will 
  be those that combine creativity with a strong defensive IP posture.`,

  `Looking forward, collaboration between governments, corporations, and innovators will be key in creating 
  IP laws and policies that are adaptable to new technologies and evolving market demands. Emerging fields such 
  as artificial intelligence, blockchain, and the metaverse present both exciting opportunities and complex legal 
  dilemmas. The balance between protecting creators and encouraging innovation will define the next era of 
  intellectual property management. Ultimately, a forward-thinking, cooperative approach will ensure that IP 
  remains a powerful driver of economic growth and creative expression in the decades to come.`
],

    extraImages: [
      "https://imgs.search.brave.com/AYAC_iZ5ED_yBEFOJZJuypJvH0VhLJKFVa928gk9iXk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by90cmFkZW1h/cmstbWFya2VkLW9u/LXJ1YmJlci1zdGFt/cC0yNjBudy04MTE5/MzQ4Ni5qcGc",
      "https://imgs.search.brave.com/coS8WdM7SULrzGUro9ppnw88tBI0kHoJMmmcBejO7Qw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAxMDYx/My82NTM5MC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzY1MzkwMzU5/NC1zdG9jay1waG90/by1yZWdpc3Rlci10/cmFkZW1hcmstY29w/eXJpZ2h0LXN5bWJv/bC1sb2dvLmpwZw",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312"
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
     <section className="relative w-full min-h-screen flex items-center px-6 py-20">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src={blog.sectionBg}
      alt="Section Background"
      fill
      className="object-cover opacity-50"
    />
    {/* Dark Overlay for Text Readability */}
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
        className="text-lg leading-relaxed font-medium  "
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
          As the digital era continues to evolve, so too must our approach to safeguarding 
          intellectual property. The future belongs to those who understand the balance between 
          innovation, collaboration, and protection of creative works.
        </motion.p>
      </section>
    </div>
  );
}
