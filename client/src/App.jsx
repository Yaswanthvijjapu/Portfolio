import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./components/Footer";
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
