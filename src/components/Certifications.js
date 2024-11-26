import React from "react";
import "./Certifications.css";

export default function Certifications() {
  const certificates = [
    {
      id: 1,
      title: "Computer Vision",
      image: "/images/cv.png",
    },
    {
      id: 2,
      title: "Introduction to Artificial Intelligence",
      image: "/images/ai.png",
    },
    {
      id: 3,
      title: "Introduction to Robotic Process Automation",
      image: "/images/rpa.png",
    },
    {
      id: 4,
      title: "Introduction to Natural Language Processing",
      image: "/images/nlp.png",
    },
    {
      id: 5,
      title: "Introduction to OpenAI GPT Models",
      image: "/images/openai.png",
    },
    {
      id: 6,
      title: "Introduction to Data Science",
      image: "/images/ds.png",
    },
    {
      id: 7,
      title: "Introduction to Data Learning",
      image: "/images/dl.png",
    },
    {
      id: 8,
      title: "Graphic Design Basics",
      image: "/images/graphicd.png",
    },
    {
      id: 9,
      title: "PepSheSupply Chain Star Program",
      image: "/images/pepshe.png",
    },
    {
      id: 10,
      title: "Federated Learning with TensorFlow",
      image: "/images/federated.png",
    },
    {
      id: 11,
      title: "Graph-E-Thon",
      image: "/images/graph.png",
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <h1 className="certifications-heading">Certifications</h1>
      <div className="certificates-container">
        {certificates.map((cert) => (
          <div className="certificate-card" key={cert.id}>
            <p>{cert.title}</p>
            <div className="certificate-popup">
              <img src={cert.image} alt={cert.title} />
              <p className="certificate-description">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
