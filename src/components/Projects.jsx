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
        {projects.map((proj, i) => {
          const hasDemo = Boolean(proj.demo && proj.demo !== "#");
          const imageHref = proj.imageLink || proj.demo;

          return (
            <motion.article
              className={"project-card " + (i === 0 ? "project-featured" : "")}
              key={proj.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
            >
              <a
                className={"project-image " + (i === 0 ? "project-interface " : "") + "project-image-link"}
                href={imageHref || undefined}
                target={imageHref ? "_blank" : undefined}
                rel={imageHref ? "noreferrer" : undefined}
                aria-label={imageHref ? "Open " + proj.title + " live website" : undefined}
              >
                {i === 0 && (
                  <div className="interface-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <small>Codebase Intelligence · Live interface</small>
                  </div>
                )}
                <img src={proj.backgroundImage} alt={proj.title + " interface preview"} loading="lazy" />
                <span>{proj.type}</span>
              </a>

              <div className="project-content">
                <div className="project-title-row">
                  <h3>{proj.title}</h3>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>

                <p>{proj.description}</p>

                {hasDemo && (
                  <a className="project-url" href={proj.demo} target="_blank" rel="noreferrer" title={proj.demo}>
                    {proj.demo}
                  </a>
                )}

                <div className="tech-stack">
                  {proj.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <ul className="project-features">
                  {proj.features.slice(0, 3).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {hasDemo && (
                    <a href={proj.demo} target="_blank" rel="noreferrer" className="btn-live">
                      Website <FaExternalLinkAlt />
                    </a>
                  )}
                  {proj.code && proj.code !== "#" && (
                    <a href={proj.code} target="_blank" rel="noreferrer" className="github-link">
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
