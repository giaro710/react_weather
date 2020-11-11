import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions";

import "../Searchbar.css";

class Searchbar extends React.Component {
  // componentDidMount() {
  //   const provaFetching = async () => {
  //     fetch(
  //       `http://api.openweathermap.org/data/2.5/weather?q=London&appid=3b5bc54d87d29484a1bfb25bcdf93b31`
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
          <button className="searchbar__btn">Search</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { fetchWeather })(Searchbar);
