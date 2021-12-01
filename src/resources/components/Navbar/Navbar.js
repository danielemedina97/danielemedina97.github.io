import React from 'react';
import './Navbar.css';
import GitHubIcon from '../../images/github-icon.png';
import LinkedInIcon from '../../images/linkedin-icon.png';
import Resume from '../../files/Resume.pdf';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav id="navbar"> 
                <ul id = "navbar-options"> 
                    <li><a><Link to="/"> Home </Link></a></li>
                    <li><a><Link to="/projects"> Projects </Link></a></li>
                    <li><a><Link to="/social-media"> Social Media </Link></a></li>
                    <li><a href={Resume} target="_blank">Resume </a></li>
                </ul>
            </nav>
        </>
    )
}
