import React, { useState, useEffect } from "react";

const texts = ["Programmer", "Machine Learning Engineer", "Software Engineer","Full Stack Developer"]; // Array of text to display

export default function DynamicText() {
    const [currentText, setCurrentText] = useState(texts[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setCurrentText(texts[index]);
        }, 2000); // Adjust the duration as needed

        return () => clearInterval(interval); // Clean up on unmount
    }, [index]);

    return (
        <div className="dynamic-text">
            <h1>I am {currentText}</h1>
        </div>
    );
}
