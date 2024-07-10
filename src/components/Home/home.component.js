import React from "react";

import "../../App.css";
import "./home.styles.css";

export default function Home() {
  return (
    <header class="home" id="home">
      <div class="bg-img"></div>
      <div class="max-width">
        <div class="home-content">
          <h1 class="text-1">Hello, my name is</h1>
          <h1 class="text-2">Leslie Lopez</h1>
          <h1 class="text-3">And I'm a Web Developer</h1>
        </div>
      </div>
    </header>
  );
}
