import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS styles
import "./Projects.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Smooth animation
      once: false, // Animation occurs only once
    });
  }, []);

  const projectData = [
    {
      image: "images/SICXE.png",
      title: "SIC/XE Assembler",
      description: "An assembler for SIC/XE. Backend: Spring Boot. Frontend: React.",
      link: "https://github.com/yourusername/sicxe-assembler",
    },
    {
      image: "images/algorithm.jpg",
      title: "Algorithm Visualizer",
      description: "A project to visualize algorithms effectively.",
      link: "https://github.com/yourusername/algorithm-visualizer",
    },
    {
      image: "images/ecommerce.jpg",
      title: "Ecommerce Website",
      description: "A full-stack ecommerce platform with modern UI.",
      link: "https://github.com/yourusername/ecommerce-website",
    },
    {
      image: "images/portfolio.png",
      title: "Personal Portfolio",
      description: "A personal portfolio showcasing projects and skills.",
      link: "https://github.com/yourusername/personal-portfolio",
    },
    {
      image: "images/news.jpg",
      title: "Fake News Detection",
      description: "A machine learning project that detects fake news using NLP techniques.",
      link: "https://github.com/yourusername/fake-news-detection",
    },
    {
      image: "images/hand.jpg",
      title: "Handwritten Text Recognition",
      description: "A deep learning project for handwritten text recognition.",
      link: "https://github.com/yourusername/handwritten-text-recognition",
    },
    {
      image: "images/weather.jpg",
      title: "Weather App",
      description: "An app to get real-time weather updates for any location.",
      link: "https://github.com/yourusername/weather-app",
    },
  ];

  return (
    <section id="projects">
      <div className="projects-container">
        <h1 className="projects-heading" data-aos="fade-up">
          Projects
        </h1>
        <div className="projects-card-container">
          {projectData.map((project, index) => (
            <div className="projects-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <img src={project.image} alt={project.title} className="projects-card-image" />
              <h2 className="projects-card-title">{project.title}</h2>
              <p className="projects-card-description">{project.description}</p>
              <a href={project.link} className="projects-card-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
