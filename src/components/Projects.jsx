import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* Project Image */}
              <div className="project-image">
                <img src={proj.backgroundImage} alt={proj.title} />
              </div>

              {/* Project Content Below Image */}
             <div className="project-content">
  <h3>{proj.title}</h3>
  <p>{proj.description}</p>

  {/* Technologies */}
  <div className="tech-stack">
    {proj.technologies.map((tech, k) => (
      <span key={k}>{tech}</span>
    ))}
  </div>

  <ul className="project-features">
    {proj.features.map((f, j) => (
      <li key={j}>{f}</li>
    ))}
  </ul>

  <div className="project-links">
    {proj.demo !== "#" && (
      <a
        href={proj.demo}
        className="btn-live"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo
      </a>
    )}

    {proj.code !== "#" && (
      <a
        href={proj.code}
        className="github-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="github-icon" />
      </a>
    )}
  </div>
</div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
