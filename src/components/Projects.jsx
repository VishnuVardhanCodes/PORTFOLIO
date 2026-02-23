import { Container, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const projectData = [
  {
    title: "Student Portfolio Website",
    description: "A modern, responsive personal portfolio built using React and Bootstrap with smooth scrolling and animations.",
    tech: "React, Bootstrap, CSS",
    github: "#",
    live: "#"
  },
  {
    title: "Online Quiz Portal",
    description: "A frontend-focused online quiz system with timer, autosave, role-based dashboards, and exam integrity features.",
    tech: "React, JavaScript, Bootstrap",
    github: "#",
    live: "#"
  },
  {
    title: "AI Presentation Generator",
    description: "An AI-based system that generates complete PowerPoint presentations from user prompts.",
    tech: "React, AI APIs, JavaScript",
    github: "#",
    live: "#"
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

          <div className="projects-marquee-container">
            <motion.div
              className="projects-marquee-track"
              animate={{
                x: ["0%", "-25%"]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                }
              }}
            >
              {/* Repeating the list 4 times to ensure no gaps on wide screens */}
              {[...projectData, ...projectData, ...projectData, ...projectData].map((project, index) => (
                <div key={index} className="project-card-wrapper">
                  <Card className="glass-card h-100">
                    <Card.Body className="d-flex flex-column">
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

                        <Button
                          href={project.live}
                          target="_blank"
                          className="flex-grow-1 project-btn btn-live"
                        >
                          <FaExternalLinkAlt /> Live
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Projects;
