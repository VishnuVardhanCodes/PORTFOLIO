import { Container, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const projectData = [
  {
    title: "Student Portfolio Website",
    description: "A modern, responsive personal portfolio built using React and Bootstrap with smooth scrolling and animations.",
    tech: "React, Bootstrap, CSS",
    github: "https://github.com/VishnuVardhanCodes/PORTFOLIO",
    live: "https://vishnuvardhanpolla.vercel.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
  },
  {
    title: "Online Quiz Portal",
    description: "A frontend-focused online quiz system with timer, autosave, role-based dashboards, and exam integrity features.",
    tech: "React, JavaScript, Bootstrap",
    github: "https://github.com/VivekGoudAdula/AI-Quiz-Portal.git",
    live: "https://ai-quiz-portal-rosy.vercel.app/",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "FC Barcelona Landing Page",
    description: "A visually stunning, responsive landing page for FC Barcelona built with modern web technologies.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/VishnuVardhanCodes/FC-Barcelona-Landing-Page",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2436"
  },
  {
    title: "StudLyf Application",
    description: "A lifestyle and productivity app for students featuring academic tracking and task management.",
    tech: "React Native, Node.js, MongoDB",
    github: "https://github.com/VishnuVardhanCodes",
    live: " ",
    image: "https://images.unsplash.com/photo-1523240715629-67d855adcdad?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Startup Copilot",
    description: "An AI-powered assistant for entrepreneurs to streamline business planning and market analysis.",
    tech: "AI APIs, React, Tailwind",
    github: "https://github.com/VishnuVardhanCodes",
    live: " ",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "ResQ360 Application",
    description: "A comprehensive emergency response platform for real-time safety monitoring and rescue coordination.",
    tech: "React, Firebase, Google Maps API",
    github: "https://github.com/VishnuVardhanCodes",
    live: " ",
    image: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "ML Hackathon Project",
    description: "Developed a predictive analytics model and interactive dashboard during an intense machine learning competition.",
    tech: "Python, Scikit-Learn, Streamlit",
    github: "https://github.com/VishnuVardhanCodes",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Hack Prix Hackathon",
    description: "Award-winning web application built in 24 hours addressing real-world environmental challenges.",
    tech: "React, Node.js, Express",
    github: "https://github.com/VishnuVardhanCodes",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Sahaay Bot",
    description: "A compassionate AI chatbot designed to provide mental health support and daily assistance.",
    tech: "Python, NLP, Flask",
    github: "https://github.com/VishnuVardhanCodes",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070"
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <Container fluid className="px-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-5 gradient-text fw-bold" style={{ fontSize: "4rem" }}>
            Projects
          </h2>

          <div className="projects-grid">
            {projectData.map((project, index) => (
              <div key={index} className="project-card-wrapper">
                <Card
                  className="glass-card h-100 project-card"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: 'none'
                  }}
                >
                  <Card.Body className="d-flex flex-column project-card-content">
                    <h3 className="mb-3">{project.title}</h3>
                    <p className="mb-4">
                      {project.description}
                    </p>
                    <p>
                      <strong>Tech Stack:</strong> {project.tech}
                    </p>

                    <div className="d-flex gap-2 mt-auto pt-3">
                      <Button
                        href={project.github}
                        target="_blank"
                        className="flex-grow-1 project-btn btn-github"
                      >
                        <FaGithub /> GitHub
                      </Button>

                      {project.live && (
                        <Button
                          href={project.live}
                          target="_blank"
                          className="flex-grow-1 project-btn btn-live"
                        >
                          <FaExternalLinkAlt /> Live
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Projects;
