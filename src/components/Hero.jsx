import { Typewriter } from "react-simple-typewriter";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="eyebrow"><span /> AVAILABLE FOR OPPORTUNITIES</div>
        <h1>Hi, I'm <span className="gradient-text">Gopal</span>.</h1>
        <h2>
          I build <span className="type-line"><Typewriter words={["modern web apps.", "clean user experiences.", "practical software solutions."]} loop cursor typeSpeed={65} deleteSpeed={35} delaySpeed={1500} /></span>
        </h2>
        <p className="hero-description">
          Computer Science student at CBIT Hyderabad focused on full-stack development,
          problem solving, and building useful products with modern web technologies.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-btn">View Projects <FaArrowRight /></a>
          <a href="https://github.com/gopal1234561" target="_blank" rel="noreferrer" className="secondary-btn"><FaGithub /> GitHub</a>
        </div>

        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/vislavath-gopal-8b63a7327" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
          <span>•</span>
          <span>Hyderabad, India</span>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-orbit orbit-one" />
        <div className="profile-orbit orbit-two" />
        <div className="profile-wrapper">
          <div className="profile-glow" />
          <div className="inner-circle">
            <img src="https://res.cloudinary.com/dq8tjhtog/image/upload/v1771251175/_93A9738_zabbdw.jpg" alt="Vislavath Gopal" className="profile-img" />
          </div>
        </div>
        <div className="floating-card card-top"><strong>3+</strong><span>Projects</span></div>
        <div className="floating-card card-bottom"><strong>2027</strong><span>Graduation</span></div>
      </div>
    </section>
  );
}
