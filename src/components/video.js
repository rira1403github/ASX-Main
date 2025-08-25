import React from 'react';
import './video.css';
import ashvaReel from '../assets/Home-PageM.mp4'; 

const Video = () => {
  return (
    <div className="main-video-section">
      <div className="main-video-wrapper">
        <video
          className="main-video-player"
          autoPlay
          loop
          muted
        >
          <source src={ashvaReel} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="main-video-overlay"></div> */}
      </div>
    </div>
  );
};

export default Video;