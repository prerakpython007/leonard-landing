"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-[#222831] text-white py-16 px-4 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Leonard Corporate Solutions</h3>
          <p className="text-gray-400">Your trusted partner in intellectual property and corporate law solutions.</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about-us" className="text-gray-400 hover:text-[#00ADB5] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-[#00ADB5] transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-gray-400 hover:text-[#00ADB5] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-[#00ADB5] transition-colors inline-flex items-center gap-1"
              >
                Privacy Policy <ArrowUpRight className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-[#00ADB5] transition-colors inline-flex items-center gap-1"
              >
                Terms of Service <ArrowUpRight className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact</h3>
          <p className="text-gray-400">Mumbai, India</p>
          <a 
            href="mailto:info@leonardsolutions.in"
            className="text-[#00ADB5] hover:text-[#00ADB5]/80 transition-colors"
          >
            info@leonardsolutions.in
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Leonard Corporate Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
