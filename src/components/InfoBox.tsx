import React from "react";
import "./InfoBox.css";

interface InfoBoxProps {
    company: string;
    title: string;
    image: string;
    description: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ company, title, image, description }) => {
    return (
        <div className="box-container">
            <div className="company-name-container">{company}</div>
            <div className="company-title-container">{title}</div>
            <img className="experience-image-container" src={image} alt={`${company} logo`} />
            <div className="description-container">{description}</div>
        </div>
    )
}

export default InfoBox;
