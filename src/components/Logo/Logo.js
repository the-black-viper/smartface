import React from 'react';
import Tilt from 'react-tilt';
import snake from './snake.png';
import './Logo.css';

const Logo = () => {
    return <div className="ma4 mt0">
                {/* <img className="grow br2 shadow-2" alt="logo" src="snake_ico.png" width="200"/> */}
                <Tilt className="Tilt ml3 br2 shadow-2" options={{ max : 25 }} style={{ height: 200, width: 200 }} >
                    <div className="Tilt-inner pa4">
                        <img alt="logo" src={snake}/>
                    </div>
                </Tilt>
            </div>
}

export default Logo;