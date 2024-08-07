import React from "react";

import "../../App.css";
import "./home.styles.css";

export default function Home() {
  return (
    <header className="home" id="home">
      <div className="bg-img"></div>
      <div className="max-width">
        <div className="home-content">
          <p className="text-1">Hello, my name is</p>
          <h1 className="text-2">Leslie Lopez</h1>
          <p className="text-3">And I'm a Web Developer</p>
        </div>
      </div>
    </header>
  );
}
