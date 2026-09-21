import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaJs, FaGitAlt, FaCode } from "react-icons/fa";
import { SiMongodb, SiExpress, SiVite, SiPostman, SiFirebase, SiMysql, SiTailwindcss } from "react-icons/si";

const groups = [
  { title:"Languages", items:[["C",null],["Java",FaJava],["Python",FaPython],["JavaScript",FaJs],["HTML5",FaHtml5],["CSS3",FaCss3Alt]] },
  { title:"Frameworks & Backend", items:[["React",FaReact],["Node.js",FaNodeJs],["Express.js",SiExpress],["Vite",SiVite],["MongoDB",SiMongodb],["MySQL",SiMysql],["Tailwind CSS",SiTailwindcss]] },
  { title:"Tools & Workflow", items:[["Git",FaGitAlt],["GitHub",FaGithub],["VS Code",FaCode],["Postman",SiPostman],["Firebase",SiFirebase]] }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section section-shell">
      <div className="section-heading">
        <span>02 / SKILLS</span>
        <h2>My technical toolkit</h2>
        <p>Technologies and tools I use to design, build, test, and ship projects.</p>
      </div>
      <div className="skills-cards">
        {groups.map((group, index) => (
          <motion.div className="skills-card" key={group.title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}}>
            <h3>{group.title}</h3>
            <div className="skills-grid">
              {group.items.map(([name, Icon]) => (
                <div className="skill-badge" key={name}>{Icon ? <Icon /> : <b>{name[0]}</b>}<span>{name}</span></div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
