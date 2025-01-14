import React, { useEffect } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS styles
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: false, // Animations will happen only once
    });
  }, []);

  return (
    <section id="contacts" className="contact-page" data-aos="fade-up">
      <div className="contact-container">
        <h1 className="contact-heading" data-aos="zoom-in">
          Contact Me
        </h1>
        <div className="contact-card-container">
          <div className="contact-card" data-aos="fade-right">
            <FaInstagram className="contact-icon" />
            <p>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/rishika__55/"
                target="_blank"
                rel="noopener noreferrer"
              >
                rishika__55
              </a>
            </p>
          </div>
          <div className="contact-card" data-aos="fade-left">
            <FaLinkedin className="contact-icon" />
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/rishika-jain-8b31b6286/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rishika Jain
              </a>
            </p>
          </div>
          <div className="contact-card" data-aos="fade-right">
            <FaGithub className="contact-icon" />
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/rishika555"
                target="_blank"
                rel="noopener noreferrer"
              >
                rishika555
              </a>
            </p>
          </div>
          <div className="contact-card" data-aos="fade-left">
            <FaPhone className="contact-icon" />
            <p>Phone: +91 7017681735</p>
          </div>
        </div>
      </div>
    </section>
  );
}
