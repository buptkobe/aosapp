import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { queryByPV } from '../../actions/backlogActions';
import Util from '../../common/util';
import { Actions } from 'react-native-router-flux';
import BacklogItem from './BacklogItem';
import ListExample from '../ListExample';
import NavigationBar from 'react-native-navbar';
import { Icon } from 'react-native-material-ui';
import SideMenu from 'react-native-side-menu';
import Menu from '../Menu';

var GiftedListView = require('react-native-gifted-listview');


class BacklogListByPV extends Component {

  state = {
    isOpen: false,
    selectedProject: null,
    selectedVersion: null
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
    
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedProject: item.projectradio,
      selectedVersion: item.versionradio,
    });
    this.props.queryByPV(item.projectradio, item.versionradio);
    
    setTimeout(() => {
      this.refs.listview._postRefresh(this.props.backlog.backlogsall);
    }, 1000);
  }

  _onFetch(page = 1, callback, options) {
  	this.props.queryByPV(this.state.selectedProject, this.state.selectedVersion);
  	setTimeout(() => {
  		callback(this.props.backlog.backlogsall);
  	}, 2000);
  };


  /**
   * When a row is touched
   * @param {object} rowData Row data
   */
  _onPress(rowData) {
    console.log(rowData+' pressed');
  };

  /**
   * Render a row
   * @param {object} rowData Row data
   */
  _renderRowView(rowData) {
    return (
        <BacklogItem
	          data={rowData}
	         
	          key={rowData.cguid}
	          istatus={rowData.istatus}
	          cbrief={rowData.cbrief}
	          csubmitter={rowData.csubmitter}
            cmodulename={rowData.cmodulename}
            idifficulty={rowData.idifficulty}
            dregdate={rowData.dregdate}/>
    );
  };

   /**
   * Render a view when there is no row to display at the first fetch
   * @param {function} refreshCallback The function to call to refresh the listview
   */
  _renderEmptyView(refreshCallback) {
    return (
      <View style={styles.defaultView}>
        <Text style={styles.defaultViewTitle}>
          没有可显示的数据
        </Text>

        
      </View>
    );
  };

  render() {
    var rightButtonConfig = 
        <TouchableOpacity style={{justifyContent: 'center',marginLeft:10}} 
          onPress={this.toggle.bind(this)} >
          <Icon name="search" size={18} style={{marginRight:10}}></Icon>
        </TouchableOpacity>;
    var leftButtonConfig = 
          <TouchableOpacity style={{justifyContent: 'center',marginLeft:10}} 
            onPress={()=>{Actions.pop()}} >
            <Icon name="arrow-back" size={18}></Icon>
          </TouchableOpacity>;

    var titleConfig = {
        title: 'backlog列表',
    };

    const menu = <Menu onItemSelected={this.onMenuItemSelected.bind(this)} />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}
        menuPosition="right">
          <View style={styles.container}>
            <NavigationBar
                title={titleConfig}
                style={{height:64,borderBottomWidth:1}}
                leftButton={leftButtonConfig}
                rightButton={rightButtonConfig}
              />
            <GiftedListView
              ref="listview"
              rowView={this._renderRowView.bind(this)}
              onFetch={this._onFetch.bind(this)}
              firstLoader={true} // display a loader for the first fetching
              pagination={false} // enable infinite scrolling using touch to load more
              refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
              withSections={false} // enable sections
              customStyles={{
                paginationView: {
                  backgroundColor: '#eee',
                },
              }}

              refreshableTintColor="blue"
              enableEmptySections={true}
              emptyView={this._renderEmptyView}
            />
          </View>
      </SideMenu>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  row: {
    padding: 10,
    height: 44,
  },
  defaultView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  defaultViewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

function mapStateToProps(state) {
    const { backlog, user } = state;

    return {
      backlog,
      user,
    }
}

const actions = {
    queryByPV,
}

export default connect(mapStateToProps, actions)(BacklogListByPV);