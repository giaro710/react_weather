import React from "react";
import { connect } from "react-redux";

class Board extends React.Component {
  render() {
    if (!this.props.weather.name) {
      return <div>Select a city</div>;
    } else {
      return (
        <div className="main-container">
          <h1>{this.props.weather.name}</h1>
          <p> {`Temperature is ${this.props.weather.temp} degrees`}</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { weather: state.weather };
};

export default connect(mapStateToProps)(Board);
