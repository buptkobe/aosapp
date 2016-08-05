import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import { ListItem,Avatar,Icon,Divider } from 'react-native-material-ui';
import { Actions } from 'react-native-router-flux';

class BacklogItem extends Component {
	detail = () => { 
		console.log(this.props.data);
		
		Actions.backlogdetail(this.props.data);
        //Actions.simpleexample();
	};

    render() {
    	let lficon;
    	if (this.props.istatus === 1)
    		lficon = "star-half";
    	else lficon = "done";
        return (
            <TouchableOpacity onPress={this.detail.bind(this)}>
                
                <ListItem
                    leftIcon={
                        <Icon name={lficon} size={24} color="#d45353"/>
                    }
                    primaryText={this.props.cbrief}
                    secondaryText={this.props.csubmitter + '   ' + this.props.cmodulename}
                    rightIcon={
                        <View style={{marginTop:20}}>
                            <Avatar text={'' + this.props.idifficulty} size={34}  backgroundColor="#1b64a5"/>
                        </View>
                    }
                />   
                <Divider />
                
            </TouchableOpacity>
        );
    };
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    }
});

export default BacklogItem;