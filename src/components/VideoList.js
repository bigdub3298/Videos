import React from "react";
import VideoItem from "./VideoItem";

export default function VideoList(props) {
  const videos = props.videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelected={props.onVideoSelected}
      />
    );
  });
  return <div>{videos}</div>;
}
