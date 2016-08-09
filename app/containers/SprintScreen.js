import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, ListView} from 'react-native';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';
import { Actions } from 'react-native-router-flux';
import { queryRequest } from '../actions/sprintActions';
import NavigationBar from 'react-native-navbar';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Util from '../common/util';
import Item from '../components/sprint/Item';
import Detail from '../components/sprint/Detail';
import BacklogItem from '../components/backlog/BacklogItem';
import ListExample from '../components/ListExample';
import { ListItem,Divider,Icon } from 'react-native-material-ui';
var GiftedListView = require('react-native-gifted-listview');

class SprintScreen extends Component {
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
		this.props.queryRequest(username);
		setTimeout(() => {
			callback(this.props.sprint.sprints);
		}, 1000);
	  };


	  /**
	   * When a row is touched
	   * @param {object} rowData Row data
	   */
	  detail(rowData) {
	    console.log(rowData, ' pressed');
	    Actions.backloglistbysprint({sprintid:rowData.cguid});
	  };

	  /**
	   * Render a row
	   * @param {object} rowData Row data
	   */
	  _renderRowView(rowData) {
	  	var left;
	  	if (rowData.iactivename == '非活动')
	  		left = 'pause';
	  	else left = 'hourglass-full';
	    return (
	    	<TouchableOpacity onPress={this.detail.bind(this, rowData)}>
	    		
		    	<ListItem
	                key={rowData.cguid}
	                leftIcon={
	                    <Icon name={left} size={18}/>
	                }
	                primaryText={rowData.cname}
	                secondaryText={rowData.dstart + '--' + rowData.dend}
	                secondaryTextMoreLine={[{
	                    text: rowData.cremark,

	                }]}
	                rightIcon={
	                    <View style={{marginTop:20}}>
	                    	<Text>{rowData.teamname}</Text>
	                    </View>
	                }
	            />   
	            <Divider />
            </TouchableOpacity>
	    );
	  };

	  render() {
	  	var rightButtonConfig = {
		    title: '...',
		    handler: function onNext() {
		      alert('hello!');
		    }
	  	};
	  	var leftButtonConfig = 
	        <TouchableOpacity style={{justifyContent: 'center',marginLeft:10}}
	        	onPress={()=>{Actions.pop()}} >
	          <Icon name="arrow-back" size={18}></Icon>
	        </TouchableOpacity>;

	  	var titleConfig = {
		    title: 'sprint列表',
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
}

const styles = StyleSheet.create({
    container:{
	    flex:1,
	    backgroundColor: '#fff',
  	},
  	search:{
	    height:35,
	    borderWidth:Util.pixel,
	    borderColor:'#ccc',
	    paddingLeft:10,
	    borderRadius:6,
	    backgroundColor:'#fff',
  	},
});

function mapStateToProps(state) {
    const { sprint, user } = state;

    return {
      sprint,
      user,
    }
}

const actions = {
    queryRequest,
}

export default connect(mapStateToProps, actions)(SprintScreen);