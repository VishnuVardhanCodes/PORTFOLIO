import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


function Projects() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        // title selection for the page
        <h2 className="text-center mb-5 gradient-text fw-bold">
          Projects
        </h2>

        <Row className="g-4">
          {/* Project 1 */}
          <Col md={6} lg={4}>
            <Card className="glass-card h-100">
              <Card.Body>
                <h5>Student Portfolio Website</h5>
                <p>
                  A modern, responsive personal portfolio built using React and
                  Bootstrap with smooth scrolling and animations.
                </p>
                <p>
                  <strong>Tech Stack:</strong> React, Bootstrap, CSS
                </p>

                <div className="d-flex gap-2 mt-3">
                  <Button
                    variant="outline-light"
                    href="#"
                    target="_blank"
                  >
                    <FaGithub /> GitHub
                  </Button>

                  <Button
                    variant="outline-light"
                    href="#"
                    target="_blank"
                  >
                    <FaExternalLinkAlt /> Live
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Project 2 */}
          <Col md={6} lg={4}>
            <Card className="glass-card h-100">
              <Card.Body>
                <h5>Online Quiz Portal</h5>
                <p>
                  A frontend-focused online quiz system with timer, autosave,
                  role-based dashboards, and exam integrity features.
                </p>
                <p>
                  <strong>Tech Stack:</strong> React, JavaScript, Bootstrap
                </p>

                <div className="d-flex gap-2 mt-3">
                  <Button
                    variant="outline-light"
                    href="#"
                    target="_blank"
                  >
                    <FaGithub /> GitHub
                  </Button>

                  <Button
                    variant="outline-light"
                    href="#"
                    target="_blank"
                  >
                    <FaExternalLinkAlt /> Live
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Project 3 */}
          <Col md={6} lg={4}>
            <Card className="glass-card h-100">
              <Card.Body>
                <h5>AI Presentation Generator</h5>
                <p>
                  An AI-based system that generates complete PowerPoint
                  presentations from user prompts.
                </p>
                <p>
                  <strong>Tech Stack:</strong> React, AI APIs, JavaScript
                </p>

                <div className="d-flex gap-2 mt-3">
                  <Button
                    variant="outline-light"
                    href="#"
                    target="_blank"
                  >
                    <FaGithub /> GitHub
                  </Button>

                  <Button
                    variant="outline-light"
                    href="#"
                    target="_blank"
                  >
                    <FaExternalLinkAlt /> Live
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

export default Projects;

