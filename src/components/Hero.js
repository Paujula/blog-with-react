import React from 'react';
import heroImage from '../img/Project0.png';

function Hero() {
  return (
    <div className="container">
      <div>
        <div className="row">
          <div>
            <h1 className="custom-heading">Salut, je suis Dasteen,</h1>
            <h1 className="custom-heading">  Front End Developpeur</h1>
            <h4 className="difficile-a-lire">Je réalise les interfaces graphiques web et mobile. Écrivez-moi ci-dessous et nous pourrons travailler ensemble</h4>
            <form action="App.js" method="post">
              <div className="input-container">
                <div className="envoyer">
                  <input type="email" id="email" name="email" placeholder="Entrez votre e-mail" required />
                  <span className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                </div>
              </div>
             <button type="submit" className="btn">Envoyer</button>
            </form>
          </div>
          <img src={heroImage} alt="Projet 4" className="correct" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
