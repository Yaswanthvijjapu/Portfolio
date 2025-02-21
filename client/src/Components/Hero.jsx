import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-down">
          Hi, I'm [Your Name]
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          A passionate [Your Profession] creating innovative solutions with modern technologies
        </p>
        <div className="flex justify-center gap-6">
          <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-white font-semibold transition duration-300 transform hover:-translate-y-1">
            View Projects
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full font-semibold transition duration-300 transform hover:-translate-y-1">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;