import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';
import { Actions } from 'react-native-router-flux';
import { logout } from '../actions/loginActions';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import Util from '../common/util';
import FlexBoxGridScreen from '../containers/FlexBoxGridScreen';
import { ListItem,Divider } from 'react-native-material-ui';

class MyScreen extends Component {
	_loadPage = (component, title) => {
		Actions.discovery;
	};

	_clear = () => {
		this.props.logout();
		Actions.pop();
	};

  	render() {
    	const { counter, user } = this.props;


    	const logoutButtonConfig = {
			title: 'Logout',
			handler: () =>  {
				this.props.logout();
				Actions.pop();
			}
		};

	    var colors = ['#F4000B', '#17B4FF', '#FFD900', '#F00000'];
		var tags = ['G', 'U', 'A'];
		var items = [this.props.user.user.devgroup, this.props.user.user.name, '关于我们'];
		var components = [FlexBoxGridScreen, FlexBoxGridScreen, FlexBoxGridScreen, FlexBoxGridScreen];
		var JSXDOM = [];
		for(var i in items){
			JSXDOM.push(
				<TouchableOpacity key={items[i]} onPress={this._loadPage.bind(this, components[i], items[i])}>
					<View style={[styles.item, {flexDirection:'row'}]}>
						<Text style={[styles.tag, {color: colors[i]}]}>{tags[i]}</Text>
						<Text style={[styles.font,{flex:1}]}>{items[i]}</Text>
					</View>
				</TouchableOpacity>
			);
		}


	    return (
			<ScrollView style={styles.container}>
				<View style={styles.top}>
					<Icon name="user" size={80} color="#17B4FF"></Icon>
					
				</View>
				<Divider />
	                <ListItem
	                    primaryText={this.props.user.user.devgroup}
	                    leftIcon={
	                    	<Text>开发组</Text>
	                    }
	                />
	                <Divider />
	                <ListItem
	                    primaryText={this.props.user.user.name}
	                    leftIcon={
	                    	<Text>用户名</Text>
	                    }
	                    />
	                <Divider />
	                <ListItem
	                    primaryText={'Aisino AOS'}
	                    leftIcon={
	                    	<Text>团队</Text>
	                    }
	                />   
	                <Divider />
	                <ListItem
	                    primaryText={'航天信息'}
	                    leftIcon={
	                    	<Text>公司</Text>
	                    }
	                />   
	                <Divider />

				<View style={{marginTop:30}}>
					<TouchableOpacity onPress={this._clear}>
						 	<Divider />
			                <ListItem
			                    primaryText={'退出'}
			                    leftIcon={
			                    	<Icon name="sign-out" size={24}/>
			                    }
			                />   
			                <Divider />
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#F5F5F5',
	},
	top: {
		height:100,
		borderTopWidth: Util.pixel,
		borderTopColor: '#ddd',
		backgroundColor:'#fff',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	item:{
		height:40,
		justifyContent: 'center',
		borderTopWidth: Util.pixel,
		borderTopColor: '#ddd',
		backgroundColor:'#fff',
		alignItems:'center',
	},
	font:{
		fontSize:15,
		marginLeft:5,
		marginRight:10,
	},
	wrapper:{
		marginTop:30,
	},
	tag:{
		marginLeft:10,
		fontSize:16,
		fontWeight:'bold'
	}
});

function mapStateToProps(state) {
	const { counter, user } = state;

	return {
		counter,
		user,
	}
}

const actions = {
	increment,
	decrement,
	logout
}

export default connect(mapStateToProps, actions)(MyScreen);