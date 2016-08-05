import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { queryRequest } from '../actions/backlogActions';
import Util from '../common/util';
import BacklogItem from '../components/backlog/BacklogItem';
import ListExample from '../components/ListExample';

var GiftedListView = require('react-native-gifted-listview');


class BacklogListScreen extends Component {

  /**
   * Will be called when refreshing
   * Should be replaced by your own logic
   * @param {number} page Requested page to fetch
   * @param {function} callback Should pass the rows
   * @param {object} options Inform if first load
   */
  _onFetch(page = 1, callback, options) {
    /*setTimeout(() => {
      var rows = ['row '+((page - 1) * 3 + 1), 'row '+((page - 1) * 3 + 2), 'row '+((page - 1) * 3 + 3)];
      if (page === 3) {
        callback(rows, {
          allLoaded: true, // the end of the list is reached
        });
      } else {
        callback(rows);
      }
    }, 1000); // simulating network fetching*/
	const username = this.props.user.user.name;
  const cteamguid = this.props.user.user.devgroupid;
	this.props.queryRequest(username, cteamguid);
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
            idifficulty={rowData.idifficulty}/>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        
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
    queryRequest,
}

export default connect(mapStateToProps, actions)(BacklogListScreen);