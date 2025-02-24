import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fade-in">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300 animate-slide-in-left">
            <p className="text-lg leading-relaxed">
              I'm a dedicated [Your Profession] with [X] years of experience in building beautiful and functional applications.
            </p>
            <p className="text-lg leading-relaxed">
              Specializing in [Your Skills], I love transforming ideas into reality through clean code and creative solutions.
            </p>
            <div className="flex gap-4">
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
            </div>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-indigo-600 rounded-lg transform rotate-6 opacity-50 hover:opacity-75 transition-opacity duration-300"></div>
            <img
              src="your-profile-pic.jpg"
              alt="Profile"
              className="relative rounded-lg shadow-2xl w-full max-w-md mx-auto object-cover h-96 transform hover:scale-105 transition-transform duration-300"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/400x600?text=Profile+Image')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;