import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

// ...existing code...
function Experience() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-5 gradient-text fw-bold">
          Professional Experience
        </h2>

        <Row className="justify-content-center">
          <Col md={8}>
            {/* Experience 1 */}
            <Card className="glass-card mb-4">
              <Card.Body>
                <h4>Frontend Developer Intern</h4>
                <h6 className="text-muted">
                  Company / Organization Name
                </h6>
                <p className="mb-2">
                  <strong>Duration:</strong> Jan 2024 – Apr 2024
                </p>
                <ul>
                  <li>Developed responsive UI components using React.</li>
                  <li>Worked with Bootstrap to create clean layouts.</li>
                  <li>Improved page performance and usability.</li>
                  <li>Collaborated with team members using GitHub.</li>
                </ul>
              </Card.Body>
            </Card>

            {/* Experience 2 */}
            <Card className="glass-card">
              <Card.Body>
                <h4>Student Developer / Project Contributor</h4>
                <h6 className="text-muted">
                  Academic & Personal Projects
                </h6>
                <p className="mb-2">
                  <strong>Duration:</strong> 2022 – Present
                </p>
                <ul>
                  <li>Built multiple frontend projects using React.</li>
                  <li>Implemented smooth scrolling and animations.</li>
                  <li>Focused on UI/UX best practices.</li>
                  <li>Explored AI-integrated web applications.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

export default Experience;

