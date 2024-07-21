import React from "react";

import "../../App.css";
import "./experiences.styles.css";

export default function Experiences() {
  return (
    <section className="experiences" id="experiences">
      <div className="max-width">
        <h2 className="title">
          <span>Experiences</span>
        </h2>
        <div className="experiences-content">
          <div className="dates">
            <ul>
              <li className="circle">
                <h4>Zero to Mastery</h4>
                <h3>Nov 22th, 2021 - Dec 9th, 2021</h3>
                <p>
                  I played a role by enhancing the user experience. I eliminated
                  duplicate footers, ensuring a seamless interface.
                  Additionally, I meticulously adjusted image sizes for students
                  section, optimizing visual elements. To refine the project's
                  aesthetics, I revamped the navbar and horizontal lines,
                  ensuring a cohesive and visually appealing design.
                </p>
              </li>
              <li className="circle">
                <h4>Keiko-Corp</h4>
                <h3>Nov 29th, 2021</h3>
                <p>
                  Made significant improvements by overhauling the navigation
                  bar. Through thoughtful design and meticulous attention to
                  detail, I modernized the user interface, ensuring effortless
                  navigation and a more engaging user experience.
                </p>
              </li>
              <li className="circle">
                <h4>Travel Guide</h4>
                <h3>Oct 14th, 2020 - Nov 4th, 2020</h3>
                <p>
                  Contributed to this project by enhancing its functionality and
                  content. Specifically, I revamped the contact page, providing
                  a more user-friendly and engaging experience. Additionally, I
                  introduced new sections dedicated to travel and CSS, expanding
                  the project's scope and offering a richer user experience.
                  Furthermore, I created dedicated pages for three distinct
                  travel destinations, adding depth and variety to the content.
                </p>
              </li>
              <li className="circle">
                <h4>Book Tracker</h4>
                <h3>Oct 15th, 2020</h3>
                <p>
                  Played a role in enhancing user engagement and design
                  aesthetics. I revamped the newsletter section, making it more
                  appealing and functional to better connect with users.
                  Additionally, I meticulously fine-tuned the project's CSS,
                  ensuring a polished and cohesive visual experience that aligns
                  with modern design standards.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
