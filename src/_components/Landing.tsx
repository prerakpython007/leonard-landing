"use client";

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

const Landing = () => {
  const router = useRouter();
  const [count, setCount] = useState({ years: 0, rate: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { damping: 15, stiffness: 150 };
  const containerRef = useRef<HTMLDivElement>(null);
  
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
  }, [magneticX, magneticY]);

  useEffect(() => {
    const animateCount = () => {
      const duration = 2000;
      const framesPerSecond = 60;
      const totalFrames = duration * framesPerSecond / 1000;
      
      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        setCount({
          years: Math.min(25, Math.floor((frame / totalFrames) * 11)),
          rate: Math.min(98, Math.floor((frame / totalFrames) * 98))
        });
        
        if (frame === totalFrames) clearInterval(timer);
      }, 1000 / framesPerSecond);
    };

    animateCount();
  }, []);

  // Add mouse interaction for dots
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dots = document.querySelectorAll('.grid-dot');
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      dots.forEach((dot: Element) => {
        const dotElement = dot as HTMLElement;
        const dotX = dotElement.offsetLeft;
        const dotY = dotElement.offsetTop;
        
        const distance = Math.sqrt(
          Math.pow(mouseX - dotX, 2) + Math.pow(mouseY - dotY, 2)
        );
        
        if (distance < 100) {
          const scale = 1 - distance / 100;
          dotElement.style.transform = `scale(${1 + scale})`;
          dotElement.style.opacity = `${0.3 + scale * 0.7}`;
        } else {
          dotElement.style.transform = 'scale(1)';
          dotElement.style.opacity = '0.3';
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Container ref={containerRef}>
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
                <TitleHighlight>IPR</TitleHighlight>
                <span> is our </span>
                <br />
                <span>game</span>
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
                  as={motion.a}
                  href="mailto:info@leonardsolutions.in"
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
                  onClick={() => router.push('/about-us')}
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

// Styled components
const Container = styled.div`
  background: #EEEEEE;
  position: relative;
  min-height: 100vh;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(34, 40, 49, 0.02) 2px, transparent 2px),
      linear-gradient(90deg, rgba(34, 40, 49, 0.02) 2px, transparent 2px);
    background-size: 50px 50px;
    background-position: -1px -1px;
    mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
    z-index: -1;
  }
`;

const ParticleBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(0, 173, 181, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 173, 181, 0.03) 1px, transparent 1px);
  background-size: 100px 100px;
  opacity: 0.7;
  pointer-events: none;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  padding-top: 10vh;
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
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: flex-start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem;
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

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 4vw, 4rem);
  line-height: 1.1;
  background: linear-gradient(135deg, #222831 0%, #393E46 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 3.5vw, 3rem);
  }
`;

const TitleHighlight = styled.span`
  background: linear-gradient(135deg, #00ADB5 0%, #009ca3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

const SubHeading = styled.h2`
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  color: #393E46;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const StatItem = styled.div``;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #222831;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const StatLabel = styled.div`
  color: #393E46;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const StatDivider = styled.div`
  height: 40px;
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
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.8rem 1.5rem;
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: #222831;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.8rem 1.5rem;
  }
`;

const RightContent = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 300px;
    display: block;
  }
`;

const DecorativeShape = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  background: linear-gradient(135deg, rgba(0, 173, 181, 0.15), transparent);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: 
    morph 8s ease-in-out infinite,
    float 6s ease-in-out infinite;
  filter: blur(2px);

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }

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
  width: 350px;
  height: 450px;
  overflow: hidden;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
  }

  @media (max-width: 1024px) {
    width: 250px;
    height: 300px;
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

export default Landing;