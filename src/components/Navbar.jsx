import React, { useState, useEffect } from "react";
import {
  FaLaptopCode,
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const menu = ["home", "about", "skills", "projects", "contact"];
  const icons = {
    home: <FaHome />,
    about: <FaUser />,
    skills: <FaTools />,
    projects: <FaProjectDiagram />,
    contact: <FaEnvelope />,
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      document.querySelectorAll("section").forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const h = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (top >= offset && top < offset + h) setActive(id);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* BRAND */}
      <div className="brand">
        <FaLaptopCode className="brand-icon" />
        {"Portfolio".split("").map((l, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.08}s` }}>
            {l}
          </span>
        ))}
      </div>

      {/* DESKTOP LINKS */}
      <div className="links">
        {menu.map((i) => (
          <a
            key={i}
            href={`#${i}`}
            className={active === i ? "active" : ""}
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            {icons[i]} <span>{i.toUpperCase()}</span>
          </a>
        ))}
      </div>

      {/* MOBILE TOGGLE */}
      <div className="mobile" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          {menu.map((i) => (
            <a
              key={i}
              href={`#${i}`}
              onClick={() => setOpen(false)}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              {icons[i]} <span>{i.toUpperCase()}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
