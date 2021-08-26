import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

import getWeatherByCityName from "../../openweather-api/openweather";


import "./CitiesList.css"
import {cn} from "@bem-react/classname"

const cnCitiesList = cn("CitiesList")

function City({ name, temp, icon, description }) {
  return (
    <Link className={cnCitiesList("item")} to={`/city/${encodeURI(name)}`} title={description}>
      <div className={cnCitiesList("itemName")}>{name}</div>
      <div className={cnCitiesList("itemTemp")}>{String(temp)}°</div>
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

export default class CitiesList extends React.Component {
  constructor(props) {
    super(props);

    this.defaultCities = [
      "Москва",
      "Париж",
      "Лондон",
      "Нью-Йорк",
      "Пекин",
      "Токио"
    ];

    this.state = {};
    for (let city of this.defaultCities) {
      this.state[city] = { name: city, temp: 0, loading: true };
    }
  }

  componentDidMount() {
    for (let city of this.defaultCities) {
      getWeatherByCityName(city)
        .then((data) => this.setState({ [city]: data }))
    }
  }

  render() {
    return (
      <div className={cnCitiesList()}>
        {
          this.defaultCities.map(
            (city) => <City key={city} {...this.state[city]} />)
        }
      </div>
    );
  }
}
