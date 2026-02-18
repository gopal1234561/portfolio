import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

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
    <section id="contact" className="relative py-20 px-5 bg-gray-50">
      {/* STATIC CONTACT SECTION */}
      <div className="max-w-[1100px] mx-auto flex flex-wrap justify-between gap-12 bg-white p-10 rounded-2xl shadow-lg">
        {/* Left: Contact Info */}
        <div className="flex-1 flex flex-col gap-6 min-w-[280px]">
          <div className="contact-item flex items-center gap-4 p-4 border rounded-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-indigo-600 hover:text-white transition-all">
            <FaPhone className="text-orange-500 text-xl" />
            <span>+91 9381519723</span>
          </div>
          <div className="contact-item flex items-center gap-4 p-4 border rounded-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-indigo-600 hover:text-white transition-all">
            <FaEnvelope className="text-orange-500 text-xl" />
            <a href="mailto:vislavathgopal644@gmail.com">vislavathgopal644@gmail.com</a>
          </div>
          <div className="contact-item flex items-center gap-4 p-4 border rounded-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-indigo-600 hover:text-white transition-all">
            <FaMapMarkerAlt className="text-orange-500 text-xl" />
            <span>Hyderabad, India</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-5">
            <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="social-link w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-orange-500 hover:to-indigo-600 hover:text-white transition">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-orange-500 hover:to-indigo-600 hover:text-white transition">
              <FiLinkedin size={24} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-orange-500 hover:to-indigo-600 hover:text-white transition">
              <FiTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Right: Header */}
        <div className="flex-1 min-w-[280px] text-right">
          <h2 className="text-4xl font-bold text-orange-500">Let's Connect</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Ready to discuss your next project or just say hello? Fill the form or contact via WhatsApp.
          </p>
        </div>
      </div>

      {/* FLOATING CONTACT BAR */}
      <motion.div
        className="fixed bottom-6 right-6 bg-orange-500 text-white px-5 py-3 rounded-lg shadow-lg cursor-pointer flex items-center gap-2 z-50"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaEnvelope /> Contact Me
      </motion.div>

      {/* EXPANDABLE CONTACT FORM WITH SLIDE-IN ANIMATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="contact-form-popup fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-2xl p-6 z-50 flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-center text-orange-500">Get in Touch</h3>

            {/* Form */}
            <form className="flex flex-col gap-3">
              <input type="text" placeholder="Your Name" className="border px-3 py-2 rounded w-full" required />
              <input type="email" placeholder="Your Email" className="border px-3 py-2 rounded w-full" required />
              <textarea placeholder="Your Message" className="border px-3 py-2 rounded w-full" rows={4} required></textarea>
              <button type="submit" className="bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition w-full font-semibold">
                Send Message
              </button>
            </form>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsappClick}
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 w-full mt-2 font-semibold"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </button>

            {/* Social Icons inside form */}
            <div className="flex justify-center gap-4 mt-2">
              <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition">
                <FiGithub size={24} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition">
                <FiLinkedin size={24} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition">
                <FiTwitter size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
