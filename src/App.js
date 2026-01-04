import NavbarComponent from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarComponent />

      <section id="about" className="section">
        <About />
      </section>

      <section id="education" className="section">
        <Education />
      </section>

      <section id="skills" className="section">
        <Skills />
      </section>

      <section id="experience" className="section">
        <Experience />
      </section>

      <section id="projects" className="section">
        <Projects />
      </section>

      <section id="achievements" className="section">
        <Achievements />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
