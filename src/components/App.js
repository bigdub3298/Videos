import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
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
    this.setState({
      videos: response.data.items,
      currentVideo: response.data.items[0]
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.currentVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelected={this.onVideoSelected}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
