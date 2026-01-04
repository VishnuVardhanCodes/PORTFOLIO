import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function About() {
  return (
    <Container>
      <Row className="align-items-center">
        {/* Left Content */}
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="gradient-text fw-bold">
              Vishnu Vardhan
            </h1>
            <h4 className="mb-3">
              Student | Frontend Developer | AI Enthusiast | Video Editing 
            </h4>

            <div className="glass-card mt-4">
              <p>
                I am a passionate AI & frontend developer who enjoys creating modern, user-friendly 
                web applications using React and Bootstrap. Alongside academics, I actively participate in hackathons, 
                build AI-driven projects, and continuously improve my problem-solving and development skills.
              </p>

              <Button className="btn-custom mt-3">
                Explore My Work
              </Button>
            </div>
          </motion.div>
        </Col>

        {/* Right Content */}
        <Col md={6} className="text-center mt-5 mt-md-0">
          <motion.img
            src="vishnu.jpeg"
            alt="Vishnu Vardhan"
            width="250"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
