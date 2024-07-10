import React from "react";
import Navbar from "./components/Navbar/navbar.component";
import Home from "./components/Home/home.component";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}
