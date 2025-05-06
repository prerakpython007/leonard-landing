"use client";
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Landing = () => {
  const [count, setCount] = useState({ years: 0, rate: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { damping: 15, stiffness: 150 };
  
  const magneticX = useSpring(0, springConfig);
  const magneticY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const imageElement = document.querySelector('.magnetic-image');
      if (!imageElement) return;

      const rect = imageElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from cursor to image center
      const deltaX = (e.clientX - centerX) * 0.15;
      const deltaY = (e.clientY - centerY) * 0.15;
      
      // Apply magnetic effect with distance falloff
      const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
      const maxDistance = 500; // Maximum distance for magnetic effect
      const falloff = Math.max(0, 1 - distance / maxDistance);
      
      magneticX.set(deltaX * falloff);
      magneticY.set(deltaY * falloff);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animateCount = () => {
      const duration = 2000;
      const framesPerSecond = 60;
      const totalFrames = duration * framesPerSecond / 1000;
      
      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        setCount({
          years: Math.min(25, Math.floor((frame / totalFrames) * 25)),
          rate: Math.min(98, Math.floor((frame / totalFrames) * 98))
        });
        
        if (frame === totalFrames) clearInterval(timer);
      }, 1000 / framesPerSecond);
    };

    animateCount();
  }, []);

  return (
    <Container className=''>
      <CornerAngle className="top-left" />
      <CornerAngle className="top-right" />
      <CornerAngle className="bottom-left" />
      <CornerAngle className="bottom-right" />
      <ParticleBackground />
      <HeroSection>
        <GeometricOverlay />
        <Content>
          <LeftContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Eyebrow>Welcome to <span className='textbor'>Leonard</span> Solutions</Eyebrow>
              <MainTitle>
                <TitleHighlight>Justice</TitleHighlight>
                <span> Meets</span>
                <br />
                <span>Excellence</span>
              </MainTitle>
              <SubHeading>Your Premier Legal Partners</SubHeading>
              <Stats>
                <StatItem>
                  <StatValue
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {count.years}+
                  </StatValue>
                  <StatLabel>Years Experience</StatLabel>
                </StatItem>
                <StatDivider />
                <StatItem>
                  <StatValue
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {count.rate}%
                  </StatValue>
                  <StatLabel>Success Rate</StatLabel>
                </StatItem>
              </Stats>
              <Actions>
                <PrimaryButton
                  as={motion.button}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 10px 30px rgba(0, 173, 181, 0.3)",
                    background: "linear-gradient(45deg, #00ADB5, #009ca3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Consultation
                </PrimaryButton>
                <SecondaryButton
                  as={motion.button}
                  whileHover={{ backgroundColor: "rgba(0, 173, 181, 0.1)" }}
                >
                  Learn More →
                </SecondaryButton>
              </Actions>
            </motion.div>
          </LeftContent>
          <RightContent>
            <motion.div
              className="magnetic-image"
              style={{
                x: magneticX,
                y: magneticY
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <DecorativeShape />
              <ImageWrapper>
                <StyledImage
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
                  alt="Lady Justice Statue"
                />
              </ImageWrapper>
            </motion.div>
          </RightContent>
        </Content>
      </HeroSection>
    </Container>
  );
};

const ParticleBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 50% 50%, rgba(0, 173, 181, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
  pointer-events: none;
`;

// Styled components
const Container = styled.div`
  background: linear-gradient(135deg, #EEEEEE 0%, #F5F5F5 100%);
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: -2rem; // Added negative margin to pull content up
  position: relative; // Added this to handle absolute positioning
  min-height: 100vh; // Added to ensure full height
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 85vh; // Reduced from 90vh
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  padding-top: 12vh; // Reduced from 8vh
  margin-bottom: 0;
  padding-bottom: 0;
`;

const GeometricOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(120deg, transparent 45%, rgba(0, 173, 181, 0.03) 100%),
    linear-gradient(-120deg, transparent 45%, rgba(34, 40, 49, 0.03) 100%);
`;

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem; // Removed top padding
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 6rem;
  align-items: flex-start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding-top: 1rem; // Reduced padding for mobile
  }
`;

const LeftContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Eyebrow = styled.span`
  color: #00ADB5;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 1rem;
`;

const MainTitle = styled.h1`
  font-size: clamp(3rem, 5vw, 4.5rem);
  line-height: 1.1;
  background: linear-gradient(135deg, #222831 0%, #393E46 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const TitleHighlight = styled.span`
  background: linear-gradient(135deg, #00ADB5 0%, #009ca3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

const SubHeading = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: #393E46;
  margin-bottom: 2.5rem;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 3rem;
`;

const StatItem = styled.div``;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #222831;
  line-height: 1;
`;

const StatLabel = styled.div`
  color: #393E46;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const StatDivider = styled.div`
  height: 50px;
  width: 1px;
  background: linear-gradient(to bottom, transparent, #00ADB5, transparent);
`;

const Actions = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: #00ADB5;
  color: #EEEEEE;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: #222831;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const RightContent = styled.div`
  position: relative;
  height: 550px;
  margin-top: -2rem; // Added negative margin to pull image up
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const DecorativeShape = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, rgba(0, 173, 181, 0.15), transparent);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: 
    morph 8s ease-in-out infinite,
    float 6s ease-in-out infinite;
  filter: blur(2px);

  @keyframes morph {
    0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
    100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 400px;
  height: 500px;
  overflow: hidden;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  transform-style: preserve-3d;
  
  &:hover {
    transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  filter: brightness(1.05) contrast(1.05);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.15);
    filter: brightness(1.1) contrast(1.1);
  }
`;

const CornerAngle = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  border: 3px solid #00ADB5;
  z-index: 10;

  &.top-left {
    top: 20px;
    left: 20px;
    border-right: none;
    border-bottom: none;
  }

  &.top-right {
    top: 20px;
    right: 20px;
    border-left: none;
    border-bottom: none;
  }

  &.bottom-left {
    bottom: 20px;
    left: 20px;
    border-right: none;
    border-top: none;
  }

  &.bottom-right {
    bottom: 20px;
    right: 20px;
    border-left: none;
    border-top: none;
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export default Landing;
