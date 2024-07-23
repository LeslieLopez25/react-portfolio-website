import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import "../../App.css";
import "./footer.styles.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <FontAwesomeIcon icon={faCopyright} />
      {currentYear} Leslie Lopez
    </footer>
  );
}
