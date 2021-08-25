import React from "react"
import {
  Link,
} from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu header__menu">
      <Link
        className="
              menu__item menu__item_icon menu__item_icon_home menu__item_active
            "
        to="/"
      >
        <span className="menu__item-text">Главная</span>
      </Link>
      <Link
        className="menu__item menu__item_icon menu__item_icon_history"
        to="/history"
      >
        <span className="menu__item-text">История</span>
      </Link>
      <Link
        className="menu__item menu__item_icon menu__item_icon_about"
        to="/about"
      >
        <span className="menu__item-text">О приложении</span>
      </Link>
    </nav>
  );
}
