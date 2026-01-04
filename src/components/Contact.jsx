import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function Contact() {
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
              src="contact-image.png"   // ✅ CORRECT PATH
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
              <h2 style={{ fontWeight: 700, fontSize: "2.2rem", margin: 0 }}>
                Send a Message
              </h2>
            </div>

            <Form>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    className="rounded-3 p-3"
                  />
                </Col>

                <Col md={6} className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-3 p-3"
                  />
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="rounded-3 p-3"
                />
              </Form.Group>

              <Button
                className="btn-custom w-100 py-3"
                style={{ fontSize: "1.3rem" }}
              >
                Send Message <i className="fas fa-paper-plane ms-2"></i>
              </Button>
            </Form>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

export default Contact;
