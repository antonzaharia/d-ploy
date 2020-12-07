import React from "react";
import arrow from '../images/arrow.png'

export default function Head() {
  return (
    <div className="head">
      <div className="square square-head1"></div>
      <div className="square square-head2"></div>
      <div className="square square-head3"></div>
      <div className="square square-head-white"></div>
      <div>
        <h1 className="deploy-your-business">
          Deploy your business in 60 seconds
        </h1>
        <p className="getting-into-cloud-h">
          Getting into cloud has never been easier
        </p>
      </div>

      <button className="discover-btn">
        Discover &nbsp;
        <img src={arrow} alt="arrow" className="arrow"/>
      </button>
    </div>
  );
}