"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"

export default function FloatingContact() {
  return (
    <AnimatePresence>
      <div className="fixed bottom-20 right-8 flex flex-col gap-4 z-[60]">
        <motion.a
          href="tel:+919930032215"
          className="bg-gradient-to-r from-[#00ADB5] to-[#00959c] p-3 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Phone className="w-6 h-6" />
          <span className="hidden group-hover:inline-block">Call Us</span>
        </motion.a>
        <motion.a
          href="https://wa.me/919930032215"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-3 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden group-hover:inline-block">WhatsApp</span>
        </motion.a>
      </div>
    </AnimatePresence>
  )
}
