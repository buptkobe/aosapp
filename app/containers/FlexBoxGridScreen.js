import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import { connect } from 'react-redux';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

class FlexBoxGridScreen extends Component {

  backloglist() {
    Actions.backloglistbypv();
  };

  newbacklog() {
    Actions.newbacklogform(); 
  };

  sprintlist() {
    Actions.sprintlist();
  };

  render() {

    return (
    	<View style={styles.container}>
	      	<View style={styles.sbu_view}>
	        	
	        	<TouchableHighlight style={[styles.sbu_flex, styles.sbu_borderRight]} onPress={this.sprintlist.bind(this)}>
	        		<View style={[styles.sub_con_flex, styles.sub_text]}>
	        			<Icon name="calendar" size={24} color="#3d85c6"></Icon>
	        			<Text style={[styles.font16]}>sprint</Text>
	        		</View>
	        	</TouchableHighlight>
	        	<TouchableHighlight style={[styles.sbu_flex, styles.sbu_borderRight]} onPress={this.backloglist.bind(this)}>
	        		<View style={[styles.sub_con_flex, styles.sub_text]}>
	        			<Icon name="tasks" size={24} color="#e69138"></Icon>
	        			<Text style={[styles.font16]}>backlog</Text>
	        		</View>
	        	</TouchableHighlight>
            
	        	<TouchableHighlight style={[styles.sbu_flex, styles.sbu_borderRight]} onPress={this.newbacklog.bind(this)}>
	        		<View style={[styles.sub_con_flex, styles.sub_text]}>
	        			<Icon name="plus" size={24} color="#59bd2e"></Icon>
	        		</View>
	        	</TouchableHighlight>
	        </View>

          
	        
        </View>
    );
  }
};
const styles = StyleSheet.create({
	//container
  	container:{
    	backgroundColor:'#F2F2F2',
    	flex:1,
  	},
  	//slider
  	wrapper: {
    	height:80,
  	},
  	slide: {
    	height:80,
    	resizeMode: Image.resizeMode.contain,
  	},
  	//sbu
  	sbu_view:{
  		height:100,
  		marginLeft: 0,
  		marginRight:0,
  		borderWidth:0.25,
  		borderRadius:0,
  		marginBottom:0,
  		flexDirection:'row',
  		borderColor:'gray',
  		backgroundColor:'white'
  	},
  	sbu_red:{
  		backgroundColor: '#FA6778',
  		borderColor:'#FA6778',
  		marginTop:-70,
  	},

  	sbu_blue:{
  		backgroundColor: '#3D98FF',
  		borderColor:'#3D98FF',
  	},

  	sbu_green:{
  		backgroundColor: '#5EBE00',
  		borderColor:'#5EBE00',
  	},

  	sbu_yellow:{
  		backgroundColor: '#FC9720',
  		borderColor:'#FC9720',
  	},
  	sbu_flex:{
  		flex:1,
  	},
  	sbu_borderRight:{
  		borderColor:'gray',
  		borderRightWidth: 0.5,
  	},
  	sbu_icon_img:{
  		height:40,
  		width:40,
  		resizeMode:Image.resizeMode.contain,
  	},
  	sub_con_flex:{
  		flex:1,
  		justifyContent: 'center',
  		alignItems: 'center',
  	},
  	sub_text:{
  		justifyContent:'center',
  	},
  	font16:{
  		fontSize:16,
  		//color:'#FFF',
      marginTop: 10
  	},
  	sbu_borderBottom:{
  		borderBottomWidth:0.5,
  		borderBottomColor:'#fff',
  	},
  	img_view:{
  		height:62,
  		marginLeft:5,
  		marginRight:5,
  		flexDirection: 'row',
      marginBottom:20,
      backgroundColor:'#fff',
  	},
  	img_flex:{
  		flex:1,
  		borderWidth:1,
  		borderColor:'#ccc',
  	},
  	img_wh: {
  		height:59,
      borderRightWidth:0,
  		resizeMode:Image.resizeMode.contain,
  	}
});



export default connect()(FlexBoxGridScreen);