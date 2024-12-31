import '../../../assets/css/Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div>
        <ul>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>HOME</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>ABOUT</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>CONTACT</Link></li>
        <li><Link to="/Gallery" style={{ color: 'white', textDecoration: 'none' }}>GALLERY</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
