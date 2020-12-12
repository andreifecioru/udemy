import React from "react";

import "./ImageList.css";
import ImageCard from "./ImageCard";

class ImageList extends React.Component {
  static defaultProps = {
    images: [],
  };

  renderImages() {
    return this.props.images.map(({ id, url, description }) => {
      return <ImageCard key={id} url={url} description={description} />;
    });
  }

  render() {
    return <div className="ui segment image-list">{this.renderImages()}</div>;
  }
}

export default ImageList;
