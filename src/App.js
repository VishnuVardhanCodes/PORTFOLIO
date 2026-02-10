import { useState, useEffect } from "react";
import NavbarComponent from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Galaxy from "./components/Galaxy";
import TechLoop from "./components/TechLoop";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }, [isLightTheme]);

  return (
    <>
      {/* Galaxy Background */}
      <Galaxy isLightTheme={isLightTheme} />

      {/* Navigation */}
      <NavbarComponent toggleTheme={toggleTheme} isLightTheme={isLightTheme} />

      {/* About */}
      <section id="about" className="section">
        <About />
      </section>

      {/* Education */}
      <section id="education" className="section">
        <Education />
      </section>

      {/* Technologies & Tools (Skills Replacement) */}
      <section id="skills" className="section">
        <TechLoop />
      </section>

      {/* Experience */}
      <section id="experience" className="section">
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
