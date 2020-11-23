import React from "react";

import Searchbar from "./Searchbar";
import Header from "./Header";
import Board from "./Board";

import "../App.css";

const App = () => {
  const setClass = () => {
    const hour = new Date().getHours();
    if (hour > 7 && hour < 18) {
      return "main-container-light";
    }

    return "main-container-dark";
  };

  return (
    <div className={setClass()}>
      <Header
        title={"The Weather app"}
        description={"Get the current weather"}
      />

      <Searchbar />

      <Board />
    </div>
  );
};

export default App;
