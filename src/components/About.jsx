import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import TextType from "./TextType";

function About() {
  const [swapped, setSwapped] = useState(false);

  const toggleSwap = () => setSwapped((prev) => !prev);

  /* ── The two content blocks ── */
  const aboutContent = (
    <div className="d-flex flex-column justify-content-center h-100">
      <p
        style={{
          color: "var(--text-primary)",
          fontSize: "1.25rem",
          lineHeight: "1.9",
          marginBottom: "3rem",
          textAlign: "left",
        }}
      >
        I am a passionate AI &amp; frontend developer who enjoys creating
        modern, user-friendly web applications using React and Bootstrap.
        Alongside academics, I actively participate in hackathons, build
        AI-driven projects, and continuously improve my problem-solving and
        development skills.
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
    </div>
  );

  const photoContent = (
    <img
      src="/images/vishnu.jpeg"
      alt="Vishnu Vardhan"
      className="img-fluid w-100 h-100"
      style={{ objectFit: "cover", borderRadius: "16px" }}
    />
  );

  /* ── Smooth 3D flip + slide animations ── */
  const leftVariants = {
    initial: (isSwapped) => ({
      x: isSwapped ? 300 : -300,
      rotateY: isSwapped ? 45 : -45,
      opacity: 0,
      scale: 0.8,
      filter: "blur(8px)",
    }),
    animate: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        mass: 1,
        duration: 0.8,
      },
    },
    exit: (isSwapped) => ({
      x: isSwapped ? -300 : 300,
      rotateY: isSwapped ? -45 : 45,
      opacity: 0,
      scale: 0.8,
      filter: "blur(8px)",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        duration: 0.6,
      },
    }),
  };

  const rightVariants = {
    initial: (isSwapped) => ({
      x: isSwapped ? -300 : 300,
      rotateY: isSwapped ? -45 : 45,
      opacity: 0,
      scale: 0.8,
      filter: "blur(8px)",
    }),
    animate: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        mass: 1,
        duration: 0.8,
      },
    },
    exit: (isSwapped) => ({
      x: isSwapped ? 300 : -300,
      rotateY: isSwapped ? 45 : -45,
      opacity: 0,
      scale: 0.8,
      filter: "blur(8px)",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        duration: 0.6,
      },
    }),
  };

  return (
    <Container>
      {/* 1. NAME & TITLE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5"
      >
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            background: "linear-gradient(90deg, #e040fb, #f48fb1, #ffcc80)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "4.5rem",
            marginBottom: "1rem",
            letterSpacing: "2px",
            textShadow: "none",
          }}
        >
          VISHNU VARDHAN
        </h1>

        <div style={{ height: "80px", marginBottom: "2rem" }}>
          <TextType
            text={["AI-ML STUDENT", "FRONTEND DEVELOPER", "VIDEO EDITING", "4X HACKATHON WINNER"]}
            typingSpeed={100}
            deletingSpeed={50}
            loop={true}
            showCursor={true}
            cursorCharacter="|"
            textColors={["var(--typing-1)", "var(--typing-2)", "var(--typing-3)", "var(--typing-4)"]}
            className="about-typing-text"
            style={{
              fontWeight: "bold",
              fontSize: "3.5rem",
              fontFamily: '"Poppins", sans-serif',
            }}
          />
        </div>
      </motion.div>

      {/* 2. SWAPPABLE CONTENT ROW */}
      <Row className="align-items-stretch">
        {/* Left Box */}
        <Col md={6} className="mb-4 mb-md-0">
          <motion.div
            className={`glass-card h-100 ${swapped ? "p-0" : ""}`}
            onClick={toggleSwap}
            style={{
              cursor: "pointer",
              overflow: "hidden",
              minHeight: "350px",
              perspective: "1200px",
            }}
            whileHover={{
              scale: 1.02,
              boxShadow:
                "0 0 35px rgba(199, 125, 219, 0.6), 0 0 60px rgba(199, 125, 219, 0.3), 0 0 35px rgba(255, 200, 0, 0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <AnimatePresence mode="wait" custom={swapped}>
              <motion.div
                key={swapped ? "photo-left" : "about-left"}
                custom={swapped}
                variants={leftVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-100"
                style={{ transformStyle: "preserve-3d" }}
              >
                {swapped ? photoContent : aboutContent}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Col>

        {/* Right Box */}
        <Col md={6}>
          <motion.div
            className={`glass-card h-100 ${!swapped ? "p-0" : ""}`}
            onClick={toggleSwap}
            style={{
              cursor: "pointer",
              overflow: "hidden",
              minHeight: "350px",
              perspective: "1200px",
            }}
            whileHover={{
              scale: 1.02,
              boxShadow:
                "0 0 35px rgba(199, 125, 219, 0.6), 0 0 60px rgba(199, 125, 219, 0.3), 0 0 35px rgba(255, 200, 0, 0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <AnimatePresence mode="wait" custom={swapped}>
              <motion.div
                key={swapped ? "about-right" : "photo-right"}
                custom={swapped}
                variants={rightVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-100"
                style={{ transformStyle: "preserve-3d" }}
              >
                {swapped ? aboutContent : photoContent}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
