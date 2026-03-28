import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaCertificate,
  FaLaptopCode,
} from "react-icons/fa";

// ...existing code...
function Achievements() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-5 gradient-text fw-bold" style={{ fontSize: '3rem' }}>
          My Achievements
        </h2>

        <Row className="g-5 justify-content-center">
          {/* Achievement 1 */}
          <Col md={6} lg={4}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="glass-card h-100 text-center border-0 shadow-lg">
                <Card.Body className="p-5">
                  <div className="icon-wrapper mb-4">
                    <FaLaptopCode size={50} className="text-info" />
                  </div>
                  <h4 className="fw-bold mb-3">Hackathons</h4>
                  <p className="opacity-75">
                    Participated in national-level hackathons and coding
                    competitions, working on real-world problem statements.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Achievement 2 */}
          <Col md={6} lg={4}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="glass-card h-100 text-center border-0 shadow-lg">
                <Card.Body className="p-5">
                  <div className="icon-wrapper mb-4">
                    <FaCertificate size={50} className="text-warning" />
                  </div>
                  <h4 className="fw-bold mb-3">Certifications</h4>
                  <p className="opacity-75">
                    Completed certifications in Web Development, React, Python,
                    and AI-related technologies.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Achievement 3 */}
          <Col md={6} lg={4}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="glass-card h-100 text-center border-0 shadow-lg">
                <Card.Body className="p-5">
                  <div className="icon-wrapper mb-4">
                    <FaTrophy size={50} className="text-success" />
                  </div>
                  <h4 className="fw-bold mb-3">Workshops & Awards</h4>
                  <p className="opacity-75">
                    Attended industry workshops and received recognition for
                    academic and technical performance.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <style jsx="true">{`
          .icon-wrapper {
            background: rgba(255, 255, 255, 0.05);
            width: 80px;
            height: 80px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
        `}</style>
      </motion.div>
    </Container>
  );
}

export default Achievements;

