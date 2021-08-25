import React from "react"

export default function SearchForm() {
  return (
    <form className="search-form main__search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Укажите город"
      />
    </form>
  );
}