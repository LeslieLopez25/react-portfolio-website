import React from "react";
import Navbar from "./components/Navbar/navbar.component";
import Home from "./components/Home/home.component";
import About from "./components/About/about.component";
import Interests from "./components/Interests/interests.component";
import Skills from "./components/Skills/skills.component";
import Projects from "./components/Projects/projects.component";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Interests />
      <Skills />
      <Projects />
    </div>
  );
}
