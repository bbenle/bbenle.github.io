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
                    image="images/Education.jpeg"
                    description="I am currently working at the Department of Education on a fixed term contract up until the end of January 2025."
                />
                <InfoBox
                    company="Capgemini"
                    title="Consultant / Software Engineer"
                    image="/images/Capgemini.png"
                    description="I worked as a Consultant and Software Engineer, mostly working on internal projects including a full-stack user project tracking app, pit-to-port command centre proof of concept, and Australian Engineering Week demos."
                />
                <InfoBox
                    company="Imdex Limited"
                    title="Graduate Software Engineer"
                    image="/images/Imdex.jpeg"
                    description="I collaborated on frontend development for Imdex HUB-IQ projects using Angular. This included unit testing, code refactoring, and working closely with cross-functional teams such as UI/UX designers and product managers."
                />
                <InfoBox
                    company="Curtin University"
                    title="Sessional Academic"
                    image="/images/Curtin.jpg"
                    description="I tutored two units - Introduction to Software Engineering (ISAD1000) and Fundamentals of Programming (COMP1005). I organised and facilitated classes of up to 15 first-year university students."
                />
                <InfoBox
                    company="H&M"
                    title="Sales Advisor"
                    image="/images/Hm.png"
                    description="I worked at H&M as a sales advisor. My job was to provide the best customer service possible and to work together with a team that has the drive and ambition to reach business goals."
                />
            </div>
        </div>
    )
}

export default Experience;
