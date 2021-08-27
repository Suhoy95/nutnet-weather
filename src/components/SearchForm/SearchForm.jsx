import React from "react"
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import citiesList from "./cities-list"

import "./SearchForm.css"
import { cn } from "@bem-react/classname"

const cnSearchForm = cn("SearchForm");

class SearchForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: "",
      autocomplete: [],
      idx: -1,
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const value = e.target.value.trim();
    this.setState({ value });

    if (value.length < 3) {
      this.setState({ autocomplete: [], idx: -1 });
      return;
    }

    const isAutocomplete = (c) => c.toLowerCase().indexOf(value.toLowerCase()) >= 0;
    const cities = citiesList.filter(isAutocomplete);

    function splitCity(c) {
      const i = c.toLowerCase().indexOf(value.toLowerCase());
      return {
        city: c,
        pref: c.substring(0, i),
        mid: c.substring(i, i + value.length),
        suf: c.substring(i + value.length),
      };
    }

    this.setState({
      autocomplete: cities.map(splitCity),
    });

    // Если из-за изменения текста индекс фокуса вышел за пределы
    if (this.state.idx >= cities.length) {
      // если массив стал пуст, то idx=-1, корректно
      this.setState({idx: cities.length - 1});
    }
  }

  onKeyDown(e) {
    if (e.code === "ArrowUp" && this.state.idx > -1) {
      this.setState({idx : this.state.idx - 1});
      return;
    }

    if (e.code == "ArrowDown" && this.state.idx < this.state.autocomplete.length - 1) {
      this.setState({idx : this.state.idx + 1});
      return;
    }
  }

  onSubmit(e) {
    e.preventDefault();

    // Если выбран пункт авто-дополнения
    if (this.state.idx > -1) {
      const city = this.state.autocomplete[this.state.idx].city;
      this.props.history.push(`/city/${city}`);
      return;
    }

    if (this.state.value == "") {
      return;
    }

    this.props.history.push(`/city/${encodeURI(this.state.value)}`)
  }

  componentDidUpdate()
  {
    if (this.state.idx == -1) {
      return;
    }
    
    // Если элементов в списке будет очень много и появится скролл, то
    // элемент в фокусе всегда будет вверху
    const autocompleteItemHeight = 57;
    this.autocompleteRef.scrollTop = this.state.idx * autocompleteItemHeight;
  }

  render() {
    return (
      <form
        className={cnSearchForm()}
        onSubmit={this.onSubmit}>
        <input
          className={cnSearchForm("input", {autocompleted: this.state.autocomplete.length > 0})}
          type="text"
          placeholder="Укажите город"
          value={this.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />
        <div className={cnSearchForm("autocomplete")} ref={ref => this.autocompleteRef = ref}>
          {
            this.state.autocomplete.map(
              ({city, pref, mid, suf}, i) => (
                <Link
                  className={cnSearchForm("autocompleteItem", {active: i === this.state.idx})}
                  key={city} to={`/city/${city}`}>
                  {pref}<span className={cnSearchForm("matchedText")}>{mid}</span>{suf}
                  </Link>
              )
            )
          }
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  history: PropTypes.object,
}

export default withRouter(SearchForm);
