import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  }
});

class LaunchScreen extends Component {

	componentWillMount = () => {
		Actions.tabbar();
	};
	
  	render(){
	  	
	    return (
	      <View {...this.props}  style={styles.container}>
	        <Text>Aisino AOS</Text>
	        <Button onPress={()=>Actions.login({data:"Custom data", title:"Custom title" })}>Go to Login page</Button>
	        <Button onPress={Actions.register}>Go to Register page</Button>
	        <Button onPress={Actions.register2}>Go to Register page without animation</Button>
	        <Button onPress={()=>Actions.error("Error message")}>Popup error</Button>
	        <Button onPress={Actions.tabbar}>Go to TabBar page</Button>
	        <Button onPress={Actions.switcher}>Go to switcher page</Button>
	        <Button onPress={Actions.pop}>back</Button>
	      </View>
	    );
  	}
}

export default LaunchScreen;
