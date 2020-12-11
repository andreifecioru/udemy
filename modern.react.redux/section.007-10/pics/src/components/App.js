import React from "react";

import Unsplash from "../api/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (searchTerm) => {
    const response = await Unsplash.get(`/search/photos`, {
      params: {
        query: searchTerm,
      },
    });

    const images = response.data.results.map((result) => (
      {
        id: result.id, 
        url: result.urls.regular,
        description: result.description,
      }
    ));
    this.setState({ images: images });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "2em" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
