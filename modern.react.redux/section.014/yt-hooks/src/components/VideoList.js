import React from "react";

import "./VideoList.css";

const VideoList = ({ videos, onVideoClick }) => {
  const renderItems = () => {
    return videos.map((video) => {
      return (
        <div
          className="item video-list-item"
          key={video.id}
          onClick={() => onVideoClick(video)}
        >
          <div className="image">
            <img alt="" src={video.thumbnail.url} />
          </div>
          <div className="middle aligned content">
            <div className="header">{video.title}</div>
            <div className="description">{video.description}</div>
          </div>
        </div>
      );
    });
  };

  return <div className="ui relaxed divided list">{renderItems()}</div>;
};

export default VideoList;
