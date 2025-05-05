"use client";
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Landing = () => {
  return (
    <Container>
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
                  <StatValue>25+</StatValue>
                  <StatLabel>Years Experience</StatLabel>
                </StatItem>
                <StatDivider />
                <StatItem>
                  <StatValue>98%</StatValue>
                  <StatLabel>Success Rate</StatLabel>
                </StatItem>
              </Stats>
              <Actions>
                <PrimaryButton
                  as={motion.button}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0, 173, 181, 0.2)" }}
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
  background-color: #EEEEEE;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
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
  padding: 2rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
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
  color: #222831;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const TitleHighlight = styled.span`
  color: #00ADB5;
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
  height: 600px;
  display: flex;
  align-items: center;
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
  animation: morph 8s ease-in-out infinite;
  filter: blur(2px);

  @keyframes morph {
    0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
    100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
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
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.15);
  }
`;

export default Landing;
