import React from 'react';
import GitHubCalendar from 'react-github-calendar';
class UserCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<GitHubCalendar username={this.props.login} color='dodgerblue' />
				<img src={`${this.props.avatar_url}.jpg`} alt='' />
				<h2>{this.props.name}</h2>
				<h1>{this.props.login}</h1>
				{/* {this.props.followers} */}
			</div>
		);
	}
}

export default UserCard;
