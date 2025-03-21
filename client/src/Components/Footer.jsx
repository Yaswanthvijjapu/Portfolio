import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F9FAFB] dark:bg-[#1F2937] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-8 mb-6">
            <a
              href="https://github.com/Yaswanthvijjapu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                         transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <FaGithub className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/yaswanth-vijjapu-2572a7291"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                         transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:yaswanthvijjapu799@gmail.com"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                         transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <FaEnvelope className="w-7 h-7" />
            </a>
          </div>

          <div className="flex items-center text-[#111827] dark:text-[#F3F4F6] font-medium text-lg mb-4">
            <span>Made with</span>
            <FaHeart className="w-5 h-5 mx-2 text-red-500 animate-pulse" />
            <span>by Yaswanth</span>
          </div>

          <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] font-light tracking-wide">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;