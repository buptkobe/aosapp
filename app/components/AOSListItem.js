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

class AOSListItem extends Component {

    render() {
    	const left = '';
    	if (this.props.leftIcon)
    		left = <Icon name={this.props.leftIcon} size={24} color="#d45353"/>;

        return (
            <TouchableOpacity onPress={this.props.detail}>
                
                <ListItem
                    leftIcon={
                        left
                    }
                    primaryText={this.props.primaryText}
                    secondaryText={this.props.secondaryText}
                    rightIcon={
                        <View style={{marginTop:20}}>
                            <Avatar text={this.props.rightText} size={34}  backgroundColor="#1b64a5"/>
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

export default AOSListItem;