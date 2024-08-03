import React, { useEffect, useState, lazy, Suspense } from "react";
import Home from "./components/Home/home.component";
import Loader from "./components/Loader/loader.component";
import hoverEffectComponent from "./components/Hover-Effect/hover-effect.component";
import img1 from "./assets/images/img-1.jpg";
import img2 from "./assets/images/img-2.jpg";
import overlay from "./assets/images/leaf.jpg";

import "./App.css";

const Navbar = lazy(() => import("./components/Navbar/navbar.component"));
const About = lazy(() => import("./components/About/about.component"));
const Interests = lazy(() =>
  import("./components/Interests/interests.component")
);
const Skills = lazy(() => import("./components/Skills/skills.component"));
const Projects = lazy(() => import("./components/Projects/projects.component"));
const Experiences = lazy(() =>
  import("./components/Experiences/experiences.component")
);
const Courses = lazy(() => import("./components/Courses/courses.component"));
const Contact = lazy(() => import("./components/Contact/contact.component"));
const Footer = lazy(() => import("./components/Footer/footer.component"));

export default function App() {
  const [loading, setLoading] = useState(true);

  // Hover Effect
  useEffect(() => {
    var image_animate = new hoverEffectComponent({
      parent: document.querySelector(".bg-img"),
      intensity: 0.3,
      image1: img1,
      image2: img2,
      displacementImage: overlay,
    });

    // Timer for Loader Component
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}
