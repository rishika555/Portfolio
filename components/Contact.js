import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contacts">
    <div className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>
      <div className="card-container">
        <div className="card">
          <FaInstagram className="contact-icon" />
          <p>Instagram: <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a></p>
        </div>
        <div className="card">
          <FaLinkedin className="contact-icon" />
          <p>LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a></p>
        </div>
        <div className="card">
          <FaGithub className="contact-icon" />
          <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a></p>
        </div>
        <div className="card">
          <FaPhone className="contact-icon" />
          <p>Phone: +1234567890</p>
        </div>
      </div>
    </div>
    </section>
  );
}
