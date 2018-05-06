import React from 'react';

const VideoDetail  = ({video}) =>{
if(!video)
{
    return   <div>Loading...</div>;

}
    console.log(video);
    const VideoId =   video.id.videoId;
    //Write videoId instead of VideoId;
    console.log(VideoId);
    const url =     `https://www.youtube.com/embed/${VideoId}`; //"...." + videoId
    console.log(url);

    return(
        <div className= "video-detail col-md-8">
            <div className = "embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item"  src = {url}></iframe>
            </div>

            <div className = "details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.heading}</div>

            </div>
        </div>
    );
};

export default VideoDetail;
