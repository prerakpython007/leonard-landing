"use client"

import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef, useCallback } from "react"

const Landing = () => {
  const router = useRouter()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Simplified mouse position values with reduced stiffness
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Lighter spring animations
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30, mass: 0.2 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30, mass: 0.2 })

  // Simplified parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const gameTextScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const gameTextOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

  // Simplified background movement (reduced intensity)
  const bgTransformX = useTransform(springX, (value) => `${value * 0.01}px`)
  const bgTransformY = useTransform(springY, (value) => `${value * 0.01}px`)

  // Throttled mouse move handler
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      // Cancel previous animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      // Use requestAnimationFrame to throttle updates
      animationFrameRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })

        // Simplified mouse position calculation
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2
        const relativeX = (e.clientX - centerX) * 0.5 // Reduced intensity
        const relativeY = (e.clientY - centerY) * 0.5

        mouseX.set(relativeX)
        mouseY.set(relativeY)
      })
    },
    [mouseX, mouseY],
  )

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [handleMouseMove])

  return (
    <div className="bg-[#EEEEEE] relative overflow-x-hidden">
      {/* Optimized Custom Blob Cursor */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="fixed pointer-events-none z-50 will-change-transform"
            style={{
              left: mousePosition.x - 88,
              top: mousePosition.y - 88,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              scale: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                mass: 0.5,
              },
              opacity: {
                duration: 0.1,
                ease: "easeOut",
              },
            }}
          >
            <img
              src="/lion-logo-face.png"
              alt="Lion Logo"
              className="w-44 h-44 object-contain drop-shadow-lg"
              loading="eager"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Optimized Parallax */}
      <section ref={containerRef} className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-8 md:px-4 w-full">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col -mt-16"
          >
            <span className="text-[#00ADB5] text-xl font-medium tracking-wide block mb-6 md:text-base md:mb-4 text-center">
              Welcome to <span className="font-extrabold"> Leonard Solutions</span>
            </span>

            <div className="text-left mb-6">
              <div className="flex items-baseline gap-4">
                <h1 className="text-6xl font-black text-black m-0 leading-none uppercase tracking-wider lg:text-5xl md:text-4xl">
                  IPR
                </h1>
                <div className="text-2xl text-black font-normal lg:text-xl md:text-lg">is our</div>
              </div>
            </div>

            <div className="relative mb-8 min-h-[400px] flex items-center w-full">
              {/* Simplified Background Image with GPU acceleration */}
              <motion.div
                style={{
                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                  y: useTransform([backgroundY, bgTransformY], ([bg, mouse]) => `calc(${bg} + ${mouse})`),
                  x: bgTransformX,
                }}
                className="absolute inset-0 z-0 overflow-hidden will-change-transform"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.12, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transform rotate-12 scale-125 origin-center will-change-transform"
                  style={{
                    backgroundImage: "url('/hero-image.png')",
                    filter: "grayscale(100%) contrast(1.1) brightness(0.9)",
                    transform: "translate3d(0, 0, 0)", // Force GPU acceleration
                  }}
                />
              </motion.div>

              {/* Simplified Hero Background Image */}
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
                <div
                  className="w-full h-full bg-cover bg-center transform rotate-12 scale-125 origin-center will-change-transform"
                  style={{
                    backgroundImage: "url('/heroImage.png')",
                    filter: "grayscale(40%) contrast(1.3) brightness(1.1) saturate(1.2)",
                    transform: "translate3d(0, 0, 0)", // Force GPU acceleration
                  }}
                />
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
                    className="text-[#ffffff] text-[15rem] sm:text-[12rem] md:text-[10rem] lg:text-[15rem] xl:text-[18rem] font-extrabold text-center relative z-10 cursor-none will-change-transform"
                    style={{
                      letterSpacing: "0.4em",
                      textShadow:
                        "-3px 0px 0px rgba(100, 100, 100, 0.8), -8px 3px 0px rgba(80, 80, 80, 0.6), -13px 6px 0px rgba(60, 60, 60, 0.4), -18px 9px 0px rgba(40, 40, 40, 0.3), -23px 12px 0px rgba(20, 20, 20, 0.2)",
                      transform: "translate3d(0, 0, 0)", // Force GPU acceleration
                    }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    GAME
                  </h1>
                </motion.div>
              </div>
            </div>

            <h2 className="text-3xl text-[#393E46] mb-6 font-normal lg:text-2xl md:text-xl text-center">
              Your Premier Legal Partners
            </h2>

            {/* Buttons */}
            <div className="flex gap-4 items-center justify-center">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@leonardsolutions.in&su=Consultation%20Request"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#00ADB5] to-[#009ca3] text-[#EEEEEE] px-6 py-3 rounded-lg text-sm font-semibold inline-flex items-center justify-center shadow-lg shadow-[#00ADB5]/15 transition-all duration-300 hover:from-[#009ca3] hover:to-[#00ADB5] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#00ADB5]/25"
              >
                Start Consultation
              </a>
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
