"use client"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

const Landing = () => {
  const router = useRouter()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="bg-[#EEEEEE] relative min-h-screen overflow-x-hidden">
      {/* Custom Blob Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 48,
          y: mousePosition.y - 48,
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          x: {
            type: "spring",
            stiffness: 500,
            damping: 28,
            mass: 0.5,
          },
          y: {
            type: "spring",
            stiffness: 500,
            damping: 28,
            mass: 0.5,
          },
          scale: {
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.8,
          },
          opacity: {
            duration: 0.2,
            ease: "easeInOut",
          },
        }}
        initial={{ scale: 0, opacity: 0 }}
      >
        <img src="/lion-logo.png" alt="Lion Logo" className="w-24 h-24 object-contain drop-shadow-lg" />
      </motion.div>

      <section className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-8 md:px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col -mt-16"
          >
            <span className="text-[#00ADB5] text-xl font-medium tracking-wide block mb-6 md:text-base md:mb-4 text-center">
              Welcome to Leonard Solutions
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
              {/* Diagonal Legal Background Image */}
              <motion.div
                className="absolute inset-0 z-0 overflow-hidden"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.12, scale: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transform rotate-12 scale-125 origin-center"
                  style={{
                    backgroundImage: "url('/images/legal-team-background.png')",
                    filter: "grayscale(100%) contrast(1.1) brightness(0.9)",
                  }}
                />
              </motion.div>
              {/* Diagonal Hero Background Image */}
              <motion.div
                className="absolute inset-0 z-0 overflow-hidden"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                <div
                  className="w-full h-full bg-cover bg-center transform rotate-12 scale-125 origin-center"
                  style={{
                    backgroundImage: "url('/heroImage.png')",
                    filter: "grayscale(40%) contrast(1.3) brightness(1.1) saturate(1.2)",
                  }}
                />
              </motion.div>
              {/* Main GAME Text with Original Styling */}
              <div className="flex justify-center items-center w-full relative z-10">
                <motion.div
                  className="relative inline-block"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h1
                    className="text-[#ffffff] text-[15rem] sm:text-[12rem] md:text-[10rem] lg:text-[15rem] xl:text-[18rem] font-extrabold text-center relative z-10 cursor-none"
                    style={{
                      letterSpacing: "0.4em",
                      textShadow:
                        "-3px 0px 0px rgba(100, 100, 100, 0.8), -8px 3px 0px rgba(80, 80, 80, 0.6), -13px 6px 0px rgba(60, 60, 60, 0.4), -18px 9px 0px rgba(40, 40, 40, 0.3), -23px 12px 0px rgba(20, 20, 20, 0.2)",
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
            {/* Smaller Side-by-Side Buttons */}
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
