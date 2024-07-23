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

import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

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
