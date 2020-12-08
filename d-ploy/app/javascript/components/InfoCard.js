import React from "react";
import Card from "react-bootstrap/Card";
import arrow from '../images/arrow-blue.png'

export default function InfoCard({ title, info, img }) {
  return (
    <Card style={{ width: "30%", border: "none"}} className={title === "Cheap" ? "card card-low" : "card"}>
      <Card.Body>
        <Card.Img variant="top" src={img} alt={title} className="card-img"/>
        <Card.Title><h2 className="card-title">{title}</h2></Card.Title>
        <Card.Text>{info}</Card.Text>
        <a href="/" className="trial-btn">Learn more <img src={arrow} alt="small" className="arrow-blue small"/></a>
      </Card.Body>
    </Card>
  );
}