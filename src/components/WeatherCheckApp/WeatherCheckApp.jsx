import React from "react"
import {
  HashRouter,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";


import Menu from "../Menu/Menu";

import SearchForm from "../SearchForm/SearchForm";
import CitiesList from "../CitiesList/CitiesList";
import HistoryList from "../HistoryList/HistoryList";
import About from "../About/About"
import City from "../City/City";

import { cn } from "@bem-react/classname"
import "./WeatherCheckApp.css"

const cnWeatherCheckApp = cn("WeatherCheckApp");

const Header = withRouter(({ location }) => (
  <header className={cnWeatherCheckApp("header", {"hidden": location.pathname.startsWith("/city/")})}>
    <Link
      to="/"
      className={cnWeatherCheckApp("logo")}
      title="WeatherCheck - Главная"
    ></Link>
    <Menu className={cnWeatherCheckApp("menu")} />
  </header>
));


// TODO: Добавить обработчик ошибок и логирование в Sentry:
// https://reactjs.org/docs/error-boundaries.html
// https://docs.sentry.io/platforms/javascript/
export default function WeatherCheckApp() {
  return (
    <HashRouter>
      <div className={cnWeatherCheckApp()}>
        <Header />
        <main className={cnWeatherCheckApp("main")}>
          <Switch>
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
          </Switch>
        </main>
        <footer className={cnWeatherCheckApp("footer")}>
          Сделано в Nutnet, 2021
        </footer>
      </div>
    </HashRouter>
  );
}
