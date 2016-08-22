'use strict';

import React, {Component} from 'react';
import {StatusBarIOS, Text, View, Navigator, StyleSheet, Platform} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon as MIcon } from 'react-native-material-ui';
import { Router, Scene ,Reducer, Actions, Modal} from 'react-native-router-flux';

import LoginScreen from './containers/LoginScreen';
import HomeScreen from './containers/HomeScreen';
import FlexBoxGridScreen from './containers/FlexBoxGridScreen';
import NavigationDrawer from './common/NavigationDrawer';
import Register from './containers/Register';
import MyScreen from './containers/MyScreen';
import SprintScreen from './containers/SprintScreen';
import GiftedListViewScreen from './containers/GiftedListViewScreen';
import BacklogListScreen from './containers/BacklogListScreen';
import BurndownScreen from './containers/BurndownScreen';
import Detail from './components/sprint/Detail';
import ListExample from './components/ListExample';
import BacklogDetail from './components/backlog/BacklogDetail';
import LaunchScreen from './containers/LaunchScreen';
import SimpleExample from './components/backlog/SimpleExample';
import BacklogAdd from './components/backlog/BacklogAdd';
import NewBacklogForm from './components/form/NewBacklogForm';
import BacklogListBySprint from './components/backlog/BacklogListBySprint';
import BacklogListByPV from './components/backlog/BacklogListByPV';
import GridScene from './components/weui/GridScene';
import CellScene from './components/weui/CellScene';
import SearchBarScene from './components/weui/SearchBarScene';
import StatusBar from './components/weui/StatusBar';
import ActionSheetScene from './components/weui/ActionSheetScene';
import PVSelect from './components/PVSelect';

class TabIcon extends Component {
  render() {
    const color = this.props.selected ? '#3d85c6' : '#808080';
    const backgroundColor = this.props.selected ? '#FFFFFF' : '#FFFFFF';

    return (
      <View style={[styles.tabItem, {backgroundColor: backgroundColor}]}>
        <Icon style={{color: color}} name={this.props.iconName || "circle"} size={15} />
        <Text style={{color: color, fontSize: 10}}>{this.props.title}</Text>
      </View>
    );
  }
}

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

// define this based on the styles/dimensions you use
const getSceneStyle = function (/* NavigationSceneRendererProps */ props, computedProps) {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

export default class MyApp extends Component {
  componentDidMount() {
    if (Platform.OS == 'IOS')
      StatusBar.setBarStyle('light-content');
  }

  rightHandle () {
    alert("Right button1") 
  }

  render() {
    const { isAuthenticated } = this.props;
    if (!isAuthenticated)
      return <LoginScreen />;

    return (
      
        <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
          <Scene key="modal" component={Modal} >

            <Scene key="root" hideNavBar hideTabBar>
                
                <Scene key="actionsheet" component={ActionSheetScene} title="actionsheet" initial={false}/>
                <Scene key="statusbar" component={StatusBar} title="status" initial={false}/>
                <Scene key="searchbarscene" component={SearchBarScene} title="cell" initial={false}/>
                <Scene key="cellscene" component={CellScene} title="cell" initial={false}/>
                <Scene key="gridscene" component={GridScene} title="Grid" initial={false}/>
                <Scene key="register" component={Register} title="Register"/>
                <Scene key="listexample" component={ListExample} title="List1"/>
                <Scene key="backlogdetail" component={BacklogDetail} title="任务详情"/>
                <Scene key="detail" component={Detail} title="任务详情"/>
                <Scene key="newbacklogform" component={NewBacklogForm} title="new backlog"/>
                <Scene key="launch" component={LaunchScreen} />
                <Scene key="simpleexample" component={SimpleExample} title="simple"/>
                <Scene key="backlogadd" component={BacklogAdd} title="新增backlog"/>
                <Scene key="sprintlist" component={SprintScreen} title="sprintlist"/>
                <Scene key="backloglistbysprint" component={BacklogListBySprint} title="backloglistbysprint"/>
                <Scene key="pvselect" component={PVSelect} title="pvselect"/>
                <Scene key="backloglistbypv" component={BacklogListByPV} title="backlog列表"/>
                
                <Scene key="tabbar"  initial={true}>

                  <Scene key="main" tabs={true} tabBarStyle={styles.tabBar} default="backlog" duration={1} >
                    
                    <Scene
                      key="backlog"
                      title="任 务"
                      icon={TabIcon}
                      iconName="home"
                      component={BacklogListScreen} 
                      />

                     <Scene
                        key="burndown"
                        title="燃尽图"
                        icon={TabIcon}
                        iconName="bar-chart"
                        component={BurndownScreen}
                        rightTitle="..." 
                        onRight={()=>Actions.pvselect()}
                        /> 
                       

                      <Scene
                      key="discovery"
                      title="发 现"
                      icon={TabIcon}
                      iconName="search"
                      component={FlexBoxGridScreen} />

                      <Scene
                      key="me"
                      title="我"
                      icon={TabIcon}
                      iconName="user"
                      component={MyScreen} />
                  </Scene>
                  
                </Scene>
            </Scene>
          </Scene>
        </Router>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    borderTopColor: '#e1e1e1',
    borderTopWidth: 1,
    backgroundColor: '#FFFFFF',
    opacity: 0.98
  },
  navigationBarStyle: {
    backgroundColor: '#00f'
  },
  navigationBarTitleStyle: {
    color:'white'
  },
  navigationBarleftButtonTextStyle:{
    color:'white'
  },
  navTitleStyle: {
    color: 'white',
   
    fontSize: 20
  },
  tabItem: {
    flex: 1,
    width: 100,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = function(state) {
  const { user } = state;
  return {
    isAuthenticated: user.isAuthenticated,
  }
};

export default connect(mapStateToProps)(MyApp);
