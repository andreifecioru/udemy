import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  // NOTE: for event handlers we use arrow function syntax
  // to ensure that `this` is properly bound
  onFormSubmit = (event) => {
    // We want to handle form submission in code.
    event.preventDefault();
    event.stopPropagation();

    this.props.onSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui form">
            <label htmlFor="search-query">Image search</label>

            {/* This is a controlled element: 
                its value is controlled by the componet's state. */}
            <input
              id="search-query"
              type="text"
              placeholder="Search..."
              value={this.state.searchTerm}
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
