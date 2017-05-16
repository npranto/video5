import React, {Component} from 'react';
import SearchBar from './search-bar/SearchBar.component.jsx';
import VideoList from './video-list/VideoList.component.jsx';
import Video from './video/Video.component.jsx';
import YoutubeSearch from 'youtube-api-search';
import {youtubeApiConfig} from './../../config/youtube-api.config';
import './App.component.css';


class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			fetchedVideos: [],
			currentVideo: null
		}
		this.getATrendingVideo();
 	}

 	getATrendingVideo(){
 		YoutubeSearch({key: youtubeApiConfig.key, term: 'jimmy fallon'}, (videos) => {
			this.setState({
				fetchedVideos: videos,
				currentVideo: videos[0]
			})
		})
 	}

 	fetchVideos(newTerm){
		YoutubeSearch({key: youtubeApiConfig.key, term: newTerm}, (videos) => {
			this.setState({
				fetchedVideos: videos,
				currentVideo: this.state.currentVideo
			})
			console.log(this.state.fetchedVideos);
			this.scrollToVideoList();
		})
 	}

    scrollToVideoList() {
        $('html,body')
            .animate({
                scrollTop: $("#videoList").offset().top
            }, 'slow');
	}

	render(){
		return (
			<div className="app-component container">
				
				<div className="row">
					<div className="search-bar col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<SearchBar fetchVideos={(searchTerm)=>{this.fetchVideos(searchTerm)} }/>
					</div>
				</div>

				<div className="row">
					<div className="video col-xs-12 col-sm-12 col-md-8 col-lg-8">
						<Video 
							currentVideo={this.state.currentVideo}
						/>
					</div>
					<div className="video-list col-xs-12 col-sm-12 col-md-4 col-lg-4" id="videoList">
						<VideoList 
							videos={this.state.fetchedVideos} 
							changeCurrentVideo={ (currentVideo)=>{
								this.setState({currentVideo: currentVideo})
							}} 
						/>
					</div>
				</div>

			</div>
		)
	}

}

export default App;
