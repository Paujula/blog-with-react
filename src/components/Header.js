import React from 'react';
import logo from '../img/Project21.ico';

function Header() {
  return (
    <div className="custom">
      <a href="App.js">
        <img src={logo} alt="Project21" />
        <h3>Paujula</h3>
      </a>
    </div>
  );
}

export default Header;
