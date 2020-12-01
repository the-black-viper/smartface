import React from 'react';
import './Doggo.css';

const DoggoPhotos = ({doggoURL}) => {
    return <div className='center pb5'><img className='doggo mt3 shadow-1' src={doggoURL} alt='doggo' width='480' height='auto' /></div>
}

export default DoggoPhotos;