import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import {  FiCalendar, FiMapPin} from "react-icons/fi";
import { FaBook, FaMusic, FaCode, FaGamepad, FaTableTennis } from "react-icons/fa";


export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-ellipse">

        {/* Title */}
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
         
        >
          About Me
        </motion.h2>

        <div className="about-content">

          {/* Left Column: Intro & Motivation */}
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="intro">
              Hi, I’m <span className="highlight">Vislavath Gopal....</span> 👋
            </p>

            <p className="sub">
              I'm a passionate <span className="highlight">Computer Science student</span> and <span className="highlight">full-stack developer</span> at CBIT Hyderabad.

<span className="highlight ">I love learning new tools and frameworks</span>, experimenting with personal projects, and improving my coding skills every day..

I’m driven by collaboration, creativity, and continuous growth, and I aim to create projects that make a real impact for users. I am open to internships, and opportunities where I can contribute, learn, and grow as a developer.
         
            </p>
 {/* Hobbies List */}
  <div style={{ maxWidth: "500px", margin: "30px auto" }}>
    <h3 style={{ color: "var(--accent)", marginBottom: "15px" }}>My Hobbies:</h3>
   <ul className="hobby-list">
  <li><FaTableTennis /> Playing Badminton</li>
  <li><FaBook /> Reading Books</li>
  <li><FaMusic /> Listening to Music</li>
  
</ul>
  </div>
            <h4>What drives me?</h4>
            <ul className="motivation-list">
              <li>Creating user-centric, interactive applications</li>
              <li>Continuous learning and keeping up with tech trends</li>
              <li>Collaborating to build impactful solutions</li>
            </ul>
          </motion.div>

          {/* Right Column: Info Cards */}
          <motion.div
  className="about-right"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  {/* Education Card */}
  <div className="info-card">
    <h5><FaGraduationCap className="inline-icon" /> Education</h5>
    <p>Bachelor’s in Computer Science (CBIT Hyderabad)</p>
    <p className="inner-child">Expected Graduation: 2027</p>
  </div>

  {/* Location Card */}
  <div className="info-card">
    <h5><FiMapPin className="inline-icon" /> Location</h5>
    <p>Hyderabad, India</p>
    <p className="child">Open to remote opportunities</p>
  </div>

  {/* Availability Card */}
  <div className="info-card">
    <h5><FiCalendar className="inline-icon" /> Availability</h5>
    <p>Open for internships & projects</p>
    <p className="sub-child">Let’s build something amazing! 🚀</p>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}
