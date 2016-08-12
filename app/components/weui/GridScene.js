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
		    onPress() { return __NAV__.push({ scene: 'Toast', title: 'Toast' }) },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_dialog.png' }} />,
		    label: 'Dialog',
		    onPress() { return __NAV__.push({ scene: 'Dialog', title: 'Dialog' }) },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_progress.png' }} />,
		    label: 'Progress',
		    onPress() { return __NAV__.push({ scene: 'Progress', title: 'Progress' }) },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_msg.png' }} />,
		    label: 'Msg',
		    onPress() { return __NAV__.push({ scene: 'Msg', title: 'Msg' }) },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_article.png' }} />,
		    label: 'Article',
		    onPress() { return __NAV__.push({ scene: 'Article', title: 'Article' }) },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_actionSheet.png' }} />,
		    label: 'ActionSheet',
		    onPress() { return __NAV__.push({ scene: 'ActionSheet', title: 'ActionSheet' }) },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_icons.png' }} />,
		    label: 'Icons',
		    onPress() { return __NAV__.push({ scene: 'Icons', title: 'Icons' }) },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_panel.png' }} />,
		    label: 'Panel',
		    onPress() { return __NAV__.push({ scene: 'Panel', title: 'Panel' }) },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_tab.png' }} />,
		    label: 'Tab',
		    onPress() { return __NAV__.push({ scene: 'Tab', title: 'Tab' }) },
		    style: {height:100}
		  }, {
		    icon: <Image style={{ width: 28, height: 28 }} source={{ uri: 'http://weui.github.io/weui/images/icon_nav_search_bar.png' }} />,
		    label: 'SearchBar',
		    onPress() { return __NAV__.push({ scene: 'SearchBar', title: 'SearchBar' }) },
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