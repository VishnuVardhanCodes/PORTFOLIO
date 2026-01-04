import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        background: "#ffffff",
        color: "#000",
        padding: "100px 0",
        textAlign: "center",
      }}
    >
      <Container>
        <h1 className="fw-bold mb-3">
          Let&apos;s create something <br /> amazing together.
        </h1>

        <p className="text-muted mb-4">
          Get in touch via email or social media.
        </p>

        <div className="d-flex justify-content-center gap-4 fs-3">
          <FaEnvelope style={{ cursor: "pointer" }} />
          <FaGithub style={{ cursor: "pointer" }} />
          <FaLinkedin style={{ cursor: "pointer" }} />
        </div>

        <p className="mt-5 text-muted">
          © {new Date().getFullYear()} Vishnu Vardhan
        </p>
      </Container>
    </motion.footer>
  );
}

export default Footer;
