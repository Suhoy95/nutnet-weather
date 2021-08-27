import React from "react"
import PropTypes from "prop-types"
import {
  Link,
  withRouter,
} from "react-router-dom";

import "./City.css"
import { cn } from "@bem-react/classname"

const cnCity = cn("City");

import getWeatherByCityName from "../../openweather-api/openweather";
import HistoryStorage from "../../history-storage";

class City extends React.Component {

  constructor(props) {
    super(props)

    this.city = props.match.params.name;

    this.state = {
      name: this.city,
      description: "",
      temp: 0,
      icon: "",
      pressure: 0,
      sunrise: new Date(),
      sunset: new Date()
    };
  }

  componentDidMount() {
    getWeatherByCityName(this.city)
      .then((data) => {
        HistoryStorage.pushCityToHistory(data);
        this.setState(data);
      })
  }

  render() {
    const now = new Date();
    const {sunrise, sunset} = this.state;

    return (
      <div className={cnCity()}>
        <Link to="/" className={cnCity("backarrow")}></Link>
        <div className={cnCity("name")}>{this.state.name}</div>
        <div className={cnCity("weather")}>{this.state.description}</div>
        <div className={cnCity("temp")}>
          <span>{this.state.temp}°</span>
          <img src={this.state.icon} alt={this.state.description} />
        </div>
        <div className={cnCity("barometer")}><span>{this.state.pressure} мм рт. ст.</span></div>
        <div className={cnCity("daybreak")}>
          {
            now < sunrise || now > sunset ? 
              `Восход в ${sunrise.toLocaleTimeString("ru", {hour: "2-digit", minute:"2-digit", timeZoneName: "short"})}` :
              `Закат в ${sunset.toLocaleTimeString("ru", {hour: "2-digit", minute:"2-digit", timeZoneName: "short"})}`
          }
        </div>
      </div>
    );
  }
}

City.propTypes = {
  match: PropTypes.object,
}

export default withRouter(City)
