import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Layout from './pages/Layout';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import HomeListing from './pages/HomeListing';
import Contact from './pages/Contact';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          {/*<Route index element={<Home />}/>*/}
          <Route path='homelisting' element={<HomeListing />}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;