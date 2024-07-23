import React from "react";
import loaderGif from "../../assets/images/blocks.gif";
import checkeredPattern from "../../assets/images/checkered-pattern.png";

import "./loader.styles.css";

export default function Loader() {
  return (
    <div
      className="load"
      style={{ backgroundImage: `url(${checkeredPattern})` }}
    >
      <img className="load__gif" src={loaderGif} alt="Loading..." />
    </div>
  );
}
