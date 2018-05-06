import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import SearchBar from "./Components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./Components/video_list";
import VideoDetail from "./Components/video_detail";

const API_KEY = "AIzaSyBI1qos-cplXHfm_72w9-cPZNARP80e3ew";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({ key: API_KEY, term: "C Programming" }, videos => {
      // console.log(data);
      this.setState({ videos }); //equivalent to    this.setState({videos : videos })
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoDetail video = {this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
