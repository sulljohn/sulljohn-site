// Style modified from Material UI workshop; source: https://github.com/dartmouth-cs52-19S/workshop-ws-04-25-react-comps

import React, { Component } from 'react';
import '../style.scss';

class NavBar extends Component {
  render() {
    return (
      <div className="navDiv">
        <label htmlFor="show-menu" className="show-menu">&#9776;</label>
        <input type="checkbox" id="show-menu" role="button" />

        <ul className="topnav">
          <li><label htmlFor="show-menu"><a id="close">Close</a></label></li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/artwork">Artwork</NavLink></li>
          <li className="right"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
