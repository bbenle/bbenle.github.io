import React from "react";
import "./Contact.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';

const Contact: React.FC = () => {
    return (
        <div className="contact-container" id="contact">
            <div className="contact-icon-container">
                <a className="icon-hover" href="https://www.linkedin.com/in/bbenle/" target="_blank">
                    <LinkedInIcon className="icon"></LinkedInIcon>
                </a>
                <a className="icon-hover" href="https://github.com/bbenle" target="_blank">
                    <GitHubIcon className="icon"></GitHubIcon>
                </a>
                <a className="icon-hover">
                    <DescriptionIcon className="icon"></DescriptionIcon>
                </a>
                <a className="icon-hover" href="mailto:benjamnle@gmail.com"><EmailIcon className="icon"></EmailIcon></a>

            </div>
        </div>
    )
}

export default Contact;