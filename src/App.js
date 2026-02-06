import NavbarComponent from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Galaxy from "./components/Galaxy";
import TechLoop from "./components/TechLoop";

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

      {/* Technologies & Tools Loop */}
      <section id="tech" className="section">
        <TechLoop />
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <Skills />
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
