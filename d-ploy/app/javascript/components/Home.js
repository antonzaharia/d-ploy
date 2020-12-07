import React from "react"
import PropTypes from "prop-types"
class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greetings: cutare
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  greetings: PropTypes.string
};
export default Home
