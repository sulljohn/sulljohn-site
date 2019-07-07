// Style modified from Material UI workshop; source: https://github.com/dartmouth-cs52-19S/workshop-ws-04-25-react-comps

import React, { StyleSheet } from 'react';
import { Link } from 'react-router-dom';
import '../style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  once: true, // whether animation should happen only once - while scrolling down
});

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});

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
        <a href="https://www.linkedin.com/in/john-sullivan-039349123" className="link">
          <div id="experience" className="zoom cell">Experience</div>
        </a>
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
  );
};

export default Home;
