import React from "react"
import PropTypes from "prop-types"

export default function Main(props) {
  return (
    <main className="main">
      {props.children}
      <footer className="main__footer">Сделано в Nutnet, 2021</footer>
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}
