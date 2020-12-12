import React from "react";

import "./VideoListItem.css";

import { truncate } from "../utils/StringUtils";


class VideoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(event) {
    this.props.onClick(this.props.video);
  }

  render() {
    const { title, description, thumbnail } = this.props.video;

    return(
      <div className="item video-list-item" onClick={this.onItemClick}>
        <div className="image">
          <img src={thumbnail.url} alt=""/>
        </div>
        <div className="content">
          <div className="header">{truncate(title, 40)}</div>
          <div className="description">{truncate(description, 80)}</div>
        </div>
      </div>
    );
  }
}

export default VideoListItem;