import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { SiOctopusdeploy } from 'react-icons/si';
import Button from './button';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-wrapper">
          <div className='logo-badge'>
    
      <SiOctopusdeploy />
          <img src="https://wexlxtqsipufuzfrzybl.supabase.co/storage/v1/object/public/landing.assets/Mossy-badge-logo.png" alt="Logo"  className="logo" />


          </div>
          
           <div className='nav-links'>
          <p className='header-link'>Products <FiChevronDown className='dropdown-icon' /> </p>
          <p className='header-link'>Pricing </p>
        </div>


        </div>
       
        <div className="header-actions">
          <Button variant="secondary" size="small">
            Sign In
          </Button>
          <Button variant="medium" size="small">
           Join Beta
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
