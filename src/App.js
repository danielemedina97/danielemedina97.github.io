import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import Navbar from './resources/components/navbar/Navbar';
import selfImage from './resources/images/me.jpg';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import CardFlip from './resources/components/card-flip/CardFlip';

function App() {
  useEffect(() => {
    document.title = "Daniel's Portfolio";
    
  }, []);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
      setIsFlipped(!isFlipped);
  }

  return (
    <div className="App">


      {/*Navbar*/}
      <Navbar/>

      {/*Portfolio Introduction*/}
      <div id="portfolio-intro">
        <table id="portfolio-intro-info">
          <tr>
            <th id="me-th">
               Me
            </th>
            <th id="about-me-th">About Me</th>
          </tr>
          <tr>
            <td id="about-me-pic-td"><img id="about-me-pic" src={selfImage} alt="Graduation picture of myself"/></td>
            {/*<td><ReactCardFlip isFlipped{isFlipped} flipDirection="vertical"></ReactCardFlip></td>*/}

            <td><ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
              <p onClick={handleClick} 
              style={{backgroundColor: 'white',
                      height:400,
                      width:800,
                      color: "white",
                      display:'flex',
                      justifyContent:"center",
                      alignItems: "center",
                      fontSize:50,
                      fontWeight:"bold",
                      backgroundImage: "linear-gradient(to right, rgb(197, 128, 0), rgb(230, 130, 0))"
            }}>
                <button id="about-me-button"></button></p>
              <p onClick={handleClick} 
              style={{backgroundColor: 'white',
              height:400,
              width:800,
              color: "green",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              fontSize: 50,
              fontWeight: "bold"
             }}>
                 This is the back of the card</p>
              </ReactCardFlip></td>
           </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
