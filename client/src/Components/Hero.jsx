import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#F9FAFB] dark:bg-[#1F2937]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-bold text-[#111827] dark:text-[#F3F4F6] mb-6"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
              Yaswanth
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-[#6B7280] dark:text-[#9CA3AF] mb-8"
          >
            Full Stack Developer | MERN Specialist | Problem Solver
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-[#6B7280] dark:text-[#9CA3AF] mb-12 max-w-2xl mx-auto"
          >
            I create beautiful, responsive, and user-friendly web applications
            using modern technologies and best practices.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-8 flex justify-center space-x-6"
          >
            <a
              href="https://github.com/Yaswanthvijjapu" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] 
                         transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/yaswanth-vijjapu-2572a7291" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] 
                         transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:yaswanthvijjapu799@gmail.com" // Replace with your email
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6] 
                         transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <Mail className="w-7 h-7" />
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#8B5CF6] text-white px-8 py-3 rounded-full font-medium inline-flex items-center space-x-2
                       hover:bg-[#7C3AED] transition-colors duration-300 transform hover:scale-105"
          >
            <span>View My Work</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;