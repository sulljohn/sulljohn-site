import React from 'react';
import about from '../data/about.json';

// Images
const imgHeadshot = require('../res/imgs/headshot.jpg');
const imgLinkedin = require('../res/icons/linkedin.png');
const imgGithub = require('../res/icons/github.png');
const imgScholar = require('../res/icons/scholar.png');
const imgMail = require('../res/icons/mail.png');
// const imgPhone = require('../res/icons/phone.png');

const About = () => {
  return (
    <div className="content contentAbout">
      <div id="topAbout">
        <div className="aboutFlex">
          <div className="zoom headAbout">
            <div>
              <img className="headshot" src={imgHeadshot} alt="headshot" />
              <div>John Sullivan - Dartmouth College</div>
            </div>
          </div>
          <div className="textAbout">{about.text}</div>
        </div>
        <div className="bottomFlex">
          <div id="contact">
            <a href="https://www.linkedin.com/in/john-sullivan-039349123"><img src={imgLinkedin}
              className="icon iconMain"
              alt="LinkedIn"
            />
            </a>
            <a href="https://github.com/sulljohn"><img src={imgGithub} className="icon iconMain" alt="Github" /></a>
            <a href="https://scholar.google.com/citations?user=2jqrShwAAAAJ"><img src={imgScholar} className="icon iconMain" alt="Google Scholar" /></a>
            <a href="mailto:js@sulljohn.com"><img src={imgMail} className="icon iconMain" alt="Mail" /></a>
            {/* <a href="tel:+19149604440"><img src={imgPhone} className="icon iconMain" alt="Phone" /></a> */}
          </div>
          <div>Site designed by John Sullivan</div>
        </div>
      </div>
    </div>
  );
};

export default About;
