import React from "react";
import cryptoImg from "../../assets/projects/crypto-app.png";
import sunriseImg from "../../assets/projects/sunrise-apparel.png";
import smartbrainImg from "../../assets/projects/smart-brain.png";
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
                src={merneats}
                alt="MernEats Food Ordering App"
                title="MernEats Food Ordering App"
                loading="lazy"
              />
              <h3 className="text">MernEats Food Ordering App</h3>
              <p>
                A fullstack web app built with React, TypeScript, Node.js, and
                MongoDB. Users can browse restaurants, customize orders, and pay
                with Stripe. Restaurant owners manage menus and orders in real
                time. Features include Auth0 authentication, Cloudinary uploads,
                dynamic filtering, and a clean UI styled with shadcn/ui.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code"
                href="https://github.com/LeslieLopez25/mern-food-ordering-app"
              >
                Source Code
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
                href="https://mern-food-ordering-app-frontend-60f4.onrender.com/"
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
                PostgreSQL, Auth0 for authentication, and Stripe for secure
                payments, offering a seamless and engaging user experience.
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
