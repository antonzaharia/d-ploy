import React from "react";
import { Container, Row } from "react-bootstrap";
import Bitmap from "./Bitmap";
import Deploy from "./Deploy";
import Head from "./Head";
import Header from "./Header";
import Trial from './Trial'
import Whyus from "./Whyus";
import Work from "./Work";
import Connect from "./Connect"
import Footer from "./Footer";

class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <Row>
          <Header />
        </Row>
        <Head />
        <Bitmap />
        <Trial />
        <Deploy />
        <Work />
        <Whyus />
        <Connect />
        <Footer />
      </div>
    );
  }
}

export default Home;
