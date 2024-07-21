import React from "react";
import webdevImg from "../../assets/courses/UC-Web-Development-Bootcamp.jpg";
import zeroImg from "../../assets/courses/UC-The Complete Web Developer in 2021- Zero to Mastery.jpg";
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
              <a
                target="_blank"
                href="../../assets/courses/UC-Web-Development-Bootcamp.jpg"
              >
                <img
                  className="course-img"
                  src={webdevImg}
                  alt="web development bootcamp"
                  loading="lazy"
                />
              </a>
              <h3 className="text">Web Developer Bootcamp 2020</h3>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <a
                target="_blank"
                href="../../assets/courses/UC-The Complete Web Developer in 2021- Zero to Mastery.jpg"
              >
                <img
                  className="course-img"
                  src={zeroImg}
                  alt="javascript course"
                  loading="lazy"
                />
              </a>
              <h3 className="text">
                The Complete Web Developer in 2021- Zero to Mastery
              </h3>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <a
                target="_blank"
                href="../../assets/courses/Complete-React-Developer.jpg"
              >
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
