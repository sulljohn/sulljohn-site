// Style modified from Material UI workshop; source: https://github.com/dartmouth-cs52-19S/workshop-ws-04-25-react-comps

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navDiv">
      <label htmlFor="show-menu" className="show-menu">&#9776;</label>
      <input type="checkbox" id="show-menu" role="button" />

      <ul className="topnav">
        <li><label htmlFor="show-menu"><a id="close">Close</a></label></li>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><a href="https://www.linkedin.com/in/john-sullivan-039349123">Experience</a></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/artwork">Artwork</NavLink></li>
        <li className="right"><a href="mailto:js@sulljohn.com">Contact</a></li>
      </ul>
    </div>
  );
};

export default NavBar;
