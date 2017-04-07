import React, {Component} from 'react';
import './SearchBar.component.css';

class SearchBar extends Component{
	
	constructor(){
		super();

		// NOTE: to manipulate state outside of constructor, use this.setState()...
		this.state = {
			searchTerm: '',
			extendInput: ''
		}
	}

	// runs whenever the search bar input changes
	onSearchBarInputChange(event){
		let copyOfState = this.state;
		copyOfState.searchTerm = event.target.value;
		this.setState(copyOfState);
		console.log(this.state.searchTerm);
	}

	fetchVideos(event){
		this.props.fetchVideos(this.state.searchTerm);
		event.preventDefault();
	}

	render(){
		return (
			<div className="search-bar-component">
				<nav className="navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="/"> Video<sup>5</sup> </a>
				    </div>

				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <form className="navbar-form navbar-right" role="search" onSubmit={(event)=>{this.fetchVideos(event)}}>
				        <div className="form-group">
				        	<input 
								type="text"
								className="form-control hvr-fade search-input"
								value={this.state.searchTerm} 
								placeholder="Search" 
								onChange={(event)=>{this.onSearchBarInputChange(event)}}/>
				        </div>
				        <input type="submit" className="btn btn-success" value="Search" />
				      </form>
				    </div>
				  </div>
				</nav>	
			</div>
		)
	}

}

export default SearchBar;









