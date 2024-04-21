import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="pb-8">
          <p className="section-header">Contact</p>
          <p className="section-description">Submit the form below to get in contact with me</p>
        </div>

        <div className="form-container">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className="contact-form"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input-field"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="input-field"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="textarea-field"
            ></textarea>

            <button className="submit-button">Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
