import React from "react";
import { Container, Row } from "react-bootstrap";
import Bitmap from "./Bitmap";
import Head from "./Head";
import Header from "./Header";

class Home extends React.Component {
  render() {
    return (
      <Container fluid className="main">
        <Row>
          <Header />
        </Row>
        <Head />
        <Bitmap />
      </Container>
    );
  }
}

export default Home;
