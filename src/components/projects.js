/* eslint-disable max-len */
import React from 'react';
import Footer from './footer';
import projects from '../data/projects';

// TODO: cite others for group projects; add bridge text
// TODO: figure out why new lines not being added like mtool sim

const Projects = () => {
  return (
    <div className="contentContainer">
      <div className="projects">
        <h1>Projects</h1>
        <div className="projectList">
          {projects.data.map(item => (
            <div data-aos="fade-in" className="project">
              <div className="projectImgContainer zoom2">
                <img src={item.image} alt={item.image} className="projectImg" />
              </div>
              <div className="projectTextContainer">
                <div className="projectTitle">{item.title}</div>
                <div className="projectBody">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
        <div data-aos="fade-in" className="projectFooter">For more information about any of these projects and more, please <a href="mailto:js@sulljohn.com?Subject=Project%20Inquiry" target="_top" className="projectInquiry">Contact Me</a>.</div>
        <Footer data-aos="fade-in" />
      </div>
    </div>
  );
};

export default Projects;
