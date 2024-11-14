import React from "react";
import "./NavigationBar.css";

const NavigationBar: React.FC = () => {
    return (
        <div className="navigation-container">
            <a className="navigation-hover" href="#about">About Me</a>
            <a className="navigation-hover" href="#experience">Experience</a>
            <a className="navigation-hover" href="#projects">Projects</a>
            <a className="navigation-hover" href="#contact">Contact</a>
        </div>
    )
}

export default NavigationBar;