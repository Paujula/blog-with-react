import React from 'react';

function Newsletter() {
  return (
    <div className="exemple">
      <h1 className="custom-heading">Abonnez-vous à notre newsletter</h1>
      <h3>
        <span className="lire">Restez informé des dernières modifications, des derniers articles sur notre site.</span>
        <span className="lire"> L'abonnement est gratuit. Vous avez juste à mettre votre email ici</span>
      </h3>
      <div className="input-container">
        <div>
          <input type="email" id="email" name="email" placeholder="Entrez votre e-mail" required /><br />
          <span className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
        </div>
      </div>
      <button type="submit" className="btn">S'abonner</button>
      <h6><span className="exemple-lire">Nous portons une attention particulière à la protection de vos données.</span><a href="accueil.html" style={{ color: 'blue', fontSize: '15px', textDecoration: 'none' }}>Privacy Policy.</a></h6>
    </div>
  );
}

export default Newsletter;
