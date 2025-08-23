import React, { useState } from 'react';
import './PriceCard.css';
import { BsCheck } from "react-icons/bs";

const FAQ = () => {


  return (
    <section className="price-section">
       <h2>Get the #1 AI-Powered Bookkeeping agent for your businesses</h2>

       <div className="price-container">

        <div className="price-header">
          <h2 className='price-title' >Pro</h2>
          <p className='price-description'>Mossy AI co-pilot helps track income and expenses, store receipts and close your books.</p>
          <p className='price-amount'> $15<span className='price-duration'>/month</span></p>
        </div>
        <div className='features'>
          <span className='feature-line'><BsCheck className='feature-icon' />Link your bank account</span>
           <span className='feature-line'><BsCheck className='feature-icon' />Import transactions from bank statements</span>
            <span className='feature-line'><BsCheck className='feature-icon' />Bulk receipt upload & matching</span>
          <span className='feature-line'><BsCheck className='feature-icon' />Intelligent transaction categorization</span>
          <span className='feature-line'><BsCheck className='feature-icon' />Weekly & monthly business insights</span>
           <span className='feature-line'><BsCheck className='feature-icon' />AI assistant</span>
           <span className='feature-line'><BsCheck className='feature-icon' />Unlimited receipts upload</span>
        </div>
        <div className='price-action'>
             <button className='price-button'>Free 7 days trial</button>
        <p className='price-note'>*No credit card required*</p>
        </div>
       
      </div>
    </section>
  );
};

export default FAQ;
