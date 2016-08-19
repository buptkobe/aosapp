import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
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

  grid() {
    Actions.gridscene();
  };

  form() {
    Actions.cellscene();
  };

  sheet() {
    Actions.actionsheet();
  };

  render() {

    return (
    	<View style={styles.container}>
	      	<View style={styles.sbu_view}>
	        	
	        	<TouchableOpacity style={[styles.sbu_flex, styles.sbu_borderRight]} onPress={this.sprintlist.bind(this)}>
	        		<View style={[styles.sub_con_flex, styles.sub_text]}>
	        			<Icon name="calendar" size={24} color="#3d85c6"></Icon>
	        			<Text style={[styles.font16]}>sprint</Text>
	        		</View>
	        	</TouchableOpacity>
	        	<TouchableOpacity style={[styles.sbu_flex, styles.sbu_borderRight]} onPress={this.backloglist.bind(this)}>
	        		<View style={[styles.sub_con_flex, styles.sub_text]}>
	        			<Icon name="tasks" size={24} color="#e69138"></Icon>
	        			<Text style={[styles.font16]}>backlog</Text>
	        		</View>
	        	</TouchableOpacity>
            
	        	<TouchableOpacity style={[styles.sbu_flex, styles.sbu_borderRight]} onPress={this.newbacklog.bind(this)}>
	        		<View style={[styles.sub_con_flex, styles.sub_text]}>
	        			<Icon name="plus" size={24} color="#59bd2e"></Icon>
	        		</View>
	        	</TouchableOpacity>
	        </View>

          <View style={styles.sbu_view}>
            
            <TouchableOpacity style={[styles.sbu_flex, styles.sbu_borderRight]} onPress={this.grid.bind(this)}>
              <View style={[styles.sub_con_flex, styles.sub_text]}>
                <Icon name="table" size={24} color="green"></Icon>
                <Text style={[styles.font16]}>grid</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.sbu_flex, styles.sbu_borderRight]} onPress={this.form.bind(this)}>
              <View style={[styles.sub_con_flex, styles.sub_text]}>
                <Icon name="wpforms" size={24} color="black"></Icon>
                <Text style={[styles.font16]}>form</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.sbu_flex, styles.sbu_borderRight]} onPress={this.sheet.bind(this)}>
              <View style={[styles.sub_con_flex, styles.sub_text]}>
                <Icon name="bars" size={24} color="red"></Icon>
                <Text style={[styles.font16]}>actionsheet</Text>
              </View>
            </TouchableOpacity>
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
  	sbu_view:{
  		height:100,
  		marginLeft: 0,
  		marginRight:0,
  		borderWidth:0.25,
  		borderRadius:0,
  		marginBottom:0,
  		flexDirection:'row',
  		backgroundColor:'white'
  	},
  	
  	sbu_flex:{
  		flex:1,
  	},
  	sbu_borderRight:{
  		borderColor:'gray',
  		borderRightWidth: 0.5,
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
});



export default connect()(FlexBoxGridScreen);