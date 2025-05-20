import React from "react";
import codingImg from "../../assets/images/coding.svg";
import mediateImg from "../../assets/images/meditate.svg";
import drawingImg from "../../assets/images/drawing.svg";
import gardeningImg from "../../assets/images/gardening.svg";
import graphicdesignImg from "../../assets/images/graphic-design.svg";
import exerciseImg from "../../assets/images/exercise.svg";

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
              <h3 className="text">Building Personal Web Apps</h3>
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
              <h3 className="text">Meditation</h3>
              <p>
                Meditation for relaxation and stress relief, especially when
                faced with challenging bugs or complex coding puzzles.
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
          <div className="card">
            <div className="box">
              <img
                className="interests-imgs"
                src={gardeningImg}
                alt="Gardening"
                loading="lazy"
              />
              <h3 className="text">Gardening</h3>
              <p>
                I like spending time gardening, it's a relaxing way to unwind.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img
                className="interests-imgs"
                src={graphicdesignImg}
                alt="Graphic Design"
                loading="lazy"
              />
              <h3 className="text">Graphic Design</h3>
              <p>
                I enjoy playing around with graphic design to bring ideas to
                life and explore different styles.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img
                className="interests-imgs"
                src={exerciseImg}
                alt="Exercise"
                loading="lazy"
              />
              <h3 className="text">Exercise</h3>
              <p>
                Regular exercise helps me stay focused, energized, and maintain
                a balanced routine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
