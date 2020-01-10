import React from "react";
import "./VideoItem.css";

export default function VideoItem(props) {
  const { title, thumbnails } = props.video.snippet;

  return (
    <div className="video-item ui card">
      <div className="image">
        <img src={thumbnails.medium.url} alt="thumbnail" />
      </div>
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
}
