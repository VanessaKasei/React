// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/homelisting">Home Listing</Link>
            </li>
            <li className='nav-item'>
              <Link to="/contact">Contact</Link>
            </li>
          </ul> 
          </div>     
  );
}

export default Navbar;
