import React from "react";
import pic1 from "../images/Screenshot_2.jpg";
import arrow from '../images/arrow-blue.png'

export default function Trial() {
  return (
    <div className="trial">
      <img alt="" src={pic1}/>
      <div className="square square-trial"></div>
      <div className="trial-div">
        <p className="trial-text">Choose what apps you need and set up a free trial</p>
        <a href="/" className="trial-btn">
          Go to Marketplace &nbsp;
          <img src={arrow} alt="arrow" className="arrow-blue"/>
        </a>
      </div>
    </div>
  );
}
