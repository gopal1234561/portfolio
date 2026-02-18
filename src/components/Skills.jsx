import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaJs, FaUser 
} from "react-icons/fa";

// SVG imports for tools/frameworks not in react-icons
import MongoDBIcon from "../assets/icons/mongodb.svg";
import PostmanIcon from "../assets/icons/postman.svg";
import FirebaseIcon from "../assets/icons/firebase.svg";
import VSCodeIcon from "../assets/icons/vscode.svg";

function Skills() {

  const languages = [
    { name: "C", icon: null, color: "#A8B9CC" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Python", icon: FaPython, color: "#FFD43B" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#264DE4" },
  ];

  const frameworks = [
    { name: "React", icon: FaReact, color: "#61DBFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
    { name: "Express.js", icon: () => <img src={MongoDBIcon} alt="Express" style={{ width: 32, height: 32 }} />, color: "#000" },
    { name: "Next.js", icon: () => <img src={MongoDBIcon} alt="Next.js" style={{ width: 32, height: 32 }} />, color: "#000" },
    { name: "MongoDB", icon: () => <img src={MongoDBIcon} alt="MongoDB" style={{ width: 32, height: 32 }} />, color: "#4DB33D" },
  ];

  const tools = [
    { name: "VS Code", icon: () => <img src={VSCodeIcon} alt="VSCode" style={{ width: 32, height: 32 }} />, color: "#007ACC" },
    { name: "GitHub", icon: FaGithub, color: "#181717" },
    { name: "Postman", icon: () => <img src={PostmanIcon} alt="Postman" style={{ width: 32, height: 32 }} />, color: "#FF6C37" },
    { name: "Firebase", icon: () => <img src={FirebaseIcon} alt="Firebase" style={{ width: 32, height: 32 }} />, color: "#FFCA28" },
    
  ];

  const renderSkill = (skill) => (
    <motion.div
      key={skill.name}
      className="skill-badge"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 12px",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.05)"
      }}
      whileHover={{ scale: 1.1, boxShadow: `0 0 15px ${skill.color}` }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {skill.icon ? (typeof skill.icon === "function" ? skill.icon({ color: skill.color, size: 28 }) : <skill.icon color={skill.color} size={28} />) : (
        <span style={{ fontWeight: "bold", color: skill.color, fontSize: 28 }}>{skill.name}</span>
      )}
      <span>{skill.name}</span>
    </motion.div>
  );

  const renderCard = (title, skillsArray, bgColor) => (
    <motion.div
      className="skills-card"
      style={{
        flex: "1 1 300px",
        margin: "10px",
        padding: "25px",
        borderRadius: "15px",
        background: bgColor,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <h3 style={{ marginBottom: "15px", color: "#fff" }}>{title}</h3>
      <div className="skills-grid" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
        {skillsArray.map(renderSkill)}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" style={{ padding: "60px 10px" }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%", textAlign: "left", marginBottom: "40px", color: "#fff" }}
        >
          Skills & Technologies
        </motion.h2>

        {renderCard("Programming Languages", languages, "rgb(25, 97, 140)")}
        {renderCard("Frameworks & Libraries", frameworks, "conic-gradient(from 90deg at 50% 0%, #6a11cb, #2575fc)")}
        {renderCard("Tools & Platforms", tools, "conic-gradient(from 90deg at 50% 0%, #ec4899, #f472b6)")}
      </div>
    </section>
  );
}

export default Skills;
