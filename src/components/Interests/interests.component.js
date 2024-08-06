import React from "react";
import codingImg from "../../assets/images/coding.svg";
import mediateImg from "../../assets/images/meditate.svg";
import drawingImg from "../../assets/images/drawing.svg";

import "../../App.css";
import "./interests.styles.css";

export default function Interests() {
  return (
    <section className="interests" id="interests">
      <div className="max-width">
        <h2 className="title">
          <span>Interests</span>
        </h2>
        <div className="interests-content">
          <div className="card">
            <div className="box">
              <img
                className="interests-imgs"
                src={codingImg}
                alt="Coding"
                loading="lazy"
              />
              <h3 className="text">Coding</h3>
              <p>
                I have a lot of fun coding and building projects to keep
                improving my skills.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img
                className="interests-imgs"
                src={mediateImg}
                alt="Meditate"
                loading="lazy"
              />
              <h3 className="text">Meditating</h3>
              <p>
                Meditation is my go-to practice for relaxation and stress
                relief, especially when faced with challenging bugs or complex
                coding puzzles.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img
                className="interests-imgs"
                src={drawingImg}
                alt="Drawing"
                loading="lazy"
              />
              <h3 className="text">Drawing</h3>
              <p>
                I have a creative side that I nurture through drawing and
                graphic design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
