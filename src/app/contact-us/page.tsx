"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, X } from "lucide-react";
import Image from "next/image";
import { WorldMap } from "~/_components/ui/world-map";
import { useInView } from "react-intersection-observer";
import { WorldMap2 } from "~/_components/ui/world-map2";

/* ---------- Fixed count hook ---------- */
function useCountOnView(target: number, duration = 1000) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let rafId: number;
    const start = performance.now();

    const step = (ts: number) => {
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration]); // Fixed: consistent dependency array

  return { count, ref };
}

const contactDetails = [
  {
    icon: MapPin,
    title: "Location",
    text:
      "Office No. 305, Creative Industrial Estate,\nSunder Nagar Road No. 02, Kalina,\nSantacruz (East), Mumbai,\nMaharashtra, 400 098.",
  },
  {
    icon: Phone,
    title: "Phone & Fax Number",
    text:
      "Landline: +91-22-26652048\n+91-22-26651538\nFax No. +91-22-265619248\nMobile: +91 9930032215",
  },
  {
    icon: Mail,
    title: "Email Us",
    text: "info@leonardsolutions.in",
  },
];

const stats = [
  {
    id: "countries",
    title: "Countries Served",
    target: 15,
    suffix: "+",
    img: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "clients",
    title: "Global Clients",
    target: 500,
    suffix: "+",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "cases",
    title: "Cases Handled",
    target: 1000,
    suffix: "+",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "support",
    title: "Support Available",
    staticValue: "24/7",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ firstName: "", lastName: "", email: "", mobile: "", message: "" });
    setShowPopup(true);
  };

  // Count hooks with consistent parameters
  const countries = useCountOnView(15, 1100);
  const clients = useCountOnView(500, 1400);
  const cases = useCountOnView(1000, 1600);

  return (
    <div className="min-h-screen bg-[#EEEEEE] relative font-roboto overflow-x-hidden">
      {/* Background L */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className="text-[60rem] sm:text-[80rem] md:text-[100rem] lg:text-[120rem] font-extrabold opacity-[0.08] select-none"
          style={{
            background: "linear-gradient(135deg, #00ADB5 0%, #0099A8 50%, #007B8A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            transform: "translateX(-5%) translateY(-5%)",
          }}
        >
          L
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="relative flex flex-col items-center gap-4 rounded-xl bg-white p-8 shadow-2xl max-w-lg w-full mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 text-[#393E46] hover:text-[#00ADB5]">
              <X className="h-6 w-6" />
            </button>
            <span className="text-4xl text-[#00ADB5]">✦</span>
            <p className="text-xl font-semibold text-[#222831] text-center">Your message was sent successfully!</p>
          </motion.div>
        </motion.div>
      )}

      <div className="relative z-10 space-y-12 sm:space-y-16 md:space-y-24">
        {/* Hero Section */}
        <motion.section className="relative min-h-[70vh] flex items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="w-full flex items-center">
            <motion.div className="w-1/2 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="max-w-2xl">
                <motion.h1
                  className="text-[#000000] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-left relative z-10"
                  style={{
                    letterSpacing: "0.3em",
                    textShadow: "-2px 0px 0px rgba(100,100,100,0.8), -6px 2px 0px rgba(80,80,80,0.6), -10px 4px 0px rgba(60,60,60,0.4)",
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  CONTACT US
                </motion.h1>

                <div className="mt-8 space-y-4">
                  <p className="text-lg sm:text-xl text-[#393E46] font-light leading-relaxed">Get in Touch with Our Expert Team for Legal Solutions</p>
                  <div className="flex items-center space-x-2 text-[#00ADB5]">
                    <span className="text-sm font-medium tracking-wider uppercase">Ready to Help</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="w-1/2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
                <WorldMap
                  dots={[
                    { start: { lat: 19.076, lng: 72.8777 }, end: { lat: 40.7128, lng: -74.006 } },
                    { start: { lat: 19.076, lng: 72.8777 }, end: { lat: 51.5074, lng: -0.1278 } },
                    { start: { lat: 19.076, lng: 72.8777 }, end: { lat: 35.6762, lng: 139.6503 } },
                    { start: { lat: 19.076, lng: 72.8777 }, end: { lat: -33.8688, lng: 151.2093 } },
                  ]}
                  lineColor="#00ADB5"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Head Office & Contact Form Section */}
        <section className="py-16 sm:py-32 px-4 md:px-16 lg:px-24 relative bg-[#EEEEEE]">
          <div className="max-w-7xl mx-auto space-y-16 sm:space-y-32">
            {/* Head Office */}
            <motion.div className="grid md:grid-cols-2 gap-16 items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="space-y-6">
                <div className="relative h-[500px] overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-[#00ADB5]/10 transform rotate-3" />
                  <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Our Office" fill className="object-cover" />
                </div>
              </div>

              <div className="relative">
                <h2 className="text-4xl font-bold text-[#222831] mb-6">Head Office (Mumbai)</h2>
                <div className="space-y-8">
                  {contactDetails.map((detail, index) => (
                    <motion.div key={detail.title} className="group flex items-start gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                      <div className="transform rounded-xl bg-gradient-to-br from-[#00ADB5] to-[#00959c] p-3 text-white transition-transform duration-300 group-hover:scale-110">
                        <detail.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-[#222831]">{detail.title}</h3>
                        {detail.title === "Email Us" ? (
                          <a href="mailto:info@leonardsolutions.in" className="text-lg text-[#00ADB5] hover:underline font-medium">info@leonardsolutions.in</a>
                        ) : (
                          <p className="text-[#393E46] whitespace-pre-line leading-relaxed">{detail.text}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="grid md:grid-cols-2 gap-20 items-center relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-[#222831] mb-6">Get In Touch</h2>
                <p className="text-lg text-[#393E46] leading-loose mb-8">Have questions or need assistance? We're here to help! Fill out the form and our team will get back to you shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="firstName" className="mb-2 block font-semibold text-[#222831] transition-colors group-focus-within:text-[#00ADB5]">First Name</label>
                      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full rounded-sm border-2 border-[#393E46]/20 p-3 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none" required />
                    </div>
                    <div className="group">
                      <label htmlFor="lastName" className="mb-2 block font-semibold text-[#222831] transition-colors group-focus-within:text-[#00ADB5]">Last Name</label>
                      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full rounded-sm border-2 border-[#393E46]/20 p-3 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="email" className="mb-2 block font-semibold text-[#222831] transition-colors group-focus-within:text-[#00ADB5]">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-sm border-2 border-[#393E46]/20 p-3 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none" required />
                    </div>
                    <div className="group">
                      <label htmlFor="mobile" className="mb-2 block font-semibold text-[#222831] transition-colors group-focus-within:text-[#00ADB5]">Mobile No.</label>
                      <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full rounded-sm border-2 border-[#393E46]/20 p-3 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none" required />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="mb-2 block font-semibold text-[#222831] transition-colors group-focus-within:text-[#00ADB5]">Your Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="min-h-[120px] w-full rounded-sm border-2 border-[#393E46]/20 p-3 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 focus:outline-none" required />
                  </div>

                  <motion.button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#00ADB5] to-[#00959c] px-8 py-3 font-bold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:to-[#00ADB5]" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    Send Message <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </form>
              </div>

              <div className="relative h-[700px] overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80" alt="Contact Form" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ---------- FULL WIDTH STATS SECTION ---------- */}
        <section className="relative">
          {/* Title */}
          <div className="text-center py-8 px-4">
            <motion.h2
              className="text-[#000000] text-3xl sm:text-4xl md:text-5xl font-extrabold"
              style={{
                letterSpacing: "0.2em",
                textShadow: "-1px 0px 0px rgba(100, 100, 100, 0.6), -2px 1px 0px rgba(80, 80, 80, 0.4)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              OUR GLOBAL REACH
            </motion.h2>
            <p className="text-lg text-[#393E46] mt-4">Serving clients worldwide from our Mumbai headquarters</p>
          </div>

          {/* Full Width Stats */}
          <div className="w-full">
            <div className="flex h-screen overflow-hidden">
              {stats.map((s, idx) => {
                const isSupport = s.id === "support";
                const hook = idx === 0 ? countries : idx === 1 ? clients : idx === 2 ? cases : null;
                const display = isSupport ? s.staticValue : `${hook?.count ?? 0}${s.suffix}`;

                return (
                  <article key={s.id} className="relative flex-1 group hover:flex-[2] flex transition-[flex] duration-500 ease-out">
                    <div className="absolute inset-0">
                      <Image src={s.img} alt={s.title} fill className="object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />

                    <div className="relative z-10 flex flex-col justify-center h-full p-6 md:p-8 text-white">
                      <div className="text-center">
                        <h3 className="text-sm md:text-base tracking-wider uppercase font-medium opacity-90 mb-3">{s.title}</h3>

                        {!isSupport ? (
                          <div ref={hook?.ref} className="text-4xl md:text-6xl font-extrabold text-[#00ADB5] leading-none mb-4">
                            {display}
                          </div>
                        ) : (
                          <div className="text-4xl md:text-6xl font-extrabold text-[#00ADB5] leading-none mb-4">{display}</div>
                        )}

                        <p className="text-sm md:text-base text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {s.id === "countries" && "We advise clients across Asia, Europe, and the Americas."}
                          {s.id === "clients" && "From startups to multinational corporations."}
                          {s.id === "cases" && "Corporate, IP, tax, and litigation matters resolved."}
                          {s.id === "support" && "Round-the-clock assistance for urgent needs."}
                        </p>
                      </div>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-[1px] bg-white/20" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
