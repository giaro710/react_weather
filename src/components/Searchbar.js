import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions";

import "../Searchbar.css";

class Searchbar extends React.Component {
  // componentDidMount() {
  //   const provaFetching = async () => {
  //     fetch(
  //       `http://api.openweathermap.org/data/2.5/weather?q=Riccione&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   };
  //   provaFetching();
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    const city =
      event.target.elements[0].value.charAt(0).toUpperCase() +
      event.target.elements[0].value.slice(1);
    console.log(city);
    this.props.fetchWeather(city);
    event.target.elements[0].value = "";
  };

  render() {
    return (
      <div className="searchbar">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="searchbar__input"
            placeholder="Type a city here"
          />
          <button className="searchbar__btn">
            <i className="fas fa-search searchbar__icon"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { fetchWeather })(Searchbar);
