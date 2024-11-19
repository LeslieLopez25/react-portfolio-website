import React from "react";
import cryptoImg from "../../assets/projects/crypto-app.png";
import sunriseImg from "../../assets/projects/sunrise-apparel.png";
import smartbrainImg from "../../assets/projects/smart-brain.png";
import netflixImg from "../../assets/projects/netflix-clone.png";
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
                src={cryptoImg}
                alt="Crypto App"
                title="Crypto App"
                loading="lazy"
              />
              <h3 className="text">Crypto App</h3>
              <p>
                A comprehensive cryptocurrency application, crafted with React,
                enhanced by the sleek aesthetics of Tailwind CSS, and powered by
                Firebase for a seamless user experience across frontend and
                backend.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code"
                href="https://github.com/LeslieLopez25/cryptocurrency-project"
              >
                Source Code
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
                href="https://cryptocurrencybase-fb04c.web.app/"
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
                alt="Face Recognition Brain"
                title="Face Recognition Brain"
                loading="lazy"
              />
              <h3 className="text">Face Recognition Brain</h3>
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
                href="https://github.com/LeslieLopez25/facerecognitionbrain-frontend#face-recognition-brain-adult"
              >
                Source Code
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
                href="https://face-recognition-brain13.netlify.app/"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img
                className="project-img"
                src={netflixImg}
                alt="Netflix Clone"
                title="Netflix Clone"
                loading="lazy"
              />
              <h3 className="text">Netflix Clone</h3>
              <p>
                A Netflix-inspired streaming platform replica developed with
                React, Redux, and CSS, backed by Firebase and Stripe for
                seamless functionality spanning both frontend and backend
                components.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code"
                href="https://github.com/LeslieLopez25/netflix-clone"
              >
                Source Code
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
                href="https://netflix-clone-26c81.web.app/"
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
                A stylish restaurant website meticulously designed with React
                and CSS, emphasizing a captivating frontend experience for
                users, showcasing the culinary offerings and ambiance of the
                restaurant.
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
          <div className="card">
            <div className="box">
              <img
                className="project-img"
                src={nasaImg}
                alt="NASA Mission Control"
                title="NASA Mission Control"
                loading="lazy"
              />
              <h3 className="text">NASA Mission Control</h3>
              <p>
                NASA Mission Control is a fullstack web application built to
                manage space missions. It allows users to seamlessly schedule
                new launches, delete planned missions, and review a
                comprehensive history of all past launches. The app is powered
                by React for a dynamic frontend, NodeJS for backend logic,
                MongoDB for data storage, and Docker for deployment.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code"
                href="https://github.com/LeslieLopez25/nasa-project"
              >
                Source Code
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
                href="https://nasa-project-8xvh.onrender.com/"
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
