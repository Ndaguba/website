import React from "react";

const Footer = () => {
  const handlePolicyClick = (section) => {
    if (window.navigateTo) {
      window.navigateTo('policies');
      // Scroll to section after a brief delay to ensure page is loaded
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <section className="footer">
     <div className="footer-container">


       <div className="subscription">
         <h3>Subscribe to our newsletter</h3>
         <form>
           <input type="email" placeholder="Enter your email" />
           <button type="submit">Subscribe</button>
         </form>
       </div>
       <div className="footer-links">
        <a href="#" onClick={(e) => { e.preventDefault(); handlePolicyClick('privacy-policy'); }}>Privacy Policy</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handlePolicyClick('terms-conditions'); }}>Terms of Service</a>
       </div>

     </div>
    </section>
  );
};

export default Footer;
