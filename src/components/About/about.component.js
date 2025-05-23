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
            <h3 className="text">I'm Leslie Lopez Anaya</h3>
            <p>
              Hey there! I’m a full stack React developer who loves building web
              apps that look great and work even better. I build smooth,
              user-friendly frontends with React and hook them up to solid
              backends using Node.js and TypeScript. I’m always learning, always
              experimenting, and always up for solving interesting problems. If
              you're into clean code, good UI, and creative projects — let’s
              connect!
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
