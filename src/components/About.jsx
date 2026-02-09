import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import TextType from "./TextType";



function About() {
  return (
    <Container>
      {/* 1. NAME & TITLE SECTION (Centered Top) */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5"
      >
        <h1
          style={{
            color: "#C77DDB",
            fontWeight: "bold",
            fontSize: "4.5rem",
            marginBottom: "1rem",
            letterSpacing: "2px",
            textShadow: "0 0 20px rgba(199, 125, 219, 0.4)",
          }}
        >
          VISHNU VARDHAN
        </h1>

        <div style={{ height: "80px", marginBottom: "2rem" }}>
          <TextType
            text={["AI-ML STUDENT", "FRONTEND DEVELOPER", "VIDEO EDITING"]}
            typingSpeed={100}
            deletingSpeed={50}
            loop={true}
            showCursor={true}
            cursorCharacter="|"
            textColors={["#d40c08", "#00f5a0", "#a64aff", "#ff0055"]}
            className="about-typing-text"
            style={{
              fontWeight: "bold",
              fontSize: "3.5rem",
              fontFamily: '"Poppins", sans-serif',
            }}
          />
        </div>
      </motion.div>

      {/* 2. CONTENT ROW (Two Columns) */}
      <Row className="align-items-stretch">
        {/* Left Col: Description & Icons */}
        <Col md={6} className="mb-4 mb-md-0">
          <motion.div
            className="glass-card h-100 d-flex flex-column justify-content-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "rgba(255, 255, 255, 0.05)"
            }}
          >
            <p
              style={{
                color: "#ffffff",
                fontSize: "1.25rem",
                lineHeight: "1.9",
                marginBottom: "3rem",
                textAlign: "left",
              }}
            >
              I am a passionate AI & frontend developer who enjoys creating
              modern, user-friendly web applications using React and
              Bootstrap. Alongside academics, I actively participate in
              hackathons, build AI-driven projects, and continuously improve
              my problem-solving and development skills.
            </p>

            {/* ICONS */}
            <div className="about-icons justify-content-center mt-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vishnumaxpolla32@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send email"
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
          </motion.div>
        </Col>

        {/* Right Col: Image */}
        <Col md={6}>
          <motion.div
            className="glass-card h-100 p-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "rgba(255, 255, 255, 0.05)",
              overflow: "hidden"
            }}
          >
            <img
              src="/images/vishnu.jpeg"
              alt="Vishnu Vardhan"
              className="img-fluid w-100 h-100"
              style={{
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

