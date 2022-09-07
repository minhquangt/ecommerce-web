import React from 'react';
import './overlay.scss';

function Overlay() {
    return (
        <div id='overlay'>
            <div className='loading'>
                <div className='spinner-border text-light' role='status'></div>
            </div>
        </div>
    );
}

export default Overlay;
