import React from "react";

const Footer = () => {
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

        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
       </div>

     </div>
    </section>
  );
};

export default Footer;
