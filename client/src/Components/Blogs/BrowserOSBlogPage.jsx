import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

const BrowserOSBlogPage = () => {
  const navigate = useNavigate();
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#111827] text-gray-800 dark:text-gray-100 transition-all duration-300">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-8 py-10 gap-8 ">
        {/* SIDEBAR */}
        <aside className="lg:w-1/4 sticky top-10 self-start hidden sm:block">
          <div className="space-y-6 mt-10">
            {/* BACK BUTTON */}
            <div
              onClick={() => navigate("/blogs")}
              className="inline-flex items-center text-sm cursor-pointer text-[#3B82F6] hover:underline hover:pl-1 transition-all duration-200"
            >
              ← Back to Blogs
            </div>

            {/* TAGS */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["Web Development", "Progressive Web Apps", "Future of Tech", "WebAssembly", "Cloud Computing"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm hover:scale-105 transition-transform duration-200"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* AUTHOR INFO */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md text-center">
              <p className="text-sm font-semibold">By Yaswanth Vijjapu</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">April 29, 2025</p>
              <p className="text-xs mt-2">
                <a
                  href="mailto:yaswanthvijjapu799@gmail.com"
                  className="text-cyan-500 hover:underline"
                >
                  Contact
                </a>{" "}
                |{" "}
                <a
                  href="https://www.linkedin.com/in/yaswanth-vijjapu-2572a7291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:underline"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="lg:w-3/4 space-y-8 mt-12">
          {/* TITLE */}
          <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-xl p-6 shadow-md backdrop-blur-sm ring-1 ring-blue-300/30">
            <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight mb-2">
              What if the Browser Becomes the OS? Exploring the Future of Web-Based Computing
            </h1>
            <p className="text-sm leading-relaxed">
              The browser is no longer just a window to the internet. With cloud IDEs, PWAs, and WebAssembly, it's turning into a full-blown OS.
            </p>
          </div>

          {/* CONTENT SECTIONS */}
          <div className="space-y-6">
            {/* INTRODUCTION */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-3">Introduction</h2>
              <p className="text-base leading-relaxed">
                The browser has evolved from a mere portal to a powerful computing environment, enabling everything from gaming to video editing within a tab.
              </p>
            </div>

            {/* CHROMEBOOK CASE STUDY */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-3">Chromebooks: A Browser-First Reality</h2>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Chromebooks rely on cloud storage, apps, and minimal local installs.</li>
                <li>Tools like Figma and VS Code Web outperform native counterparts.</li>
              </ul>
              <p className="italic text-sm text-gray-600 dark:text-gray-400 mt-3">
                We're already living in a browser-driven world.
              </p>
            </div>

            {/* QUOTE */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center">
              <blockquote className="text-lg italic text-blue-600 dark:text-blue-300">
                “When the browser becomes the runtime, the OS fades into the background.”
              </blockquote>
            </div>

            {/* TECHNOLOGIES */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-3">Technologies Driving the Shift</h2>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li><strong>PWAs</strong>: Web apps with native-like performance and offline support.</li>
                <li><strong>WebAssembly</strong>: Near-native performance in browsers.</li>
                <li><strong>Cloud IDEs</strong>: Replit, Codespaces, and StackBlitz for development.</li>
                <li><strong>SSR/Edge Computing</strong>: Fast, secure rendering globally.</li>
              </ul>
            </div>

            {/* TOOLS */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-3">Browser-First Tools</h2>
              <div className="grid grid-cols-2 gap-4">
                {["GitHub Codespaces", "Figma", "Google Docs", "Replit"].map((tool) => (
                  <div
                    key={tool}
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-center text-sm"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* DEVELOPERS */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-3">Impact on Developers</h2>
              <p className="text-base leading-relaxed">
                Developers must focus on web performance, frontend frameworks, and building secure, offline-ready PWAs.
              </p>
            </div>

            {/* FUTURE OF OS */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-3">Will OSes Disappear?</h2>
              <p className="text-base leading-relaxed">
                Native OSes still lead in gaming and hardware access, but browsers may suffice for most users and businesses.
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-8 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>Blogs Designed by Yaswanth Vijjapu 🚀</p>
      </footer>

      {/* SCROLL TO TOP */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-xl transition transform hover:scale-110"
        >
          <IoIosArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default BrowserOSBlogPage;