import { Container } from "react-bootstrap";
import LogoLoop from "./LogoLoop";

import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiReact,
  SiBootstrap,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiJupyter,
  SiCanva
} from "react-icons/si";

/* 🔹 Skills & Tools Icons */
const techLogos = [
  { node: <SiPython />, title: "Python" },
  { node: <SiHtml5 />, title: "HTML" },
  { node: <SiCss3 />, title: "CSS" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiMysql />, title: "MySQL" },

  { node: <SiReact />, title: "React" },
  { node: <SiBootstrap />, title: "Bootstrap" },
  { node: <SiTensorflow />, title: "TensorFlow" },
  { node: <SiScikitlearn />, title: "Scikit-learn" },
  { node: <SiPandas />, title: "Pandas" },
  { node: <SiNumpy />, title: "NumPy" },

  { node: <SiGit />, title: "Git" },
  { node: <SiGithub />, title: "GitHub" },
  { node: <SiGitlab />, title: "GitLab" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiJupyter />, title: "Jupyter" },
  { node: <SiCanva />, title: "Canva" },
];

function TechLoop() {
  return (
    <div className="skills-section">
      <Container fluid className="text-center px-0">
        {/* 🔥 SECTION TITLE */}
        <h2 className="fw-bold mb-5 skills-title">
          SKILLS
        </h2>

        {/* 🔁 LOGO LOOP */}
        <div className="skills-loop-wrapper w-100">
          <LogoLoop
            logos={techLogos}
            speed={1.5}                 /* slightly faster */
            direction="left"
            scaleOnHover
            logoSize={100} /* Increased size */
            ariaLabel="Skills and tools"
          />
        </div>
      </Container>
    </div>
  );
}

export default TechLoop;
