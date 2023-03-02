// Style modified from Material UI workshop; source: https://github.com/dartmouth-cs52-19S/workshop-ws-04-25-react-comps

import React from 'react';

// Images
import imgLinkedin from '../res/icons/linkedin.png';
import imgGithub from '../res/icons/github.png';
import imgScholar from '../res/icons/scholar.png';
import imgMail from '../res/icons/mail.png';
// import imgPhone from '../res/icons/phone.png';

interface IProps {
  mode: 'light' | 'dark' | 'system'
}

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
function Footer({ mode }: IProps) {
  return (
    <div className="footer" data-aos="fade-up">
      <div id="contact">
        <a href="https://www.linkedin.com/in/sulljohn" target="_blank" rel="noreferrer">
          <img
            src={imgLinkedin}
            className={`icon ${mode === 'light' ? '' : 'inv-color'}`}
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/sulljohn" target="_blank" rel="noreferrer">
          <img src={imgGithub} className={`icon ${mode === 'light' ? '' : 'inv-color'}`} alt="Github" />
        </a>
        <a href="https://scholar.google.com/citations?user=2jqrShwAAAAJ" target="_blank" rel="noreferrer">
          <img src={imgScholar} className={`icon ${mode === 'light' ? '' : 'inv-color'}`} alt="Google Scholar" />
        </a>
        <a href="mailto:js@sulljohn.com" target="_blank" rel="noreferrer">
          <img src={imgMail} className={`icon ${mode === 'light' ? '' : 'inv-color'}`} alt="Mail" />
        </a>
        {/* <a href="tel:+19149604440" target="_blank" rel="noreferrer"> */}
        {/*    <img src={imgPhone} className={`icon ${mode === 'light' ? '' : 'inv-color'}`} alt="Phone" /> */}
        {/* </a> */}
      </div>
      <div>Site designed by John Sullivan</div>
      <div>
        Copyright &copy;
        {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Footer;
