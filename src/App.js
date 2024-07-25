import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/navbar.component";
import Home from "./components/Home/home.component";
import About from "./components/About/about.component";
import Interests from "./components/Interests/interests.component";
import Skills from "./components/Skills/skills.component";
import Projects from "./components/Projects/projects.component";
import Experiences from "./components/Experiences/experiences.component";
import Courses from "./components/Courses/courses.component";
import Contact from "./components/Contact/contact.component";
import Footer from "./components/Footer/footer.component";
import Loader from "./components/Loader/loader.component";
import hoverEffectComponent from "./components/Hover-Effect/hover-effect.component";
import img1 from "./assets/images/img-1.jpg";
import img2 from "./assets/images/img-2.jpg";
import overlay from "./assets/images/leaf.jpg";

import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var image_animate = new hoverEffectComponent({
      parent: document.querySelector(".bg-img"),
      intensity: 0.3,
      image1: img1,
      image2: img2,
      displacementImage: overlay,
    });
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Interests />
      <Skills />
      <Projects />
      <Experiences />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}
