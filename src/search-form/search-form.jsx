import React from "react"
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import citiesList from "./cities-list"

class SearchForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: "",
      autocomplete: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const value = e.target.value.trim();
    this.setState({ value });

    if (value.length < 3) {
      this.setState({ autocomplete: [] });
      return;
    }

    const isAutocomplete = (c) => c.toLowerCase().indexOf(value.toLowerCase()) >= 0;

    this.setState({
      autocomplete: citiesList.filter(isAutocomplete)
    });
  }

  onSubmit(e) {
    this.props.history.push(`/city/${this.state.value}`)
    e.preventDefault();
  }

  render() {
    return (
      <form
        className="search-form main__search-form"
        onSubmit={this.onSubmit}>
        <input
          className="search-form__input"
          type="text"
          placeholder="Укажите город"
          value={this.value}
          onChange={this.onChange}
        />
        <div className="search-form__autocomplete">
          {
            this.state.autocomplete.map(
              city => (<Link key={city} to={`/city/${city}`}>{city}</Link>)
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
