import React from "react";
import "./About.css"; // Ensure you have this import

export default function About() {
  const staggerText = (text) => {
    return text.split("").map((letter, index) => (
      <span key={index} style={{ "--char-index": index }}>
        {letter}
      </span>
    ));
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1 className="blink">About Me</h1>
        <h1 className="about-heading">Education</h1>
        <div className="card-container">
          <div className="card">
            <p>Graphic Era University</p>
            <p>Bachelor of Technology (B.Tech)</p>
            <p>Computer Science</p>
            <p>CGPA: 8.74/10.00</p>
          </div>
          <div className="card">
            <p>The Montessori School</p>
            <p>Intermediate</p>
            <p>Percentage: 84.00%</p>
          </div>
          <div className="card">
            <p>The Montessori School</p>
            <p>High School</p>
            <p>Percentage: 92.00%</p>
          </div>
        </div>

        <h1 className="about-heading">Skills</h1>
        <div className="card-container">
          <div className="card">Data Structures and Algorithms</div>
          <div className="card">
            <p>Database Management</p>
            <p>MySQL, MongoDB</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <p>Developer Tools</p>
            <p>
              VS Code, Android Studio, Eclipse, Arduino IDE, Jupyter Notebook,
              Postman
            </p>
          </div>
          <div className="card">
            <p>Frameworks</p>
            <p>Laravel, Spring Boot, Flutter, GitHub</p>
          </div>
          <div className="card">
            <p>Languages</p>
            <p>C, C++, Python, Java, JavaScript, HTML, CSS, R, SQL</p>
          </div>
        </div>

        <h1 className="about-heading">Interests</h1>
        <div className="card-container">
          <div className="card">Android Development</div>
          <div className="card">Artificial Intelligence</div>
          <div className="card">Internet of Things</div>
          <div className="card">Graphic Design</div>
          <div className="card">Machine Learning</div>
        </div>
      </div>
    </section>
  );
}
