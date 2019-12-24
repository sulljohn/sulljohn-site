// Style modified from Material UI workshop; source: https://github.com/dartmouth-cs52-19S/workshop-ws-04-25-react-comps

import React from 'react';

// Images
const imgLinkedin = require('../res/icons/linkedin.png');
const imgGithub = require('../res/icons/github.png');
const imgScholar = require('../res/icons/scholar.png');
const imgMail = require('../res/icons/mail.png');
// const imgPhone = require('../res/icons/phone.png');

const Footer = () => {
  return (
    <div className="footer2">
      <div id="contact">
        <a href="https://www.linkedin.com/in/john-sullivan-039349123"><img src={imgLinkedin}
          className="icon"
          alt="LinkedIn"
        />
        </a>
        <a href="https://github.com/sulljohn"><img src={imgGithub} className="icon" alt="Github" /></a>
        <a href="https://scholar.google.com/citations?user=2jqrShwAAAAJ"><img src={imgScholar} className="icon" alt="Google Scholar" /></a>
        <a href="mailto:js@sulljohn.com"><img src={imgMail} className="icon" alt="Mail" /></a>
        {/* <a href="tel:+19149604440"><img src={imgPhone} className="icon" alt="Phone" /></a> */}
      </div>
      <div>Site designed by John Sullivan</div>
      <div>Copyright &copy;{new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
