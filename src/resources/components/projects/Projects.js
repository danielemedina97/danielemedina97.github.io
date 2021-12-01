import React from 'react'
import Navbar from '../navbar/Navbar';
import "./Projects.css";

export default function Projects() {
    return (
        <>
            <Navbar/> 
            <div className="projects">
                <p id="title">Projects</p>
                <div class="project">
                    <h2>Be Bored Not</h2>
                    <iframe class="project-video" width="560" height="315" src="https://www.youtube.com/embed/gJZH10PVNzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p class="project-desc">Web Application that allows you to 
                    query for an activity so you can cure your boredom!</p>
                </div>
                <div class="project" id="coffeeshop-project">
                    <h2>Coffee Shop Site</h2>
                    <iframe width="560" class="project-video" height="315" src="https://www.youtube.com/embed/JpBV7onGBX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
                    <p class="project-desc">Landing page and blog page for 
                    coffee shop as well as a page for making coffee orders.</p>
                </div>
                <div class="project" id="compiler-project">
                    <h2>Compiler Project </h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ziqKgeYGLyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p class="project-desc">Compiler project done in theory of 
                    computing course. Consists of scanner, parser and translator.</p>
                </div>
            </div>
       </>
    )
}
