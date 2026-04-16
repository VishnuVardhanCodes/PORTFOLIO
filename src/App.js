import { useState, useEffect } from "react";
import NavbarComponent from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Galaxy from "./components/Galaxy";
import TechLoop from "./components/TechLoop";
import "./App.css";

function App() {
  return (
    <>
      {/* Galaxy Background */}
      <Galaxy />

      {/* Navigation */}
      <NavbarComponent />

      {/* About */}
      <section id="about" className="section">
        <About />
      </section>

      {/* Education */}
      <section id="education" className="section">
        <Education />
      </section>

      {/* Technologies & Tools (Skills Replacement) */}
      <section id="skills" className="section reduced-spacing-section">
        <TechLoop />
      </section>

      {/* Experience */}
      <section id="experience" className="section reduced-spacing-section">
        <Experience />
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <Projects />
      </section>

      {/* Achievements */}
      <section id="achievements" className="section">
        <Achievements />
      </section>

      {/* Resume */}
      <section id="resume" className="section">
        <Resume />
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
