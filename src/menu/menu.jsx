import React from "react"
import {
  NavLink,
} from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu header__menu">
      <NavLink
        className="
              menu__item menu__item_icon menu__item_icon_home
            "
        activeClassName="menu__item_active"
        exact to="/"
      >
        <span className="menu__item-text">Главная</span>
      </NavLink>
      <NavLink
        className="menu__item menu__item_icon menu__item_icon_history"
        activeClassName="menu__item_active"
        to="/history"
      >
        <span className="menu__item-text">История</span>
      </NavLink>
      <NavLink
        className="menu__item menu__item_icon menu__item_icon_about"
        activeClassName="menu__item_active"
        to="/about"
      >
        <span className="menu__item-text">О приложении</span>
      </NavLink>
    </nav>
  );
}
