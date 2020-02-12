import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos,onVideoSelect}) => {
    const list = videos.map((video)=>{
        return (
            <VideoItem 
                key={video.etag} 
                video={video}
                onVideoSelect = {onVideoSelect}
            />
        )
    })
    return (
       <div className="ui relaxed divided list">
        {list}
       </div>
    )
}
export default VideoList;