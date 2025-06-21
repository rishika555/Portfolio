import React, { useState, useEffect } from "react";
import softwareEngineeringImage from "../components/software-engineering-square250.jpg";
import fullStackImage from "../components/fullstack.jpeg";
import webDeveloperImage from "../components/web.jpg";
import programmerImage from "../components/alternate-image.jpeg";
import rishikaImage from "../components/me.png"; // your picture
import "./First.css";

export default function First() {
    const [currentTitle, setCurrentTitle] = useState("Programmer");
    const [currentImage, setCurrentImage] = useState(programmerImage);

    useEffect(() => {
        const titles = ["Programmer", "Full Stack Developer", "Web Developer", "Software Engineer"];
        const images = {
            "Programmer": programmerImage,
            "Full Stack Developer": fullStackImage,
            "Web Developer": webDeveloperImage,
            "Software Engineer": softwareEngineeringImage
        };
        let titleIndex = 0;

        const interval = setInterval(() => {
            titleIndex = (titleIndex + 1) % titles.length;
            setCurrentTitle(titles[titleIndex]);
            setCurrentImage(images[titles[titleIndex]]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="first-section">
            <div className="left-side">
                <div className="text-container">
                    <h1 className="no static-text">Hello, I'm Rishika!</h1>
                    <h1 className="dynamic-text">I am a {currentTitle}</h1>
                    <div className="profile-image-container">
                        <img className="profile-image" src={rishikaImage} alt="Rishika Jain" />
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="image-container">
                    <img className="current-image" src={currentImage} alt={currentTitle} />
                </div>
            </div>
        </section>
    );
}
