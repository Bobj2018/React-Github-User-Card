import React from 'react';

import FollowerCard from './FollowerCard';

class FollowerList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		console.log(this.props);
	}
	render() {
		return (
			<>
				{this.props.followers.map(item => {
					return <FollowerCard follower={item} key={item.id} />;
				})}
			</>
		);
	}
}

export default FollowerList;
