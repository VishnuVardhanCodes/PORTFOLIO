import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";

function Contact() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-4 gradient-text fw-bold">
          Contact Me
        </h2>

        <p className="text-center mb-5">
          Have a question, idea, or want to work together?  
          Feel free to reach out using the form below.
        </p>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="glass-card">
              <Card.Body>
                <Form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                      />
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                      />
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Tell me about your idea or query..."
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button className="btn-custom px-5">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

export default Contact;
