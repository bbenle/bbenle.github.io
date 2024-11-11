import React from "react";
import * as Typewriter from "react-effect-typewriter";
import "./About.css";

const About: React.FC = () => {
    return (
        <div>
            <div className="about">
                <Typewriter.Container>
                    <Typewriter.Paragraph className="title-text" typingSpeed={80}>Hello, my name is</Typewriter.Paragraph>
                    <Typewriter.Paragraph className="title-name" typingSpeed={80}>Benjamin Le</Typewriter.Paragraph>
                </Typewriter.Container>
            </div>
            <div>
                <img className="image" alt="Benjamin Le"></img>
            </div>
            <p className="about-text">
                I am an aspiring third year Software Engineering student, currently studying at Curtin University.
                During my time at university, I have been developing key skills and learning languages and technologies including Java, C, MySQL, Git, OpenGL and Android Studio.
                In future, my goal is to become a Full Stack Developer.
                <br></br>
                <br></br>
                As a passionate and curious student, I am always looking forward to tackling tough challenges and seeking out new opportunities.
                I am looking for an internship to hone my skills, learn new things and to gain a first-hand experience in my field of study.
                While university takes up a majority of my time, in my spare time I enjoy eating, gaming and physically demanding activities such as volleyball and gym.
            </p>
        </div>
    )
}

export default About;