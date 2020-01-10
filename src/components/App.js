import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

export class App extends Component {
  state = {
    videos: [],
    currentVideo: null
  };

  onVideoSelected = video => {
    this.setState({ currentVideo: video });
    console.log(video);
  };

  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelected={this.onVideoSelected}
        />
      </div>
    );
  }
}

export default App;
