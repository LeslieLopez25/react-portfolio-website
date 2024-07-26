import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./navbar.styles.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="sticky">
      <div className="max-width">
        <div className="logo">
          Portfo<span>lio</span>
        </div>
        <ul className={`menu ${isMenuActive ? "active" : ""}`}>
          <li>
            <a href="#home" className="menu-btn" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="menu-btn" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#interests" className="menu-btn" onClick={closeMobileMenu}>
              Interests
            </a>
          </li>
          <li>
            <a href="#skills" className="menu-btn" onClick={closeMobileMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="menu-btn" onClick={closeMobileMenu}>
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experiences"
              className="menu-btn"
              onClick={closeMobileMenu}
            >
              Experiences
            </a>
          </li>
          <li>
            <a href="#courses" className="menu-btn" onClick={closeMobileMenu}>
              Courses
            </a>
          </li>
          <li>
            <a href="#contact" className="menu-btn" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="mobile-menu" />
        </div>
      </div>
    </nav>
  );
}
