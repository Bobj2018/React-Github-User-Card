import React from 'react';

class UserCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<img src={`${this.props.avatar_url}.jpg`} alt='' />
				<h2>{this.props.name}</h2>
				<h1>{this.props.login}</h1>
				{/* {this.props.followers} */}
			</div>
		);
	}
}

export default UserCard;
