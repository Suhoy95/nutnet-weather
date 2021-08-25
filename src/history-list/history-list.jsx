import React from "react"
import PropTypes from "prop-types"
import {
  Link,
} from "react-router-dom";

import historyStorage from "../history-storage";

function HistoryItem({ name, temp }) {
  return (
    <Link className="history-list__item" to={`/city/${encodeURI(name)}`}>
      <div className="history-list__temp">{temp}°</div>
      <time className="history-list__time">21:35</time>
      <div className="history-list__city">{name}</div>
    </Link>
  );
}

HistoryItem.propTypes = {
  name: PropTypes.string,
  temp: PropTypes.number,
}

export default function HistoryList() {
  return (
    <div className="history-list main__history">
      {historyStorage.history.map((city) => <HistoryItem key={city.name} {...city} />)}
    </div>
  );
}
