import React from 'react';


const VideoListItem = ({video , onVideoSelect}) =>   //props.video...  object destructuring.
{
    console.log(video);
    const imgURl =  video.snippet.thumbnails.default.url;  // according to the console
  
    return (
        <li onClick = {() => onVideoSelect(video)}  className = "list-group-item">
            <div className = "video-list media">
                <div className = "media-left">
                    <img className = "media-object" src = {imgURl}/>
                    
                </div>

                <div className = "media-body">
                <div className = "media-heading"> {video.snippet.title}</div> 

                </div>
            </div>
        </li> 
    );
};

export default VideoListItem;