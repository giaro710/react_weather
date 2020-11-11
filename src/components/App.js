import React from "react";

import Searchbar from "./Searchbar";
import Header from "./Header";

import "../App.css";

const App = () => {
  return (
    <div className="main-container">
      <Header
        title={"The weather app"}
        description={"Get the current weather"}
      />

      <Searchbar />
    </div>
  );
};

export default App;
