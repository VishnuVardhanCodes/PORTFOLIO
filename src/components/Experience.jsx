import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    side: "left",
    date: "May 2025 – August 2025",
    title: "Artificial Intelligence Intern [Hybrid]",
    company: "Viswam.AI, Swecha Foundation, IIIT-H",
    description: [
      "Developed Streamlit-based AI applications integrating Hugging Face models for interactive Q&A.",
      "Built RAG - Retrieval-Augmented Generation chatbots for generating accurate AI-powered summaries.",
      "Implemented LLM integration, tokenization, and prompt handling for domain-specific queries."
    ],
    tags: ["Python", "Streamlit", "Hugging Face", "RAG", "LLM", "Git Hub"],
    logo: "swecha.png"
  },
  {
    side: "right",
    date: "May 2025 – July 2025",
    title: "",
    company: "CodSoft ",
    description: [
      "Strengthened core knowledge in HTML, CSS, and JavaScript",
      "Developed a calculator and a to-do list using JavaScript",
      "Gained practical experience with Git and GitHub",

    ],
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Python", "Git Hub"],
    logo: "codesoft.png"
  },
  {
    side: "left",
    date: "June 2024 – August 2024",
    title: "Python Internship [Online]",
    company: "Cognifyz Technologies",
    description: [
      "Built Python-based applications using core programming concepts ",
      "Applied Object-Oriented Programming (OOP) principles in real-world mini projects",
    ],
    tags: ["", "", ""],
    logo: "cognifyz.png"
  }

];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <Container>
        <div className="experience-title-wrapper text-center">
          <motion.h2
            className="gradient-text fw-bold"
            style={{ fontSize: "4rem" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Internship Experience
          </motion.h2>
          <motion.p
            className="experience-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Where I transformed lessons into skills.
          </motion.p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${exp.side}`}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
                delay: index * 0.15
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="timeline-dot"></div>
              <motion.div
                className="timeline-card"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="company-logo-box">
                  <img src={exp.logo} alt={exp.company} onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div style="font-size: 2rem; color: #00d9f5;">🏢</div>'; }} />
                </div>
                <span className="experience-date">{exp.date}</span>
                <h3 className="job-title">{exp.title}</h3>
                <span className="company-name">{exp.company}</span>
                <ul className="experience-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="skill-tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
