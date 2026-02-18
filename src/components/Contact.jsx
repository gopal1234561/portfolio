import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsappClick = () => {
    // Example: require name/email before opening WhatsApp
    const name = prompt("Enter your name:");
    const email = prompt("Enter your email:");
    if (name && email) {
      window.open("https://wa.me/1234567890", "_blank"); // replace with your number
    } else {
      alert("Please provide name and email to continue.");
    }
  };

  return (
    <section id="contact" className="relative">
      {/* Floating Contact Bar */}
      <motion.div
        className="fixed bottom-6 right-6 bg-orange-500 text-white px-4 py-3 rounded-lg shadow-lg cursor-pointer flex items-center gap-2"
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
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-xl p-6 z-50"
          >
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="border px-3 py-2 rounded"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border px-3 py-2 rounded"
                required
              />
              <textarea
                placeholder="Your Message"
                className="border px-3 py-2 rounded"
                rows={4}
                required
              />
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>

            {/* Optional WhatsApp Button */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleWhatsappClick}
                className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
