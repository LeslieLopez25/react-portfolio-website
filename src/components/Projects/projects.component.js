import React from "react";
import bookingImg from "../../assets/projects/booking-app.png";
import sunriseImg from "../../assets/projects/sunrise-apparel.png";
import smartbrainImg from "../../assets/projects/smartbrain.png";
import merneats from "../../assets/projects/merneats-food-ordering.png";
import perfectmixImg from "../../assets/projects/perfect-mix.png";
import nasaImg from "../../assets/projects/nasa-control.png";

import "../../App.css";
import "./projects.styles.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">
          <span>Projects</span>
        </h2>
        <div className="projects-content">
          <div className="card">
            <div className="box">
              <img
                className="project-img"
                src={bookingImg}
                alt="Booking App"
                title="Booking App"
                loading="lazy"
              />
              <h3 className="text">Merns Holiday Booking App</h3>
              <p>
                A full-stack hotel booking application built with the MERN stack
                (MongoDB, Express, React, Node.js) and TypeScript. Users can
                search, create, and book hotels, manage their current
                reservations through a dedicated dashboard, and view past stays
                in a booking history section. The app features secure
                authentication with JWT, responsive design with TailwindCSS, and
                seamless data handling via REST APIs and MongoDB.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code"
                href="https://github.com/LeslieLopez25/mern-booking-app"
              >
                Source Code
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
                href="https://mern-booking-app-iaa4.onrender.com/"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img
                className="project-img"
                src={sunriseImg}
                alt="Sunrise Apparel"
                title="Sunrise Apparel"
                loading="lazy"
              />
              <h3 className="text">Sunrise Apparel</h3>
              <p>
                An innovative e-commerce platform tailored for fashion
                enthusiasts, meticulously crafted with React, Redux, and
                TypeScript. Elevating user interface through styled-components
                CSS, the website seamlessly integrates Firebase and Stripe for
                secure transactions, ensuring a dynamic and secure shopping
                experience encompassing both frontend and backend technologies.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code"
                href="https://github.com/LeslieLopez25/sunglow-apparel"
              >
                Source Code
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
                href="https://sun-apparel.netlify.app/"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img
                className="project-img"
                src={smartbrainImg}
                alt="SmartBrain"
                title="SmartBrain"
                loading="lazy"
              />
              <h3 className="text">SmartBrain</h3>
              <p>
                An online platform utilizing Clarifai AI to detect faces in
                uploaded jpg or png images. Users create accounts to track the
                number of images processed. Built with React for the frontend,
                NodeJS, Express, and PostgreSQL power the backend.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code"
                href="https://github.com/LeslieLopez25/smartbrain"
              >
                Source Code
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
                href="https://smartbrain-mtf1.onrender.com/"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img
                className="project-img"
                src={perfectmixImg}
                alt="The Perfect Mix"
                title="The Perfect Mix"
                loading="lazy"
              />
              <h3 className="text">The Perfect Mix</h3>
              <p>
                A fullstack restaurant website with React, Node.js, Express,
                PostgreSQL, custom middleware for security, Auth0 for
                authentication, and Stripe for secure payments, offering a
                seamless and engaging user experience.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code"
                href="https://github.com/LeslieLopez25/perfect-mix-react"
              >
                Source Code
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
                href="https://perfect-mix-react.onrender.com/"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
