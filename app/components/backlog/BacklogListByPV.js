import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { queryByPV } from '../../actions/backlogActions';
import Util from '../../common/util';
import { Actions } from 'react-native-router-flux';
import BacklogItem from './BacklogItem';
import ListExample from '../ListExample';
import NavigationBar from 'react-native-navbar';
import { Icon } from 'react-native-material-ui';

var GiftedListView = require('react-native-gifted-listview');


class BacklogListByPV extends Component {

  _onFetch(page = 1, callback, options) {
    
	const sprintid = this.props.sprintid;
	this.props.queryByPV(sprintid);
	setTimeout(() => {
		callback(this.props.backlog.backlogs);
	}, 1000);
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
	          component={ListExample}
	          key={rowData.cguid}
	          istatus={rowData.istatus}
	          cbrief={rowData.cbrief}
	          csubmitter={rowData.csubmitter}
            cmodulename={rowData.cmodulename}
            idifficulty={rowData.idifficulty}
            />
    );
  };

  render() {
    var rightButtonConfig = {
        title: '...',
        handler: function onNext() {
          alert('hello!');
        }
    };
    var leftButtonConfig = {
        title: <Icon name="arrow-back" size={18}></Icon>,
        handler: function onBack() {
          Actions.pop();
        },
    };

    var titleConfig = {
        title: 'backlog列表',
    };

    return (
      <View style={styles.container}>
        <NavigationBar
            title={titleConfig}
            style={{height:64,borderBottomWidth:1}}
            leftButton={leftButtonConfig}
          />
        <GiftedListView
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
        />
      </View>
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