// Style modified from Material UI workshop; source: https://github.com/dartmouth-cs52-19S/workshop-ws-04-25-react-comps

import React, { Component } from 'react';
import '../style.scss';

class NavBar extends Component {
  render() {
    return (
      <div className="navDiv">
        <form>
          <label htmlFor="show-menu" className="show-menu">&#9776;</label>
          <input type="checkbox" id="show-menu" role="button" />
        </form>

        <ul className="topnav">
          <li><label htmlFor="show-menu"><a id="close">Close</a></label></li>
          <li><a className="active" href="#top">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#artwork">Artwork</a></li>
          <li className="right"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
