import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section section-shell">
      <div className="contact-panel">
        <div>
          <span className="contact-kicker">04 / CONTACT</span>
          <h2>Let's build something useful.</h2>
          <p>Have an internship opportunity, project idea, or just want to connect? Reach me through email or LinkedIn.</p>
        </div>
        <div className="contact-actions">
          <a className="primary-btn" href="mailto:vislavathgopal644@gmail.com"><FaEnvelope /> Email me</a>
          <a className="secondary-btn" href="https://www.linkedin.com/in/vislavath-gopal-8b63a7327" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
          <a className="secondary-btn" href="https://github.com/gopal1234561" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
        </div>
      </div>
      <footer>
        <span>© {new Date().getFullYear()} Vislavath Gopal</span>
        <span>Built with React · Framer Motion</span>
      </footer>
    </section>
  );
}
