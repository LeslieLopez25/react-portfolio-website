import React from "react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">
          <span>Contact Me</span>
        </h2>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />

          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="fields">
            <div className="field name">
              <input type="text" placeholder="Name" name="name" required />
            </div>
            <div className="field email">
              <input type="email" placeholder="Email" name="email" required />
            </div>
          </div>

          <div className="field">
            <textarea placeholder="Message" name="message" required></textarea>
          </div>

          <div className="button">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
