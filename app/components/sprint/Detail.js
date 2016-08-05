import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';
import Util from '../../common/util';
import NavigationBar from 'react-native-navbar';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

class Detail extends Component {
	


    render() {
    	var rightButtonConfig = {
		    title: '...',
		    handler: function onNext() {
		      alert('hello!');
		    }
	  	};
	  	var leftButtonConfig = {
		    title: <Icon name="user"></Icon>,
		    handler: function onBack() {
		      Actions.pop();
		    },
	  	};

	  	var titleConfig = {
		    title: 'Hello, world',
	  	};
    	var content = {
    		message: this.props.message,
    		username: this.props.username,
    		time: this.props.time
    	};
    	console.log(content);
    	return (
    		<View style={{ flex: 1, }}>
		      	<NavigationBar
		        	title={titleConfig}
		        	rightButton={rightButtonConfig}
		        	leftButton={leftButtonConfig} 
		        	/>
		        <ScrollView>

			        <View style={styles.content}>
			          	<Text style={{lineHeight:20,}}>{content.message}</Text>
			        </View>

			        <View style={[styles.luokuan, {marginTop:25}]}>
			          	<View style={{flex:1}}></View>
			          	<Text style={[styles.text, {color:'#007AFF'}]}>{content.username}</Text>
			        </View>

			        <View style={styles.luokuan}>
			          	<View style={{flex:1}}></View>
			          	<Text style={[styles.text, {color:'#3BC1FF'}]}>{content.time}</Text>
			        </View>

		      	</ScrollView>
	      	</View>
	    );
    }
}

const styles = StyleSheet.create({
    content:{
	    marginTop:20,
	    marginLeft:15,
	    marginRight:15,
	    opacity:0.85,
  	},
  	luokuan:{
	    flex:1,
	    flexDirection:'row',
	    marginRight:20,
  	},
  	text:{
	    lineHeight:20,
	    width:90
  	}
});

export default Detail;