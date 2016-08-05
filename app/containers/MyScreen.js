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
		var tags = ['U', 'A', 'D', 'M'];
		var items = ['修改密码', '增加联系人', '删除联系人',  '发布公告'];
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
					<View style={{flexDirection: 'row',marginTop:25,marginLeft:10}}>
						<Icon name="user" size={40} color="#17B4FF"></Icon>
						<Text style={{marginLeft:20,fontSize:20}}>{user.user.name}</Text>
					</View>
					<View style={{flex:1,alignItems:'flex-end',marginTop:25}}>
						<Icon name="angle-right" size={30}></Icon>
					</View>
					
				</View>
				<View style={styles.wrapper}>
					{JSXDOM}
				</View>

				<View style={{marginTop:30}}>
					<TouchableOpacity onPress={this._clear}>
						<View style={[styles.item, {flexDirection:'row'}]}>
							<Text style={[styles.tag, {color: colors[i]}]}>Q</Text>
							<Text style={[styles.font,{flex:1}]}>退出登录</Text>
						</View>
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
		height:80,
		borderTopWidth: Util.pixel,
		borderTopColor: '#ddd',
		backgroundColor:'#fff',
		flexDirection: 'row',
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