"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const aboutText = [
  "India's Leading Intellectual Property & Corporate Law Firm",
  "Leonard Corporate Solutions Pvt. Ltd. is a top-tier legal firm based in Mumbai, Maharashtra, specializing exclusively in Intellectual Property Rights (IPR), Corporate Law, and Taxation ,With over a decade of legal excellence, we have earned a reputation as one of India's most trusted names in the field of IP law and business legal advisory.",
];

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCount = () => {
    if (hasAnimated) return;
    
    setHasAnimated(true);
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * target);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={animateCount}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <span
        className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#00ADB5] mb-2 md:mb-4"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        {count}{suffix && <span className="text-xl md:text-2xl align-top">{suffix}</span>}
      </span>
    </motion.div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Responsive background animation
  const backgroundX = useTransform(scrollYProgress, [0, 0.15], ["-100%", "0%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  // Helper to split text into words for animation
  const renderAnimatedText = (text: string, baseDelay = 0) => {
    const words = text.split(" ");
    return words.map((word, idx) => (
      <motion.span
        key={`${word}-${idx}`}
        className="inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: baseDelay + idx * 0.08,
        }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }} // Adjust for mobile
      >
        {word}&nbsp;
      </motion.span>
    ));
  };

  useEffect(() => {
    // Load custom font
    const font = new FontFace(
      'EduNSWACTCursive',
      'url(/fonts/Edu_NSW_ACT_Cursive/EduNSWACTCursive-VariableFont_wght.ttf)'
    )
    font.load().then(() => {
      document.fonts.add(font)
    }).catch(err => console.log('Font loading failed:', err))
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0b0b] px-4 py-16 sm:py-20 md:py-24 lg:py-32 md:px-8 lg:px-16"
    >
      {/* Background Image - Responsive */}
      <div className="absolute top-0 left-0 w-full h-[800px] md:h-[1200px] z-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/justice-scale.png')",
            filter: "grayscale(30%) contrast(1.1) brightness(0.8)",
            clipPath: "polygon(0 0, 75% 0, 45% 100%, 0 100%)",
            x: backgroundX,
            opacity: backgroundOpacity,
          }}
        />
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#0a0b0b] to-transparent" />
      </div>

      {/* ABOUT US Title - Responsive */}
      <motion.h1
        className="text-[#EEEEEE] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-24 md:mb-48 relative z-10 px-4"
        style={{
          letterSpacing: "0.3em",
          textShadow:
            "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4)",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        ABOUT US
      </motion.h1>

      {/* Animated Text - Responsive */}
      <div className="w-full flex justify-start relative z-10">
        <div className="text-[#EEEEEE] font-medium space-y-6 mb-12 md:mb-16 max-w-4xl lg:max-w-6xl">
          <motion.div className="mb-4 md:mb-6 text-left px-2 sm:px-4 md:px-8 lg:px-16">
            <span
              className="block font-bold text-[#00ADB5] mb-2"
              style={{
                fontSize: "clamp(1.2rem, 4vw, 2.2rem)",
                lineHeight: "1.15",
                fontFamily: 'EduNSWACTCursive, cursive',
                fontWeight: 'bold'
              }}
            >
              {renderAnimatedText(aboutText[0] ?? "", 0)}
            </span>
          </motion.div>
          
          <motion.div
            className="text-base sm:text-lg md:text-xl text-[#EEEEEE] opacity-90 text-left px-2 sm:px-4 md:px-8 lg:px-16"
            style={{
              lineHeight: "1.7",
              letterSpacing: "0.01em",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            {(aboutText[1] ?? "")
              .split(/([.?!]\s)/)
              .filter(Boolean)
              .map((sentence, sIdx) => (
                <span key={`sentence-${sIdx}`} style={{ display: "inline-block" }}>
                  {sentence
                    .split(" ")
                    .map((word, wIdx) => (
                      <span key={`word-${sIdx}-${wIdx}`} style={{ display: "inline-block" }}>
                        {word.split("").map((char, cIdx) => (
                          <motion.span
                            key={`char-${sIdx}-${wIdx}-${cIdx}`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.25,
                              delay: 0.5 + sIdx * 0.3 + wIdx * 0.08 + cIdx * 0.01,
                            }}
                            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                            style={{ display: "inline-block" }}
                          >
                            {char}
                          </motion.span>
                        ))}
                        &nbsp;
                      </span>
                    ))}
                </span>
              ))}
          </motion.div>
          
          {/* Corner Arrow */}
          <motion.div
            className="mt-6 md:mt-8 flex justify-start px-2 sm:px-4 md:px-8 lg:px-16"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <a
              href="/about-us"
              className="inline-flex items-center justify-center rounded-full border border-[#00ADB5] p-2"
              style={{ width: 48, height: 48 }}
            >
              <ArrowUpRight
                size={28}
                strokeWidth={1.5}
                className="text-[#00ADB5]"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats Section - Responsive Grid */}
      <div className="max-w-7xl mx-auto w-full mb-24 md:mb-44 mt-12 md:mt-20 px-2 sm:px-4 md:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {/* Years of Excellence */}
          <motion.div 
            className="bg-[#080909] p-4 md:p-6 lg:p-8 text-center transition-all duration-300 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <AnimatedCounter target={11} suffix="+" duration={2.5} />
            <span className="block text-xs sm:text-sm md:text-base text-[#EEEEEE] font-semibold">
              Years of Excellence
            </span>
          </motion.div>

          {/* Satisfied Clients */}
          <motion.div 
            className="bg-[#080909] p-4 md:p-6 lg:p-8 text-center transition-all duration-300 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <AnimatedCounter target={500} suffix="+" duration={3} />
            <span className="block text-xs sm:text-sm md:text-base text-[#EEEEEE] font-semibold">
              Satisfied Clients
            </span>
          </motion.div>

          {/* Cases Handled */}
          <motion.div 
            className="bg-[#080909] p-4 md:p-6 lg:p-8 text-center transition-all duration-300 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <AnimatedCounter target={1000} suffix="+" duration={3.5} />
            <span className="block text-xs sm:text-sm md:text-base text-[#EEEEEE] font-semibold">
              Cases Handled
            </span>
          </motion.div>

          {/* Success Rate */}
          <motion.div 
            className="bg-[#080909] p-4 md:p-6 lg:p-8 text-center transition-all duration-300 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <AnimatedCounter target={98} suffix="%" duration={2.8} />
            <span className="block text-xs sm:text-sm md:text-base text-[#EEEEEE] font-semibold">
              Success Rate
            </span>
          </motion.div>
        </div>
      </div>

      {/* KNOW US Section - Responsive Layout */}
      <div className="w-full max-w-[100vw] py-12 md:py-20 relative z-10 overflow-hidden px-4">
        <div className="max-w-7xl w-full mx-auto">
          {/* Section Title */}
          <motion.h2
            className="text-[#EEEEEE] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-12 md:mb-20 relative z-10 px-4"
            style={{
              letterSpacing: "0.2em",
              textShadow: "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6)"
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            KNOW US
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center relative min-h-[600px] md:min-h-[800px] lg:min-h-[900px]">
            {/* Image Section - Full width on mobile, half on desktop */}
            <motion.div
              className="w-full lg:w-1/2 h-[400px] md:h-[600px] lg:h-full lg:absolute lg:left-0 -ml-4 md:-ml-8 lg:-ml-20"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <div className="absolute inset-0 overflow-hidden shadow-xl h-full w-full">
                <img
                  src="/strategy.jpg"
                  alt="Leonard Solutions Strategy"
                  className="w-full h-full object-cover object-center lg:object-left transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30"></div>
              </div>
            </motion.div>

            {/* Content Section - Full width on mobile, half on desktop positioned on right */}
            <motion.div
              className="w-full lg:w-1/2 lg:ml-auto space-y-4 md:space-y-6 lg:space-y-8 lg:pl-8 relative z-10 mt-8 lg:mt-0 bg-[#0a0b0b] lg:bg-transparent p-4 lg:p-0"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#EEEEEE] mb-4 md:mb-6">
                Our Litigation Lawyers focusing on Family, Employment, Estates, Immigration and Strata Law
              </h3>
              
              <p className="text-sm md:text-base lg:text-lg text-[#EEEEEE] opacity-90 leading-relaxed mb-6 md:mb-8">
                Numerous awards won and voted as the top attorneys in Vancouver through multiple platforms. Our lawyers have an insatiable thirst to help our clients the best that they can, and know nothing but perfection when it comes to representing our clients.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {[
                  "What We Do", "What to Expect", "Case Victories", "Careers", 
                  "Awards & Press", "Family Law Canada", "Community Involvement", "Our Strategy"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="text-[#00ADB5] text-sm md:text-base font-semibold hover:text-[#EEEEEE] cursor-pointer transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  >
                    • {item}
                  </motion.div>
                ))}
              </div>

              <div className="bg-[#080909] p-4 md:p-6 rounded-xl border-l-4 border-[#00ADB5] mb-4 md:mb-6">
                <p className="text-[#EEEEEE] opacity-90 leading-relaxed text-sm md:text-base">
                  Hiring a lawyer at Leonard Solutions from our Vancouver, Surrey or Chilliwack branch means you have hired all of our lawyers because we have morning meetings in which we discuss all of our cases and together, and come up with the best strategy to resolve your case.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-[#EEEEEE]">Why We Do Everything Different</h4>
                <p className="text-[#EEEEEE] opacity-90 leading-relaxed text-sm md:text-base">
                  We are not traditional Vancouver lawyers. We collaborate, are highly energetic and have an insatiable thirst for success. We do not use the client's money on advertising or expensive purchases.
                </p>
                <p className="text-[#EEEEEE] opacity-90 leading-relaxed text-sm md:text-base">
                  We are down to earth and our first priority is helping the client. That is why we are successful. We believe that law must conform and change as we change and for this reason, we constantly challenge the core and limits of law.
                </p>
              </div>

              <motion.button
                className="bg-[#00ADB5] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-[#009ca3] transition-colors duration-300 shadow-lg text-sm md:text-base mt-6"
                whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0, 173, 181, 0.3)" }}
                whileTap={{ y: 0 }}
                onClick={() => {
                  window.location.href = '/about-us#meet-our-team';
                }}
              >
                Learn More About Our Lawyers
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cards Section - Responsive */}
      <div className="w-full mt-12 md:mt-24 pb-24 md:pb-44 mb-12 md:mb-24 relative">
        <div className="absolute inset-0 bg-[#EEEEEE] -mx-4 md:-mx-8 lg:-mx-16"></div>
        <motion.h2
            className="text-[#000000] text-3xl py-10 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center   relative z-10 px-4"
            style={{
              letterSpacing: "0.2em",
              textShadow: "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6)"
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            Our Expertise
          </motion.h2>
        <div className="max-w-7xl mx-auto px-2 py-12 md:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 mt-0 lg:mt-12 xl:mt-24">
              <ParallaxCard
                img="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
                title="Trademark Excellence"
                desc="Protect your brand with our expert trademark registration and enforcement services."
                parallax={-30}
              />
              <ParallaxCard
                img="patent-strategy.png"
                title="Patent Strategy"
                desc="Innovate with confidence. We help you secure and manage your patents globally."
                parallax={-10}
              />
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 mt-0 lg:-mt-8">
              <ParallaxCard
                img="corporate-law.png"
                title="Corporate Law"
                desc="Comprehensive legal solutions for startups, SMEs, and large enterprises."
                parallax={10}
              />
              <ParallaxCardVideo
                videoSrc="/about-vid-card.mp4"
                title="IP Litigation"
                desc="Defend your intellectual property rights with our experienced litigation team."
                parallax={0}
              />
              <ParallaxCard
                img="/taxation-advisory.png"
                title="Taxation Advisory"
                desc="Navigate complex tax laws with our strategic advisory and compliance support."
                parallax={-10}
              />
            </div>
            
            {/* Column 3 */}
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 mt-0 lg:mt-12 xl:mt-24">
              <ParallaxCard
                img="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
                title="Design Protection"
                desc="Safeguard your creative designs and innovations with robust legal coverage."
                parallax={20}
              />
              <ParallaxCard
                img="global-reach.png"
                title="Global Reach"
                desc="Expand internationally with our cross-border IP and legal expertise."
                parallax={40}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Responsive ParallaxCard component
const ParallaxCard = ({
  img,
  title,
  desc,
  parallax = 0,
}: {
  img: string;
  title: string;
  desc: string;
  parallax?: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", `${parallax}px`]);

  return (
    <motion.div
      ref={ref}
      className="bg-[#181a1b] rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center border border-[#222831] hover:border-[#00ADB5] transition-all duration-300"
      style={{ y }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 12
      }}
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <motion.img
        src={img}
        alt={title}
        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-t-xl"
        style={{ background: "#222831" }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className="p-4 md:p-6 lg:p-8 flex flex-col gap-1 md:gap-2">
        <motion.h3 
          className="text-lg md:text-xl font-bold text-[#00ADB5] mb-1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-[#EEEEEE] text-sm md:text-base opacity-80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {desc}
        </motion.p>
      </div>
    </motion.div>
  );
};

// Responsive ParallaxCardVideo component
const ParallaxCardVideo = ({
  videoSrc,
  title,
  desc,
  parallax = 0,
}: {
  videoSrc: string;
  title: string;
  desc: string;
  parallax?: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", `${parallax}px`]);

  return (
    <motion.div
      ref={ref}
      className="bg-[#181a1b] rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center border border-[#00ADB5] hover:border-[#00ADB5] transition-all duration-300"
      style={{ y }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 12
      }}
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <motion.video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-t-xl"
        style={{ background: "#222831" }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className="p-4 md:p-6 lg:p-8 flex flex-col gap-1 md:gap-2">
        <motion.h3 
          className="text-lg md:text-xl font-bold text-[#00ADB5] mb-1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-[#EEEEEE] text-sm md:text-base opacity-80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {desc}
        </motion.p>
      </div>
    </motion.div>
  );
};

// Responsive ScrollImageTextSection
const ScrollImageTextSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const stages = [
    {
      image: "./who-are-we.png",
      title: "Who are we?",
      description: "We are Leonard Corporate Solutions Pvt. Ltd., a premier legal firm based in Mumbai with over a decade of expertise in Intellectual Property Rights, Corporate Law, and Taxation services.",
    },
    {
      image: "what-are-we.png",
      title: "What are we?",
      description: "We are India's leading specialized legal consultancy firm, dedicated exclusively to providing comprehensive IP protection, corporate advisory, and strategic legal solutions for businesses of all sizes.",
    },
    {
      image: "what-we-do.png",
      title: "What we do?",
      description: "We protect your innovations through trademark registration, patent filing, corporate compliance, litigation support, and provide end-to-end legal solutions to help your business thrive in today's competitive market.",
    },
  ];

  const totalStages = stages.length;

  return (
    <div ref={sectionRef} className="relative h-[300vh] md:h-[400vh] w-full bg-[#0a0b0b]">
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row">
        {/* Left Side - Images (hidden on mobile in favor of top section) */}
        <div className="hidden md:block w-full md:w-1/2 h-full relative overflow-hidden">
          {stages.map((stage, index) => {
            const startProgress = index / totalStages;
            const endProgress = (index + 1) / totalStages;

            const imageOpacity = useTransform(
              scrollYProgress,
              [startProgress - 0.05, startProgress + 0.05, endProgress - 0.05, endProgress + 0.05],
              [0, 1, 1, 0]
            );

            return (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                style={{ opacity: imageOpacity }}
              >
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Image section on top */}
        <div className="block md:hidden w-full h-1/3 relative overflow-hidden">
          {stages.map((stage, index) => {
            const startProgress = index / totalStages;
            const endProgress = (index + 1) / totalStages;

            const imageOpacity = useTransform(
              scrollYProgress,
              [startProgress - 0.05, startProgress + 0.05, endProgress - 0.05, endProgress + 0.05],
              [0, 1, 1, 0]
            );

            return (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                style={{ opacity: imageOpacity }}
              >
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
              </motion.div>
            );
          })}
        </div>

        {/* Right Side - Scrolling Text Content */}
        <div className="w-full h-2/3 md:w-1/2 md:h-full bg-[#0a0b0b] relative overflow-hidden">
          <div className="absolute inset-0">
            {stages.map((stage, index) => {
              const startProgress = index / totalStages;
              const endProgress = (index + 1) / totalStages;

              const textOpacity = useTransform(
                scrollYProgress,
                [startProgress - 0.05, startProgress + 0.05, endProgress - 0.05, endProgress + 0.05],
                [0, 1, 1, 0]
              );

              const textY = useTransform(
                scrollYProgress,
                [startProgress, endProgress],
                [30, -30]
              );

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center p-4 md:p-8 lg:p-16"
                  style={{ opacity: textOpacity, y: textY }}
                >
                  <div className="max-w-md space-y-4 md:space-y-6 lg:space-y-8">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00ADB5] leading-tight">
                      {stage.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-[#EEEEEE] leading-relaxed opacity-90">
                      {stage.description}
                    </p>
                    <div className="w-16 h-1 bg-[#00ADB5] rounded-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutWithScrollSection = () => {
  return (
    <>
      <About />
      <ScrollImageTextSection />
    </>
  );
};

export default AboutWithScrollSection;