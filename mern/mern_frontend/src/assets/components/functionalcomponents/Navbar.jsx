import '../../css/Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div>
        <ul>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>HOME</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>ABOUT</Link></li>
        <li><Link to="/useref" style={{ color: 'white', textDecoration: 'none' }}>USEREF</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>CONTACT</Link></li>
        <li><Link to="/Gallery" style={{ color: 'white', textDecoration: 'none' }}>GALLERY</Link></li>
        <li><Link to="/useEffect" style={{ color: 'white', textDecoration: 'none' }}>USESTATE</Link></li>
        <li><Link to="/useContext" style={{ color: 'white', textDecoration: 'none' }}>USECONTEXT</Link></li>
        <li><Link to="/useRefTask" style={{ color: 'white', textDecoration: 'none' }}>USEREF_TASK</Link></li>
        <li><Link to="/slowfunction" style={{ color: 'white', textDecoration: 'none' }}>USEMEMO</Link></li>
        <li><Link to="/task" style={{ color: 'white', textDecoration: 'none' }}>DAY6_TASK</Link></li>
        <li><Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>LOGIN</Link></li>
        <li><Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>SIGNUP</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
