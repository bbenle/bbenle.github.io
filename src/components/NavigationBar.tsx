import React from "react";
import "./NavigationBar.css";

const NavigationBar: React.FC = () => {
    return (
        <div className="nav-bar">
            <a>About Me</a>
            <a>Experience</a>
            <a>Projects</a>
            <a>Contact</a>
        </div>
    )
}

export default NavigationBar;