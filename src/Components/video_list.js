import React from 'react';
import VideoListItem from './Video_List_Item';


const VideoList = (props) =>{

    const VideoItem = props.videos.map(( video) => { 

        return <VideoListItem key = {video.etag} video = {video}/>
    } );
    return(
        <ul className = "col-md-4 list-group">
        {/* {props.videos.length} */}
        {VideoItem}
        </ul>
    );
};

export default VideoList;
