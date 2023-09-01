import React from "react";
import home1 from "./images/home1.jpg";
import './Home.css'
 
function Home() {
  return (
    <div className="image-container">
      <img src={home1} alt="a beautiful home" />
      <div className="overlay-text">Your Dream Home Finder</div>
    </div>
  );
}

export default Home;