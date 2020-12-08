import React from "react";
import { Container, Row } from "react-bootstrap";
import Bitmap from "./Bitmap";
import Deploy from "./Deploy";
import Head from "./Head";
import Header from "./Header";
import Trial from './Trial'
import Whyus from "./Whyus";
import Work from "./Work";

class Home extends React.Component {
  render() {
    return (
      <Container fluid className="main">
        <Row>
          <Header />
        </Row>
        <Head />
        <Bitmap />
        <Trial />
        <Deploy />
        <Work />
        <Whyus />
      </Container>
    );
  }
}

export default Home;
