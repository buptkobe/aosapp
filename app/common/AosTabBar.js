'use strict';

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TabBar from 'react-native-xtabbar';

class AosTabBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
            <TabBar style={styles.content}>
                <TabBar.Item
                    icon={require('./image/start_normal.png')}
                    selectedIcon={require('./image/start_hightlight.png')}
                    onPress={() => {
                        console.log("first onPress");
                    }}
                    title='首页'>
                    <View style={styles.text}>
                        <Text style={{fontSize: 18}}>Home</Text>
                    </View>
                </TabBar.Item>

                <TabBar.Item
                    icon={require('./image/start_normal.png')}
                    selectedIcon={require('./image/start_hightlight.png')}
                    title='定位'>
                    <View style={styles.text}>
                        <Text style={{fontSize: 18}}>Location</Text>
                    </View>
                </TabBar.Item>

                <TabBar.Item
                    icon={require('./image/start_normal.png')}
                    selectedIcon={require('./image/start_hightlight.png')}
                    title='发现'>
                    <View style={styles.text}>
                        <Text style={{fontSize: 18}}>Find</Text>
                    </View>
                </TabBar.Item>

                <TabBar.Item
                    icon={require('./image/start_normal.png')}
                    selectedIcon={require('./image/start_hightlight.png')}
                    title='我'>
                    <View style={styles.text}>
                        <Text style={{fontSize: 18}}>Me</Text>
                    </View>
                </TabBar.Item>
            </TabBar>
        </View>
    );
  }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    content: {
        flex: 1,
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default AosTabBar;