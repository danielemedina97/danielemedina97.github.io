import './App.css';
import {useEffect} from 'react';
import Navbar from './resources/components/navbar/Navbar'

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
       <p>
         <span id="intro-fn"> Daniel Medina </span> <br/>
         <span id="intro-degree">Computer Science B.S. </span>
       </p>
     </div>
    </div>
  );
}

export default App;
