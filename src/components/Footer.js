// src/components/Footer.js
import React from 'react';
import './Footer.css'; // You can create this CSS file for styling

function Footer() {
  return (
    <footer className="Footer">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
