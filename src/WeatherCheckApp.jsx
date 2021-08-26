import React from "react"
import {
  HashRouter,
  // Switch,
  // Route,
} from "react-router-dom";

import WeatherCheckLogo from "./components/WeatherCheckLogo/WeatherCheckLogo";
import Menu from "./components/Menu/Menu";

// import SearchForm from "./search-form/search-form";
// import CitiesList from "./cities-list/cities-list";
// import HistoryList from "./history-list/history-list";
// import About from "./about/about";
// import City from "./city/city";

import { cn } from "@bem-react/classname"
import "./WeatherCheckApp.css"

const cnWeatherCheckApp = cn("WeatherCheckApp");

export default function WeatherCheckApp() {
  return (
    <HashRouter>
      <div className={cnWeatherCheckApp()}>
        <header className={cnWeatherCheckApp("header")}>
          <WeatherCheckLogo />
          <Menu />
        </header>
        <main className={cnWeatherCheckApp("main")}>
          {/* <Switch>
            <Route exact path="/">
              <SearchForm />
              <CitiesList />
            </Route>
            <Route path="/history">
              <HistoryList />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/city/:name">
              <City />
            </Route>
          </Switch> */}
        </main>
        <footer className={cnWeatherCheckApp("footer")}>
          Сделано в Nutnet, 2021
        </footer>
      </div>
    </HashRouter>
  );
}
