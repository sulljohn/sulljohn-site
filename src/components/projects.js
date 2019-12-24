/* eslint-disable max-len */
import React from 'react';
import Footer from './footer';
import projects from '../data/projects.json';

// TODO: reduce thumbnail size
const req = require.context('../res/projects/', false, /\.(jpe?g|png|gif|svg)$/);

// TODO: cite others for group projects; add bridge text
// TODO: figure out why new lines not being added like mtool sim

const Projects = () => {
  return (
    <div className="contentContainer">
      <div className="projects">
        {
          projects.data.map(item => (
            <div key={item.title}>
              <h1 data-aos="fade-in">{item.title}</h1>
              <div className="projectList">
                {item.data.map(item2 => (
                  <div key={item2.title} data-aos="fade-in" className="project">
                    <div className="projectImgContainer zoom2">
                      <img src={req(item2.image)} alt={item2.image} className="projectImg" />
                    </div>
                    <div className="projectTextContainer">
                      <div className="projectTitle">{item2.title}</div>
                      <div className="projectBody">{item2.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        }
        <div data-aos="fade-in">
          <div className="infoFooter">For more information about any of these projects, please <a href="mailto:js@sulljohn.com?Subject=Project%20Inquiry" target="_top" className="inquiry">Click Here to contact me</a>.</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
