import React,{Component} from 'react';
import {fetchUsers} from '../actions/index';
import {connect} from 'react-redux';

class UsersList extends Component{
	componentDidMount(){
		this.props.fetchUsers();
	}
	renderUsers(){
		return this.props.users.map(user=>{
			return <li key={user.id}>{user.name}</li>
		})
	}
	render(){
		return(
			<div>
				<h2>A list of users</h2>
				<ul>{this.renderUsers()}</ul>
			</div>
		)
	}
}

export const mapStateToProps = (state) =>{
	return{
		users: state.users
	}
};

function loadData(store) {
	return store.dispatch(fetchUsers());
}

export {loadData};

export default connect(mapStateToProps,{fetchUsers})(UsersList)