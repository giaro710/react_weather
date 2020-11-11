import React from "react";
import "../Header.css";

const Header = ({ title, description }) => {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__description">{description}</p>
    </div>
  );
};

export default Header;
