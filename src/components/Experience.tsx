import React from "react";
import "./Experience.css";
import InfoBox from "./InfoBox";

const Experience: React.FC = () => {
    return (
        <div className="experience-container" id="experience">
            <div className="title">
                Experience
            </div>
            <div className="experience-content">
                <InfoBox
                    company="Department of Education"
                    title="Admin & Technical Support Assistant"
                    image="images/Education.jpeg"
                    description="I am currently working at the Department of Education on a fixed term contract up until the end of January 2025."
                />
                <InfoBox
                    company="Capgemini"
                    title="Consultant / Software Engineer"
                    image="/images/Capgemini.png"
                    description="Worked at Company X developing features in Java and contributing to the backend."
                />
                <InfoBox
                    company="Imdex Limited"
                    title="Graduate Software Engineer"
                    image="/images/Imdex.jpeg"
                    description="Worked at Company X developing features in Java and contributing to the backend."
                />
                <InfoBox
                    company="Curtin University"
                    title="Sessional Academic"
                    image="/images/Curtin.jpg"
                    description="Worked at Company X developing features in Java and contributing to the backend."
                />
                <InfoBox
                    company="H&M"
                    title="Sales Advisor"
                    image="/images/Hm.png"
                    description="Worked at Company X developing features in Java and contributing to the backend."
                />
            </div>
        </div>
    )
}

export default Experience;
