import React from "react"
import PropTypes from "prop-types"
import {
  NavLink,
} from "react-router-dom";

import "./Menu.css"
import { cn } from "@bem-react/classname"
import classnames from "classnames"

const cnMenu = cn("Menu");

function MenuItem(props) {
  const { icon, children } = props;
  return (
    <NavLink
      {...props}
      className={cnMenu("item", { icon: icon })}
      activeClassName={cnMenu("item", { active: true })}
    >
      <span className={cnMenu("itemText")}>{children}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string,
};

export default function Menu({ className }) {
  return (
    <nav className={classnames(cnMenu(), className)}>
      <MenuItem icon="home" exact to="/">
        Главная
      </MenuItem>
      <MenuItem icon="history" to="/history">
        История
      </MenuItem>
      <MenuItem icon="about" to="/about">
        О приложении
      </MenuItem>
    </nav>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
};
