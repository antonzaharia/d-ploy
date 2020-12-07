import React from "react";
import { Container, Row } from "react-bootstrap";
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
      </Container>
    );
  }
}

export default Home;
