import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <h2>
        <Typewriter
          words={["Leslie Lopez Anaya"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
    </div>
  );
}
