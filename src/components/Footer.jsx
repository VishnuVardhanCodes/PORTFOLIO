import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="footer-section"
    >
      <Container className="text-center">
        <h1 className="footer-title">
          Let&apos;s create something <br /> amazing together.
        </h1>

        <p className="footer-subtitle">
          Get in touch via email or social media.
        </p>

        <div className="footer-icons">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vishnumaxpolla32@gmail.com"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/VishnuVardhanCodes"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/polla-vishnu-vardhan/"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Polla Vishnu Vardhan
        </p>
      </Container>
    </motion.footer>
  );
}

export default Footer;
