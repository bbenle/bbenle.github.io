import React from "react";
import "./NavigationBar.css";

const NavigationBar: React.FC = () => {
    return (
        <div className="navbar">
            <a>Home</a>
            <a>About</a>
            <a>Experience</a>
            <a>Projects</a>
            <a>Contact</a>
        </div>
    )
}

export default NavigationBar;