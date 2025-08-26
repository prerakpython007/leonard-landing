"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const Landing = () => {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Parallax transforms
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const gameTextScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const gameTextOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

  return (
    <div className="bg-[#eeeeee] relative overflow-x-hidden">
      {/* Hero Section */}
      <section 
        ref={containerRef} 
        className="relative lg:min-h-screen h-[80vh] flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto px-8 md:px-4 w-full">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col -mt-8 sm:-mt-16 md:-mt-12"
          >
            {/* Welcome text */}
            <span className="text-[#00ADB5] my-4 sm:my-7 md:my-10 text-2xl sm:text-4xl md:text-2xl font-medium tracking-wide block mb-4 sm:mb-6 md:mb-4 text-center">
              Welcome to{" "}
              <span 
                className="font-extrabold block sm:inline mt-1 md:mt-0 italic"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Leonard Solutions
              </span>
            </span>

            {/* IPR Title */}
            <div className="text-center">
              <div className="flex items-baseline justify-center gap-4">
                <h1 className="text-4xl sm:text-5xl md:text-4xl font-black text-black leading-none uppercase tracking-wider">
                  IPR
                </h1>
                <div className="text-2xl sm:text-3xl md:text-3xl text-black font-normal">is our</div>
              </div>
            </div>

            {/* Hero Background with single video */}
            <div className="relative mb-4 sm:mb-6 md:mb-8 min-h-[180px] sm:min-h-[250px] md:min-h-[180px] lg:min-h-[400px] flex items-center w-full">
              <motion.div
                style={{ y: heroImageY }}
                className="absolute inset-0 z-0 overflow-hidden will-change-transform md:scale-90 md:-rotate-2"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform rotate-0 scale-[1.005] sm:rotate-1 sm:scale-[1.01] md:rotate-0 md:scale-100 lg:rotate-6 lg:scale-110 origin-center"
                  style={{
                    filter: "grayscale(40%) contrast(1.3) brightness(1.1) saturate(1.2)",
                  }}
                >
                  <source src="/lion.mp4" type="video/mp4" />
                </video>
              </motion.div>

              {/* GAME Text */}
              <div className="flex justify-center items-center w-full relative z-10">
                <motion.div
                  style={{
                    scale: gameTextScale,
                    opacity: gameTextOpacity,
                  }}
                  className="relative inline-block will-change-transform md:scale-90"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h1
                    className="text-[#ffffff] text-[3.5rem] sm:text-[7rem] md:text-[6rem] lg:text-[13rem] xl:text-[16rem] 2xl:text-[18rem] font-extrabold text-center relative z-10 leading-[0.8] sm:leading-[0.85] md:leading-[0.9] tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.2em] lg:tracking-[0.35em]"
                    style={{
                      textShadow:
                        "-2px 0px 0px rgba(100, 100, 100, 0.8), -4px 2px 0px rgba(80, 80, 80, 0.6), -6px 4px 0px rgba(60, 60, 60, 0.4), -8px 6px 0px rgba(40, 40, 40, 0.3), -10px 8px 0px rgba(20, 20, 20, 0.2)",
                    }}
                  >
                    GAME
                  </h1>
                </motion.div>
              </div>
            </div>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl md:text-xl text-[#393E46] mb-4 sm:mb-5 md:mb-6 font-normal text-center">
              Your Premier Legal Partners
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center px-4 sm:px-0">
              <motion.button
                className="w-full sm:w-auto bg-gradient-to-r from-[#00ADB5] to-[#009ca3] text-[#EEEEEE] px-6 py-3 rounded-lg text-sm font-semibold inline-flex items-center justify-center shadow-lg shadow-[#00ADB5]/15 transition-all duration-300 hover:from-[#009ca3] hover:to-[#00ADB5] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#00ADB5]/25"
                onClick={() => router.push("/contact-us")}
              >
                Start Consultation
              </motion.button>
              <motion.button
                className="bg-transparent text-[#222831] border-2 border-[#222831] px-6 py-3 rounded-lg text-sm cursor-pointer transition-all duration-300 hover:bg-[#222831] hover:text-[#EEEEEE]"
                whileHover={{ backgroundColor: "rgba(0, 173, 181, 0.1)" }}
                onClick={() => router.push("/about-us")}
              >
                Learn More →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Landing
