import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { Grids } from 'rn-weui/src';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 84,
  },
})

class GridScene extends Component {
  

  	render() {
  		const grids = [{
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_button.png' }} />,
		    label: 'Button',
		    onPress() { Actions.cellscene() },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_cell.png' }} />,
		    label: 'Cell',
		    onPress() { Actions.tabbar() },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_toast.png' }} />,
		    label: 'Toast',
		    onPress() { Actions.tabbar() },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_dialog.png' }} />,
		    label: 'Dialog',
		    onPress() { Actions.tabbar() },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_progress.png' }} />,
		    label: 'Progress',
		    onPress() { Actions.tabbar() },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_msg.png' }} />,
		    label: 'Msg',
		    onPress() { Actions.tabbar() },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_article.png' }} />,
		    label: 'Article',
		    onPress() { Actions.tabbar() },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_actionSheet.png' }} />,
		    label: 'ActionSheet',
		    onPress() { Actions.tabbar() },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_icons.png' }} />,
		    label: 'Icons',
		    onPress() { Actions.tabbar() },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_panel.png' }} />,
		    label: 'Panel',
		    onPress() { Actions.tabbar() },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_tab.png' }} />,
		    label: 'Tab',
		    onPress() { Actions.tabbar() },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_search_bar.png' }} />,
		    label: 'SearchBar',
		    onPress() { Actions.tabbar() },
		    style: {height:100}
		  }];
  		return (
	    	<View style={styles.wrapper}>
	      		<Grids data={grids} />
	    	</View>
	  	)
	}
};

export default GridScene