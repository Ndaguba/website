import React, { useState } from 'react';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';
import './FeatureSection.css';
import { IoIosGitNetwork } from "react-icons/io";
import { LuBrain } from "react-icons/lu";
import { LuHeartPulse } from "react-icons/lu";
import { LuFileInput } from "react-icons/lu";
import { HiOutlineSparkles } from "react-icons/hi2";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const FeatureSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const features = [
    {
      id: 1,
      title: "Seamless Bank Integration",
      description: "Instantly connect accounts with enterprise-grade security",
      icon: <IoIosGitNetwork />
    },
    {
      id: 2,
      title: "Import from your Bank Statements",
      description: "Seamlessly upload and process data from Excel, CSV, or PDF bank statements",
      icon: <HiOutlineDocumentDownload />
    },
    {
      id: 3,
      title: "Autonomous AI Categorization",
      description: "Transactions classified with precision, no manual effort",
      icon: <LuBrain />
    },
    {
      id: 4,
      title: "Dynamic Business Pulse",
      description: "Real-time insights into cashflow and financial health",
      icon: <LuHeartPulse />
    },
    {
      id: 5,
      title: "Intelligent Receipt Reconciliation",
      description: "Auto-matches receipts to the right transactions in seconds",
      icon: <LuFileInput />
    },
    {
      id: 6,
      title: "AI assistant",
      description: "Answers your questions, manages tasks, and surfaces insights instantly",
      icon: <HiOutlineSparkles />
    }
  ];

  return (
    <section className="feature-section">
      <div className="container">
        <div className="section-header">
          <h2>Save time and money <span className='highlight'>or save both with an AI bookkeeper that works 24/7</span></h2>
          <p>Discover the features that make us stand out from the competition</p>
        </div>
        
        <div className="features-carousel">
          <div className="carousel-container">
            <div className="carousel-track" style={{ transform: `translateX(-${activeCard * 316}px)` }}>
              {features.map((feature, index) => (
                <div key={feature.id} className="feature-card">
                    <div className='feature-top'>
                     <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                    </div>
                        
                 
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="carousel-navigation">
            <button
              className="nav-arrow nav-arrow-left"
              onClick={() => setActiveCard(Math.max(0, activeCard - 1))}
              disabled={activeCard === 0}
              aria-label="Previous slide"
            >
              <HiOutlineArrowSmLeft />
            </button>
            
            <button
              className="nav-arrow nav-arrow-right"
              onClick={() => setActiveCard(Math.min(features.length - 3, activeCard + 1))}
              disabled={activeCard >= features.length - 3.5}
              aria-label="Next slide"
            >
              <HiOutlineArrowSmRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

