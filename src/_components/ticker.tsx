"use client";
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const images = [
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80", // Lady Justice
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80", // Modern Courthouse
  "https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&q=80", // Law Books
  "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80", // Modern Law Office
  "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80", // Courthouse Columns
  "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&q=80", // Meeting Room
  "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80", // Gavel
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80", // Law Library
  "https://images.unsplash.com/photo-1542089363-bba089ffaa25?auto=format&fit=crop&q=80", // Legal Documents
  "https://images.unsplash.com/photo-1607273177157-a36723518439?auto=format&fit=crop&q=80", // Modern Building
  "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80", // City Skyline
  "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80", // Business Meeting
  "https://images.unsplash.com/photo-1590099543482-3b3d3083a474?auto=format&fit=crop&q=80", // Courtroom
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80", // Office Space
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80", // Architecture
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", // Conference Room
  "https://images.unsplash.com/photo-1483632067304-7360e47bev32?auto=format&fit=crop&q=80", // Legal Tech
  "https://images.unsplash.com/photo-1577415124269-fc1140c69343?auto=format&fit=crop&q=80", // Justice Scales
  "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&q=80", // Law Books Stack
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"  // Business Discussion
].map((url, index) => ({ id: index, url }));

const duplicatedImages = [...images, ...images]; // Duplicate for seamless loop

const Ticker = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
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
              <ImageOverlay>
                <ImageText>Legal Excellence</ImageText>
              </ImageOverlay>
            </ImageWrapper>
          ))}
        </TickerTrack>
      </TickerWrapper>
    </TickerContainer>
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
  height: 200px; // Reduced height
  overflow: hidden;
  background: #EEEEEE;
  padding: 20px 0; // Add padding for better spacing
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
  animation: ${scroll} 40s linear infinite; // Increased duration for smoother scroll
  animation-play-state: ${props => props.$isPaused ? 'paused' : 'running'};
  width: fit-content;
  gap: 20px; // Add consistent gap between images
  transform: translateZ(0); // Hardware acceleration
  will-change: transform; // Optimize animations
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 280px; // Reduced width
  height: 180px; // Reduced height
  border-radius: 8px; // Smaller border radius
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.03) translateY(-5px); // Smoother hover effect
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    z-index: 3;
  }
`;

const TickerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1.1);

  ${ImageWrapper}:hover & {
    transform: scale(1.15);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(34, 40, 49, 0.9),
    rgba(34, 40, 49, 0.3) 50%,
    transparent
  );
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: flex-end;
  padding: 16px;

  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;

const ImageText = styled.span`
  color: #EEEEEE;
  font-size: 0.95rem;
  font-weight: 500;
  transform: translateY(10px);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${ImageWrapper}:hover & {
    transform: translateY(0);
  }
`;

export default Ticker;
