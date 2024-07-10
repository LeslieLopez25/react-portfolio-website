import React from "react";

import "./navbar.styles.css";

export default function Navbar() {
  return (
    <nav className="navbar" id="sticky">
      <div className="max-width">
        <div className="logo">
          Portfo<span>lio</span>
        </div>
        <ul className="menu">
          <li>
            <a href="#home" className="menu-btn">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="menu-btn">
              About
            </a>
          </li>
          <li>
            <a href="#interests" className="menu-btn">
              Interests
            </a>
          </li>
          <li>
            <a href="#skills" className="menu-btn">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="menu-btn">
              Projects
            </a>
          </li>
          <li>
            <a href="#experiences" className="menu-btn">
              Experiences
            </a>
          </li>
          <li>
            <a href="#courses" className="menu-btn">
              Courses
            </a>
          </li>
          <li>
            <a href="#contact" className="menu-btn">
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-btn">
          <i className="fas fa-bars mobile-menu"></i>
        </div>
      </div>
    </nav>
  );
}
