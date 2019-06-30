import React, { Component } from 'react';

const projects = [
  {
    title: 'title1',
    image: 'src/res/imgs/artwork.jpg',
    text: 'text1',
  },
  {
    title: 'title2',
    image: 'src/res/imgs/horizon.jpg',
    text: 'text2',
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectList">
        {projects.map(item => (
          <div className="project">
            <img src={item.image} alt={item.image} className="projectImage" />
            <div className="projectText">
              <div>{item.title}</div>
              <div>{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
