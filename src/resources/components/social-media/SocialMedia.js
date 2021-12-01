import React from 'react'
import Navbar from '../navbar/Navbar';
import "./SocialMedia.css";
import GitHubIcon from '../../images/github-icon.png';
import LinkedInIcon from '../../images/linkedin-icon.png';

export default function SocialMedia() {
    return (
        <>
            <Navbar/> 
            <div className="social-media">
                <h1>Social Media</h1>
                <ul className= "social-media-options">
                    <li> <a href="https://github.com/danielemedina97" target="_blank"><img src={GitHubIcon} id="github-icon"/> </a></li>
                    <li> <a href="https://www.linkedin.com/in/daniel-medina-178638183/"><img src={LinkedInIcon} id="linkedin-icon"/> </a></li>
                </ul>
             </div>
       </>
    )
}
