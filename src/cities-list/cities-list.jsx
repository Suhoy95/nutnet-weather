import React from "react"

import City from "./__city/city"
import getWeatherByCityName from "../openweather-api/openweather";
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
      <div className="cities-list main__cities-list" >
        {
          this.defaultCities.map(
            (city) => <City key={city} {...this.state[city]} />)
        }
      </div>
    );
  }
}
