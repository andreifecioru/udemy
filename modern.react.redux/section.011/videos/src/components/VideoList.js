import React from "react";

import "./VideoList.css";

import VideoListItem from "./VideoListItem";

class VideoList extends React.Component {
  renderVideoListItems() {
    return this.props.videos.map((video) => {
      return <VideoListItem key={video.id} video={video} onClick={this.props.onItemClick}/>;
    });
  }

  render() {
    return (
      <div className="six wide column">
        <div className="ui segment video-list">
          <div className="ui relaxed divided list">
            {this.renderVideoListItems()}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoList;
