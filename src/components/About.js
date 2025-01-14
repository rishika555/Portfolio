import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import "./About.css"; // Ensure you have this import

export default function About() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);

  const staggerText = (text) => {
    return text.split("").map((letter, index) => (
      <span key={index} style={{ "--char-index": index }}>
        {letter}
      </span>
    ));
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container" data-aos="fade-up">
        <h1 className="blink" data-aos="zoom-in">About Me</h1>
        <h1 className="about-heading" data-aos="fade-right">Education</h1>
        <div className="card-container" data-aos="fade-up">
          <div className="card" data-aos="flip-left">
            <p>Graphic Era University</p>
            <p>Bachelor of Technology (B.Tech)</p>
            <p>Computer Science</p>
            <p>CGPA: 8.74/10.00</p>
          </div>
          <div className="card" data-aos="flip-left">
            <p>The Montessori School</p>
            <p>Intermediate</p>
            <p>Percentage: 84.00%</p>
          </div>
          <div className="card" data-aos="flip-left">
            <p>The Montessori School</p>
            <p>High School</p>
            <p>Percentage: 92.00%</p>
          </div>
        </div>

        <h1 className="about-heading" data-aos="fade-right">Skills</h1>
        <div className="card-container" data-aos="fade-up">
          <div className="card" data-aos="flip-left"><p>Data Structures and Algorithms</p></div>
          <div className="card" data-aos="flip-left">
            <p>Database Management</p>
            <p>MySQL, MongoDB</p>
          </div>
        </div>

        <div className="card-container" data-aos="fade-up">
          <div className="card" data-aos="flip-left">
            <p>Developer Tools</p>
            <p>
              VS Code, Android Studio, Eclipse, Arduino IDE, Jupyter Notebook,
              Postman
            </p>
          </div>
          <div className="card" data-aos="flip-left">
            <p>Frameworks</p>
            <p>Laravel, Spring Boot, Flutter, GitHub</p>
          </div>
          <div className="card" data-aos="flip-left">
            <p>Languages</p>
            <p>C, C++, Python, Java, JavaScript, HTML, CSS, R, SQL</p>
          </div>
        </div>

        <h1 className="about-heading" data-aos="fade-right">Interests</h1>
        <div className="card-container" data-aos="fade-up">
          <div className="card" data-aos="zoom-in">Android Development</div>
          <div className="card" data-aos="zoom-in">Artificial Intelligence</div>
          <div className="card" data-aos="zoom-in">Internet of Things</div>
          <div className="card" data-aos="zoom-in">Graphic Design</div>
          <div className="card" data-aos="zoom-in">Machine Learning</div>
          <div className="card" data-aos="zoom-in">Data Science</div>
          <div className="card" data-aos="zoom-in">Deep Learning</div>
          <div className="card" data-aos="zoom-in">Natural Language Processing</div>
        </div>
      </div>
    </section>
  );
}
