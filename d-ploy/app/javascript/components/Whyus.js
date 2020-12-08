import React from "react";
import { Container, CardGroup } from "react-bootstrap";
import InfoCard from "./InfoCard";
import secured from '../images/secured.svg'
import cheap from '../images/cheap.svg'
import simple from '../images/simple.svg'

const cards = [
  {
    title: "Secured",
    img: secured,
    info:
    "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Cheap",
    img: cheap,
    info:
    "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    title: "Simple",
    img: simple,
    info:
      "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.",
  },
];

export default function Whyus() {
  const renderCards = () => {
    return cards.map((card) => (
      <InfoCard title={card.title} info={card.info} img={card.img}/>
    ));
  };
  return (
    <Container className="card-container">
        <h2 className="whyus-title">WHY US</h2><br/><br/><br/><br/>
      <CardGroup>{renderCards()}</CardGroup>
      <br/><br/><br/><br/>
    </Container>
  );
}