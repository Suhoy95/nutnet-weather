import React from "react"
import PropTypes from "prop-types"
import {
  Link,
  withRouter,
} from "react-router-dom";


import getWeatherByCityName from "../openweather-api/openweather";
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
      sunriseTime: 0,
      sunsetTime: 0,
    };
  }

  componentDidMount() {
    getWeatherByCityName(this.city)
      .then((data) => this.setState(data))
  }

  render() {
    return (
      <div>
        <Link to="/" className="main__backarrow"></Link>
        <div className="city main__city">
          <div className="city__name">{this.state.name}</div>
          <div className="city__weather">{this.state.description}</div>
          <div className="city__temp">
            <span>{this.state.temp}°</span>
            <img src={this.state.icon} alt={this.state.description} />
          </div>
          <div className="city__barometer"><span>{this.state.pressure} мм рт. ст.</span></div>
          <div className="city__daybreak">
            Закат в 18:00
          </div>
        </div>
      </div>
    );
  }
}

City.propTypes = {
  match: PropTypes.object,
}


export default withRouter(City)
