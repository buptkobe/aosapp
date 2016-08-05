import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';
import { Actions } from 'react-native-router-flux';
import { logout } from '../actions/loginActions';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemBlock from '../common/ItemBlock';
import Util from '../common/util'

class HomeScreen extends Component {

    render() {
        var width = Math.floor(((Util.size.width - 20) - 50) / 4);
        var Items1 = [];
        var Items2 = [];
        var items = [
            {
                id:1,
                title: '研发',
                partment: '框架研发',
                color: '#126AFF',
            },
            {
                id:2,
                title: '研发',
                partment: 'BU研发',
                color: '#FFD600',
            },
            {
                id:3,
                title: '产品',
                partment: '公共产品',
                color: '#F80728',
            },
            {
                id:4,
                title: '产品',
                partment: 'BU产品',
                color: '#05C147',
            },
            {
                id:5,
                title: '产品',
                partment: '启明星',
                color: '#FF4EB9',
            },
            {
                id:6,
                title: '项目',
                partment: '项目管理',
                color: '#EE810D',
            }
        ];

        for(var i = 0; i < 4; i++){
          Items1.push(
            <ItemBlock
              key={items[i].id}
              title={items[i].title}
              partment={items[i].partment}
              width={width}
              color={items[i].color}
              nav={this.props.navigator}
              />
          );
        };

        for(var i = 4; i < items.length; i++){
          Items2.push(
            <ItemBlock
              key={items[i].id}
              title={items[i].title}
              partment={items[i].partment}
              width={width}
              color={items[i].color}
              nav={this.props.navigator}
              />
          );
        };
        

        return (
            <ScrollView style={styles.container}>
                <View style={styles.itemRow}>
                  {Items1}
                </View>
                <View style={styles.itemRow}>
                  {Items2}
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    },
    itemRow:{
        flexDirection:'row',
        marginBottom:20,
    }
});

function mapStateToProps(state) {
    const { counter, user } = state;

    return {
      counter,
      user,
    }
}

const actions = {
    increment,
    decrement,
    logout
}

export default connect(mapStateToProps, actions)(HomeScreen);