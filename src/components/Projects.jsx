import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects-section section-shell">
      <div className="section-heading">
        <span>03 / PROJECTS</span>
        <h2>Things I've built</h2>
        <p>A selection of projects focused on usability, learning, and real-world problem solving.</p>
      </div>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <motion.article className="project-card" key={proj.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}>
            <div className="project-image"><img src={proj.backgroundImage} alt={proj.title} loading="lazy" /><span>{proj.type}</span></div>
            <div className="project-content">
              <div className="project-title-row"><h3>{proj.title}</h3><span>0{i+1}</span></div>
              <p>{proj.description}</p>
              <div className="tech-stack">{proj.technologies.map(t => <span key={t}>{t}</span>)}</div>
              <ul className="project-features">{proj.features.slice(0,3).map(f => <li key={f}>{f}</li>)}</ul>
              <div className="project-links">
                {proj.demo !== "#" && <a href={proj.demo} target="_blank" rel="noreferrer" className="btn-live">Live Demo <FaExternalLinkAlt /></a>}
                {proj.code !== "#" && <a href={proj.code} target="_blank" rel="noreferrer" className="github-link"><FaGithub /> Source</a>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
