import React from "react";
import home1 from "./images/home1.jpg";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css'
 
function Home() {
  return (
    <div className="home-page">
      <div className="image-container">
        <img src={home1}id="image" alt="a beautiful home" />
        {/*<div className="overlay-text">Your Dream Home Finder</div>*/}
      </div>
      <div className="carousel-container">
      <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showStatus={false} showThumbs={false}>
        <div>
          <p>This is the best home listing website to ever exist</p>
        </div>
        <div>
          <p>I found my dream home easilyt thanks to this website</p>
        </div>
        <div>
          <p>No othe website beats this one. It is the perfect one for
            anyone looking for their dream home.
          </p>
        </div>
        {/* Add more carousel items with text as needed */}
      </Carousel>
      </div>
    </div>
  );
}

export default Home;