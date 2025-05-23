"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#EEEEEE] px-4 py-16 sm:py-20 md:py-24 lg:py-32 md:px-8 lg:px-16"
    >
      {/* Background Stars - Adjusted sizes */}
      <span className="absolute top-[45%] left-0 -translate-y-1/2 transform text-[150px] text-[#00ADB5] opacity-10 sm:text-[200px] md:text-[300px]">
        ✦
      </span>
      <span className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[200px] text-[#00ADB5] opacity-[0.07] sm:text-[250px] md:text-[350px]">
        ✦
      </span>
      <span className="absolute top-[45%] right-0 -translate-y-1/2 transform text-[150px] text-[#00ADB5] opacity-10 sm:text-[200px] md:text-[300px]">
        ✦
      </span>

      {/* Title */}
      <motion.div className="relative mb-12 md:mb-16 lg:mb-20 w-full text-center mt-8 sm:mt-12 md:mt-16">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-[#393E46]">
          <strong className="mr-2 text-[#00ADB5]">ABOUT</strong>
          US
        </span>
      </motion.div>

      <div className="flex w-full flex-col items-center gap-12 sm:gap-16 lg:gap-20 lg:flex-row max-w-7xl mx-auto pb-8 sm:pb-12 md:pb-16">
        {/* Text Content */}
        <motion.div className="flex-1 text-center px-4 sm:px-6 lg:px-8 lg:text-left">
          <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-[#222831]">
            India's Leading Intellectual Property & Corporate Law Firm
          </h2>
          <p className="mb-6 md:mb-8 text-sm sm:text-base leading-relaxed text-[#393E46]">
            Leonard Corporate Solutions Pvt. Ltd. is a top-tier legal firm based
            in Mumbai, Maharashtra, specializing exclusively in Intellectual
            Property Rights (IPR), Corporate Law, and Taxation. With over a
            decade of legal excellence, we have earned a reputation as one of
            India’s most trusted names in the field of IP law and business legal
            advisory.
            <br />
            <br />
            Our mission is simple yet powerful — to help innovators, creators,
            and companies protect and maximize the value of their intellectual
            property and technology assets. We serve a diverse clientele ranging
            from multinational corporations to fast-growing startups and
            domestic enterprises, delivering tailored legal strategies that
            drive growth, compliance, and competitive advantage. Whether it’s
            trademark registration, patent protection, copyright enforcement, or
            corporate legal compliance, we provide end-to-end legal solutions
            that ensure your ideas stay yours — and thrive.
          </p>
          <Link href="/about-us">
            <button className="w-full sm:w-auto rounded bg-[#00ADB5] px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#222831]">
              Read More
            </button>
          </Link>
        </motion.div>

        {/* Dividers */}
        <motion.div className="hidden h-[300px] md:h-[400px] w-px bg-gradient-to-b from-transparent via-[#00ADB5] to-transparent lg:mx-4 xl:mx-8 lg:block" />
        <motion.div className="my-6 md:my-8 block h-px w-[90%] sm:w-4/5 bg-gradient-to-r from-transparent via-[#00ADB5] to-transparent lg:hidden" />

        {/* Stats Grid */}
        <motion.div className="flex-1 w-full lg:w-auto">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-[600px] mx-auto">
            {[
              { number: "11+", text: "Years of Excellence" },
              { number: "500+", text: "Satisfied Clients" },
              { number: "1000+", text: "Cases Handled" },
              { number: "98%", text: "Success Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="w-full rounded-lg bg-[#222831] p-3 sm:p-4 md:p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                viewport={{ once: true }}
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                  className="mb-1 sm:mb-2 text-xl sm:text-2xl md:text-3xl font-bold text-[#00ADB5]"
                >
                  {stat.number}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                  className="text-xs sm:text-sm md:text-base text-white"
                >
                  {stat.text}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
