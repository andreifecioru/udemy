import React from "react";

const VideoPlayer = ({ video }) => {
  if (video)
    return (
      <React.Fragment>
        <div className="ui container">
          <div className="ui embed">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title="Youtube Video Player"
            />
          </div>
        </div>
        <div className="ui horizontal divider">
          Video details
        </div>
        <div className="ui container">
          <div className="ui header">{video.title}</div>
          <div className="ui description">{video.description}</div>
        </div>
      </React.Fragment>
    );
  else return null;
};

export default VideoPlayer;
