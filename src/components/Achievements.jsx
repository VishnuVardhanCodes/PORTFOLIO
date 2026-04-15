import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaCertificate,
  FaLaptopCode,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import ImageTrail from "./ImageTrail/ImageTrail";

const placeholderImages = [
  'https://picsum.photos/id/287/300/300',
  'https://picsum.photos/id/1001/300/300',
  'https://picsum.photos/id/1025/300/300',
  'https://picsum.photos/id/1026/300/300',
  'https://picsum.photos/id/1027/300/300',
  'https://picsum.photos/id/1028/300/300',
  'https://picsum.photos/id/1029/300/300',
  'https://picsum.photos/id/1030/300/300',
];

const categoryBackgrounds = {
  hackathons: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000',
  certifications: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000',
  workshops: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000',
};

function Achievements() {
  const [activeTrail, setActiveTrail] = useState(null);

  const toggleTrail = (id) => {
    setActiveTrail(activeTrail === id ? null : id);
  };

  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-5 gradient-text fw-bold" style={{ fontSize: '4rem', letterSpacing: '2px' }}>
          Major Achievements
        </h2>

        <Row className="g-5 justify-content-center">
          {/* Achievement 1 */}
          <Col md={6} lg={4}>
            <motion.div
              whileHover={activeTrail === null ? { scale: 1.02, y: -10 } : {}}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-100"
            >
              <Card className={`glass-card achievement-card h-100 text-center border-0 shadow-lg position-relative overflow-hidden ${activeTrail === 1 ? 'active-trail-card' : ''}`}>
                <div 
                  className="card-bg-layer"
                  style={{ backgroundImage: `url(${categoryBackgrounds.hackathons})` }}
                />
                <div className="card-overlay" />
                
                {activeTrail === 1 && (
                  <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                    <ImageTrail items={placeholderImages} variant={1} />
                  </div>
                )}
                
                <Card.Body className="p-5 d-flex flex-column align-items-center justify-content-between" style={{ position: 'relative', zIndex: 2 }}>
                  <div className="content-top w-100">
                    <div className="icon-wrapper mb-4">
                      <FaLaptopCode size={50} className="text-info" />
                    </div>
                    <h3 className="fw-bold mb-3 text-white">Hackathons</h3>
                    <p className="opacity-90 text-light leading-relaxed">
                      Participated in national-level hackathons and coding
                      competitions, working on real-world problem statements.
                    </p>
                  </div>
                  <Button 
                    className={`open-item-btn mt-4 ${activeTrail === 1 ? 'btn-active' : ''}`}
                    onClick={(e) => { e.stopPropagation(); toggleTrail(1); }}
                  >
                    {activeTrail === 1 ? (
                      <>Close Trail <FaTimes className="ms-2" /></>
                    ) : (
                      <>Open Item <FaArrowRight className="ms-2" /></>
                    )}
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Achievement 2 */}
          <Col md={6} lg={4}>
            <motion.div
              whileHover={activeTrail === null ? { scale: 1.02, y: -10 } : {}}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-100"
            >
              <Card className={`glass-card achievement-card h-100 text-center border-0 shadow-lg position-relative overflow-hidden ${activeTrail === 2 ? 'active-trail-card' : ''}`}>
                <div 
                  className="card-bg-layer"
                  style={{ backgroundImage: `url(${categoryBackgrounds.certifications})` }}
                />
                <div className="card-overlay" />

                {activeTrail === 2 && (
                  <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                    <ImageTrail items={placeholderImages} variant={2} />
                  </div>
                )}

                <Card.Body className="p-5 d-flex flex-column align-items-center justify-content-between" style={{ position: 'relative', zIndex: 2 }}>
                  <div className="content-top w-100">
                    <div className="icon-wrapper mb-4">
                      <FaCertificate size={50} className="text-warning" />
                    </div>
                    <h3 className="fw-bold mb-3 text-white">Certifications</h3>
                    <p className="opacity-90 text-light leading-relaxed">
                      Completed certifications in Web Development, React, Python,
                      and AI-related technologies.
                    </p>
                  </div>
                  <Button 
                    className={`open-item-btn mt-4 ${activeTrail === 2 ? 'btn-active' : ''}`}
                    onClick={(e) => { e.stopPropagation(); toggleTrail(2); }}
                  >
                    {activeTrail === 2 ? (
                      <>Close Trail <FaTimes className="ms-2" /></>
                    ) : (
                      <>Open Item <FaArrowRight className="ms-2" /></>
                    )}
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Achievement 3 */}
          <Col md={6} lg={4}>
            <motion.div
              whileHover={activeTrail === null ? { scale: 1.02, y: -10 } : {}}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-100"
            >
              <Card className={`glass-card achievement-card h-100 text-center border-0 shadow-lg position-relative overflow-hidden ${activeTrail === 3 ? 'active-trail-card' : ''}`}>
                <div 
                  className="card-bg-layer"
                  style={{ backgroundImage: `url(${categoryBackgrounds.workshops})` }}
                />
                <div className="card-overlay" />

                {activeTrail === 3 && (
                  <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                    <ImageTrail items={placeholderImages} variant={3} />
                  </div>
                )}

                <Card.Body className="p-5 d-flex flex-column align-items-center justify-content-between" style={{ position: 'relative', zIndex: 2 }}>
                  <div className="content-top w-100">
                    <div className="icon-wrapper mb-4">
                      <FaTrophy size={50} className="text-success" />
                    </div>
                    <h3 className="fw-bold mb-3 text-white">Workshops & Awards</h3>
                    <p className="opacity-90 text-light leading-relaxed">
                      Attended industry workshops and received recognition for
                      academic and technical performance.
                    </p>
                  </div>
                  <Button 
                    className={`open-item-btn mt-4 ${activeTrail === 3 ? 'btn-active' : ''}`}
                    onClick={(e) => { e.stopPropagation(); toggleTrail(3); }}
                  >
                    {activeTrail === 3 ? (
                      <>Close Trail <FaTimes className="ms-2" /></>
                    ) : (
                      <>Open Item <FaArrowRight className="ms-2" /></>
                    )}
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <style jsx="true">{`
          .achievement-card {
            background: #111;
            border-radius: 24px;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .card-bg-layer {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            opacity: 0.3;
            transition: transform 0.8s ease, opacity 0.5s ease;
            z-index: 0;
          }
          .achievement-card:hover .card-bg-layer {
            transform: scale(1.1);
            opacity: 0.5;
          }
          .card-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);
            z-index: 0;
          }
          .icon-wrapper {
            background: rgba(255, 255, 255, 0.08);
            width: 90px;
            height: 90px;
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            border: 1px solid rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(5px);
            transition: all 0.3s ease;
          }
          .achievement-card:hover .icon-wrapper {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.12);
            border-color: rgba(255, 255, 255, 0.3);
          }
          .open-item-btn {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(12px);
            padding: 12px 30px;
            border-radius: 14px;
            font-weight: 600;
            color: white;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            z-index: 10;
          }
          .open-item-btn:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: translateY(-3px) scale(1.05);
            border-color: rgba(255, 255, 255, 0.5);
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          }
          .btn-active {
            background: rgba(255, 0, 0, 0.25);
            border-color: rgba(255, 0, 0, 0.4);
          }
          .btn-active:hover {
            background: rgba(255, 0, 0, 0.35);
          }
          .active-trail-card {
            box-shadow: 0 0 50px rgba(0, 255, 255, 0.25);
            border: 1px solid rgba(0, 255, 255, 0.3) !important;
          }
          .leading-relaxed {
            line-height: 1.6;
          }
        `}</style>
      </motion.div>
    </Container>
  );
}

export default Achievements;




