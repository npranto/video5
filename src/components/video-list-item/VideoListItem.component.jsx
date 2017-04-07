import React, {Component} from 'react';
import './VideoListItem.component.css';
import _ from 'lodash';

class VideoListItem extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (

			<div className="media hvr-backward hvr-sweep-to-left" onClick={() => {this.props.changeCurrentVideo(this.props.video)}}>
			  <div className="media-left">
			    <a>
			      <img className="media-object" 
			      	src={this.props.video.snippet.thumbnails.default.url} alt="..." />
			    </a>
			  </div>
			  <div className="media-body">
			    <h4 className="media-heading"> {_.truncate(this.props.video.snippet.title, {'length': 60,'separator': '...'})} </h4>
			    <p className="media-author"> {_.truncate(this.props.video.snippet.channelTitle, {'length': 15,'separator': '...'})} </p>
			  </div>
			</div>
					
		)
	}
}

export default VideoListItem