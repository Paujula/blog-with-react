import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  return (
    <nav>
      <div className="openMenu"><span className="icon"><FaBars /></span></div>
      <ul className="mainMenu">
        <li><a href="App.js">Accueil</a></li>
        <li><a href="App.js">A propos</a></li>
        <li><a href="App.js">Services</a></li>
        <li><a href="App.js">Projets</a></li>
        <li><a href="App.js">Contact</a></li>
        <div className="closeMenu"><FaTimes /></div>
      </ul>
    </nav>
  );
}

export default Navbar;
