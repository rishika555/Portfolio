import React from "react";

export default function Projects() {
  const projectData = [
    {
      image: "path/to/image1.jpg", // Replace with your image path
      title: "Personal Portfolio",
      description: "A bot that helps track placements and sends updates directly to your Telegram.",
      link: "https://github.com/yourusername/telegram-placement-tracker"
    },
    {
      image: "path/to/image2.jpg", // Replace with your image path
      title: "Fake News Detection",
      description: "A machine learning project that detects fake news using NLP techniques.",
      link: "https://github.com/yourusername/fake-news-detection"
    },
    {
      image: "path/to/image3.jpg", // Replace with your image path
      title: "Handwritten Text Recognition",
      description: "A deep learning project that recognizes handwritten text from images.",
      link: "https://github.com/yourusername/handwritten-text-recognition"
    },
    {
      image: "path/to/image3.jpg", // Replace with your image path
      title: "Weather App",
      description: "A deep learning project that recognizes handwritten text from images.",
      link: "https://github.com/yourusername/handwritten-text-recognition"
    }
  ];

  return (
    <section id="projects">
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <div className="card-container">
        {projectData.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={project.title} className="card-image" />
            <h2 className="card-title">{project.title}</h2>
            <p className="card-description">{project.description}</p>
            <a href={project.link} className="card-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
