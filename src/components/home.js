// Style modified from Material UI workshop; source: https://github.com/dartmouth-cs52-19S/workshop-ws-04-25-react-comps

import React, { Component } from 'react';
import '../style.scss';

class Home extends Component {
  render() {
    return (
      <div className="content">
        <div id="top">
          <div>
            <div className="zoom">
              <img className="headshot" src="res/imgs/headshot.jpg" alt="headshot" />
                <div>John Sullivan</div>
                <div>Welcome to my landing page!</div>
            </div>
          </div>
        </div>
        <div>
          <div id="about" className="zoom cell">
            <div>About Me</div>
          </div>
        </div>
        <div>
          <div id="experience" className="zoom cell">Experience</div>
        </div>
        <div>
          <div id="projects" className="zoom cell">Projects</div>
        </div>
        <div>
          <div id="artwork" className="zoom cell">Artwork</div>
        </div>
        <div>
          <div id="contact">
            <a href="https://www.linkedin.com/in/john-sullivan-039349123"><img src="res/icons/linkedin.png"
                                                                               className="icon"
                                                                               alt="LinkedIn" /></a>
            <a href="https://github.com/sulljohn"><img src="res/icons/github.png" className="icon" alt="Github" /></a>
            <a href="mailto:sulljohn12@gmail.com"><img src="res/icons/mail.png" className="icon" alt="Mail" /></a>
            <a href="tel:+19149604440"><img src="res/icons/phone.png" className="icon" alt="Phone" /></a>
          </div>
          <div>Site designed by John Sullivan</div>
        </div>
      </div>
    );
  }
}

export default Home;
