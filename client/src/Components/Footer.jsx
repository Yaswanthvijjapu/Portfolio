import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F9FAFB] dark:bg-[#1F2937] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-8 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                         transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                         transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                         transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>

          <div className="flex items-center text-[#111827] dark:text-[#F3F4F6] font-medium text-lg mb-4">
            <span>Made with</span>
            <Heart className="w-5 h-5 mx-2 text-red-500 animate-pulse" />
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