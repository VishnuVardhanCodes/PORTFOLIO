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
    title: "Ship or Shame (Blockchain)",
    description: "A decentralized blockchain project for transparent voting and reputation management. Built with smart contracts and a modern web3 stack.",
    tech: "Solidity, React, Web3, Ethereum",
    github: "https://github.com/yourusername/ship-or-shame",
    live: "https://shiporshame.vercel.app/",
    image: "/images/monad-bg.png"
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
    title: "StudLyf Application",
    description: "A lifestyle and productivity app for students featuring academic tracking and task management.",
    tech: "React Native, Node.js, MongoDB",
    github: "https://github.com/VivekGoudAdula/studlyf",
    live: " https://studlyff.vercel.app/",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=2071"
  },
  {
    title: "FC Barcelona Landing Page",
    description: "A visually stunning, responsive landing page for FC Barcelona built with modern web technologies.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/VishnuVardhanCodes/FC-Barcelona-Landing-Page",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2436"
  },
  {
    title: "Startup Copilot",
    description: "An AI-powered assistant for entrepreneurs to streamline business planning and market analysis.",
    tech: "AI APIs, React, Tailwind",
    github: "https://github.com/VivekGoudAdula/startup-copilot",
    live: "https://start-up-copilot.vercel.app/",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "ResQ360 Application",
    description: "A comprehensive emergency response platform for real-time safety monitoring and rescue coordination.",
    tech: "React, Firebase, Google Maps API",
    github: "https://github.com/VivekGoudAdula/RESQ360",
    live: " https://resq-360.vercel.app/",
    image: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "ML Hackathon Project",
    description: "Developed a predictive analytics model and interactive dashboard during an intense machine learning competition.",
    tech: "Python, Scikit-Learn, Streamlit",
    github: "https://github.com/VivekGoudAdula/DATANYX",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Hack Prix Hackathon",
    description: "Award-winning web application built in 24 hours addressing real-world environmental challenges.",
    tech: "React, Node.js, Express",
    github: "https://github.com/VivekGoudAdula/HACKPRIX",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Sahaay Bot",
    description: "A compassionate AI chatbot designed to provide mental health support and daily assistance.",
    tech: "Python, NLP, Flask",
    github: "https://github.com/VivekGoudAdula/Sahaaya-Bot",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070"
  }
];

function Projects() {
  return (
    <section
      className="projects-section"
      id="projects"
    >
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
              <motion.div
                key={index}
                className="project-card-wrapper"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="glass-card h-100 project-card"
                  style={{
                    backgroundImage:
                      project.title === "Ship or Shame (Blockchain)"
                        ? `linear-gradient(120deg, #2c5364 60%, #00f5a0 100%), url(${project.image})`
                        : `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${project.image})`,
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Projects;
