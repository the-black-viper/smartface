import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return <div>
                <p className='f3 ma4 b'>{`Search for a random doggo to give scritches and head pats!`}</p>
                <div className='buttonContainer w-20 center form pa3 br3 shadow-2'>
                    {/* <input className='shadow-1 br2 pa2 w-70 f4 center' type='tex' onChange={onInputChange} placeholder='Type link here'></input> */}
                    <button className='w-60 grow pointer f4 br3 link ph3 pv2 dib white bg-green' onClick={onSubmit}>Search Doggo</button>
                </div>
            </div>
}

export default ImageLinkForm;