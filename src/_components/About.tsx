"use client";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-[#EEEEEE] py-8 px-4 md:px-16 lg:px-24 flex flex-col items-center min-h-[80vh]">
      <div className="relative text-center mb-12 w-full">
        <span className="text-4xl font-bold text-[#393E46] tracking-wider">
          <strong className="text-[#00ADB5] mr-2">ABO UT</strong>
          US
        </span>
        <span className="absolute top-1/2 left-10 -translate-y-1/2 text-[#00ADB5] text-5xl hidden md:block">✦</span>
        <span className="absolute top-1/2 right-10 -translate-y-1/2 text-[#00ADB5] text-5xl hidden md:block">✦</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center w-full">
        <motion.div 
          className="flex-1 lg:pr-8 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
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

        <div className="hidden lg:block w-px h-[400px] bg-gradient-to-b from-transparent via-[#00ADB5] to-transparent
          lg:mx-8 xl:mx-16" />
        <div className="block lg:hidden w-4/5 h-px bg-gradient-to-r from-transparent via-[#00ADB5] to-transparent my-8" />

        <motion.div 
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
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
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-[#00ADB5] text-2xl md:text-3xl font-bold mb-2">{stat.number}</h3>
                <p className="text-white text-sm md:text-base">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
