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
                    description="I worked as a Consultant and Software Engineer at Capgemini, mostly working on internal projects including a full-stack user project tracking application, pit-to-port command centre proof of concept, and Australian Engineering Week"
                />
                <InfoBox
                    company="Imdex Limited"
                    title="Graduate Software Engineer"
                    image="/images/Imdex.jpeg"
                    description="I collaborated on frontend development using Angular for Imdex HUB-IQ projects. This included unit testing, automated testing, refactoring code, collaborating with cross-functional teams such as UI/UX designers, product managers etc."
                />
                <InfoBox
                    company="Curtin University"
                    title="Sessional Academic"
                    image="/images/Curtin.jpg"
                    description="I tutored two units - Introduction to Software Engineering (ISAD1000) and Fundamentals of Programming (COMP1005)."
                />
                <InfoBox
                    company="H&M"
                    title="Sales Advisor"
                    image="/images/Hm.png"
                    description="I worked at H&M as a sales advisor. My job was to provide the best customer service possible and to work together with a team that has the drive and ambition to reach business goals"
                />
            </div>
        </div>
    )
}

export default Experience;
