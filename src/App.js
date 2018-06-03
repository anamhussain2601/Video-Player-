import _ from 'lodash';
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
    this.state = { 
      videos: [],
      selectedVideo:null
     };
  
     this.videoSearch('apple');
    }

    videoSearch(term){
      YTSearch({ key: API_KEY, term: term }, videos => {
      // console.log(data);
      this.setState(
        { 
         videos :  videos ,
        selectedVideo : videos[0]
    }); //equivalent to    this.setState({videos : videos })
    });
  }

  render() { 

      const videoSearch = _.debounce((term)  => {this.videoSearch(term)} , 300);



    return (
      <div >
        <SearchBar onSearchTermChange = {videoSearch} />
        <div className="videos-container">
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}   //onvideoselect is passed as a property to the video
            videos={this.state.videos} />
            </div>
        
      </div>
    );
  }
}

export default App;
