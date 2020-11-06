import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return <div>
                <p className='f3 ma4 b'>{`Detect faces in your image magically. Give it a try!`}</p>
                <div className='center form pa3 br3 shadow-2'>
                    <input className='shadow-1 br2 pa2 w-70 f4 center' type='tex' placeholder='Type link here'></input>
                    <button className='w-20 grow pointer f4 br3 link ph3 pv2 dib white bg-green '>Detect</button>
                </div>
            </div>
}

export default ImageLinkForm;