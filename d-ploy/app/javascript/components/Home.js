import React from "react";
import { Container, Row } from "react-bootstrap";
import Bitmap from "./Bitmap";
import Head from "./Head";
import Header from "./Header";
import Trial from './Trial'

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
      </Container>
    );
  }
}

export default Home;
