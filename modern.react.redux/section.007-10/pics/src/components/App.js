import React from "react";

import SearchBar from "./SearchBar";


class App extends React.Component {

  onSearchSubmit = (searchTerm) => {
    console.log(`[App] Searching for: ${searchTerm}`);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "2em" }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;