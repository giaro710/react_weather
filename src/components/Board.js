import React from "react";
import { connect } from "react-redux";
import "../Board.css";

class Board extends React.Component {
  render() {
    if (!this.props.weather.name) {
      return <div>Select a city</div>;
    } else {
      return (
        <div className="data">
          <h1 className="data__header">{this.props.weather.name}</h1>
          <img
            className="data__img"
            src={`http://openweathermap.org/img/wn/${this.props.weather.weather[0].icon}@2x.png`}
            alt="icon"
          />
          <p>{this.props.weather.main.temp}</p>
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

const temperature = (238, 55 - 32) / 1.8;
