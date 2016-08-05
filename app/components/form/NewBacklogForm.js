import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View,ScrollView, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Mdicon from 'react-native-vector-icons/MaterialIcons';
import {
  ActionSheetCell,
  ButtonCell,
  createValidator,
  DatePickerCell,
  emailValidator,
  Form,
  PushButtonCell,
  Section,
  SwitchCell,
  TextInputCell,
} from 'react-native-forms';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import CustomPick from './CustomPick';
import NavigationBar from 'react-native-navbar';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Service from '../../common/service';

class NewBacklogForm extends Component {

  onPress() {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  };

  render() {
  	const forwardIcon = <Ionicon name={"ios-arrow-forward"} color={"gray"} size={20} />;
    const alertIcon = <Ionicon name={"ios-alert"} color={"gray"} size={20} />;
    var rightButtonConfig = {
        title: '...',
        handler: function onNext() {
          alert('hello!');
        }
    };
    var leftButtonConfig = {
        title: <Mdicon name="arrow-back" size={18}></Mdicon>,
        handler: function onBack() {
          Actions.pop();
        },
    };

    var titleConfig = {
        title: 'backlog新增',
    };
    return (
      <View style={styles.container}>
        <NavigationBar
              title={titleConfig}
              style={{height:64,borderBottom:1}}
              leftButton={leftButtonConfig}
        />
        <ScrollView>
	        
	        
      		<Form
              ref={(ref) => { this.form = ref; }}
            >
              
              <Section
                ref={"secondSection"}
              >
                
                <TextInputCell
                  ref="SingleLineTextInput"
                  validator={createValidator(emailValidator, { errorMessage: 'Invalid Email' })}
                  inputProps={{ placeholder: '请输入标题' }}
                />
                
                
              </Section>
              <Section
                ref={"customSection"}
              >
                <CustomPick 
                  ref={"CustomPick1"} 
                  selectoptionlabel={""}
                  type="project"
                  title="项目"/>
                <CustomPick  
                  ref={"CustomPick2"} 
                  selectoptionlabel={""}
                  type="module"
                  title="模块"/>
                <CustomPick  
                  ref={"CustomPick3"} 
                  selectoptionlabel={""}
                  type="version"
                  title="版本"/>
              </Section>

              <Section
                ref={"Rule"}
              >
                  <ScrollableTabView
                    style={{height:400 }}
                    initialPage={0}
                    renderTabBar={() => <ScrollableTabBar />}
                  >
                    <View tabLabel='用户故事'>
                      <TextInputCell
                        ref={"MultiLineTextInput2"}
                        inputProps={{ multiline: true, color: 'green' }}
                        cellHeight={80}
                        value={"作为...,我希望...,这样我可以..."}
                      />
                    </View>
                    <View tabLabel='开发规约'>
                      <TextInputCell
                        ref={"MultiLineTextInput3"}
                        inputProps={{ multiline: true, color: 'green' }}
                        cellHeight={150}
                        value={"需要修改的地方：\n\n修改方案：\n\n注意事项："}
                      />
                    </View>
                    <View tabLabel='测试规约'>
                      <TextInputCell
                        ref={"MultiLineTextInput4"}
                        inputProps={{ multiline: true, color: 'green' }}
                        cellHeight={80}
                        value={"影响范围....测试范围...."}
                      />
                    </View>
                  </ScrollableTabView>
              </Section>

              
              <Section
                ref={"dataSection"}
              >
                <ButtonCell
                  ref={"SaveData"}
                  title={" 保 存 "}
                  textAlign={"center"}
                  titleColor={"blue"}
                />
              </Section>
            </Form>
        </ScrollView>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

function mapStateToProps(state) {
  const { user } = state;

  return {
    user,
  }
}

const actions = {
  
}

export default connect(mapStateToProps, actions)(NewBacklogForm);