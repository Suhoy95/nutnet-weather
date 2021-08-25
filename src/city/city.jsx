import React from "react"
import { Link } from "react-router-dom";

export default function City() {
  return (
    <div>
      <Link to="/" className="main__backarrow"></Link>
      <div className="city main__city">
        <div className="city__name">Москва</div>
        <div className="city__weather">Облачно с прояснениями</div>
        <div className="city__temp">
          <span>-13°</span>
          <img src="images/weather/Sun-cloud-mid-rain.svg" alt="иконка погоды" />
        </div>
        <div className="city__barometer"><span>756 мм рт. ст.</span></div>
        <div className="city__daybreak">Закат в 18:00</div>
      </div>
    </div>
  );
}
