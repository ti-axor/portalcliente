import React from 'react';
import logo from '../../assets/LogoMDL300.png';
import './header.css';

function Header() {
  return (
    <header className='header-top'>
      <div className='container menu-container header-in'>
        <div className='navbar-brand'>
          <div className='navbar-logo'>
            <img className='img-logo' height="80" width="170" src={logo} alt='logo mdl' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
