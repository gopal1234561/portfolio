import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaLaptopCode } from "react-icons/fa";

const menu = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = menu.find((id) => {
        const el = document.getElementById(id);
        return el && window.scrollY >= el.offsetTop - 180 && window.scrollY < el.offsetTop + el.offsetHeight - 180;
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a className="brand" href="#home" aria-label="Gopal portfolio home">
        <span className="brand-mark"><FaLaptopCode /></span>
        <span>Gopal<span className="brand-dot">.</span></span>
      </a>

      <div className="links">
        {menu.map((item) => (
          <a key={item} href={`#${item}`} className={active === item ? "active" : ""}>
            {item}
          </a>
        ))}
      </div>

      <button className="mobile" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {open && (
        <div className="mobile-menu">
          {menu.map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
