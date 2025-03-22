import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Foot from "./Components/Foot";
import About from "./Components/About";
import Achievements from "./Components/Achievements";
import './index.css';
import Listpro from "./Components/Listpro";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Home page component
const Home = () => (
  <div className="space-y-8">
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Achievements />
    <Contact />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this component */}
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-[#1F2937]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Listpro />} />
        </Routes>
      </main>
      <Foot />
    </Router>
  );
}

export default App;