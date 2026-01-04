import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

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
            <h1
              style={{
                color: "#C77DDB",
                fontWeight: "bold",
                fontSize: "4.5rem",
                marginBottom: "2rem",
              }}
            >
              Vishnu Vardhan
            </h1>

            <h4
              style={{
                color: "#d40c08",
                fontWeight: "bold",
                fontSize: "1.8rem",
                marginBottom: "2rem",
              }}
            >
              AI-ML STUDENT | FRONTEND DEVELOPER | VIDEO EDITING
            </h4>

            <div className="glass-card">
              <p
                style={{
                  color: "#ffffff",
                  fontSize: "1.15rem",
                  lineHeight: "1.8",
                  marginBottom: "3rem",
                }}
              >
                I am a passionate AI & frontend developer who enjoys creating
                modern, user-friendly web applications using React and
                Bootstrap. Alongside academics, I actively participate in
                hackathons, build AI-driven projects, and continuously improve
                my problem-solving and development skills.
              </p>

              {/* ICONS BELOW DESCRIPTION */}
              <div className="about-icons">
                <a
                  href="mailto:vishnumaxpolla32@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope />
                </a>

                <a
                  href="https://github.com/VishnuVardhanCodes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/polla-vishnu-vardhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        </Col>

        {/* Right Image */}
        <Col md={6} className="text-center mt-5 mt-md-0">
          <motion.img
            src="/images/vishnu.jpeg"
            alt="Vishnu Vardhan"
            className="about-large-image"
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
