import React, { useEffect, useState } from "react";

import "./App.css";
import YouTube from "../api/YouTube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

const youtube = new YouTube();

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onSearchChange = (term) => {
    setSearchTerm(term);
  };

  const onVideoClick = (video) => {
    setSelectedVideo(video)
  };

  useEffect(() => {
    (async () => {
      const videoList = await youtube.search(searchTerm);

      setVideos(videoList);
      setSelectedVideo(videoList[0]);
    })();
  }, [searchTerm]);

  useEffect(() => {

  }, [selectedVideo]);

  return (
    <div className="ui segment container app-container">
      <SearchBar onChange={onSearchChange}/>

      <div className="ui grid">
        <div className="ten wide column">
          <div className="ui segment container video-player">
            <VideoPlayer video={selectedVideo} />
          </div>
        </div>
        <div className="six wide column">
          <div className="ui segment container video-list">
            <VideoList videos={videos} onVideoClick={onVideoClick}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
