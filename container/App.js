import React,{Component} from 'react';
import Cardlist from '../component/Cardlist';
import {robots} from '../robots';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import './App.css';
//import Errorboundry from '../component/Errorboundry';
class App extends Component{
	constructor(){
	super()
	this.state = {
		robots : robots,
		searchfield: ''
	}
}
onSearchChange = (event) =>{
	this.setState({searchfield: event.target.value})



}

render(){

	const filteredRobots = this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	return(
			<div className = 'tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			

			<Cardlist robots = {filteredRobots}/>
			
			</Scroll>
			</div>
		);
	}




}




	
	




export default App