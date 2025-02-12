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
                    title="Technical Support Assistant"
                    image="/images/icons/Education.jpeg"
                    description="Support installations, troubleshooting and managing ICT assets including computers, phones and printers."
                />
                <InfoBox
                    company="Capgemini"
                    title="Software Engineer / Consultant"
                    image="/images/icons/Capgemini.png"
                    description="Developed a pit-to-port user dashboard featuring predictive maintenance, asset management, object detection and digital twins. "
                />
                <InfoBox
                    company="Imdex Limited"
                    title="Graduate Software Engineer"
                    image="/images/icons/Imdex.jpeg"
                    description="Modernised a legacy system for HUB-IQ, a cloud-based portal for validating field data seamlessly trasmitted from drill rigs."
                />
                <InfoBox
                    company="Curtin University"
                    title="Sessional Academic"
                    image="/images/icons/Curtin.jpg"
                    description="Tutored two units consisting of Introduction to Software Engineering (ISAD1000) and Fundamentals of Programming (COMP1005)."
                />
                <InfoBox
                    company="H&M"
                    title="Sales Advisor"
                    image="/images/icons/Hm.png"
                    description="Worked together in a team to organise inventory, replenish stock and provide exceptional customer service."
                />
            </div>
        </div>
    )
}

export default Experience;
