// Style modified from Material UI workshop; source: https://github.com/dartmouth-cs52-19S/workshop-ws-04-25-react-comps

import React from 'react';
import { Link } from 'react-router-dom';
import '../style.scss';

const Home = () => {
  return (
    <div className="content">
      <div id="top">
        <div>
          <div className="zoom">
            <img className="headshot" src="src/res/imgs/headshot.jpg" alt="headshot" />
            <div>John Sullivan</div>
            <div>Welcome to my website!</div>
          </div>
        </div>
      </div>
      <div>
        <Link to="/about" className="link">
          <div id="about" className="zoom cell">About Me</div>
        </Link>
      </div>
      <div>
        <Link to="/experience" className="link">
          <div id="experience" className="zoom cell">Experience</div>
        </Link>
      </div>
      <div>
        <Link to="/projects" className="link">
          <div id="projects" className="zoom cell">Projects</div>
        </Link>
      </div>
      <div>
        <Link to="/artwork" className="link">
          <div id="artwork" className="zoom cell">Artwork</div>
        </Link>
      </div>
      <div>
        <div id="contact">
          <a href="https://www.linkedin.com/in/john-sullivan-039349123"><img src="src/res/icons/linkedin.png"
            className="icon"
            alt="LinkedIn"
          />
          </a>
          <a href="https://github.com/sulljohn"><img src="src/res/icons/github.png" className="icon" alt="Github" /></a>
          <a href="mailto:sulljohn12@gmail.com"><img src="src/res/icons/mail.png" className="icon" alt="Mail" /></a>
          <a href="tel:+19149604440"><img src="src/res/icons/phone.png" className="icon" alt="Phone" /></a>
        </div>
        <div>Site designed by John Sullivan</div>
      </div>
    </div>
  );
};

export default Home;
