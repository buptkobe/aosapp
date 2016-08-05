import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';

class ItemBlock extends Component {

	itemPress = () => {
		Actions.listexample();
	};

  	render() {

	    var size ={
	      	width: parseInt(this.props.width),
	      	height: parseInt(this.props.width),
	      	backgroundColor: this.props.color,
	    };
	    return (
	      	<TouchableHighlight underlayColor="#fff" onPress={this.itemPress.bind(this)}>
	        	<View style={[styles.itemBlock, size]}>
	          		<View>
	            		<Text style={styles.font18}>{this.props.title}</Text>
	          		</View>
	          		<View>
	            		<Text style={styles.font10}>{this.props.partment}</Text>
	          		</View>
	        	</View>
	      	</TouchableHighlight>
	    );
  	}
};
const styles = StyleSheet.create({
	itemBlock:{
	    justifyContent:'center',
	    alignItems:'center',
	    borderRadius:5,
	    marginLeft:10,
  	},
  	font18:{
	    color:'#fff',
	    fontSize:18,
	    fontWeight:'500',
  	},
  	font10:{
	    color:'#fff',
	    fontSize:10,
  	},
});


export default ItemBlock;