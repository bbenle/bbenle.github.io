import React from "react";
import "./NavigationBar.css";

const NavigationBar: React.FC = () => {
    return (
        <div className="navigation-container">
            <a href="#about">About Me</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    )
}

export default NavigationBar;