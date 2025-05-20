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
      className="relative flex min-h-[80vh] flex-col items-center overflow-hidden bg-[#EEEEEE] px-4 py-8 md:px-16 lg:px-24"
    >
      <span className="absolute top-[45%] left-0 -translate-y-1/2 transform text-[250px] text-[#00ADB5] opacity-10 md:text-[300px]">
        ✦
      </span>
      <span className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[300px] text-[#00ADB5] opacity-[0.07] md:text-[350px]">
        ✦
      </span>
      <span className="absolute top-[45%] right-0 -translate-y-1/2 transform text-[250px] text-[#00ADB5] opacity-10 md:text-[300px]">
        ✦
      </span>
      <motion.div
        className="relative mb-12 w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-4xl font-bold tracking-wider text-[#393E46]">
          <strong className="mr-2 text-[#00ADB5]">ABOUT</strong>
          US
        </span>
      </motion.div>

      <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:gap-16">
        <motion.div
          style={{ opacity }}
          className="flex-1 text-center lg:pr-8 lg:text-left"
          initial={{ x: -30 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-4xl font-bold text-[#222831] md:text-[2.5rem]">
            India’s Leading Intellectual Property & Corporate Law Firm
          </h2>
          <p className="mb-8 leading-relaxed text-[#393E46]">
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
            <button className="rounded bg-[#00ADB5] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#222831]">
              Read More
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="hidden h-[400px] w-px bg-gradient-to-b from-transparent via-[#00ADB5] to-transparent lg:mx-8 lg:block xl:mx-16"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        <motion.div
          className="my-8 block h-px w-4/5 bg-gradient-to-r from-transparent via-[#00ADB5] to-transparent lg:hidden"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <motion.div
          style={{ y }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "11+", text: "Years of Excellence" },
              { number: "500+", text: "Satisfied Clients" },
              { number: "1000+", text: "Cases Handled" },
              { number: "98%", text: "Success Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="w-[130px] rounded-lg bg-[#222831] p-4 text-center md:w-[200px] md:p-8"
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
                  className="mb-2 text-2xl font-bold text-[#00ADB5] md:text-3xl"
                >
                  {stat.number}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                  className="text-sm text-white md:text-base"
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
