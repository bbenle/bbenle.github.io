"use client";

import React from "react";
import "./Projects.css";
import ImageSlider from 'simple-image-carousel';

const images = [
    { url: "images/CapgeminiEngWeek.jpg" },
    { url: "images/CapgeminiBoxing.jpg" },
    { url: "images/ImdexCoding.jpg" },
    { url: "images/ImdexInternship.jpg" },

]

const Projects: React.FC = () => {
    return (
        <div className="projects-container" id="projects">
            <div className="title">
                Gallery
            </div>
            <div className="image-slider-container">
                <ImageSlider objectFit="cover" width={1200} height={700} dotColor="white" dotBorderColor="white" images={images} />
            </div>
        </div>
    )
}

export default Projects;