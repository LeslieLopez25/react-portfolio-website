import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "../../App.css";
import "./contact.styles.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">
          <span>Contact Me</span>
        </h2>
        <div className="contact-content">
          <div className="column left">
            <h3 className="text">Get In Touch</h3>
            <div className="icons">
              <div className="row">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                <div className="info">
                  <h4 className="head">Guadalajara, Jalisco, Mexico</h4>
                </div>
              </div>
              <div className="row">
                <FontAwesomeIcon icon={faGithub} className="icon" />
                <div className="info">
                  <h4 className="head">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/LeslieLopez25"
                    >
                      Github
                    </a>
                  </h4>
                </div>
              </div>
              <div className="row">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
                <div className="info">
                  <h4 className="head">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/leslie-lopez-anaya-1315lcla2125/"
                    >
                      Linkedin
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message Me</div>
            <form
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </div>
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Name" name="name" required />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="button">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
