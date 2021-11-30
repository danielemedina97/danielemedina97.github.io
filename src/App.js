import './App.css';
import {useEffect} from 'react';
import Navbar from './resources/components/navbar/Navbar'
import MeSmall from './resources/images/me-small.png'
import Resume from './resources/files/Resume.pdf';
import GitHubIcon from './resources/images/github-icon.png';
import LinkedInIcon from './resources/images/linkedin-icon.png';
// import { Link } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = "Daniel's Portfolio";
  }, []);

  return (
    <div className="App">
     {/*Navbar*/}
     <Navbar/>
     {/* <Link to="/invoices"> Invoices </Link> | {""}
     <Link to="/expenses">Expenses</Link> */}

     {/*Portfolio Introduction*/}
     <div className="portfolio-intro">
       <div>
         <div id="portfolio-intro-content">
         <p id="hello">Hello </p> 
         <p id="my-name"> I am Daniel Medina </p> 
         <p id="aspiration">An Aspiring Software Developer </p>
         </div>
     </div>
     <div className="social-media">
       <p>Social Media</p>
          <ul className= "social-media-options">
            <li> <a href="https://github.com/danielemedina97" target="_blank"><img src={GitHubIcon} id="github-icon"/> </a></li>
            <li> <a href="https://www.linkedin.com/in/daniel-medina-178638183/"><img src={LinkedInIcon} id="linkedin-icon"/> </a></li>
          </ul>
     </div>

     <div className="projects">
       <p>Projects</p>
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
    </div>
    </div>
  );
}

export default App;
