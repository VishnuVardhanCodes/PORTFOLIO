import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPython,
  FaGithub,
} from "react-icons/fa";

function Skills() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-5 gradient-text fw-bold">
          Technical Skills
        </h2>

        <Row className="g-4">
          {/* Programming Languages */}
          <Col md={6}>
            <Card className="glass-card h-100">
              <Card.Body>
                <h4 className="mb-4">Programming Languages</h4>

                <p><FaPython /> Python</p>
                <ProgressBar now={80} className="mb-3" />

                <p><FaJs /> JavaScript</p>
                <ProgressBar now={75} />
              </Card.Body>
            </Card>
          </Col>

          {/* Frontend */}
          <Col md={6}>
            <Card className="glass-card h-100">
              <Card.Body>
                <h4 className="mb-4">Frontend Technologies</h4>

                <p><FaHtml5 /> HTML5</p>
                <ProgressBar now={85} className="mb-3" />

                <p><FaCss3Alt /> CSS3</p>
                <ProgressBar now={80} className="mb-3" />

                <p><FaReact /> React</p>
                <ProgressBar now={75} className="mb-3" />

                <p><FaBootstrap /> Bootstrap</p>
                <ProgressBar now={80} />
              </Card.Body>
            </Card>
          </Col>

          {/* Tools */}
          <Col md={12}>
            <Card className="glass-card">
              <Card.Body>
                <h4 className="mb-4">Tools & Platforms</h4>

                <p><FaGithub /> Git & GitHub</p>
                <ProgressBar now={85} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

export default Skills;
