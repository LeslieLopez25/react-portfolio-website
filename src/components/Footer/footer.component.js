import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright as farCopyright } from "@fortawesome/free-regular-svg-icons";

import "../../App.css";
import "./footer.styles.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <FontAwesomeIcon icon={farCopyright} className="icon" />
      {currentYear} Leslie Lopez Anaya
    </footer>
  );
}
