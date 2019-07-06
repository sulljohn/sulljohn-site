import React from 'react';

const About = () => {
  return (
    <div className="content contentAbout">
      <div id="topAbout">
        <div className="aboutFlex">
          <div className="zoom headAbout">
            <div>
              <img className="headshot" src="src/res/imgs/headshot.jpg" alt="headshot" />
              <div>John Sullivan</div>
            </div>
          </div>
          <div className="textAbout">Write text describing me.</div>
        </div>
        <div className="bottomFlex">
          <div id="contact">
            <a href="https://www.linkedin.com/in/john-sullivan-039349123"><img src="src/res/icons/linkedin.png"
              className="icon iconMain"
              alt="LinkedIn"
            />
            </a>
            <a href="https://github.com/sulljohn"><img src="src/res/icons/github.png" className="icon iconMain" alt="Github" /></a>
            <a href="mailto:js@sulljohn.com"><img src="src/res/icons/mail.png" className="icon iconMain" alt="Mail" /></a>
            <a href="tel:+19149604440"><img src="src/res/icons/phone.png" className="icon iconMain" alt="Phone" /></a>
          </div>
          <div>Site designed by John Sullivan</div>
        </div>
      </div>
    </div>
  );
};

export default About;
