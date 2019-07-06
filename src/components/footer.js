// Style modified from Material UI workshop; source: https://github.com/dartmouth-cs52-19S/workshop-ws-04-25-react-comps

import React from 'react';
import '../style.scss';

const Footer = () => {
  return (
    <div className="footer2">
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
  );
};

export default Footer;
