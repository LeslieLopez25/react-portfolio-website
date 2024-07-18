import React from "react";
import profileImage from "../../assets/images/profile.png";

import "../../App.css";
import "./about.styles.css";

export default function About() {
  return (
    <main className="about" id="about">
      <div className="max-width">
        <h2 className="title">
          <span>About Me</span>
        </h2>
        <div className="about-content">
          <div className="column left">
            <img src={profileImage} alt="profile pic" loading="lazy" />
          </div>
          <div className="column right">
            <h3 className="text">I'm Leslie Lopez</h3>
            <p>
              Hello! I'm a passionate React frontend developer dedicated to
              mastering the art of creating seamless user experiences. Focused
              on becoming a full-stack React developer, I thrive on continuous
              learning and problem-solving. If you're looking for a dedicated
              and adaptable web developer with a strong emphasis on React, let's
              connect and create exceptional projects together!
              <br />
              <br />
              Let's embark on this exciting tech journey together!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
