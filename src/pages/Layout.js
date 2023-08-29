import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar */}
      <main>
        {children} {/* Render the content passed as children */}
      </main>
    </div>
  );
};

export default Layout;
