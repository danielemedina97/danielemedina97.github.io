import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import Navbar from './resources/components/Navbar/Navbar';
import selfImage from './resources/images/me.jpg'

function App() {
  useEffect(() => {
    document.title = "Daniel's Portfolio";
    
  }, []);

  return (
    <div className="App">


      {/*Navbar*/}
      <Navbar/>

      {/*Portfolio Introduction*/}
      <div id="portfolio-intro">
        <table id="portfolio-intro-info">
          <tr>
            <th id="about-me-th">
              About Me
            </th>
          </tr>
          <tr>
            <td><img id="about-me-pic" src={selfImage} alt="Graduation picture of myself"/></td>
           </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
