import React from "react"
import {
  Link,
} from "react-router-dom";

export default function HistoryList() {
  return (
    <div className="history-list main__history">
      <Link className="history-list__item" to="/city/Moscow">
        <div className="history-list__temp">-13°</div>
        <time className="history-list__time">21:35</time>
        <div className="history-list__city">Москва</div>
      </Link>
      <Link className="history-list__item" to="/city/spb">
        <div className="history-list__temp">-10°</div>
        <time className="history-list__time">21:35</time>
        <div className="history-list__city">Санкт-Петербург</div>
      </Link>
      <Link className="history-list__item" to="/city/samara">
        <div className="history-list__temp">-21°</div>
        <time className="history-list__time">21:35</time>
        <div className="history-list__city">Самара</div>
      </Link>
      <Link className="history-list__item" to="/city/Kazan">
        <div className="history-list__temp">-28°</div>
        <time className="history-list__time">21:35</time>
        <div className="history-list__city">Казань</div>
      </Link>
      <Link className="history-list__item" to="/city/Nizhniy-Novgorod">
        <div className="history-list__temp">-17°</div>
        <time className="history-list__time">21:35</time>
        <div className="history-list__city">Нижний новгород</div>
      </Link>
    </div>
  );
}