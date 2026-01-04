import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

function Education() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-5 gradient-text fw-bold">
          Education
        </h2>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="glass-card mb-4">
              <Card.Body>
                <h4>Bachelor of Technology (B.Tech)</h4>
                <h6 className="text-muted">
                  Computer Science & Engineering
                </h6>
                <p className="mt-2 mb-1">
                  <strong>Institution:</strong> Your College Name
                </p>
                <p className="mb-1">
                  <strong>Year:</strong> 2021 – 2025
                </p>
                <p>
                  <strong>CGPA:</strong> 8.5 / 10
                </p>
              </Card.Body>
            </Card>

            <Card className="glass-card">
              <Card.Body>
                <h4>Intermediate / Diploma</h4>
                <p className="mt-2 mb-1">
                  <strong>Institution:</strong> Your College / School Name
                </p>
                <p className="mb-1">
                  <strong>Year:</strong> 2019 – 2021
                </p>
                <p>
                  <strong>Percentage:</strong> 92%
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

export default Education;
