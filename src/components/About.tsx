import React from "react";
import * as Typewriter from "react-effect-typewriter";
import "./About.css";


const About: React.FC = () => {
    return (
        <div id="about" className="main-container">
            <div className="image-container">
                <img className="image" src="images/Ben.jpeg" alt="Benjamin Le"></img>
            </div>
            <div className="about-container">
                <Typewriter.Container>
                    <Typewriter.Paragraph className="title-text" typingSpeed={80}>Hello, my name is</Typewriter.Paragraph>
                    <Typewriter.Paragraph className="title-name" typingSpeed={80}>Benjamin Le</Typewriter.Paragraph>
                </Typewriter.Container>
                <p className="about-text">
                    I currently work for the Department of Education as an Admin and Technical Support Assistant, following my recent completion of a Software Engineering degree at Curtin University.
                    I am passionate about using technology to solve complex problems and possess the technical and analytical skills to create innovative solutions that drive business value.
                    <br></br>
                    <br></br>
                    Throughout my academic and professional career, I have demonstrated a commitment to excellence and a drive to succeed.
                    I am constantly seeking out new challenges and opportunities to learn, grow and make a meaningful impact in the field of technology.
                </p>
            </div>
        </div>
    )
}

export default About;