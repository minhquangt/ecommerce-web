import React from 'react';
import videoBg from '../../assets/video.mp4';
import './video.scss';

function Video() {
    return (
        <div className='video'>
            <video src={videoBg} autoPlay loop muted />
            <div className='video-content'>
                <h2>Gold Digger</h2>
                <p>The hair wax that took the grooming world by storm</p>
                <button className='btn btn-dark'>SHOP NOW</button>
            </div>
        </div>
    );
}

export default Video;
