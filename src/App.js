import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Layout />}/>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;