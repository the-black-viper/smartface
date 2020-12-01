import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import DoggoPhotos from './components/DoggoPhotos/DoggoPhotos';
import Signin from './components/SignIn/Signin';
import Register from './components/Register/Register';

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


class App extends Component {
  constructor () {
    super();
    this.state = {
      imageURL: '',
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  componentDidMount() {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(console.log);

    // Some Json magic to conver to list
    fetch('https://api.thedogapi.com/v1/images/search?limit=1&page=0&order=DESC')
    .then(response => {
      if (!response.ok) {
        throw Error("Error getting doggo. Shelter is closed.")
      }
      return response.json()
      .catch(error => {
        throw Error(error.message);
      });
    });
  }
  
  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('Submitted')
    fetch('https://api.thedogapi.com/v1/images/search?limit=1&page=1&order=DESC')
    .then(response => response.json())
    .then(data => {
      this.setState({imageURL: data[0].url});
      console.log(data[0].url)
    })
    fetch('http://localhost:3000/image', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.state.user.id
      })
    })

  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'signin') {
      this.setState({isSignedIn: false})
    } else if (route === 'register') {
      this.setState({isSignedIn: false})
    }else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    const {isSignedIn, imageURL, route} = this.state; 
    return (
      <div className="App">
        <Particles className='particles' params={particlesParams}/>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home'
        ? <div>
        <Logo/>
        <ImageLinkForm
          onInputChange={this.onInputChange} 
          onSubmit={this.onButtonSubmit} />
        <DoggoPhotos doggoURL={imageURL}></DoggoPhotos></div>
        : (route === 'signin' 
        ? <Signin onRouteChange={this.onRouteChange} />
        : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />)
        }
        {/* <FaceRecognition/> */}
      </div>
    );
  }
}

export default App;
