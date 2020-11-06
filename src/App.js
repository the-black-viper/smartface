import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

import Particles from 'react-particles-js';
import './App.css';

 const particlesParams = {
  "particles": {
      "number": {
          "value": 35,
          "density": {
            "enable": true,
            "value_area": 650
        }
      },
      "size": {
          "value": 3
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
};

function App() {
  return (
    <div className="App">
      <Particles className='particles' params={particlesParams}/>
      <Navigation/>
      <Logo/>
      <ImageLinkForm/>
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
