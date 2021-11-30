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
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/expenses"> Expenses </Link></li>
                    <li><a href={Resume} target="_blank">Resume </a></li>
                </ul>
            </nav>
        </>
    )
}
