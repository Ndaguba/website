import React from 'react';
import './Policies.css';

const Policies = () => {
  return (
    <div className="policies-container">
      <div className="policies-content">
        <header className="policies-header">
          <h1>Legal Policies</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <nav className="policies-nav">
          <ul>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-conditions">Terms & Conditions</a></li>
          </ul>
        </nav>

        <section id="privacy-policy" className="policy-section">
          <h2>Privacy Policy</h2>
          
          <div className="policy-content">
            <h3>1. Information We Collect</h3>
            <p>We collect information you provide directly to us...</p>
            
            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect to...</p>
            
            <h3>3. Information Sharing</h3>
            <p>We do not sell, trade, or otherwise transfer your information...</p>
            
            <h3>4. Data Security</h3>
            <p>We implement appropriate security measures...</p>
            
            <h3>5. Cookies</h3>
            <p>Our website may use cookies to enhance user experience...</p>
            
            <h3>6. Contact Information</h3>
            <p>If you have questions about this Privacy Policy, please contact us at...</p>
          </div>
        </section>

        <section id="terms-conditions" className="policy-section">
          <h2>Terms & Conditions</h2>
          
          <div className="policy-content">
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing and using this website, you accept and agree to be bound by...</p>
            
            <h3>2. Use License</h3>
            <p>Permission is granted to temporarily download one copy of the materials...</p>
            
            <h3>3. Disclaimer</h3>
            <p>The materials on this website are provided on an 'as is' basis...</p>
            
            <h3>4. Limitations</h3>
            <p>In no event shall our company or its suppliers be liable for any damages...</p>
            
            <h3>5. Accuracy of Materials</h3>
            <p>The materials appearing on our website could include technical, typographical...</p>
            
            <h3>6. Modifications</h3>
            <p>We may revise these terms of service for its website at any time...</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Policies;
