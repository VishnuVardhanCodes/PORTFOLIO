import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

// ...existing code...
function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science & Engineering",
      institution: "Aurora University",
      year: "2023 – 2027",
      grade: "CGPA: 9.0 / 10",
      logo: "/images/aurora.png",
    },
    {
      degree: "Intermediate",
      specialization: "MPC",
      institution: "Sri Chaitanya College of Education",
      year: "2021 – 2023",
      grade: "Percentage: 95.5%",
      logo: "/images/srichaitanya.png",
    },
    {
      degree: "Secondary High School",
      specialization: "Class X",
      institution: "Bhadrachalam Public School & Jr College",
      year: "2014 – 2021",
      grade: "Percentage: 85.5%",
      logo: "/images/bps.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <Container className="py-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <h2 className="text-center mb-5 gradient-text fw-bold" style={{ fontSize: '3.5rem', letterSpacing: '2px' }}>
          Education
        </h2>

        <Row className="gy-4 justify-content-center">
          {educationData.map((edu, index) => (
            <Col lg={4} md={6} key={index}>
              <motion.div variants={cardVariants}>
                <Card
                  className="glass-card h-100 text-center border-0"
                  style={{
                    padding: "40px 30px",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(199, 125, 219, 0.4), 0 0 20px rgba(0, 245, 160, 0.2)"
                  }}
                >
                  <div className="logo-wrapper mb-4" style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      style={{
                        maxHeight: '100%',
                        maxWidth: '120px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))'
                      }}
                    />
                  </div>
                  <Card.Body className="p-0">
                    <h4 className="fw-bold mb-2" style={{ color: 'var(--text-primary)', fontSize: '1.4rem' }}>{edu.degree}</h4>
                    <p className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>{edu.specialization}</p>
                    <div className="mt-auto">
                      <p className="mb-1" style={{ fontSize: '1.1rem' }}>
                        <strong>{edu.institution}</strong>
                      </p>
                      <p className="mb-1 opacity-75">{edu.year}</p>
                      <p className="mb-0 fw-bold gradient-text" style={{ fontSize: '1.1rem' }}>{edu.grade}</p>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
}

export default Education;

