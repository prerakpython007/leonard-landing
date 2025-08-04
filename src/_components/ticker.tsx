"use client";
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Image list with .png extensions, assuming transparent backgrounds
const images = [
  "/img-1.png",  // Lady Justice (transparent PNG)
  "/img-2.png",  // Modern Courthouse (transparent PNG)
  "/img-3.png",  // Law Books (transparent PNG)
  "/img-4.png",  // Modern Law Office (transparent PNG)
  "/img-5.png",  // Courthouse Columns (transparent PNG)
  "/img-6.png",  // Meeting Room (transparent PNG)
  "/img-7.png",  // Gavel (transparent PNG)
  "/img-8.png",  // Law Library (transparent PNG)
  "/img-9.png",  // Legal Documents (transparent PNG)
  "/img-10.png", // Modern Building (transparent PNG)
  "/img-11.png", // City Skyline (transparent PNG)
  "/img-12.png", // Business Meeting (transparent PNG)
  "/img-13.png", // Courtroom (transparent PNG)
  "/img-14.png", // Office Space (transparent PNG)
  "/img-15.png", // Architecture (transparent PNG)
  "/img-16.png", // Conference Room (transparent PNG)
].map((url, index) => ({ id: index, url }));

const Ticker = () => {
  const [hoveredOrbit, setHoveredOrbit] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const logoRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Define orbital configurations with more spacing
  const orbits = [
    { 
      radius: 240, 
      duration: 35, 
      direction: 'clockwise', 
      images: images.slice(0, 6),
      startAngle: 0
    },
    { 
      radius: 360, 
      duration: 50, 
      direction: 'counterclockwise', 
      images: images.slice(6, 11),
      startAngle: 36
    },
    { 
      radius: 480, 
      duration: 65, 
      direction: 'clockwise', 
      images: images.slice(11, 16),
      startAngle: 18
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: { clientY: number; clientX: number; }) => {
      if (logoRef.current && sectionRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const logoRect = logoRef.current.getBoundingClientRect();
        
        if (e.clientY >= sectionRect.top && e.clientY <= sectionRect.bottom) {
          const centerX = logoRect.left + logoRect.width / 2;
          const centerY = logoRect.top + logoRect.height / 2;
          
          const deltaX = e.clientX - centerX;
          const deltaY = e.clientY - centerY;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          
          const maxDistance = 500;
          if (distance < maxDistance) {
            const attractionStrength = Math.max(0, (maxDistance - distance) / maxDistance);
            const smoothStrength = Math.pow(attractionStrength, 0.7);
            const maxMove = 25;
            
            setMousePosition({
              x: (deltaX * smoothStrength * maxMove) / maxDistance,
              y: (deltaY * smoothStrength * maxMove) / maxDistance
            });
          } else {
            setMousePosition({ x: 0, y: 0 });
          }
        } else {
          setMousePosition({ x: 0, y: 0 });
        }
      }
    };

    let animationFrame: number;
    const throttledMouseMove = (e: { clientY: number; clientX: number; }) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      animationFrame = requestAnimationFrame(() => handleMouseMove(e));
    };

    window.addEventListener('mousemove', throttledMouseMove);
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-24 sm:py-28 md:py-32 lg:py-40 relative overflow-hidden bg-gray-100">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          style={{ filter: "grayscale(50%) contrast(1.1) brightness(0.8)" }}
        >
          <source src="/ticker-bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gray-100/60"></div>
      </div>

      {/* Title */}
      <div className="relative text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 mt-4 sm:mt-8 md:mt-12 w-[90%] sm:w-[87%] mx-auto px-4 z-20">
        <motion.h1
          className="text-black text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-48 relative"
          style={{ 
            letterSpacing: "0.4em",
            textShadow: "-2px 0px 0px rgba(100, 100, 100, 0.8), -6px 2px 0px rgba(80, 80, 80, 0.6), -10px 4px 0px rgba(60, 60, 60, 0.4), -14px 6px 0px rgba(40, 40, 40, 0.3), -18px 8px 0px rgba(20, 20, 20, 0.2)"
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          OUR CLIENTS
        </motion.h1>
      </div>

      {/* Main Orbit Container */}
      <div className="relative w-full h-[800px]  md:h-[900px] lg:h-[1200px] flex justify-center items-center overflow-hidden my-20 z-20">
        {/* Orbital Tracks */}
        {orbits.map((orbit, orbitIndex) => {
          const rotationKeyframe = orbit.direction === 'clockwise' 
            ? `rotate-clockwise-${orbitIndex}` 
            : `rotate-counterclockwise-${orbitIndex}`;
          
          return (
            <div key={orbitIndex} className='my-20'>
              {/* Orbit Ring */}
              <div
                className="absolute border-2 border-gray-400 opacity-40 rounded-full"
                style={{
                  width: `${orbit.radius * 2}px`,
                  height: `${orbit.radius * 2}px`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  borderColor: 'rgb(156 163 175)',
                }}
              />
              
              {/* Rotating Container */}
              <div
                className="absolute"
                style={{
                  width: `${orbit.radius * 2}px`,
                  height: `${orbit.radius * 2}px`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: `${rotationKeyframe} ${orbit.duration}s linear infinite`,
                  animationPlayState: hoveredOrbit === orbitIndex ? 'paused' : 'running',
                }}
                onMouseEnter={() => setHoveredOrbit(orbitIndex)}
                onMouseLeave={() => setHoveredOrbit(null)}
              >
                {orbit.images.map((image, imgIndex) => {
                  const angle = orbit.startAngle + (360 / orbit.images.length) * imgIndex;
                  const dotAngle = orbit.startAngle + (360 / orbit.images.length) * (imgIndex + 0.5);
                  
                  return (
                    <div key={`${orbitIndex}-${image.id}`}>
                      {/* Image */}
                      <div
                        className="absolute"
                        style={{
                          width: '90px',
                          height: '90px',
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${orbit.radius}px)`,
                        }}
                      >
                        {/* Counter-rotating image container to keep logos upright */}
                        <div
                          className="w-full h-full transition-all duration-300 ease-out hover:scale-110 hover:z-10"
                          style={{
                            animation: orbit.direction === 'clockwise'
                              ? `counter-rotate-clockwise-${orbitIndex} ${orbit.duration}s linear infinite`
                              : `counter-rotate-counterclockwise-${orbitIndex} ${orbit.duration}s linear infinite`,
                            animationPlayState: hoveredOrbit === orbitIndex ? 'paused' : 'running',
                          }}
                        >
                          <img
                            src={image.url}
                            alt={`Legal Image ${image.id + 1}`}
                            className="w-full h-full object-contain rounded-lg bg-white bg-opacity-95 p-2 shadow-md border-2 border-gray-300 transition-all duration-300 hover:shadow-lg hover:bg-opacity-100 hover:border-cyan-500"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Blue dot between images - show for all images including after last */}
                      <div
                        className="absolute"
                        style={{
                          width: '8px',
                          height: '8px',
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${dotAngle}deg) translateY(-${orbit.radius}px)`,
                        }}
                      >
                        <div className="w-2 h-2 bg-cyan-500 rounded-full opacity-60"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Center Lion Logo Container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {/* Lion Logo */}
          <img 
            ref={logoRef}
            src="/lion-logo.png" 
            alt="Leonard Corporate Solutions Logo"
            className="w-64 h-64 object-contain z-50 cursor-pointer transition-all duration-150 ease-out filter drop-shadow-md hover:drop-shadow-lg"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes rotate-clockwise-0 {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes rotate-clockwise-1 {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes rotate-clockwise-2 {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes rotate-counterclockwise-0 {
          0% { transform: translate(-50%, -50%) rotate(360deg); }
          100% { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes rotate-counterclockwise-1 {
          0% { transform: translate(-50%, -50%) rotate(360deg); }
          100% { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes rotate-counterclockwise-2 {
          0% { transform: translate(-50%, -50%) rotate(360deg); }
          100% { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes counter-rotate-clockwise-0 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes counter-rotate-clockwise-1 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes counter-rotate-clockwise-2 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes counter-rotate-counterclockwise-0 {
          0% { transform: rotate(-360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes counter-rotate-counterclockwise-1 {
          0% { transform: rotate(-360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes counter-rotate-counterclockwise-2 {
          0% { transform: rotate(-360deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default Ticker;