import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity,ScrollView} from 'react-native';
import Util from '../../common/util';
import { Actions } from 'react-native-router-flux';
import {showDetail} from '../../actions/sprintActions';

class Item extends Component {
	detail = () => { 
		console.log(this.props.data);
		
		Actions.detail(this.props.data);
	};

    render() {
    	return (
	        <TouchableOpacity onPress={this.detail.bind(this)}>
		        <View style={styles.item}>
		          	<View style={styles.width55}>
		     		<Text style={{color:'#fff', fontSize:18,fontWeight:'bold'}}>{this.props.name.substr(0,1)}</Text>
	     			</View>
		          <View style={{flexDirection:'column',flex:1}}>
		            <Text numberOfLines={2} style={styles.text}>
		              {this.props.text}
		            </Text>
		            <Text style={styles.date}>
		              {this.props.date}
		            </Text>
		          </View>
		          <View numberOfLines={1} style={styles.m10}>
		            <Text style={styles.name}>{this.props.name}</Text>
		          </View>
		        </View>
	      	</TouchableOpacity>
	    );
    }
}

const styles = StyleSheet.create({
    item:{
	    height:80,
	    padding:5,
	    borderBottomWidth: Util.pixel,
	    borderBottomColor: '#ddd',
	    flexDirection:'row',
	    alignItems:'center',
  	},
  	img:{
	    width:50,
	    height:50,
	    borderRadius:4,
  	},
  	width55:{
	    width:50,
	    height:50,
	    borderRadius:4,
	    marginLeft:10,
	    alignItems:'center',
	    justifyContent:'center',
	    backgroundColor: '#05C147',
	    marginRight:10,
  	},
  	text:{
	    flex:1,
	    marginBottom:5,
	    opacity:0.7
  	},
  	date:{
	    color:'#ccc',
	    fontSize:11,
  	},
  	m10:{
	    marginLeft:10
  	},
  	name:{
	    color:'#929292',
	    fontSize:13
  	}
});

export default Item;