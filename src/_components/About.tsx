"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const aboutText = [
  "India's Leading Intellectual Property & Corporate Law Firm",
  "Leonard Corporate Solutions Pvt. Ltd. is a top-tier legal firm based in Mumbai, Maharashtra, specializing exclusively in Intellectual Property Rights (IPR), Corporate Law, and Taxation ,With over a decade of legal excellence, we have earned a reputation as one of India’s most trusted names in the field of IP law and business legal advisory.",
];

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Animation for background image sliding in from left
  const backgroundX = useTransform(scrollYProgress, [0, 0.2], ["-100%", "0%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Parallax for cards background image - increased effect
  const cardsBackgroundY = useTransform(scrollYProgress, [0.5, 1], ["100px", "-200px"]);

  // Images for preview indicators
  const cardImages = [
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=600&q=80",
  ];

  // Helper to split text into words for animation
  const renderAnimatedText = (text: string, baseDelay = 0) => {
    const words = text.split(" ");
    return words.map((word, idx) => (
      <motion.span
        key={`${word}-${idx}`} // <-- ensure unique key
        className="inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: baseDelay + idx * 0.08,
        }}
        viewport={{ once: true }}
      >
        {word}&nbsp;
      </motion.span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0b0b] px-4 py-16 sm:py-20 md:py-24 lg:py-32 md:px-8 lg:px-16"
    >
      {/* Small Background Image */}
      <div className="absolute top-0 left-0 w-full h-[1200px] z-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/about-page.jpg')",
            filter: "grayscale(30%) contrast(1.1) brightness(0.8)",
            clipPath: "polygon(0 0, 75% 0, 45% 100%, 0 100%)",
            x: backgroundX,
            opacity: backgroundOpacity,
          }}
        />
        {/* Fade gradient from bottom */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#0a0b0b] to-transparent" />
      </div>

      {/* Centered ABOUT US */}
      <motion.h1
        className="text-[#EEEEEE] text-5xl  sm:text-6xl md:text-7xl font-extrabold text-center mb-48 relative z-10"
        style={{
          letterSpacing: "0.4em",
          textShadow:
            "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4), -14px 6px 0px rgba(40, 40, 40, 0.3), -18px 8px 0px rgba(20, 20, 20, 0.2)",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        ABOUT US
      </motion.h1>

      {/* Animated Text */}
      <div className="w-full flex justify-center relative z-10">
        <div
          className="  text-center text-[#EEEEEE] font-medium space-y-6 mb-16 "
          style={{ maxWidth: "1400px" }}
        >
          <motion.div className="mb-6">
            <span
              className="block font-bold text-[#00ADB5] mb-2"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 2.2rem)",
                lineHeight: "1.15",
                wordBreak: "break-word",
                width: "100%",
                display: "inline-block",
              }}
            >
              {renderAnimatedText(aboutText[0] ?? "", 0)}
            </span>
          </motion.div>
          <motion.div
            className="text-lg sm:text-xl md:text-2xl text-[#EEEEEE] opacity-90 px-2 sm:px-8 md:px-16"
            style={{
              lineHeight: "1.7",
              letterSpacing: "0.01em",
              maxWidth: "800px",
              margin: "0 auto",
              width: "100%",
              textAlign: "center",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Animate sentence by sentence, then word by word, then letter by letter */}
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
                            viewport={{ once: true }}
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
            className="mt-8 flex justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            viewport={{ once: true }}
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
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto w-full mb-44 mt-20 px-2 sm:px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center font-[Oswald,sans-serif]">
          {/* Years of Excellence */}
          <div className="px-2 flex flex-col items-center">
            <span
              className="block text-5xl sm:text-6xl md:text-7xl font-thin text-[#00ADB5] mb-2 tracking-widest drop-shadow-lg"
              style={{
                letterSpacing: "0.08em",
                fontFamily: "'Montserrat', 'Oswald', sans-serif",
              }}
            >
              11<span className="font-extralight text-3xl align-top">+</span>
            </span>
            <span className="block text-lg sm:text-xl md:text-2xl text-[#EEEEEE] font-semibold mt-2">
              Years of Excellence
            </span>
          </div>

          {/* Satisfied Clients */}
          <div className="px-2 flex flex-col items-center">
            <span
              className="block text-5xl sm:text-6xl md:text-7xl font-thin text-[#00ADB5] mb-2 tracking-widest drop-shadow-lg"
              style={{
                letterSpacing: "0.08em",
                fontFamily: "'Montserrat', 'Oswald', sans-serif",
              }}
            >
              500<span className="font-extralight text-3xl align-top">+</span>
            </span>
            <span className="block text-lg sm:text-xl md:text-2xl text-[#EEEEEE] font-semibold mt-2">
              Satisfied Clients
            </span>
          </div>

          {/* Cases Handled */}
          <div className="px-2 flex flex-col items-center">
            <span
              className="block text-5xl sm:text-6xl md:text-7xl font-thin text-[#00ADB5] mb-2 tracking-widest drop-shadow-lg"
              style={{
                letterSpacing: "0.08em",
                fontFamily: "'Montserrat', 'Oswald', sans-serif",
              }}
            >
              1000<span className="font-extralight text-3xl align-top">+</span>
            </span>
            <span className="block text-lg sm:text-xl md:text-2xl text-[#EEEEEE] font-semibold mt-2">
              Cases Handled
            </span>
          </div>

          {/* Success Rate */}
          <div className="px-2 flex flex-col items-center">
            <span
              className="block text-5xl sm:text-6xl md:text-7xl font-thin text-[#00ADB5] mb-2 tracking-widest drop-shadow-lg"
              style={{
                letterSpacing: "0.08em",
                fontFamily: "'Montserrat', 'Oswald', sans-serif",
              }}
            >
              98<span className="font-extralight text-3xl align-top">%</span>
            </span>
            <span className="block text-lg sm:text-xl md:text-2xl text-[#EEEEEE] font-semibold mt-2">
              Success Rate
            </span>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full mt-24 pb-44 mb-24 relative">
        <div className="absolute inset-0 bg-white -mx-4 md:-mx-8 lg:-mx-16"></div>
        
        {/* Background Image at bottom - Full Width */}
        <motion.div
          className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 h-96 md:h-[500px] lg:h-[600px]"
          style={{
            width: "250vw",
            backgroundImage: "url('/cards-bg2.png')",
            backgroundSize: "contain",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            y: cardsBackgroundY,
          }}
        />
        
        <div className="max-w-7xl mx-auto px-2 py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* Column 1: 2 cards, staggered down */}
            <div className="flex flex-col gap-8 mt-12 md:mt-24">
              <ParallaxCard
                img="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
                title="Trademark Excellence"
                desc="Protect your brand with our expert trademark registration and enforcement services."
                parallax={-30}
              />
              <ParallaxCard
                img="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
                title="Patent Strategy"
                desc="Innovate with confidence. We help you secure and manage your patents globally."
                parallax={-10}
              />
            </div>
            {/* Column 2: 3 cards, middle card is a video */}
            <div className="flex flex-col gap-8 md:-mt-8">
              <ParallaxCard
                img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
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
                img="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
                title="Taxation Advisory"
                desc="Navigate complex tax laws with our strategic advisory and compliance support."
                parallax={-10}
              />
            </div>
            {/* Column 3: 2 cards, align with column 1 */}
            <div className="flex flex-col gap-8 mt-12 md:mt-24">
              <ParallaxCard
                img="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
                title="Design Protection"
                desc="Safeguard your creative designs and innovations with robust legal coverage."
                parallax={20}
              />
              <ParallaxCard
                img="https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=600&q=80"
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

// Scroll Animation Section Component - Outside main section
const ScrollImageTextSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Define the content for each stage
  const stages = [
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
      title: "Expert Legal Consultation",
      description:
        "Our experienced legal professionals provide comprehensive consultation services, ensuring your intellectual property and business interests are fully protected with tailored legal strategies.",
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
      title: "Strategic IP Protection",
      description:
        "We develop comprehensive intellectual property strategies that safeguard your innovations, trademarks, and creative works with expert legal guidance and international protection.",
    },
    {
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
      title: "Global Legal Solutions",
      description:
        "With our extensive network and international expertise, we provide seamless legal support across multiple jurisdictions worldwide, ensuring your business thrives globally.",
    },
  ];

  const totalStages = stages.length;

  return (
    <div ref={sectionRef} className="relative h-[400vh] w-full bg-[#0a0b0b]">
      <div className="sticky top-0 h-screen w-full flex">
        {/* Left Side - Full Height Images */}
        <div className="w-1/2 h-screen relative overflow-hidden">
          {stages.map((stage, index) => {
            const startProgress = index / totalStages;
            const endProgress = (index + 1) / totalStages;

            const imageOpacity = useTransform(
              scrollYProgress,
              [
                Math.max(0, startProgress - 0.05),
                startProgress + 0.05,
                endProgress - 0.05,
                Math.min(1, endProgress + 0.05),
              ],
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
          
          {/* Image Preview Indicators - Horizontal and Centered */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {stages.map((stage, index) => {
              const startProgress = index / totalStages;
              const endProgress = (index + 1) / totalStages;
              
              const borderColor = useTransform(
                scrollYProgress,
                [startProgress - 0.05, startProgress + 0.05, endProgress - 0.05, endProgress + 0.05],
                ["rgba(255,255,255,0.3)", "#00ADB5", "#00ADB5", "rgba(255,255,255,0.3)"]
              );

              return (
                <motion.div 
                  key={index} 
                  className="w-16 h-12 rounded overflow-hidden border-2 transition-all duration-300"
                  style={{
                    borderColor: borderColor
                  }}
                >
                  <img 
                    src={stage.image} 
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side - Scrolling Text Content */}
        <div className="w-1/2 h-screen bg-[#0a0b0b] relative overflow-hidden">
          <div className="absolute inset-0">
            {stages.map((stage, index) => {
              const startProgress = index / totalStages;
              const endProgress = (index + 1) / totalStages;

              const textOpacity = useTransform(
                scrollYProgress,
                [
                  Math.max(0, startProgress - 0.05),
                  startProgress + 0.05,
                  endProgress - 0.05,
                  Math.min(1, endProgress + 0.05),
                ],
                [0, 1, 1, 0]
              );

              const textY = useTransform(
                scrollYProgress,
                [startProgress, endProgress],
                [50, -50]
              );

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center p-12 lg:p-16"
                  style={{ opacity: textOpacity, y: textY }}
                >
                  <div className="max-w-lg space-y-8">
                    <h3 className="text-4xl lg:text-5xl font-bold text-[#00ADB5] leading-tight">
                      {stage.title}
                    </h3>
                    <p className="text-lg lg:text-xl text-[#EEEEEE] leading-relaxed opacity-90">
                      {stage.description}
                    </p>
                    <div className="w-20 h-1 bg-[#00ADB5] rounded-full" />
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

// ParallaxCard component
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-96 object-cover rounded-t-xl"
        style={{ background: "#222831" }}
      />
      <div className="p-8 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-[#00ADB5] mb-1">{title}</h3>
        <p className="text-[#EEEEEE] text-base opacity-80">{desc}</p>
      </div>
    </motion.div>
  );
};

// ParallaxCardVideo component for video card
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

  // Use iframe for YouTube video, fallback to <video> for mp4
  const isYouTube = videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be");

  return (
    <motion.div
      ref={ref}
      className="bg-[#181a1b] rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center border border-[#00ADB5] hover:border-[#00ADB5] transition-all duration-300"
      style={{ y }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {isYouTube ? (
        <iframe
          src={videoSrc}
          title={title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
          className="w-full h-96 rounded-t-xl"
          style={{ background: "#222831", display: "block" }}
        />
      ) : (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-96 object-cover rounded-t-xl"
          style={{ background: "#222831" }}
        />
      )}
      <div className="p-8 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-[#00ADB5] mb-1">{title}</h3>
        <p className="text-[#EEEEEE] text-base opacity-80">{desc}</p>
      </div>
    </motion.div>
  );
};

export default AboutWithScrollSection;
