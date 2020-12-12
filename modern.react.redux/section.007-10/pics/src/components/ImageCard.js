import React from "react";

const CELL_HEIGHT = 20;

class ImageCard extends React.Component {

  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  state = { height: 0 };

  onImageLoad = (event) => {
    this.setState({ height: this.imageRef.current.clientHeight });
  };

  render() {
    const { url, description } = this.props;

    const rowSpan = Math.ceil(this.state.height / CELL_HEIGHT) + 1;
    // console.log(`Image ${this.props.id} has a row span of ${rowSpan}.`);

    return (
      <div
        className="ui container"
        style={{
          gridRowEnd: `span ${rowSpan}`,
        }}
      >
        <img
          ref={this.imageRef}
          className="ui rounded medium image"
          src={url}
          alt={description}
          onLoad={this.onImageLoad}
        />
      </div>
    );
  }
}

export default ImageCard;
