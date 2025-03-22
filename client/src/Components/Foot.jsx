import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Foot = () => {
  return (
    <footer className="bg-[#F9FAFB] dark:bg-[#1F2937] py-8"> {/* Reduced py-12 to py-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4"> {/* Reduced space-x-8 to space-x-6, mb-6 to mb-4 */}
            <a
              href="https://github.com/Yaswanthvijjapu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                         transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <FaGithub className="w-6 h-6" /> {/* Reduced w-7 h-7 to w-6 h-6 */}
            </a>
            <a
              href="https://www.linkedin.com/in/yaswanth-vijjapu-2572a7291"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                         transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <FaLinkedin className="w-6 h-6" /> {/* Reduced w-7 h-7 to w-6 h-6 */}
            </a>
            <a
              href="mailto:yaswanthvijjapu799@gmail.com"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                         transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <FaEnvelope className="w-6 h-6" /> {/* Reduced w-7 h-7 to w-6 h-6 */}
            </a>
          </div>

          <div className="flex items-center text-[#111827] dark:text-[#F3F4F6] font-medium text-base mb-3"> {/* Reduced text-lg to text-base, mb-4 to mb-3 */}
            <span>Made with</span>
            <FaHeart className="w-4 h-4 mx-2 text-red-500 animate-pulse" /> {/* Reduced w-5 h-5 to w-4 h-4 */}
            <span>by Yaswanth</span>
          </div>

          <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] font-light tracking-wide"> {/* Reduced text-sm to text-xs */}
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Foot;