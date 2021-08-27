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

    this.state = {
      name: props.match.params.name,
      description: "",
      temp: 0,
      icon: "",
      pressure: 0,
      sunrise: new Date(),
      sunset: new Date()
    };
  }

  componentDidMount() {
    this.refetchCity();
  }

  refetchCity() {
    getWeatherByCityName(this.props.match.params.name)
    .then((data) => {
      this.setState(data);
      if (data.notFound || data.error) {
        return;
      }
      
      HistoryStorage.pushCityToHistory(data);
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.name == this.props.match.params.name) {
      return;
    }
    this.refetchCity();
  }

  render() {
    if (this.state.notFound) {
      return (
        <div className={cnCity()}>
          <Link to="/" className={cnCity("backarrow")}></Link>
          <div className={cnCity("name")}>{this.state.name}</div>
          <div className={cnCity("error")}>404 - Город не найден</div>
        </div>
      );
    }

    if (this.state.error) {
      return (
        <div className={cnCity()}>
          <Link to="/" className={cnCity("backarrow")}></Link>
          <div className={cnCity("name")}>{this.state.name}</div>
          <div className={cnCity("error")}>Ошибка загрузки</div>
        </div>
      );
    }

    const now = new Date();
    const { sunrise, sunset } = this.state;

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
              `Восход в ${sunrise.toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit", timeZoneName: "short" })}` :
              `Закат в ${sunset.toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit", timeZoneName: "short" })}`
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
