import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on mount (client-side only)
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Update the 'dark' class on the html element whenever darkMode changes
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    // Listen for system color scheme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setDarkMode(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#F9FAFB]/90 dark:bg-[#1F2937]/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            <span className="text-3xl font-extrabold bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent tracking-tight">
              Portfolio
            </span>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-12 flex items-center space-x-10">
            {["Home", "About", "Projects", "Skills", "Blogs", "Contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                          font-semibold text-lg transition-all duration-300 ease-in-out"
                onClick={() =>
                  item === "Blogs"
                    ? window.location.href = "/blogs"
                    : scrollTo(item.toLowerCase())
                }
              >
                {item}
              </motion.button>
            ))}

            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                         transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                         transition-all duration-300 ease-in-out"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                         transition-all duration-300 ease-in-out"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#F9FAFB]/95 dark:bg-[#1F2937]/95 backdrop-blur-lg shadow-lg"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                className="block w-full text-left px-4 py-3 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                           font-medium text-lg transition-all duration-300 ease-in-out 
                           hover:bg-gray-100 dark:hover:bg-[#4B5563] rounded-lg"
                onClick={() => scrollTo(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
