import './App.css';
import {useEffect} from 'react';
import Navbar from './resources/components/navbar/Navbar'
import Me from './resources/images/me.jpg'
import Resume from './resources/files/Resume.pdf';
import { Helmet } from 'react-helmet';

function App() {
  useEffect(() => {
    document.title = "Daniel's Portfolio";
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name='viewport' content="width=device-width, initial-scale=1.0"/>
      </Helmet>
        <header>
          <Navbar/>
        </header>
      <div className="container portfolio-intro-container">
          <img id="me-pic" src={Me}/>
          <div className="intro-paragraph">
            <p>Hello </p> 
            <p> I am Daniel Medina </p> 
            <p>An Aspiring Software Developer </p>
          </div>
      </div>
    </div>
  );
}

export default App;
