import React from 'react';
import './App.css';
import axios from 'axios';

//Components
import FollowerList from './components/FollowerList';
import UserCard from './components/UserCard';

class App extends React.Component {
	state = {
		profile: {},
		username: 'bobj2018',
		followers: []
	};

	componentDidMount() {
		fetch(`https://api.github.com/users/${this.state.username}`)
			.then(response => response.json())
			.then(data => this.setState({ ...this.state, profile: data }))
			.catch(err => console.log(err));
		fetch(`https://api.github.com/users/${this.state.username}/followers`)
			.then(response => response.json())
			.then(data => this.setState({ ...this.state, followers: data }));
	}

	render() {
		return (
			<div className='App'>
				<main className='App-header'>
					<UserCard {...this.state.profile} />
					<FollowerList followers={this.state.followers} />
				</main>
			</div>
		);
	}
}

export default App;
