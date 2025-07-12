"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "~/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardLength = content.length;

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const smoothScrollTo = (targetY: number) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 800;
    let startTime: number;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      const easedProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startY + distance * easedProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsTransitioning(false);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleWheel = useCallback((e: WheelEvent) => {
    if (!isActive || isTransitioning) return;
    
    e.preventDefault();
    
    const direction = e.deltaY > 0 ? 1 : -1;
    
    if (direction > 0 && activeCard < cardLength - 1) {
      // Scroll down - next card
      setActiveCard(prev => prev + 1);
    } else if (direction < 0 && activeCard > 0) {
      // Scroll up - previous card
      setActiveCard(prev => prev - 1);
    } else if (direction > 0 && activeCard === cardLength - 1) {
      // At the end, smoothly scroll to next section
      setIsActive(false);
      setIsTransitioning(true);
      document.body.style.overflow = 'auto';
      
      const sectionHeight = sectionRef.current?.offsetHeight || 0;
      const currentScrollY = window.scrollY;
      smoothScrollTo(currentScrollY + window.innerHeight);
      
    } else if (direction < 0 && activeCard === 0) {
      // At the beginning, smoothly scroll back up
      setIsActive(false);
      setIsTransitioning(true);
      document.body.style.overflow = 'auto';
      
      const currentScrollY = window.scrollY;
      smoothScrollTo(currentScrollY - window.innerHeight);
    }
  }, [isActive, activeCard, cardLength, isTransitioning]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isTransitioning) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;
      
      if (isInView && !isActive) {
        setIsActive(true);
        document.body.style.overflow = 'hidden';
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = 'auto';
    };
  }, [handleWheel, isActive, isTransitioning]);

  return (
    <div className="relative">
      {/* This creates the scroll area that triggers the sticky behavior */}
      <div style={{ height: `${cardLength * 50}vh` }} />
      
      <div
        ref={sectionRef}
        className="sticky top-0 h-screen w-full"
        style={{ marginTop: `-${cardLength * 50}vh` }}
      >
        <motion.div
          animate={{
            backgroundColor: backgroundColors[activeCard % backgroundColors.length],
          }}
          className="flex h-full w-full items-center justify-center space-x-10 overflow-hidden p-10"
        >
          <div className="relative flex items-center px-4">
            <div className="max-w-2xl">
              {content.map((item, index) => (
                <motion.div
                  key={item.title + index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0,
                    x: activeCard === index ? 0 : -50,
                    scale: activeCard === index ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={activeCard === index ? 'block' : 'hidden'}
                >
                  <motion.h2
                    className="text-4xl font-bold text-slate-100 mb-6"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    className="text-lg max-w-lg text-slate-300 leading-relaxed"
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div
            style={{ background: backgroundGradient }}
            className={cn(
              "hidden h-80 w-96 overflow-hidden rounded-md bg-white lg:flex items-center justify-center",
              contentClassName,
            )}
          >
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              {/* {content[activeCard].content ?? null} */}
            </motion.div>
          </div>
        </motion.div>
        
        {/* Progress indicator */}
        {isActive && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="flex space-x-3">
              {content.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeCard ? 'bg-white scale-125' : 'bg-white/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Scroll hint */}
        {isActive && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed top-10 right-10 text-white/60 text-sm font-medium"
          >
            <div className="flex items-center space-x-2">
              <span>{activeCard + 1} / {cardLength}</span>
              <div className="w-8 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((activeCard + 1) / cardLength) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Navigation hints */}
        {isActive && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-32 left-1/2 transform -translate-x-1/2 text-white/40 text-xs text-center"
          >
            <div className="flex items-center space-x-2">
              <span>Scroll to navigate</span>
              <div className="w-4 h-6 border border-white/30 rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-2 bg-white/30 rounded-full mt-1"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};