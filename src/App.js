import React from 'react';
import './App.css';

//Components
import FollowerList from './components/FollowerList';

class App extends React.Component {
	state = {
		followers: []
	};

	componentDidMount() {
		fetch('https://api.github.com/users/Bobj2018/followers')
			.then(response => response.json())
			.then(data => {
				this.setState({ ...this.state, followers: data });
				console.log(this.state.followers);
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className='App'>
				<main className='App-header'>
					<FollowerList followers={this.state.followers} />
				</main>
			</div>
		);
	}
}

export default App;
