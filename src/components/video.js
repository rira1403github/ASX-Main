import React from 'react';
import './video.css';
import ashvaReel from '../assets/ASHVA-REEL.mp4'; 

const Video = () => {
  return (
    <div className="video-section">
      <video
        className="video-player"
        controls
        autoPlay
        loop
        muted
      >
        <source src={ashvaReel} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
