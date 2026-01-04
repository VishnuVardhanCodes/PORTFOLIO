import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaCertificate,
  FaLaptopCode,
  FaEye,
  FaDownload,
} from "react-icons/fa";

function Achievements() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-5 gradient-text fw-bold">
          Achievements & Resume
        </h2>

        <Row className="g-4">
          {/* Achievement 1 */}
          <Col md={6} lg={4}>
            <Card className="glass-card h-100 text-center">
              <Card.Body>
                <FaLaptopCode size={40} className="mb-3 text-info" />
                <h5>Hackathons</h5>
                <p>
                  Participated in national-level hackathons and coding
                  competitions, working on real-world problem statements.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Achievement 2 */}
          <Col md={6} lg={4}>
            <Card className="glass-card h-100 text-center">
              <Card.Body>
                <FaCertificate size={40} className="mb-3 text-warning" />
                <h5>Certifications</h5>
                <p>
                  Completed certifications in Web Development, React, Python,
                  and AI-related technologies.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Achievement 3 */}
          <Col md={6} lg={4}>
            <Card className="glass-card h-100 text-center">
              <Card.Body>
                <FaTrophy size={40} className="mb-3 text-success" />
                <h5>Workshops & Awards</h5>
                <p>
                  Attended industry workshops and received recognition for
                  academic and technical performance.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Resume Section inside Achievements */}
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Card className="glass-card text-center">
              <Card.Body>
                <h4 className="mb-3">My Resume</h4>
                <p>
                  View or download my resume to learn more about my education,
                  skills, projects, and experience.
                </p>

                <div className="d-flex justify-content-center gap-3 mt-4">
                  {/* View Resume */}
                  <Button
                    className="btn-custom"
                    href="/resume.pdf"
                    target="_blank"
                  >
                    <FaEye className="me-2" />
                    View Resume
                  </Button>

                  {/* Download Resume */}
                  <Button
                    variant="outline-light"
                    href="/resume.pdf"
                    download
                  >
                    <FaDownload className="me-2" />
                    Download Resume
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

export default Achievements;
