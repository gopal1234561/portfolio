import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import './Contact.css';

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsappClick = () => {
    const name = prompt("Enter your name:");
    const email = prompt("Enter your email:");
    if (name && email) {
      window.open("https://wa.me/1234567890", "_blank"); // Replace with your number
    } else {
      alert("Please provide name and email to continue.");
    }
  };

  return (
    <section id="contact">
      {/* MAIN CONTACT SECTION */}
      <div className="container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+91 9381519723</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:vislavathgopal644@gmail.com">vislavathgopal644@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Hyderabad, India</span>
          </div>

          {/* Social Icons */}
          <div className="social-links">
            <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
          </div>
        </div>

        {/* Header */}
        <div className="contact-header">
          <h2>Let's Connect</h2>
          <p>Use the form or WhatsApp to reach out. I’ll respond quickly!</p>
        </div>
      </div>

      {/* Floating Contact Button */}
      <motion.div
        className="contact-float-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaEnvelope /> Contact Me
      </motion.div>

      {/* Expandable Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="contact-form-popup"
          >
            <h3>Get in Touch</h3>

            <form className="form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows={4} required />
              <button type="submit">Send Message</button>
            </form>

            <button className="whatsapp-btn" onClick={handleWhatsappClick}>
              <FaWhatsapp /> Chat on WhatsApp
            </button>

            {/* Social icons inside form */}
            <div className="social-links-form">
              <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
