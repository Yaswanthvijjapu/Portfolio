// src/components/About.jsx
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Styled components with animations
const SectionWrapper = styled.section`
  position: relative;
  background: radial-gradient(circle at 50% 50%, rgba(20, 30, 60, 0.8), rgba(0, 0, 30, 0.9));
  backdrop-filter: blur(4px);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 25px 25px;
    opacity: 0.4;
    animation: pulseSlow 4s ease-in-out infinite;
  }

  @keyframes pulseSlow {
    0%, 100% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.2;
    }
  }
`;

const AnimatedTitle = styled.h2`
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

const AnimatedText = styled.p`
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

const AnimatedSocialWrapper = styled.div`
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

const ImageWrapper = styled.div`
  position: relative;
  animation: float 6s ease-in-out infinite;
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
`;

const BackgroundAccent = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent);
  transform: rotate(6deg);
  opacity: 0.5;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.75;
  }
`;

const About = () => {
  return (
    <SectionWrapper id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedTitle className="text-4xl font-bold text-white text-center mb-12">
          About Me
        </AnimatedTitle>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AnimatedText className="text-lg leading-relaxed text-gray-300">
              I'm a dedicated [Your Profession] with [X] years of experience in building beautiful and functional applications.
            </AnimatedText>
            <AnimatedText className="text-lg leading-relaxed text-gray-300">
              Specializing in [Your Skills], I love transforming ideas into reality through clean code and creative solutions.
            </AnimatedText>
            <AnimatedSocialWrapper className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FaGithub className="text-3xl text-gray-300 hover:text-indigo-400 cursor-pointer" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FaLinkedin className="text-3xl text-gray-300 hover:text-indigo-400 cursor-pointer" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FaTwitter className="text-3xl text-gray-300 hover:text-indigo-400 cursor-pointer" />
              </a>
            </AnimatedSocialWrapper>
          </div>
          <ImageWrapper>
            <BackgroundAccent className="rounded-lg" />
            <img
              src="your-profile-pic.jpg"
              alt="Profile"
              className="relative rounded-lg shadow-2xl w-full max-w-md mx-auto object-cover h-96 transform hover:scale-105 transition-transform duration-300"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/400x600?text=Profile+Image')}
            />
          </ImageWrapper>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;