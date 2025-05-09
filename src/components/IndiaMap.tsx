"use client"

import { motion } from "framer-motion"
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./Map'), { 
  ssr: false,
  loading: () => <div className="w-full h-[800px] bg-white/50 rounded-lg animate-pulse" />
})

const IndiaMap = () => {
  return (
    <motion.div
      className="w-full mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Map />
    </motion.div>
  )
}

export default IndiaMap
