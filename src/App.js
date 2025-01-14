import React from "react";
import First from "./components/First";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import './App.css';

export default function App() {
  return (
    <>
      <main>
        <Navbar />
        <First />
        <About />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
