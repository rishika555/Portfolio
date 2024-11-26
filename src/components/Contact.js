import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contacts" className="contact-page">
      <div className="contact-container">
        <h1 className="contact-heading">Contact Me</h1>
        <div className="contact-card-container">
          <div className="contact-card">
            <FaInstagram className="contact-icon" />
            <p>Instagram: <a href="https://www.instagram.com/rishika__55/" target="_blank" rel="noopener noreferrer">rishika__55</a></p>
          </div>
          <div className="contact-card">
            <FaLinkedin className="contact-icon" />
            <p>LinkedIn: <a href="https://www.linkedin.com/in/rishika-jain-8b31b6286/" target="_blank" rel="noopener noreferrer">Rishika Jain</a></p>
          </div>
          <div className="contact-card">
            <FaGithub className="contact-icon" />
            <p>GitHub: <a href="https://github.com/rishika555" target="_blank" rel="noopener noreferrer">rishika555</a></p>
          </div>
          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <p>Phone: +91 7017681735</p>
          </div>
        </div>
      </div>
    </section>
  );
}
