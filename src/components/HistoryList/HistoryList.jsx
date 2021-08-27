import React from "react"
import PropTypes from "prop-types"
import {
  Link,
} from "react-router-dom";

import historyStorage from "../../history-storage";

import "./HistoryList.css"
import { cn } from "@bem-react/classname"

const cnHistoryList = cn("HistoryList");

function HistoryItem({ name, temp, accessDate }) {
  return (
    <Link className={cnHistoryList("item")} to={`/city/${encodeURI(name)}`}>
      <div className={cnHistoryList("temp")}>{temp}°</div>
      <time className={cnHistoryList("time")}>{accessDate}</time>
      <div className={cnHistoryList("name")}>{name}</div>
    </Link>
  );
}

HistoryItem.propTypes = {
  name: PropTypes.string,
  temp: PropTypes.number,
  accessDate: PropTypes.string
}

export default function HistoryList() {
  return (
    <div className={cnHistoryList()}>
      {historyStorage.history.map((city) => <HistoryItem key={city.name} {...city} />)}
    </div>
  );
}
