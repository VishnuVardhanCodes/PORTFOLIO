import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaEye, FaDownload, FaFileAlt } from "react-icons/fa";

function Resume() {
  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="gradient-text fw-bold mb-4" style={{ fontSize: '3rem' }}>
          My Resume
        </h2>
        <p className="text-secondary mb-5 mx-auto" style={{ maxWidth: '600px', fontSize: '1.2rem' }}>
          Explore my professional journey, technical expertise, and academic background in detail.
        </p>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="resume-cta-card glass-card p-5">
              <div className="resume-icon-wrapper mb-4">
                <FaFileAlt size={60} className="text-info" />
              </div>
              
              <h3 className="mb-4 fw-bold">Ready to collaborate?</h3>
              <p className="mb-5 opacity-75">
                Download my comprehensive resume to see how my skills and experience 
                align with your team's goals.
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className="btn-custom py-3 px-5 d-flex align-items-center gap-2"
                    href="/resume.pdf"
                    target="_blank"
                    style={{ borderRadius: '50px', fontSize: '1.1rem' }}
                  >
                    <FaEye /> View Resume
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline-light"
                    className="py-3 px-5 d-flex align-items-center gap-2"
                    href="/resume.pdf"
                    download
                    style={{ borderRadius: '50px', fontSize: '1.1rem', borderWidth: '2px' }}
                  >
                    <FaDownload /> Download PDF
                  </Button>
                </motion.div>
              </div>
            </div>
          </Col>
        </Row>
      </motion.div>

      <style jsx="true">{`
        .resume-cta-card {
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          overflow: hidden;
        }
        
        .resume-icon-wrapper {
          width: 100px;
          height: 100px;
          background: rgba(0, 245, 160, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          box-shadow: 0 0 20px rgba(0, 245, 160, 0.2);
        }

        .resume-cta-card::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(0, 245, 160, 0.05) 0%, transparent 70%);
          z-index: -1;
        }

        .resume-cta-card::before {
          content: '';
          position: absolute;
          bottom: -50%;
          left: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(199, 125, 219, 0.05) 0%, transparent 70%);
          z-index: -1;
        }
      `}</style>
    </Container>
  );
}

export default Resume;
