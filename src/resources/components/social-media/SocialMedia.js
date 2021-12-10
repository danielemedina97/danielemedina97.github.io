import React from 'react'
import Navbar from '../navbar/Navbar';
import "./SocialMedia.css";
import GitHubIcon from '../../images/github-icon.png';
import LinkedInIcon from '../../images/linkedin-icon.png';

export default function SocialMedia() {
    return (
        <>
            <header><Navbar/></header>
            <div className="social-media">
                <a href="https://github.com/danielemedina97" target="_blank"><img src={GitHubIcon} class="social-media-icon 
                github-icon"/> </a>
                <a href="https://www.linkedin.com/in/daniel-medina-178638183/"><img src={LinkedInIcon} class="social-media-icon 
                linkedin-icon"/> </a>
             </div>
       </>
    )
}
