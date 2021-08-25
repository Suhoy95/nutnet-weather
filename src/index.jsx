import ReactDOM from "react-dom"
import React from "react"
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";


import Header from "./header/header"
import Menu from "./menu/menu";

import Main from "./main/main"
import SearchForm from "./search-form/search-form";
import CitiesList from "./cities-list/cities-list";
import HistoryList from "./history-list/history-list";
import About from "./about/about";
import City from "./city/city";

function WeatherCheckApp() {
  return (
    <HashRouter>
      <div>
        <Header menu={<Menu />} />
        <Main>
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
        </Main>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <WeatherCheckApp />,
  document.getElementById("nutnet-weather")
)
