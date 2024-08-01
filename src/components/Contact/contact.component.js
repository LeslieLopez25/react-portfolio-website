import React from "react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">
          <span>Contact Me</span>
        </h2>
        <form
          name="contact"
          method="POST"
          action="/thank-you.html"
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="fields">
            <div className="field name">
              <input type="text" placeholder="Name" name="name" required />
            </div>
            <div className="field email">
              <input type="email" placeholder="Email" name="email" required />
            </div>
          </div>

          <div className="field">
            <input type="text" placeholder="Subject" name="subject" required />
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

          <div className="g-recaptcha" data-netlify-recaptcha="true"></div>

          <div className="button">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
