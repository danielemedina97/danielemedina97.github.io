import './App.css';
import {useEffect} from 'react';
import Navbar from './resources/components/navbar/Navbar'
import MeSmall from './resources/images/me-small.png'
import Resume from './resources/files/Resume.pdf';
import GitHubIcon from './resources/images/github-icon.png';
import LinkedInIcon from './resources/images/linkedin-icon.png';
function App() {
  useEffect(() => {
    document.title = "Daniel's Portfolio";
  }, []);

  return (
    <div className="App">
     {/*Navbar*/}
     <Navbar/>
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
    </div>
    </div>
  );
}

export default App;
