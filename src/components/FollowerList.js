import React from 'react';

import FollowerCard from './FollowerCard';

class FollowerList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	

	render() {
		// console.log(this.props);
		return (
			<div className='follower-list'>
				{this.props.followers.map(item => {
					return <FollowerCard user={item} key={item.id} />;
				})}
			</div>
		);
	}
}

export default FollowerList;
