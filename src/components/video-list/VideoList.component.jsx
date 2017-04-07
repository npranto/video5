import React, {Component} from 'react';
import VideoListItem from './../video-list-item/VideoListItem.component.jsx';
import './VideoList.component.css';

const VideoList = (props) => { 

	const videoList = props.videos.map((video)=>{
		return (
			<VideoListItem key={video.etag} video={video} changeCurrentVideo={props.changeCurrentVideo} />
		)
	})
	
	return (

		<ul className="media-list">
			{videoList}
		</ul>

	)
}

export default VideoList
