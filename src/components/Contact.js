import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>
        Want to work together or just say hello? Drop me a message — I’d love
        to hear from you.
      </p>

      <div className="contact-info">
        <a href="chetanjagtap401@gmail.com" className="contact-item">
          <FaEnvelope className="contact-icon" /> chetanjagtap401@gmail.com
        </a>

        <a
          href="https://github.com/Chetan40101"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaGithub className="contact-icon" /> https://github.com/Chetan40101
        </a>

        <a
          href="https://www.linkedin.com/in/chetan-jagtap-470220220/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaLinkedin className="contact-icon" /> https://www.linkedin.com/in/chetan-jagtap-470220220/
        </a>

        <a href="tel:+91 9503833270" className="contact-item">
          <FaPhone className="contact-icon" /> +91 9503833270
        </a>
      </div>
    </section>
  );
};

export default Contact;
