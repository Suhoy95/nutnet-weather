import React from "react"

import { Link } from "react-router-dom"

import { cn } from "@bem-react/classname"
import "./WeatherCheckLogo.css"

const cnWeatherCheckLogo = cn("WeatherCheckLogo")

export default function WeatherCheckLogo() {
  return (
    <Link
      to="/"
      className={cnWeatherCheckLogo()}
      title="WeatherCheck - Главная"
    ></Link>
  );
}
