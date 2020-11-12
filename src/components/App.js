import React from "react";

import Searchbar from "./Searchbar";
import Header from "./Header";
import Board from "./Board";

import "../App.css";

const App = () => {
  return (
    <div className="main-container-light">
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
