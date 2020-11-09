import React from 'react';
import '../../styles/videoShow.css'
import YouTubePlayer from 'react-player/youtube'
const VideoShow = () => {
    return ( <div className="video-block">
            <YouTubePlayer playing={true}  width="100%" height="100vh" muted={true} loop={true} url="https://www.youtube.com/watch?v=jyfhF0d1OFU"/>
    </div> );
}
 
export default VideoShow;