import React from "react"
import {
  HashRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import Menu from "../Menu/Menu";

// import SearchForm from "./search-form/search-form";
// import CitiesList from "./cities-list/cities-list";
import HistoryList from "../HistoryList/HistoryList";
import About from "../About/About"
// import City from "./city/city";

import { cn } from "@bem-react/classname"
import "./WeatherCheckApp.css"

const cnWeatherCheckApp = cn("WeatherCheckApp");

export default function WeatherCheckApp() {
  return (
    <HashRouter>
      <div className={cnWeatherCheckApp()}>
        <header className={cnWeatherCheckApp("header")}>
          <Link
            to="/"
            className={cnWeatherCheckApp("logo")}
            title="WeatherCheck - Главная"
          ></Link>
          <Menu />
        </header>
        <main className={cnWeatherCheckApp("main")}>
          <Switch>
            {/* <Route exact path="/">
              <SearchForm />
              <CitiesList />
            </Route> */}
            <Route path="/history">
              <HistoryList />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {/* <Route path="/city/:name">
              <City />
            </Route> */}
          </Switch>
        </main>
        <footer className={cnWeatherCheckApp("footer")}>
          Сделано в Nutnet, 2021
        </footer>
      </div>
    </HashRouter>
  );
}
