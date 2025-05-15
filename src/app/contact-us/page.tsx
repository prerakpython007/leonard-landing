"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import react-leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

// Import Leaflet CSS
import "leaflet/dist/leaflet.css"
// Fix for default marker icons in Leaflet
import L from "leaflet"
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1..9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ firstName: "", lastName: "", email: "", mobile: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative rounded-b-[5%] font-montserrat">
      {/* Grid Pattern Overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Hero Section */}
      <motion.section
        className="relative h-[80vh] flex items-center justify-center px-4 md:px-16 lg:px-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#222831] relative inline-block tracking-tight">
            Contact Us
            <span className="absolute top-1/2 -left-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 text-[#00ADB5] text-5xl animate-pulse opacity-50">✦</span>
          </h1>
          <p className="mt-8 text-xl text-[#393E46]/80 max-w-2xl mx-auto font-light">
            Get in Touch with Our Expert Team
          </p>
        </motion.div>
      </motion.section>

      {/* Contact Information Section */}
      <section className="py-32 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Contacting Us */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#222831] mb-6 relative">
              <span className="relative z-10">Contacting Us</span>
              <span className="absolute bottom-0 left-0 h-3 w-20 bg-[#00ADB5]/20 -z-10"></span>
            </h2>
            <p className="text-[#393E46] text-lg leading-relaxed">
              Upon request, we shall provide you with access to any personal information that we have collected about you
              through our website. In the event that the personal information is not accurate, kindly contact us at{" "}
              <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline">
                info@leonardsolutions.in
              </a>{" "}
              so that we may update this information and answer any questions that you may have.
            </p>
            <p className="text-[#393E-well6] text-lg leading-relaxed mt-4">
              We reserve the right to change this privacy policy at any time by posting a new or revised policy at this
              location.
            </p>
          </motion.div>

          {/* Head Office */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#222831] mb-6 relative">
              <span className="relative z-10">Head Office (Mumbai)</span>
              <span className="absolute bottom-0 left-0 h-3 w-20 bg-[#00ADB5]/20 -z-10"></span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={detail.title}
                  className="group flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-[#00ADB5] to-[#00959c] p-3 rounded-lg text-white transform group-hover:scale-110 transition-transform duration-300">
                    <detail.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#222831] mb-2">{detail.title}</h3>
                    {detail.title === "Email Us" ? (
                      <a href="mailto:info@leonardsolutions.in" className="text-[#00ADB5] hover:underline text-lg">
                        info@leonardsolutions.in
                      </a>
                    ) : (
                      <p className="text-[#393E46]/80">{detail.text}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          Our Branches In India
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#222831] mb-6 relative">
              <span className="relative z-10">Our Branches In India</span>
              <span className="absolute bottom-0 left-0 h-3 w-20 bg-[#00ADB5]/20 -z-10"></span>
            </h2>
            <motion.img
              src="/contact-map-color.png"
              alt="Indian Branches"
              className="max-w-4xl w-full h-auto rounded-lg mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* International Associates */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#222831] mb-6 relative">
              <span className="relative z-10">International Associates (Partners)</span>
              <span className="absolute bottom-0 left-0 h-3 w-20 bg-[#00ADB5]/20 -z-10"></span>
            </h2>
            <motion.img
              src="/word-map.png"
              alt="International Associates"
              className="max-w-4xl w-full h-auto rounded-lg mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Get In Touch Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#222831] mb-6 relative">
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute bottom-0 left-0 h-3 w-20 bg-[#00ADB5]/20 -z-10"></span>
            </h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-[#222831] font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#393E46]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-[#222831] font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#393E46]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#222831] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#393E46]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                  required
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-[#222831] font-medium mb-2">
                  Mobile No.
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#393E46]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-[#222831] font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#393E46]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5] min-h-[150px]"
                  required
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <motion.button
                  type="submit"
                  className="inline-flex items-center justify-center bg-[#00ADB5] hover:bg-[#222831] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Leaflet Map */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#222831] mb-6 relative">
              <span className="relative z-10">Our Global Locations</span>
              <span className="absolute bottom-0 left-0 h-3 w-20 bg-[#00ADB5]/20 -z-10"></span>
            </h2>
            {/* <MapComponent /> */}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const contactDetails = [
  {
    icon: MapPin,
    title: "Location",
    text: "Office No. 305, Creative Industrial Estate,\nSunder Nagar Road No. 02, Kalina,\nSantacruz (East), Mumbai,\nMaharashtra, 400 098.",
  },
  {
    icon: Phone,
    title: "Phone & Fax Number",
    text: "Landline: +91-22-26652048\n+91-22-26651538\nFax No: +91-22-265619248\nMobile: +91 9930032215",
  },
  {
    icon: Mail,
    title: "Email Us",
    text: "info@leonardsolutions.in",
  },
]

// Map Component
const MapComponent = () => {
  // Store locations (exactly as provided in your original code)
  const stores = [
    // Indian States/Territories
    { region: "Jammu and Kashmir", name: "Srinagar", lat: 34.0837, lng: 74.7973 },
    { region: "Himachal Pradesh", name: "Shimla", lat: 31.1048, lng: 77.1734 },
    { region: "Punjab", name: "Chandigarh", lat: 30.7333, lng: 76.7794 },
    { region: "Rajasthan", name: "Jaipur", lat: 26.9124, lng: 75.7873 },
    { region: "Gujarat", name: "Ahmedabad", lat: 23.0225, lng: 72.5714 },
    { region: "Madhya Pradesh", name: "Bhopal", lat: 23.2599, lng: 77.4126 },
    { region: "West Bengal", name: "Kolkata", lat: 22.5726, lng: 88.3639 },
    { region: "Odisha", name: "Bhubaneswar", lat: 20.2961, lng: 85.8245 },
    { region: "Andhra Pradesh", name: "Visakhapatnam", lat: 17.6868, lng: 83.2185 },
    { region: "Karnataka", name: "Bengaluru", lat: 12.9716, lng: 77.5946 },
    { region: "Kerala", name: "Thiruvananthapuram", lat: 8.5241, lng: 76.9366 },
    { region: "Tamil Nadu", name: "Chennai", lat: 13.0827, lng: 80.2707 },
    
    // Global Countries
    { region: "Canada", name: "Toronto", lat: 43.6532, lng: -79.3832 },
    { region: "United Kingdom", name: "London", lat: 51.5074, lng: -0.1278 },
    { region: "USA", name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
    { region: "USA", name: "Chicago", lat: 41.8781, lng: -87.6298 },
    { region: "USA", name: "New York", lat: 40.7128, lng: -74.0060 },
    { region: "UAE", name: "Dubai", lat: 25.2048, lng: 55.2708 },
    { region: "South Africa", name: "Cape Town", lat: -33.9249, lng: 18.4241 },
    { region: "Russia", name: "Moscow", lat: 55.7558, lng: 37.6173 },
    { region: "Ukraine", name: "Kyiv", lat: 50.4501, lng: 30.5234 },
    { region: "Nepal", name: "Kathmandu", lat: 27.7172, lng: 85.3240 },
    { region: "Bangladesh", name: "Dhaka", lat: 23.8103, lng: 90.4125 },
    { region: "China", name: "Beijing", lat: 39.9042, lng: 116.4074 },
    { region: "Hong Kong", name: "Hong Kong", lat: 22.3193, lng: 114.1694 },
    { region: "Sri Lanka", name: "Colombo", lat: 6.9271, lng: 79.8612 },
    { region: "Vietnam", name: "Hanoi", lat: 21.0285, lng: 105.8542 },
    { region: "Singapore", name: "Singapore", lat: 1.3521, lng: 103.8198 },
    { region: "Thailand", name: "Bangkok", lat: 13.7563, lng: 100.5018 },
    { region: "France", name: "Paris", lat: 48.8566, lng: 2.3522 },
    { region: "Japan", name: "Tokyo", lat: 35.6762, lng: 139.6503 },
    { region: "Nigeria", name: "Lagos", lat: 6.5244, lng: 3.3792 },
    { region: "Brazil", name: "São Paulo", lat: -23.5505, lng: -46.6333 },
    { region: "Australia", name: "Sydney", lat: -33.8688, lng: 151.2093 },
  ]

  // Define bounds to focus on Asia, centered on India
  const asiaBounds = L.latLngBounds([
    [5, 60], // Southwest corner (near southern India/Sri Lanka)
    [40, 120], // Northeast corner (near China/Japan)
  ])

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden">
      <MapContainer
        center={[20.5937, 78.9629]} // Center on India
        zoom={4} // Zoom level to show India and parts of Asia clearly
        style={{ height: "100%", width: "100%" }}
        bounds={asiaBounds} // Focus on Asia region
        boundsOptions={{ padding: [50, 50] }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {stores.map((store, index) => (
          <Marker key={index} position={[store.lat, store.lng]}>
            <Popup>
              <b>{`${store.region} - ${store.name}`}</b>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}