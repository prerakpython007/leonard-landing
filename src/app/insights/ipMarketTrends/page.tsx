'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function IPMarketTrendsPage() {
  return (
    <div className="bg-[#EEEEEE] text-black">
      {/* Banner */}
      <section className="relative w-full h-[60vh]  flex items-center justify-center text-center px-6">
        <Image
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
          alt="IP Market Trends"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[#EEEEEE]/70" />
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            IP Market Trends
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto"
          >
            A data-driven look at how intellectual property is shaping the
            global economy in 2025.
          </motion.p>
        </div>
      </section>

      {/* Key Metrics with BG Image */}
   {/* Key Metrics with per-card BG Images */}
<section className="relative bg-black/20 py-16">
  <Image
    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    alt="Stats Background"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/80" />
  <div className="relative grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
    {[
      {
        stat: "↑ 14%",
        label: "Growth in AI-related patent filings (2024–2025)",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      },
      {
        stat: "$450B",
        label: "Estimated global IP licensing market value",
        img: "https://images.unsplash.com/photo-1560264418-c4445382edbc",
      },
      {
        stat: "37%",
        label: "Increase in cross-border IP disputes",
        img: "https://images.unsplash.com/photo-1593642634443-44adaa06623a",
      },
    ].map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.2 }}
        className="relative h-[220px]  overflow-hidden shadow-lg flex flex-col justify-center items-center text-center"
      >
        {/* Card background image */}
        <Image
          src={item.img}
          alt={item.label}
          fill
          className="object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Card content */}
        <div className="relative z-10">
          <p className="text-4xl font-bold text-white">{item.stat}</p>
          <p className="mt-2 text-gray-200 text-sm max-w-[90%] mx-auto">
            {item.label}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* Two Column Analysis */}
  <section className="w-full">
  <div className="grid grid-cols-3 grid-rows-3 gap-0">
    {[
    { img: "https://images.unsplash.com/photo-1581094794329-c8112a89e4b3", text: "AI in IP Strategy" },
    { img: "https://images.unsplash.com/photo-1581091012184-5c9af7b5fc54", text: "Patent Market Growth" },
    { img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c", text: "Global IP Collaboration" },
    { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", text: "Tech-driven Licensing" },
    { img: "https://images.unsplash.com/photo-1556157382-97eda2d62296", text: "Startups & IP Valuation" },
    { img: "https://images.unsplash.com/photo-1593642634443-44adaa06623a", text: "IP in Renewable Energy" },
    { img: "https://images.unsplash.com/photo-1581092334651-ddf36f1f2f49", text: "Cross-border IP Deals" },
    { img: "https://images.unsplash.com/photo-1518770660439-4636190af475", text: "Blockchain & IP Security" },
    { img: "https://images.unsplash.com/photo-1581091215360-9b6e69c90e1d", text: "Future of IP Markets" },
  ].map((item, idx) => (
      <div
        key={idx}
        className="relative w-full h-[250px] md:h-[300px] overflow-hidden group transition-all duration-300 ease-in-out hover:z-10 hover:scale-105"
      >
        <Image
          src={item.img}
          alt={`IP Trend ${idx + 1}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-[#EEEEEE] text-lg font-semibold px-4 text-center">{item.text}</p>
        </div>
      </div>
    ))}
  </div>
</section>
      {/* Market Insights Blocks */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          {[
            {
              title: "IP Monetization as a Revenue Stream",
              desc: "Companies are increasingly leveraging their IP portfolios for licensing, joint ventures, and cross-sector collaborations. This strategic shift turns IP from a defensive tool into a profit center.",
            },
            {
              title: "Cross-Border Enforcement",
              desc: "Globalization has made IP disputes more complex. Multi-jurisdictional enforcement strategies are becoming essential, especially with fast-growing markets in Asia and Africa.",
            },
            {
              title: "Digital Enforcement Tools",
              desc: "AI-powered monitoring systems and blockchain-based registries are making IP protection faster, more transparent, and harder to circumvent.",
            },
          ].map((trend, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="border-l-4 border-black pl-6"
            >
              <h3 className="text-2xl font-semibold mb-2">{trend.title}</h3>
              <p className="text-gray-700">{trend.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Looking Ahead
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-lg"
        >
          The IP market is evolving into a high-stakes arena where innovation,
          finance, and global competition intersect. Businesses that anticipate
          these shifts and adapt their strategies will secure stronger market
          positions in the coming decade.
        </motion.p>
      </section>
    </div>
  );
}
