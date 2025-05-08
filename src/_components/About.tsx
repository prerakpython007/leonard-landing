"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} className="bg-[#EEEEEE] py-8 px-4 md:px-16 lg:px-24 flex flex-col items-center min-h-[80vh] overflow-hidden relative">
      <span className="absolute left-0 top-[45%] text-[#00ADB5] text-[250px] md:text-[300px] opacity-10 transform -translate-y-1/2">
        ✦
      </span>
      <span className="absolute left-1/2 top-[45%] text-[#00ADB5] text-[300px] md:text-[350px] opacity-[0.07] transform -translate-x-1/2 -translate-y-1/2">
        ✦
      </span>
      <span className="absolute right-0 top-[45%] text-[#00ADB5] text-[250px] md:text-[300px] opacity-10 transform -translate-y-1/2">
        ✦
      </span>
      <motion.div 
        className="relative text-center mb-12 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-4xl font-bold text-[#393E46] tracking-wider">
          <strong className="text-[#00ADB5] mr-2">ABOUT</strong>
          US
        </span>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center w-full">
        <motion.div 
          style={{ opacity }}
          className="flex-1 lg:pr-8 text-center lg:text-left"
          initial={{ x: -30 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#222831] text-4xl md:text-[2.5rem] font-bold mb-6">
            Leading Full-Service Intellectual Property Law Firm
          </h2>
          <p className="text-[#393E46] leading-relaxed mb-8">
            Leonard Corporate Solutions Pvt. Ltd. stands as India's premier firm, 
            exclusively dedicated to intellectual property, taxation, and company laws. 
            Based in Mumbai, Maharashtra, we've established ourselves as industry leaders 
            through a decade of excellence in intellectual property law.
            <br/><br/>
            We understand that intellectual property rights are only valuable when 
            protected and exploited intelligently. Our commitment lies in maximizing 
            the value of our clients' intellectual property and technology assets, 
            serving both multinational corporations and domestic industry leaders.
          </p>
          <button className="bg-[#00ADB5] text-white px-8 py-4 rounded font-semibold 
            transition-all duration-300 hover:bg-[#222831] hover:-translate-y-0.5">
            Read More
          </button>
        </motion.div>

        <motion.div
          className="hidden lg:block w-px h-[400px] bg-gradient-to-b from-transparent via-[#00ADB5] to-transparent lg:mx-8 xl:mx-16"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        <motion.div
          className="block lg:hidden w-4/5 h-px bg-gradient-to-r from-transparent via-[#00ADB5] to-transparent my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <motion.div 
          style={{ y }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "10+", text: "Years of Excellence" },
              { number: "500+", text: "Satisfied Clients" },
              { number: "1000+", text: "Cases Handled" },
              { number: "100%", text: "Success Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#222831] p-4 md:p-8 rounded-lg text-center w-[130px] md:w-[200px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                  className="text-[#00ADB5] text-2xl md:text-3xl font-bold mb-2"
                >
                  {stat.number}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                  className="text-white text-sm md:text-base"
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
