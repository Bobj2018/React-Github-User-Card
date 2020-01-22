import React from 'react';

class FollowerCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {}
	render() {
		return (
			<div className='follower-card'>
				<img
					className='follower-img'
					src={`${this.props.user.avatar_url}.jpg`}
				/>
				<h2>{this.props.user.login}</h2>
			</div>
		);
	}
}

export default FollowerCard;
