import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Text,
    Image
} from 'react-native';
import {
    Subheader, Divider, List, Icon, Avatar, COLOR, IconToggle, Button
} from 'react-native-material-design';


class ButtonExample extends Component {

    render() {
        return (
           <View>
                <Subheader text="Light Theme"/>
                <View style={styles.content}>
                    <Button text="NORMAL" />
                    <Button text="NORMAL RAISED"  raised/>
                    <Button text="DISABLED" disabled/>
                    <Button text="DISABLED RAISED"  disabled raised/>
                </View>
                <Subheader text="Dark Theme"/>
                <View style={{
                        backgroundColor: COLOR.paperGrey900.color,
                        padding: 16
                    }}>
                    <Button text="NORMAL FLAT"  theme="dark"/>
                    <Button text="DISABLED FLAT"  disabled theme="dark"/>
                    <Button text="NORMAL RAISED"  theme="dark" raised/>
                    <Button text="DISABLED RAISED"  disabled theme="dark" raised/>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    }
});

export default ButtonExample;