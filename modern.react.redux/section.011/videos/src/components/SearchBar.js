import React from "react";

import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  state = { term: "" };

  onFormSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.onSubmit(this.state.term);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="ui segment search-bar sixteen wide column">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui field">
            <label htmlFor="search-bar-input">Video Search</label>
            <input
              id="search-bar-input"
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
