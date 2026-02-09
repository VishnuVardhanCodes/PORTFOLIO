import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // Keys are now loaded from the .env file
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          setStatus({ type: "success", message: "Message sent successfully! I will get back to you soon. ✅" });
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error.text);
          setStatus({ type: "error", message: "Failed to send message. Please email me directly at vishnumaxpolla32@gmail.com" });
        }
      );
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Row className="align-items-center justify-content-center">

          {/* LEFT SIDE IMAGE */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src="images/contact-image.png"
              alt="Contact Illustration"
              style={{
                maxWidth: "340px",
                width: "100%",
                height: "auto",
                margin: "0 auto",
                display: "block",
              }}
            />
          </Col>

          {/* RIGHT SIDE FORM */}
          <Col md={6}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "2rem",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  background: "#e0f3ff",
                  borderRadius: "16px",
                  padding: "0.7rem",
                }}
              >
                <i
                  className="fas fa-paper-plane"
                  style={{ color: "#1abc9c", fontSize: "2.5rem" }}
                ></i>
              </div>
              <h2 style={{ fontWeight: 700, fontSize: "3.0rem", margin: 0 }}>
                Let's Keep In Touch !
              </h2>
            </div>

            <Form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    className="rounded-3 p-3"
                    required
                  />
                </Col>

                <Col md={6} className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="user_email"
                    placeholder="Enter your email"
                    className="rounded-3 p-3"
                    required
                  />
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="rounded-3 p-3"
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                className="btn-custom w-100 py-3"
                style={{ fontSize: "1.3rem" }}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"} <i className="fas fa-paper-plane ms-2"></i>
              </Button>

              {status.message && (
                <div
                  style={{
                    marginTop: "1rem",
                    padding: "1rem",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontSize: "1.1rem",
                    background: status.type === "success" ? "rgba(0, 245, 160, 0.2)" : "rgba(255, 100, 100, 0.2)",
                    color: status.type === "success" ? "#00f5a0" : "#ff6464",
                    border: status.type === "success" ? "1px solid #00f5a0" : "1px solid #ff6464"
                  }}
                >
                  {status.message}
                </div>
              )}
            </Form>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default Contact;
