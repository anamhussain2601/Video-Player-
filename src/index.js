import React,{Component} from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './Components/search_bar';
import Header from './Components/Header';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/video_list';

const API_KEY = 'AIzaSyBI1qos-cplXHfm_72w9-cPZNARP80e3ew'; 


class Appo extends Component{
    constructor(props){
        super(props);

        this.state= {videos : []};



YTSearch({key: API_KEY , term : 'surfboards'}, (videos) => {

    // console.log(data);
    this.setState({videos }  );    //equivalent to    this.setState({videos : videos })

  }  );

}
        render(){
            return(
            <div>
                <SearchBar/>
                {/* <Header/> */}
                <VideoList videos = {this.state.videos}/>;
               </div>
               );
            
    }
}


// ReactDOM.render(<Header/>, document.getElementById('root'));

 ReactDOM.render(<Appo/>, document.getElementById('root'));



registerServiceWorker();
