// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="logo">#KIRAN</div>
    <ul>
      <li><Link to="#about">About</Link></li>
      <li><Link to="#projects">Projects</Link></li>
      <li><Link to="#experience">Experience</Link></li>
      <li><Link to="#contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;

