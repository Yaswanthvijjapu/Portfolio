import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Social Media Links */}
          <div className="flex space-x-8 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 
                         transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 
                         transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 
                         transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>

          {/* Footer Text */}
          <div className="flex items-center text-gray-700 dark:text-gray-200 font-medium text-lg mb-4">
            <span>Made with</span>
            <Heart className="w-5 h-5 mx-2 text-red-500 animate-pulse" />
            <span>by Yaswanth</span>
          </div>

          {/* Copyright Text */}
          <p className="text-sm text-gray-500 dark:text-gray-400 font-light tracking-wide">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;