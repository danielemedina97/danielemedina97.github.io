import React from 'react'
import Navbar from '../navbar/Navbar';
import "./Projects.css";

export default function Projects() {
    return (
        <>
            <header><Navbar/></header>
            <div className="projects">
                <div class="first-project">
                    <h2>Be Bored Not</h2>
                    <iframe class="project-video" width="700" height="415" src="https://www.youtube.com/embed/gJZH10PVNzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p class="project-desc">Web Application that allows you to 
                    query for an activity so you can cure your boredom!</p>
                </div>
                <div class="band-site-project project">
                    <h2>Band Website</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/THi9Ew_vYkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                    <p class="project-desc">Web page for band that includes landing page, about page, and shop.</p>
                </div>
                <div class="project" id="coffeeshop-project">
                    <h2>Coffee Shop Website</h2>
                    <iframe width="700" class="project-video" height="415" src="https://www.youtube.com/embed/JpBV7onGBX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
                    <p class="project-desc">Landing page and blog page for 
                    coffee shop as well as a page for making coffee orders.</p>
                </div>
                <div class="project" id="compiler-project">
                    <h2>Compiler</h2>
                    <iframe width="700" height="415" src="https://www.youtube.com/embed/ziqKgeYGLyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p class="project-desc">Compiler project done in theory of 
                    computing course. Consists of scanner, parser and translator.</p>
                </div>
            </div>
       </>
    )
}
