// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex items-center px-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-8">
        <div className="flex-1 min-w-[300px] space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I'm [Your Name]
          </h1>
          <p className="text-2xl text-gray-600">
            [Your Profession] | Crafting Digital Solutions
          </p>
          <p className="text-lg text-gray-600 max-w-lg">
            I specialize in creating modern, responsive web applications that 
            combine beautiful design with seamless functionality.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300">
              View Projects
            </button>
            <button className="bg-transparent text-blue-600 px-6 py-3 rounded-md font-medium border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex-1 min-w-[300px] flex justify-center">
          <img 
            src="/path-to-your-image.jpg" 
            alt="Profile" 
            className="max-w-[400px] rounded-full shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;