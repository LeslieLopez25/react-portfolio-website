import React from "react";
import nodeImg from "../../assets/courses/NodeJS Developer.jpg";
import webdevImg from "../../assets/courses/UC-The Complete Web Developer in 2021- Zero to Mastery.jpg";
import reactImg from "../../assets/courses/Complete-React-Developer.jpg";

import "../../App.css";
import "./courses.styles.css";

export default function Courses() {
  return (
    <section className="courses" id="courses">
      <div className="max-width">
        <h2 className="title">
          <span>Courses</span>
        </h2>
        <div className="courses-content">
          <div className="card">
            <div className="box">
              <a target="_blank" rel="noopener noreferrer" href={nodeImg}>
                <img
                  className="course-img"
                  src={nodeImg}
                  alt="node developer course"
                  loading="lazy"
                />
              </a>
              <h3 className="text">The Complete NodeJS Developer</h3>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <a target="_blank" rel="noopener noreferrer" href={webdevImg}>
                <img
                  className="course-img"
                  src={webdevImg}
                  alt="javascript course"
                  loading="lazy"
                />
              </a>
              <h3 className="text">The Complete Web Developer</h3>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <a target="_blank" rel="noopener noreferrer" href={reactImg}>
                <img
                  className="course-img"
                  src={reactImg}
                  alt="react developer course"
                  loading="lazy"
                />
              </a>
              <h3 className="text">The Complete React Developer Course</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
