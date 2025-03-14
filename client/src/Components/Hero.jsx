// src/components/Hero.jsx
import React from 'react';
import styled from 'styled-components';

// Styled component for the background with animations
const BackgroundWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(0, 20, 60, 0.9), rgba(0, 0, 30, 1));
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.5;
    animation: pulseSlow 3s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    top: 20%;
    right: 10%;
    background: radial-gradient(circle, rgba(0, 100, 255, 0.3), transparent);
    border-radius: 50%;
    filter: blur(20px);
    animation: float 6s ease-in-out infinite;
  }

  @keyframes pulseSlow {
    0%, 100% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.2;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

// Styled components for animated content
const AnimatedTitle = styled.h1`
  animation: fadeIn 1s ease-out;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AnimatedSubtitle = styled.p`
  animation: fadeIn 1s ease-out 0.2s;
  animation-fill-mode: both;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AnimatedDescription = styled.p`
  animation: fadeIn 1s ease-out 0.4s;
  animation-fill-mode: both;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AnimatedButtonWrapper = styled.div`
  animation: fadeIn 1s ease-out 0.6s;
  animation-fill-mode: both;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AnimatedImage = styled.img`
  animation: float 6s ease-in-out infinite;
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-5 overflow-hidden">
      <BackgroundWrapper />
      <div className="relative max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-8 z-10">
        <div className="flex-1 min-w-[300px] space-y-6">
          <AnimatedTitle className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Hi, I'm [Your Name]
          </AnimatedTitle>
          <AnimatedSubtitle className="text-2xl text-gray-200 drop-shadow-md">
            [Full Stack developer] | Crafting Digital Solutions
          </AnimatedSubtitle>
          <AnimatedDescription className="text-lg text-gray-200 max-w-lg drop-shadow-md">
            I specialize in creating modern, responsive web applications that 
            combine beautiful design with seamless functionality.
          </AnimatedDescription>
          <AnimatedButtonWrapper className="flex gap-4 flex-wrap">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:scale-105 transform">
              View Projects
            </button>
            <button className="bg-transparent text-white px-6 py-3 rounded-md font-medium border-2 border-white hover:bg-white hover:text-blue-600 transition-colors duration-300 shadow-lg hover:scale-105 transform">
              Contact Me
            </button>
          </AnimatedButtonWrapper>
        </div>
        <div className="flex-1 min-w-[300px] flex justify-center">
          <AnimatedImage 
            src="/path-to-your-image.jpg" 
            alt="Profile" 
            className="max-w-[400px] rounded-full shadow-2xl object-cover border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;