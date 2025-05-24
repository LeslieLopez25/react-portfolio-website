import React from "react";
import Header from "./header.component";

import "../../App.css";
import "./home.styles.css";

export default function Home() {
  return (
    <header className="home" id="home">
      <div className="bg-img"></div>
      <div className="max-width">
        <div className="home-content">
          <p className="text-1">Hello, my name is</p>
          <h1 className="text-2">
            <Header />
          </h1>
          <p className="text-3">And I'm a React Full Stack Developer</p>
        </div>
      </div>
    </header>
  );
}
