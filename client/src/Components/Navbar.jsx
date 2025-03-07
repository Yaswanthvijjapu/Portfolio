import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Portfolio </h1>
          <div className="space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition duration-300">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition duration-300">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
