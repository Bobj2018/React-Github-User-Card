import React from 'react';

class FollowerCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		console.log(this.props.follower);
	}
	render() {
		return (
			<div>
				<img src={`${this.props.follower.avatar_url}.jpg`} />
				<h2>{this.props.follower.login}</h2>
			</div>
		);
	}
}

export default FollowerCard;
