import React from "react";

class ImageList extends React.Component {
  static defaultProps = {
    images: [],
  };

  renderImages() {
    return this.props.images.map(({id, url, description}) => {
      return (
        <div className="ui container" key={id}>
          <img className="ui rounded image" src={url} alt={description} />
        </div>
      );
    });
  }

  render() {
    return <div className="ui segment">{this.renderImages()}</div>;
  }
}

export default ImageList;
