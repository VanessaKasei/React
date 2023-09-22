import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import HomeListing from './pages/HomeListing';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Layout />}/>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />} />
          <Route path='homelisting' element={<HomeListing />}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;