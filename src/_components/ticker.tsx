"use client";
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const images = [
  "/img-1.jpg",  // Lady Justice
  "/img-2.jpg",  // Modern Courthouse
  "/img-3.jpg",  // Law Books
  "/img-4.jpg",  // Modern Law Office
  "/img-5.jpg",  // Courthouse Columns
  "/img-6.png",  // Meeting Room
  "/img-7.png",  // Gavel
  "/img-8.png",  // Law Library
  "/img-9.jpg",  // Legal Documents
  "/img-10.png", // Modern Building
  "/img-11.png", // City Skyline
  "/img-12.png", // Business Meeting
  "/img-13.png", // Courtroom
  "/img-14.png", // Office Space
  "/img-15.gif", // Architecture
  "/img-16.jpg", // Conference Room
].map((url, index) => ({ id: index, url }));

const duplicatedImages = [...images, ...images]; // Duplicate for seamless loop

const Ticker = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-8 md:py-12 bg-[#EEEEEE] lg:py-16">
      <div className="relative text-center mb-8 md:mb-12 w-[87%] m-auto px-4">
        <span className="text-3xl md:text-4xl font-bold text-[#393E46] tracking-wider">
          <strong className="text-[#00ADB5] mr-2">OUR</strong>
          CLIENTS
        </span>
        <span className="absolute top-1/2 left-4 md:left-10 -translate-y-1/2 text-[#00ADB5] text-4xl md:text-5xl">✦</span>
        <span className="absolute top-1/2 right-4 md:right-10 -translate-y-1/2 text-[#00ADB5] text-4xl md:text-5xl">✦</span>
      </div>
      <TickerContainer>
        <TickerWrapper
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          $isPaused={isHovered}
        >
          <TickerTrack $isPaused={isHovered}>
            {duplicatedImages.map((image, index) => (
              <ImageWrapper key={`${image.id}-${index}`}>
                <TickerImage
                  src={image.url}
                  alt={`Legal Image ${image.id}`}
                  loading="lazy"
                />
              </ImageWrapper>
            ))}
          </TickerTrack>
        </TickerWrapper>
      </TickerContainer>
    </div>
  );
};

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const TickerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  @media (min-width: 768px) {
    height: 180px;
  }
  overflow: hidden;
  padding: 15px 0;
  @media (min-width: 768px) {
    padding: 20px 0;
  }
  background: #EEEEEE;
`;

const TickerWrapper = styled.div<{ $isPaused: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 150px; // Reduced gradient width
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

const TickerTrack = styled.div<{ $isPaused: boolean }>`
  display: flex;
  animation: ${scroll} 30s linear infinite;
  @media (min-width: 768px) {
    animation: ${scroll} 40s linear infinite;
  }
  animation-play-state: ${props => props.$isPaused ? 'paused' : 'running'};
  width: fit-content;
  gap: 15px;
  @media (min-width: 768px) {
    gap: 20px;
  }
  transform: translateZ(0);
  will-change: transform;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  @media (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
  border-radius: 0px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const TickerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Ticker;
