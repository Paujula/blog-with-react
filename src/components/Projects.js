import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        const projectTitles = data.slice(0, 16).map((post, index) => ({
          src: getProjectImage(index),
          title: post.title,           
        }));
        setProjects(projectTitles);   
      })
      .catch((error) => console.error('Erreur lors de la récupération des projets :', error));
  }, []);

 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);    
      })
      .catch((error) => console.error('Erreur lors de la récupération des utilisateurs :', error));
  }, []);

  const getProjectImage = (index) => {
    const images = [
      require('../img/po1.jpg'),
      require('../img/po2.jpg'),
      require('../img/po3.jpg'),
      require('../img/po4.jpg'),
      require('../img/po18.jpg'),
      require('../img/po16.jpg'),
      require('../img/po15.jpg'),
      require('../img/po18.jpg'),
      require('../img/po9.webp'),
      require('../img/po10.jpg'),
      require('../img/po11.jpg'),
      require('../img/po12.webp'),
      require('../img/po13.jpg'),
      require('../img/po15.jpg'),
      require('../img/po16.jpg'),
      require('../img/po18.jpg'),
    ];
    return images[index];
  };

  return (
    <div className="gallery">
      <h1>Projets Réalisés</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.src} alt={project.title} />
            <div className="espace">
              <a href="App.js"><strong>{project.title}</strong></a><br />
              <a href="App.js" className="btn">Voir le projet</a>
            </div>

          
            {users.length > 0 && (
              <div className="user-info">
                <p><strong>{users[index % users.length].name}</strong></p>
                <p>Email : {users[index % users.length].email}</p>
                <p>Entreprise : {users[index % users.length].company.name}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
