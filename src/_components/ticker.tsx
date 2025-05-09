"use client";
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

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

// Quadruple the images for smoother infinite scroll
const duplicatedImages = [...images, ...images, ...images, ...images];

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-100% / 2)); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(calc(-100% / 2)); }
  100% { transform: translateX(0); }
`;

const TickerTrack = styled.div<{ $direction: string; $speed: number; $isPaused: boolean }>`
  display: flex;
  width: fit-content;
  animation: ${props => props.$direction === 'right' ? scrollRight : scrollLeft} 
    ${props => props.$speed}s linear infinite;
  animation-play-state: ${props => props.$isPaused ? 'paused' : 'running'};
  gap: 15px;
  @media (min-width: 768px) {
    gap: 20px;
  }
  will-change: transform;
`;

const TickerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  @media (min-width: 768px) {
    height: 180px;
  }
  overflow: hidden;
  padding: 8px 0;
`;

const TickerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 150px;
    height: 100%;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #EEEEEE, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #EEEEEE, transparent);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  @media (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
  overflow: hidden;
  flex-shrink: 0;
  background: none; /* No background */
  border: none; /* No border */
`;

const Ticker = () => {
  const [hoveredTicker, setHoveredTicker] = useState<number | null>(null);

  const tickerRows = [
    { direction: 'left', speed: 60 },
    { direction: 'right', speed: 50 },
    { direction: 'left', speed: 70 }
  ];

  return (
    <div className="py-8 md:py-12 lg:py-16 relative overflow-hidden bg-[#EEEEEE]">
      <span className="absolute left-0 top-[45%] text-[#00ADB5] text-[250px] md:text-[300px] opacity-10 transform -translate-y-1/2">
        ✦
      </span>
      <span className="absolute left-1/2 top-[45%] text-[#00ADB5] text-[300px] md:text-[350px] opacity-[0.07] transform -translate-x-1/2 -translate-y-1/2">
        ✦
      </span>
      <span className="absolute right-0 top-[45%] text-[#00ADB5] text-[250px] md:text-[300px] opacity-10 transform -translate-y-1/2">
        ✦
      </span>
      <div className="relative text-center mb-8 md:mb-12 w-[87%] m-auto px-4">
        <span className="text-3xl md:text-4xl font-bold text-[#393E46] tracking-wider">
          <strong className="text-[#00ADB5] mr-2">OUR</strong>
          CLIENTS
        </span>
      </div>

      <div className="space-y-4">
        {tickerRows.map((row, index) => (
          <TickerContainer key={index}>
            <TickerWrapper
              onMouseEnter={() => setHoveredTicker(index)}
              onMouseLeave={() => setHoveredTicker(null)}
            >
              <TickerTrack 
                $direction={row.direction}
                $speed={row.speed}
                $isPaused={hoveredTicker === index}
              >
                {duplicatedImages.map((image, imgIndex) => (
                  <ImageContainer key={`${image.id}-${imgIndex}`}>
                    <img
                      src={image.url}
                      alt={`Legal Image ${image.id}`}
                      className="w-full h-full object-contain border-none" /* Ensure no border */
                      loading="lazy"
                    />
                  </ImageContainer>
                ))}
              </TickerTrack>
            </TickerWrapper>
          </TickerContainer>
        ))}
      </div>
    </div>
  );
};

export default Ticker;