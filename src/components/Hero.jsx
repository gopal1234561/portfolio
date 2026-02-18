import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaWhatsapp, FaMusic} from "react-icons/fa";
import { color } from "framer-motion";
function Hero() {
  return (
    <section className="hero" id="home">
      {/* Left content */}
      <div className="hero-left">
        <h1 className="hero-title">
          <h2 className="hello">Hello, It's Me{" "}</h2>
          <span className="name">Vislavath Gopal</span>
        </h1>

        {/* Typewriter with animated gradient */}
        <div className="tagline">
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Tech Enthusiast",
              "Problem Solver",
              "Seeking For Opportunities |",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>

        <p className="hero-description">
          I build responsive and modern web applications using the MERN stack. 
          Passionate about creating interactive UI/UX and learning new technologies and more...
        </p>
<div className="hero-icons">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919381519723?text=Hello%20Gopal,%20I%20saw%20your%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon invisible-hover"
          >
            <FaWhatsapp />
          </a>

          {/* Music */}
          <a
            href="https://open.spotify.com/user/yourprofile" // replace with your music link
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon" style={{color: "pink"}}
          >
            <FaMusic />
          </a>
        </div>
        <div className="hero-buttons">
          <a href="#about" className="btn-neon">
            More About Me 
          </a>
        </div>
      </div>

      {/* Right profile with circle + smoke */}
      <div className="hero-right">
          <div className="profile-wrapper">
            <div className="outer-circle"></div>
            <div className="inner-circle">
              <img
                src="https://res.cloudinary.com/dq8tjhtog/image/upload/v1771251175/_93A9738_zabbdw.jpg"
                alt="Vislavath Gopal"
                className="profile-img"
              />
            </div>
          </div>
        </div>
     
    </section>
  );
}

export default Hero;
