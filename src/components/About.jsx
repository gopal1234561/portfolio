import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaLightbulb, FaCode, FaBook, FaMusic, FaTableTennis } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about-section section-shell">
      <div className="section-heading">
        <span>01 / ABOUT</span>
        <h2>A little about me</h2>
        <p>Curious by nature, practical in execution, and always learning.</p>
      </div>

      <div className="about-content">
        <motion.div className="about-left" initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <p className="intro">
            I'm <span className="highlight">Vislavath Gopal</span>, a Computer Science student at CBIT Hyderabad
            with a strong interest in full-stack development and software engineering.
          </p>
          <p className="sub">
            I enjoy turning ideas into responsive interfaces, connecting them to useful backend services,
            and improving solutions through iteration. Alongside development, I regularly practice
            programming and explore new technologies.
          </p>

          <div className="about-pill-row">
            <span><FaCode /> Full-stack development</span>
            <span><FaLightbulb /> Problem solving</span>
          </div>

          <h3 className="mini-title">Beyond code</h3>
          <div className="hobby-list">
            <span><FaTableTennis /> Badminton</span>
            <span><FaBook /> Reading</span>
            <span><FaMusic /> Music</span>
          </div>
        </motion.div>

        <motion.div className="about-right" initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <div className="info-card">
            <div className="info-icon"><FaGraduationCap /></div>
            <div><span>Education</span><h3>B.E. Computer Science</h3><p>Chaitanya Bharathi Institute of Technology · 2023–2027</p></div>
          </div>
          <div className="info-card">
            <div className="info-icon"><FaMapMarkerAlt /></div>
            <div><span>Based in</span><h3>Hyderabad, India</h3><p>Open to internships and software development opportunities.</p></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
