import React from "react";

import "./App.css";

import YouTube from "../api/YouTube";

import SearchBar from "./SearchBar";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchBarSubmit = this.onSearchBarSubmit.bind(this);
    this.onVideoSelected = this.onVideoSelected.bind(this);
  }

  state = {
    videos: [],
    currentVideo: null,
  };

  onVideoSelected(video) {
    this.setState({ currentVideo: video });
  }

  async onSearchBarSubmit(term) {
    console.log(`Searching for: ${term}`);

    const searchResults = await YouTube.get("/search", {
      params: {
        q: term,
      },
    });

    const videoData = searchResults.data.items.map((video) => ({
      id: video.id.videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.default,
    }));

    this.setState({ 
      videos: videoData, 
      currentVideo: videoData.length > 0 ? videoData[0] : null
    });
  }

  componentDidMount() {
    this.onSearchBarSubmit("react course");
  }

  render() {
    return (
      <div className="ui grid container app-container">
        <SearchBar onSubmit={(term) => this.onSearchBarSubmit(term)} />
        <div className="ui row">
        <VideoPlayer video={this.state.currentVideo}/>
        <VideoList videos={this.state.videos} onItemClick={this.onVideoSelected}/>
        </div>
      </div>
    );
  }
}

export default App;
