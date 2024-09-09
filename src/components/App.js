import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Newletter from './Newletter';
import Projects from './Projects';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hero from './Hero';
import '../App.css';
import Explore from './Explore';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Hero />
      <div className="Hello">  

        <Projects /> 

       </div>
       
      <Explore />
      <Newletter />
      <Footer />
    </div>
  );
}

export default App;
