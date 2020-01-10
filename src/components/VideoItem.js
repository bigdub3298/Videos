import React, { Component } from "react";
import "./VideoItem.css";

export class VideoItem extends Component {
  videoClicked = () => {
    this.props.onVideoSelected(this.props.video);
  };

  render() {
    const { title, thumbnails } = this.props.video.snippet;

    return (
      <div className="video-item ui card" onClick={this.videoClicked}>
        <div className="image">
          <img src={thumbnails.medium.url} alt="thumbnail" />
        </div>
        <div className="content">
          <div className="header">{title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
