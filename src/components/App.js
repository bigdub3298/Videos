import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

export class App extends Component {
  state = {
    videos: []
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
        Found: {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;
