"use client"

import React from "react"
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "motion/react"
import ParticleSVGAnimation from "./particle-svg-animation"// Import the new component

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(10, 15)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig)
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig)
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig)
  return (
    <div
      ref={ref}
      className="relative flex h-[300vh] flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex flex-row space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="relative top-0 left-0 mx-auto w-full max-w-7xl px-4 py-2 md:py-6" style={{ marginTop: "-40px" }}>
      <div className="flex flex-col md:flex-row md:gap-x-24 gap-y-10 items-center justify-center">
        <div
          // Adjusted max-w for better text layout
          className="relative flex items-center z-50 justify-center w-full max-w-[550px] h-[600px]"
        >
          <ParticleSVGAnimation svgSrc="/image.svg" />
        </div>
        <div className="flex-1 py-6 md:py-10 md:pl-10 text-center md:text-left">
          <h1 className="text-2xl font-bold md:text-5xl lg:text-xl dark:text-black leading-tight">
            Welcome to <br /><span className="text-6xl"> Leonard Solutions </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-xl dark:text-black">
            <span
              className="font-bold text-3xl md:text-4xl lg:text-5xl"
              style={{
                color: "#000000",
                textShadow: "0 0 16px #fff, 0 0 32px #fff, 0 0 48px #fff",
                filter: "brightness(1.5)",
              }}
            >
              IPR
            </span>
            <span className="ml-2">is our</span>
            <br className="hidden md:block" />
            <span className="ml-2">game</span>
            <br />
            <span className="block mt-4 text-lg md:text-xl text-[#393E46]">Your Premier Legal Partners</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product relative h-96 w-[30rem] shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail || "/placeholder.svg"}
          height="600"
          width="600"
          className="absolute inset-0 h-full w-full object-cover object-left-top"
          alt={product.title}
        />
      </a>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-80"></div>
      <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100">{product.title}</h2>
    </motion.div>
  )
}

const Page = () => {
  return <div>{/* Page content here */}</div>
}

export default Page
