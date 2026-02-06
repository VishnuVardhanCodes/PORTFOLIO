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
  SiVisualstudiocode,
  SiCanva
} from "react-icons/si";

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
  { node: <SiVisualstudiocode />, title: "VS Code" },
  { node: <SiCanva />, title: "Canva" },
];

export default function TechLoop() {
  return (
    <div style={{ margin: "80px 0" }}>
      <LogoLoop logos={techLogos} speed={0.6} logoSize={64} />
    </div>
  );
}
