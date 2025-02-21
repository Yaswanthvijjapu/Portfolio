import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300">
            <p>
              I'm a dedicated [Your Profession] with [X] years of experience in building beautiful and functional applications.
            </p>
            <p>
              Specializing in [Your Skills], I love transforming ideas into reality through clean code and creative solutions.
            </p>
            <div className="flex gap-4">
              <FaGithub className="text-3xl text-gray-300 hover:text-indigo-400 cursor-pointer transition duration-300" />
              <FaLinkedin className="text-3xl text-gray-300 hover:text-indigo-400 cursor-pointer transition duration-300" />
              <FaTwitter className="text-3xl text-gray-300 hover:text-indigo-400 cursor-pointer transition duration-300" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-lg transform rotate-6"></div>
            <img
              src="your-profile-pic.jpg"
              alt="Profile"
              className="relative rounded-lg shadow-2xl w-full max-w-md mx-auto object-cover h-96"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/400x600?text=Profile+Image')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;