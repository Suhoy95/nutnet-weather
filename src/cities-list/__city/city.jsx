import React from "react"
import PropTypes from "prop-types"
import {
  Link,
} from "react-router-dom";

export default function City({ name, temp, icon, description }) {
  return (
    <Link className="cities-list__item" to={`/city/${encodeURI(name)}`} title={description}>
      <div className="cities-list__city">{name}</div>
      <div className="cities-list__temp">{String(temp)}°</div>
      <img src={icon} alt={description} />
    </Link>
  );
}

City.propTypes = {
  name: PropTypes.string,
  temp: PropTypes.number,
  icon: PropTypes.string,
  description: PropTypes.string,
};
