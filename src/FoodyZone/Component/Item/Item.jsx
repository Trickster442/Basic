import React from "react";
import img1 from  '../../Images/Ellipse 1.png'
const Item = () => {
  return (
    <div className="container">
      <div className="pict">
        <img src={img1} alt="Boiled Egg" />
      </div>
      <div className="info">
        <h2>Boiled Egg</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, esse?
        </p>
      </div>
    </div>
  );
};

export default Item;
