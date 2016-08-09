import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import FacebookTabBar from './FacebookTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Divider } from 'react-native-material-ui';

class FacebookExample extends Component {
  render() {
    return <ScrollableTabView
      style={{marginTop: 5, }}
      initialPage={0}
      renderTabBar={() => <FacebookTabBar />}
      >
      <ScrollView tabLabel="ios-paper" style={styles.tabView}>
        <Text style={styles.text}>用户故事</Text>
        <View style={styles.card}>
          <ScrollView>
          <Text>{this.props.userstory}</Text>
          </ScrollView>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-people" style={styles.tabView}>
        <Text style={styles.text}>开发规约</Text>
        <View style={styles.card}>
          <Text>{this.props.devrule}</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
        <Text style={styles.text}>测试规约</Text>
        <View style={styles.card}>
          <Text>{this.props.testrule}</Text>
        </View>
      </ScrollView>
      
      <ScrollView tabLabel="ios-list" style={styles.tabView}>
        <Text style={styles.text}>其他信息</Text>
        <View style={styles.card}>
          <Text>添加时间：{this.props.inserttime}</Text>
          <Text>{'\n'}修改时间：{this.props.updatetime}</Text>
        </View>
      </ScrollView>
    </ScrollableTabView>
  }
};

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 200,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  text: {
    marginLeft: 5,
  }
});

export default FacebookExample;