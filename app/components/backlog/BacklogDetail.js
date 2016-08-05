import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Text,
    Image
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import { Actions} from 'react-native-router-flux';
import { ListItem,Subheader, Icon,Divider } from 'react-native-material-ui';
import SimpleExample from './SimpleExample';
import FacebookExample from './FacebookExample';

class BacklogDetail extends Component {

	

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
		    title: 'backlog详情',
	  	};
        return (
        	<View style={{ flex: 1, }}>
		      	<NavigationBar
		      		title={titleConfig}
		      		style={{height:64}}
		      		leftButton={leftButtonConfig}
		      	/>
	            <ScrollView style={{backgroundColor: '#fff'}}>
	                
	                <Divider />
	                <ListItem
	                    primaryText={this.props.cbrief}
	                    leftIcon={
	                    	<Text>标题</Text>
	                    }
	                />
	                <Divider />
	                <ListItem
	                    primaryText={this.props.cmodulename}
	                    leftIcon={
	                    	<Text>模块</Text>
	                    }
	                    />
	                <Divider />
	                <ListItem
	                    primaryText={this.props.csubmitter}
	                    leftIcon={
	                    	<Text>负责人</Text>
	                    }
	                />   
	                <Divider />
	                <View style={{height:300}}>
	                	<FacebookExample
	                		userstory={this.props.cremark}
	                		devrule={this.props.cattd}
	                		testrule={this.props.ctestmemo}
	                		inserttime={this.props.dregdate}
	                		updatetime={this.props.dmodifydate}/>
	                </View>
	                <Divider />
	                
	            </ScrollView>
            </View>	
        );
    };
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    }
});

export default BacklogDetail;