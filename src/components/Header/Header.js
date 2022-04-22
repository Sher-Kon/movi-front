import React from 'react';
import headerLogo from '../../images/logo.png'; // Путь к изображению

function Header() {
  return (
    <div>
      <img alt='header Logo' src={headerLogo}/>
      <h1> HEADER </h1>
    </div>
  );
}
  
export default Header;
