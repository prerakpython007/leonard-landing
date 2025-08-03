"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -75]);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive legal services including corporate law, litigation, contract drafting, intellectual property, and legal consultation for businesses and individuals."
    },
    {
      question: "How do you charge for your services?",
      answer: "Our fee structure varies based on the type of service. We offer hourly rates, fixed fees for specific services, and retainer arrangements. We always provide transparent pricing upfront."
    },
    {
      question: "How long does it take to resolve a case?",
      answer: "The timeline depends on the complexity of the case and the legal process involved. We provide realistic timelines during our initial consultation and keep you updated throughout."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer a complimentary 30-minute initial consultation to discuss your legal needs and determine how we can best assist you."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring any relevant documents, contracts, correspondence, or materials related to your legal matter. A list of questions or concerns you'd like to discuss is also helpful."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={containerRef} className="bg-[#EEEEEE] py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Image with Parallax */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ y: y1 }}
          >
            <img
              src="/attorney-desk.png"
              alt="Attorney Desk"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Right side - FAQ with Parallax */}
          <motion.div 
            className="space-y-0"
            style={{ y: y2 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 px-4 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
