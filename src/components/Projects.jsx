import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects-section section-shell">
      <div className="section-heading">
        <span>03 / PROJECTS</span>
        <h2>Selected work</h2>
        <p>Projects built while learning, experimenting, and solving practical problems.</p>
      </div>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <motion.article className={`project-card ${i === 0 ? "project-featured" : ""}`} key={proj.title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}>
            <a
              className={`project-image ${i === 0 ? "project-interface" : ""} project-image-link`}
              href={i === 0 ? proj.demo : undefined}
              target={i === 0 ? "_blank" : undefined}
              rel={i === 0 ? "noreferrer" : undefined}
              aria-label={i === 0 ? `Open ${proj.title} website` : undefined}
            >
              {i === 0 && <div className="interface-bar"><span></span><span></span><span></span><small>Codebase Intelligence</small></div>}
              <img src={proj.backgroundImage} alt={proj.title} loading="lazy" />
              <span>{proj.type}</span>
            </a>
            <div className="project-content">
              <div className="project-title-row"><h3>{proj.title}</h3><span>{String(i+1).padStart(2,"0")}</span></div>
              <p>{proj.description}</p>
              {proj.demo !== "#" && <a className="project-url" href={proj.demo} target="_blank" rel="noreferrer" title={proj.demo}>{proj.demo}</a>}
              <div className="tech-stack">{proj.technologies.map(t => <span key={t}>{t}</span>)}</div>
              <ul className="project-features">{proj.features.slice(0,3).map(f => <li key={f}>{f}</li>)}</ul>
              <div className="project-links">
                {proj.demo !== "#" && <a href={proj.demo} target="_blank" rel="noreferrer" className="btn-live">Website <FaExternalLinkAlt /></a>}
                {proj.code !== "#" && <a href={proj.code} target="_blank" rel="noreferrer" className="github-link"><FaGithub /> GitHub</a>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}