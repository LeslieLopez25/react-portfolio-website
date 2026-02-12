import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "../../App.css";
import "./contact.styles.css";

export default function Contact() {
  const [formStartTime, setFormStartTime] = useState(null);

  const RATE_LIMIT_MS = 60 * 1000;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    // Time-based spam check
    if (!formStartTime) {
      setFormStartTime(Date.now());
    }

    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    // Check honeypot field
    if (form.company.value) {
      return;
    }

    if (!formStartTime || Date.now() - formStartTime < 3000) {
      return;
    }

    const lastSent = localStorage.getItem("lastEmailSent");
    if (lastSent && Date.now() - Number(lastSent) < RATE_LIMIT_MS) {
      return;
    }

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await fetch(
        "https://leslie-lopez-anaya-backend.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            time: new Date().toLocaleString("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            }),
          }),
        },
      );

      if (!Response.ok) {
        throw new Error("Failed to send message");
      }

      localStorage.setItem("lastEmailSent", Date.now());

      setFormStartTime(null);

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again.",
      });
    }
  };

  const isRateLimited = () => {
    const lastSent = localStorage.getItem("lastEmailSent");
    return lastSent && Date.now() - Number(lastSent) < RATE_LIMIT_MS;
  };

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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="company"
                tabIndex="-1"
                autoComplete="off"
                style={{ display: "none" }}
              />

              <div className="fields">
                <div className="field name">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  name="message"
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="button">
                <button
                  type="submit"
                  disabled={formStatus.submitting || isRateLimited()}
                >
                  {formStatus.submitting
                    ? "Sending..."
                    : isRateLimited()
                      ? "Please wait..."
                      : "Send Message"}
                </button>

                {formStatus.message && (
                  <p
                    className={`form-status ${formStatus.success ? "success" : "error"}`}
                  >
                    {formStatus.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
