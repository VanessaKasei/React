// src/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${showMenu ? 'show-menu' : ''}`}>
      <div className='container'>
        {showMenu ? (
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
        ) : (
          <div className='hamburger-icon' onClick={toggleMenu}>
            &#9776; {/* Hamburger icon */}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
