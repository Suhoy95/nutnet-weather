import React from "react"
import {
  Link,
} from "react-router-dom";

export default function CitiesList() {
  return (
    <div className="cities-list main__cities-list">
      <Link className="cities-list__item" to="/city/Moscow" >
        <div className="cities-list__city">Москва</div>
        <div className="cities-list__temp">-13°</div>
        <img src="images/weather/Sun-cloud-mid-rain.svg" alt="иконка погоды" />
      </Link>
      <Link className="cities-list__item" to="/city/spb">
        <div className="cities-list__city">Санкт-Петербург</div>
        <div className="cities-list__temp">-10°</div>
        <img src="images/weather/Mid-snow-fast-winds.svg" alt="иконка погоды" />
      </Link>
      <Link className="cities-list__item" to="/city/Samara">
        <div className="cities-list__city">Самара</div>
        <div className="cities-list__temp">-21°</div>
        <img src="images/weather/Big-snow.svg" alt="иконка погоды" />
      </Link>
      <Link className="cities-list__item" to="/city/Kazan">
        <div className="cities-list__city">Казань</div>
        <div className="cities-list__temp">-28°</div>
        <img src="images/weather/Sun-cloud-mid-rain.svg" alt="иконка погоды" />
      </Link>
      <Link className="cities-list__item" to="/city/Nizhniy-Novgorod">
        <div className="cities-list__city">Нижний новгород</div>
        <div className="cities-list__temp">-17°</div>
        <img src="images/weather/Sun-cloud-mid-rain.svg" alt="иконка погоды" />
      </Link>
    </div>
  );
}
