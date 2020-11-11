import React from "react";

import "../Searchbar.css";

class Searchbar extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const city = form.elements[0].value;
    console.log(city);
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

export default Searchbar;
