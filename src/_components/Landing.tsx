"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef, useCallback } from "react"

const Landing = () => {
  const router = useRouter()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Enhanced mouse position values for better interactivity
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // More responsive spring animations
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25, mass: 0.3 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25, mass: 0.3 })

  // Simplified parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const gameTextScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const gameTextOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

  // Enhanced background movement with increased intensity
  const bgTransformX = useTransform(springX, (value) => `${value * 0.05}px`)
  const bgTransformY = useTransform(springY, (value) => `${value * 0.05}px`)

  // Throttled mouse move handler
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })

        // Enhanced mouse position calculation for better interaction
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2
        const relativeX = (e.clientX - centerX) * 0.8
        const relativeY = (e.clientY - centerY) * 0.8

        mouseX.set(relativeX)
        mouseY.set(relativeY)
      })
    },
    [mouseX, mouseY],
  )

  useEffect(() => {
    // Load custom font
    const font = new FontFace(
      'EduNSWACTCursive',
      'url(/fonts/Edu_NSW_ACT_Cursive/EduNSWACTCursive-VariableFont_wght.ttf)'
    )
    font.load().then(() => {
      document.fonts.add(font)
    }).catch(err => console.log('Font loading failed:', err))

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [handleMouseMove])

  return (
    <div className="bg-[#000000] relative overflow-x-hidden">
      {/* Hero Section with Enhanced Interactive Parallax */}
      <section ref={containerRef} className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-8 md:px-4 w-full">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col -mt-16"
          >
            <span className="text-[#00ADB5] my-7  text-xl font-medium tracking-wide block mb-6 md:text-base md:mb-4 text-center">
              Welcome to <span className="font-extrabold" style={{ fontFamily: 'EduNSWACTCursive, cursive', fontWeight: 'normal' }}> Leonard Solutions</span>
            </span>

            <div className="text-left mb-6">
              <div className="flex items-baseline gap-4">
                <h1 className="text-4xl sm:text-3xl md:text-3xl font-black text-black m-0 leading-none uppercase tracking-wider">
                  IPR
                </h1>
                <div className="text-lg sm:text-xl md:text-2xl text-black font-normal">is our</div>
              </div>
            </div>

            <div className="relative mb-4 sm:mb-6 md:mb-8 min-h-[180px] sm:min-h-[250px] md:min-h-[200px] lg:min-h-[400px] flex items-center w-full">
              {/* Enhanced Interactive Background Video */}
              <motion.div
                style={{
                  y: useTransform([backgroundY, bgTransformY], ([bg, mouse]) => `calc(${bg} + ${mouse})`),
                  x: bgTransformX,
                }}
                className="absolute inset-0 z-0 overflow-hidden will-change-transform"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform rotate-0 scale-[1.005] sm:rotate-1 sm:scale-[1.01] md:rotate-1 md:scale-[1.01] lg:rotate-6 lg:scale-110 origin-center will-change-transform"
                  style={{
                    filter: "grayscale(100%) contrast(1.2) brightness(0.8)",
                    transform: "translate3d(0, 0, 0)",
                  }}
                >
                  <source src="/lion.mp4" type="video/mp4" />
                </video>
              </motion.div>

              {/* Enhanced Interactive Hero Background Video */}
              <motion.div
                style={{
                  y: useTransform([heroImageY, bgTransformY], ([hero, mouse]) => `calc(${String(hero)} + ${String(mouse)})`),
                  x: bgTransformX,
                }}
                className="absolute inset-0 z-0 overflow-hidden will-change-transform"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform rotate-0 scale-[1.005] sm:rotate-1 sm:scale-[1.01] md:rotate-1 md:scale-[1.01] lg:rotate-6 lg:scale-110 origin-center will-change-transform"
                  style={{
                    filter: "grayscale(40%) contrast(1.3) brightness(1.1) saturate(1.2)",
                    transform: "translate3d(0, 0, 0)",
                  }}
                >
                  <source src="/lion.mp4" type="video/mp4" />
                </video>
              </motion.div>

              {/* Optimized GAME Text */}
              <div className="flex justify-center items-center w-full relative z-10">
                <motion.div
                  style={{
                    scale: gameTextScale,
                    opacity: gameTextOpacity,
                  }}
                  className="relative inline-block will-change-transform"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h1
                    className="text-[#ffffff] text-[5rem] sm:text-[7rem] md:text-[3rem] lg:text-[13rem] xl:text-[16rem] 2xl:text-[18rem] font-extrabold text-center relative z-10 will-change-transform leading-[0.8] sm:leading-[0.85] md:leading-[0.9] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.35em]"
                    style={{
                      textShadow:
                        "-2px 0px 0px rgba(100, 100, 100, 0.8), -4px 2px 0px rgba(80, 80, 80, 0.6), -6px 4px 0px rgba(60, 60, 60, 0.4), -8px 6px 0px rgba(40, 40, 40, 0.3), -10px 8px 0px rgba(20, 20, 20, 0.2)",
                      transform: "translate3d(0, 0, 0)",
                    }}
                  >
                    GAME
                  </h1>
                </motion.div>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-xl text-[#393E46] mb-4 sm:mb-5 md:mb-6 font-normal text-center">
              Your Premier Legal Partners
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
              <motion.button
                className="bg-gradient-to-r from-[#00ADB5] to-[#009ca3] text-[#EEEEEE] px-6 py-3 rounded-lg text-sm font-semibold inline-flex items-center justify-center shadow-lg shadow-[#00ADB5]/15 transition-all duration-300 hover:from-[#009ca3] hover:to-[#00ADB5] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#00ADB5]/25"
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



