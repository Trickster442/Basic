import React from "react";
import Item from '../images/shoe_image.png'
import icon1 from '../images/flipkart.png'
import icon2 from '../images/amazon.png'
import './App.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
        </div>

        <div className="hero-avai">
            <p>Also Available On</p>
            <div className="icons">
                <img src={icon1} alt="flipkart"/>
                <img src={icon2} alt="amazon"/>
            </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={Item} alt="Item's pic" />
      </div>
    </div>
  );
};

export default Hero;
