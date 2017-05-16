import React, {Component} from 'react';
import moment from 'moment';
import './Video.component.css';

const Video = (props) => {

	if(!props.currentVideo){
		return (
			<div className="embed-responsive embed-responsive-16by9">
			  <iframe 
			  	className="embed-responsive-item" 
			  	width="100%" 
			  	src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif"
			  	frameBorder="0" 
			  	allowFullScreen>
			  </iframe>
			</div>
		)
	}
	
	return(
		<div>
			<div className="embed-responsive embed-responsive-16by9">
			  <iframe 
			  	className="embed-responsive-item" 
			  	width="100%" 
			  	src={`https://www.youtube.com/embed/${props.currentVideo.id.videoId}?autoplay=1`} 
			  	frameBorder="0" 
			  	allowFullScreen>
			  </iframe>
			</div>

			<div className="page-header">
				<h3> {props.currentVideo.snippet.title} <small>  </small></h3>
				<h5 className="media-by"> By <span className="label label-danger"> {props.currentVideo.snippet.channelTitle} </span></h5>
			</div>

			<h5 className="media-published"> Published on <i>{moment(props.currentVideo.snippet.publishedAt).format("dddd, MMMM Do YYYY")}</i> </h5>

			<h5 className="media-desc"> Description </h5>
			<div className="well well-sm">
				{props.currentVideo.snippet.description}
			</div>

		</div>

	)

}

export default Video;