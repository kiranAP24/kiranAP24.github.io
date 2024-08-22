// src/components/Header.js
import React from 'react';
import './Header.css'; // You can create this CSS file for styling

function Header() {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
