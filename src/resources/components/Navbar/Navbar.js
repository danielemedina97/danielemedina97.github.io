import React from 'react';
import './Navbar.css';
import GitHubIcon from '../../images/github-icon.png';
import LinkedInIcon from '../../images/linkedin-icon.png';
import Resume from '../../files/Resume.pdf';

export default function Navbar() {
    return (
        <>
            <nav id="navbar"> 
                <ul id = "navbar-options"> 
                    <li><a href="">Home </a></li> 
                    <li><a href={Resume} target="_blank">Resume </a></li>
                    {/*}
                    <span class="social-media">
                    <li> <a href="https://github.com/danielemedina97" target="_blank"><img src={GitHubIcon} id="github-icon"/> </a></li>
                    <li> <a href="https://www.linkedin.com/in/daniel-medina-178638183/"><img src={LinkedInIcon} id="linkedin-icon"/> </a></li>
                    </span>
    */}
                </ul>
            </nav>
        </>
    )
}
