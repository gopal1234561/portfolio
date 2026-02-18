import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt  } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";


function Contact() {
  return (
    <section id="contact">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Let's Connect</h2>
        <p>Ready to discuss your next project or just say hello?</p>
      </motion.div>

      <motion.div
        className="contact-info"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="contact-item">
          <FaPhone className="contact-icon"/>
          <span>+91 9381519723</span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon"/>
          <a href="mailto:vislavathgopal644@gmail.com">vislavathgopal644@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon"/>
          <span>Hyderabad, India</span>
        </div>
      </motion.div>

      <motion.div
        className="social-links"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="social-link">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/vislavath-gopal-8b63a7327/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FiLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FiTwitter />
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
