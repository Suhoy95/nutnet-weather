import React from "react"
import PropTypes from "prop-types"

import { Link } from "react-router-dom"

export default function Header(props) {
  return (
    <header className="header">
      <Link
        to="/"
        className="header__logo"
        title="WeatherCheck - Главная"
      ></Link>
      <div className="header__menu">
        {props.menu}
      </div>
    </header>
  );
}

Header.propTypes = {
  menu: PropTypes.element,
};
