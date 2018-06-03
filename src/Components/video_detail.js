import React from 'react';
//import custom css file here means add a new css file

const VideoDetail  = ({video}) =>{
if(!video)
{
    return   <div className="loading">Loading...</div>;
}

    console.log(video);
    //const VideoId =   video.id.VideoId;
    const VideoId =   video.id.videoId;

   const url =     `https://www.youtube.com/embed/${VideoId}`; //"...." + videoId
//    const url =     "https://www.youtube.com/embed/" + VideoId;//"...." + videoId

    return(
        <div className= "video-detail col-md-8">
            <div className = "embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item"  src = {url}></iframe>
            </div>

            <div className = "details">
            {/* apply css in tile to increase the font size and style margin padding */}
                <div className = "detailFont">{video.snippet.title}</div>
                <div>{video.snippet.heading}</div>

            </div>
        </div>
    );
};

export default VideoDetail;
