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
import { ListItem,Toolbar,Subheader, List, IconToggle, Avatar,Icon,Divider } from 'react-native-material-ui';

const data = {
    text: ['Inbox', 'Sent Items'],
    'text-secondary': [{
        primaryText: 'SpamAny items here have been consideredAny items here have been considered',
        secondaryText: 'Any items here have been considered'
    }, {
        primaryText: 'Drafts',
        secondaryText: 'View any unsent emails'
    }],
    'avatar-text': [
        {primaryText: 'Jsa', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'},
        {primaryText: 'Pixeliris', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/pixeliris/128.jpg'},
        {primaryText: 'Ok', secondaryText: 'Supporting text',  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg'},
        {primaryText: 'Marcosmoralez', secondaryText: 'Supporting text',  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcosmoralez/128.jpg'}
    ],
    
};

class ListExample extends Component {

    render() {
        return (
            <ScrollView style={{backgroundColor: '#fff'}}>
                <Subheader
                    text="this is sub header"
                />
                <Divider />
                <ListItem
                    key={1}
                    leftAvatar={<Avatar image={<Image source={require('../common/image/logo.jpg')} />}/>}
                    primaryText="Some component"
                />
                <Divider />
                <ListItem
                    key={2}
                    primaryText={data.text[0]}
                    secondaryText={data.text[1]}
                    
                    leftAvatar={<Avatar image={<Image source={require('../common/image/logo.jpg')} />}/>}
                    rightIcon={
                        <Icon name="work" size={24}/>
                    }
                    leftIcon={
                        <Icon name="work" size={24}/>
                    }
                    />
                <Divider />
                <ListItem
                    key={3}
                    leftIcon={
                        <Icon name="star" size={24}/>
                    }
                    primaryText="backlog设计，修改服务实现少夫人说胜多负少发广告人"
                    secondaryText="赵复科"
                    secondaryTextMoreLine={[{
                        text: "2016-7-20",

                    }]}
                    rightIcon={
                        <View style={{marginTop:20}}>
                            <Avatar text="5" size={34}/>
                        </View>
                    }
                />   
                <Divider />
                <ListItem
                    key={4}
                    leftIcon={
                        <Icon name="star-border" size={24}/>
                    }
                    primaryText="Some component"
                />   
                <Divider />
                <ListItem
                    key={5}
                    leftIcon={
                        <Icon name="star-half" size={24}/>
                    }
                    primaryText="Some component"
                />   
                <Divider />
                <ListItem
                    key={6}
                    leftIcon={
                        <Icon name="stars" size={24}/>
                    }
                    primaryText="Some component"
                />  
                <Divider />
                <ListItem
                    key={7}
                    leftIcon={
                        <Icon name="done" size={24}/>
                    }
                    primaryText="Some component"
                    rightIcon={
                        <Avatar text="12" size={44}/>
                    }
                />   
                <Divider />
                <ListItem
                    key={8}
                    leftIcon={
                        <Icon name="undo" size={24}/>
                    }
                    primaryText="Some component"
                    rightIcon={
                        <View>
                        <Avatar text="12" size={24}/>
                        <Avatar text="12" size={24}/>
                        </View>
                    }
                />   
                <Divider />
                <ListItem
                    key={9}
                    leftIcon={
                        <Icon name="undo" size={24}/>
                    }
                    primaryText="Some component"
                    rightIcon={
                        <View>
                        <Avatar text="12" size={24}/>
                        <Avatar text="12" size={24}/>
                        </View>
                    }
                />   
                <Divider />
            </ScrollView>
        );
    };
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    }
});

export default ListExample;