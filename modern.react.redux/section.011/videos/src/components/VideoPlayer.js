import React from "react";

class VideoPlayer extends React.Component {
  renderVideo() {
    const { id, title, description } = this.props.video;

    return (
      <div className="ui segment ten wide column">
        <div className="ui embed">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title="Youtube video player"
          />
        </div>
        <h4 className="ui horizontal divider header">Details</h4>
        <div className="ui container">
          <h4 className="ui header">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  renderEmpty() {
    return <div className="ui segment ten wide column" />;
  }

  render() {
    return this.props.video ? this.renderVideo() : this.renderEmpty();
  }
}

export default VideoPlayer;
