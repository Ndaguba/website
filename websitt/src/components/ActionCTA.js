import React, { useState } from 'react';
import './ActionCTA.css';
import { BsCheck } from "react-icons/bs";
import { FaOctopusDeploy } from "react-icons/fa";

const ActionCTA = () => {
  return (
    <section className="action-cta">
      <div className='action-wrapper'>
        <div className="cta-content">
          <FaOctopusDeploy  className='mossy-badge'/>
        <h2>Automate your Bookkeeping with your AI co-pilot</h2>
        <p>Experience seamless financial management and insights at your fingertips.</p>
  
      </div>
            <button className="cta-button">Get Started for Free</button>
      </div>
      <div className='footer-bottom'>

 <div className='legal-links'>
        <a href='https://policy.usemossy.co'>Terms of Service</a>
        <a href='https://policy.usemossy.co'>Privacy Policy</a>
      </div>
      <div className='action-footer'>
        <p>© 2025 Mossy AI. All rights reserved.</p>
        <p>Built in Canada 🇨🇦</p>
      </div>




      </div>
     
    </section>
  );
};

export default ActionCTA;
