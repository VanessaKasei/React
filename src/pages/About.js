import React from "react";
import './About.css'
import bungalow1 from './images/bungalow1.jpg'
import bungalow2 from './images/bungalow2.jpg'
import bungalow4 from './images/bungalow4.jpg'

function About() {
  return (
    <>
      <div className="bungalow-container">
        <img src={bungalow1}  id="bungalow1" alt="a bungalow" />  
        <img src={bungalow2} id="bungalow2" alt="a bungalow"/>
        <img src={bungalow4} id="bungalow4" alt="a bungalow"/>
      </div>
      
    </>
  );
}

export default About;