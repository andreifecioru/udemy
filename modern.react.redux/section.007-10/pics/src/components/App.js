import React from "react";

import SearchBar from "./SearchBar";
import Unsplash from "../api/Unsplash";

class App extends React.Component {
  state = {
    imageURLs: [],
  };

  onSearchSubmit = async (searchTerm) => {
    const response = await Unsplash.get(`/search/photos`, {
      params: {
        query: searchTerm,
      },
    });

    const imgURLs = response.data.results.map((result) => result.urls.thumb);
    this.setState({ imageURLs: imgURLs });
  };

  componentDidUpdate() {
    this.state.imageURLs.forEach((imgURL) => console.log(imgURL));
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "2em" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found {this.state.imageURLs.length} images.
      </div>
    );
  }
}

export default App;
