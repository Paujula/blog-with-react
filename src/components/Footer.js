import React from 'react';


function Footer() {
  return (
    <div className="changer">
      <div className="container1">
        <div className="section">
          <h2 className="nom">Pauju</h2>
          <ul className="dasteen-list">
            <li><a href="App.js" className="btne"><img src={require('../img/Project17.png')} /></a></li>
            <li><a href="App.js" className="btne"><img src={require('../img/Project18.jpg')} /></a></li>
            <li><a href="App.js" className="btne"><img src={require('../img/Project19.png')} /></a></li>
            <li><a href="App.js" className="btne"><img src={require('../img/Project20.jpg')} /></a></li>
          </ul>
        </div>
        <div className="section">
          <h2>Service</h2>
          <ul>
            <li><a href="App.js" className="btne">Dev web</a></li>
            <li><a href="App.js" className="btne">Web Master</a></li>
            <li><a href="App.js" className="btne">Design</a></li>
            <li><a href="App.js" className="btne">Conception de Logo</a></li>
          </ul>
        </div>
        <div className="section">
          <h2>Page</h2>
          <ul>
            <li><a href="App.js" className="btne">Accueil</a></li>
            <li><a href="App.js" className="btne">Services</a></li>
            <li><a href="App.js" className="btne">Projets</a></li>
            <li><a href="App.js" className="btne">Pricing</a></li>
            <li><a href="App.js" className="btne">Faire un Devis</a></li>
          </ul>
        </div>
        <div className="section">
          <h2>Support</h2>
          <ul>
            <li><a href="App.js" className="btne">Contact</a></li>
            <li><a href="App.js" className="btne">Email</a></li>
            <li><a href="App.js" className="btne">LinkedIn</a></li>
            <li><a href="App.js" className="btne">Facebook</a></li>
            <li><a href="App.js" className="btne">Youtube</a></li>
          </ul>
        </div>
      </div>

      <footer>
        <h4>
          <span className="difficile">© 2024 Tous droits réservés | Réalisé par AGOSSOU BODE Paujula</span>
        </h4>
      </footer>
    </div>
  );
}

export default Footer;
