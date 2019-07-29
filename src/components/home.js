// Style modified from Material UI workshop; source: https://github.com/dartmouth-cs52-19S/workshop-ws-04-25-react-comps

import React from 'react';
import { Link } from 'react-router-dom';
import '../style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// AOS.init({
//   once: true, // whether animation should happen only once - while scrolling down
// });
AOS.init();

// Images
const imgHeadshot = require('../res/imgs/headshot.jpg');
const imgLinkedin = require('../res/icons/linkedin.png');
const imgGithub = require('../res/icons/github.png');
const imgMail = require('../res/icons/mail.png');
const imgPhone = require('../res/icons/phone.png');

const Home = () => {
  return (
    <div className="content">
      <div id="top">
        <div>
          <div className="zoom">
            <img className="headshot" src={imgHeadshot} alt="headshot" />
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
      <div className="mainFooter">
        <div id="contact">
          <a href="https://www.linkedin.com/in/john-sullivan-039349123"><img src={imgLinkedin}
            className="icon iconMain"
            alt="LinkedIn"
          />
          </a>
          <a href="https://github.com/sulljohn"><img src={imgGithub} className="icon iconMain" alt="Github" /></a>
          <a href="mailto:js@sulljohn.com"><img src={imgMail} className="icon iconMain" alt="Mail" /></a>
          <a href="tel:+19149604440"><img src={imgPhone} className="icon iconMain" alt="Phone" /></a>
        </div>
        <div>Site designed by John Sullivan </div>
        <div>Copyright &copy;{new Date().getFullYear()}</div>
      </div>
    </div>
  );
};

export default Home;
