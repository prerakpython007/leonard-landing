"use client";
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    position: "CEO, Wilson Enterprises",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200",
    rating: 5,
    text: "The legal expertise and professionalism demonstrated by the team was exceptional. They handled our corporate litigation with remarkable precision and dedication.",
    tag: "Corporate Law"
  },
  {
    id: 2,
    name: "Sarah Chen",
    position: "Director, Tech Innovations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200",
    rating: 5,
    text: "Their strategic approach to intellectual property law helped us secure crucial patents. The attention to detail and industry knowledge is outstanding.",
    tag: "Intellectual Property"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    position: "Real Estate Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=200&h=200",
    rating: 5,
    text: "Navigating complex real estate transactions became seamless with their expert guidance. Their team's commitment to excellence is truly commendable.",
    tag: "Real Estate Law"
  }
];

const Testimonials = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <TestimonialSection>
      <Container>
        <Header>
          <SubTitle>Testimonials</SubTitle>
          <Title>What Our Clients Say</Title>
          <Description>
            Trusted by industry leaders and businesses across the nation
          </Description>
        </Header>
        <TestimonialGrid>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(testimonial.id)}
              onMouseLeave={() => setHoveredId(null)}
              $isHovered={hoveredId === testimonial.id}
            >
              <QuoteIcon>"</QuoteIcon>
              <TestimonialTag>{testimonial.tag}</TestimonialTag>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <Rating>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i}>★</Star>
                ))}
              </Rating>
              <ClientInfo>
                <ClientImage src={testimonial.image} alt={testimonial.name} />
                <ClientDetails>
                  <ClientName>{testimonial.name}</ClientName>
                  <ClientPosition>{testimonial.position}</ClientPosition>
                </ClientDetails>
              </ClientInfo>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </Container>
    </TestimonialSection>
  );
};

const TestimonialSection = styled.section`
  background-color: #EEEEEE;
  padding: 100px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SubTitle = styled.h3`
  color: #00ADB5;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  color: #222831;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 16px;
`;

const Description = styled.p`
  color: #393E46;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const TestimonialCard = styled.div<{ $isHovered: boolean }>`
  background: white;
  padding: 40px;
  border-radius: 16px;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  ${({ $isHovered }) => $isHovered && `
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  `}
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 80px;
  color: #00ADB5;
  opacity: 0.1;
  font-family: Georgia, serif;
`;

const TestimonialTag = styled.span`
  background: rgba(0, 173, 181, 0.1);
  color: #00ADB5;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 20px;
`;

const TestimonialText = styled.p`
  color: #393E46;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  min-height: 100px;
`;

const Rating = styled.div`
  margin-bottom: 20px;
`;

const Star = styled.span`
  color: #00ADB5;
  margin-right: 4px;
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ClientImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const ClientDetails = styled.div``;

const ClientName = styled.h4`
  color: #222831;
  font-weight: 600;
  margin: 0;
`;

const ClientPosition = styled.p`
  color: #393E46;
  font-size: 0.9rem;
  margin: 4px 0 0;
`;

export default Testimonials;
