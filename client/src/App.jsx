import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Foot from "./Components/Foot";
import About from "./Components/About";
import Achievements from "./Components/Achievements";
import AllProjects from "./Components/Allprojects";
import './index.css';

// Home page component with reduced gaps
const Home = () => (
  <div className="space-y-8"> {/* Added container with reduced spacing */}
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
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-[#1F2937]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </main>
      <Foot />
    </Router>
  );
}

export default App;