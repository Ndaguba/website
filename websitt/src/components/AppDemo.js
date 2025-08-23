import React from 'react';
import './AppDemo.css';

const AppDemo = () => {
  return (
    <section className="app-demo">
      <div className="demo-container">
        <div className="video-wrapper">
          <video 
            className="demo-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://wexlxtqsipufuzfrzybl.supabase.co/storage/v1/object/public/landing.assets/Clip/mossy%20app.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default AppDemo;