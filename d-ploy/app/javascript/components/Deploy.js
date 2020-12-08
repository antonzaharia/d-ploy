import React from "react";
import pic2 from "../images/Screenshot_3.jpg";
import arrow from '../images/arrow-blue.png'

export default function Deploy() {
    return (
        <div className="trial no-margin">
        <div className="trial-div">
          <p className="trial-text">Depoly to your domained, secured cloud</p>
          <a href="http://localhost:3000/" className="trial-btn">
            See How it works &nbsp;
            <img src={arrow} alt="arrow" className="arrow-blue"/>
          </a>
        </div>
        <img src={pic2} alt=""/>
      </div>
    )
}