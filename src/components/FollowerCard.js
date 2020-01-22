import React from 'react';

class FollowerCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			profile: {}
		};
	}
	componentDidMount() {
		fetch(`https://api.github.com/users/${this.props.user.login}`)
			.then(res => res.json())
			.then(data => {
				console.log(data);

				this.setState({ ...this.state, profile: data });
			})
			.catch(err => console.log(err));
	}
	render() {
		return (
			<div className='follower-card'>
				<img
					className='follower-img'
					src={`${this.props.user.avatar_url}.jpg`}
				/>
				<h2>{this.props.user.login}</h2>
				<p>{this.state.profile.name}</p>
			</div>
		);
	}
}

export default FollowerCard;
