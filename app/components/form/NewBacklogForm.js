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
  state = {
    moduleoptions:[],
    versionoptions:[],
  };

  handlePress(ref) {
    
    if (ref === 'LogData') {
      console.log(this.form.getData());
    } else if (ref === 'LogValidationErrors') {
      console.log(this.form.getValidationErrors());
    } else if (ref === 'SaveData') {
      var data = this.form.getData();
      data['story'] = this.refs.story.value;
      data['devrule'] = this.refs.devrule.value;
      data['testrule'] = this.refs.testrule.value;
      alert(JSON.stringify(data));
    }
  };

  handleChange(ref, change) {
    console.log(ref, change);
    alert(ref);
    if (ref === 'projectPick') {
      
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
    var leftButtonConfig = 
        <View style={{justifyContent: 'center',marginLeft:10}}>
          <Mdicon name="arrow-back" 
            size={18} 
            onPress={()=>{Actions.pop()}} 
            ></Mdicon>
        </View>;
    var titleConfig = {
        title: 'backlog新增',
    };
    return (
      <View style={styles.container}>
        <NavigationBar
              title={titleConfig}
              style={{height:64,borderBottomWidth:1}}
              leftButton={leftButtonConfig}
        />
        <ScrollView>
	        
	        
      		<Form
              ref={(ref) => { this.form = ref; }}
              onPress={this.handlePress.bind(this)}
              onChange={this.handleChange.bind(this)}
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
                  ref={"projectPick"} 
                  
                  value={""}
                  onChange={(value)=>{this.refs.projectPick.value=value}}
                  title="项目"/>
                <CustomPick  
                  ref={"modulePick"} 
                  
                  value={""}
                  onChange={(value)=>{this.refs.modulePick.value=value}}
                  title="模块"/>
                <CustomPick  
                  ref={"versionPick"} 
                  
                  value={""}
                  onChange={(value)=>{this.refs.versionPick.value=value}}
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
                        ref={"story"}
                        inputProps={{ multiline: true, color: 'green' }}
                        cellHeight={80}
                        onChange={(value)=>{this.refs.story.value=value}}
                      />
                    </View>
                    <View tabLabel='开发规约'>
                      <TextInputCell
                        ref={"devrule"}
                        inputProps={{ multiline: true, color: 'green' }}
                        cellHeight={150}
                        onChange={(value)=>{this.refs.devrule.value=value}}
                      />
                    </View>
                    <View tabLabel='测试规约'>
                      <TextInputCell
                        ref={"testrule"}
                        inputProps={{ multiline: true, color: 'green' }}
                        cellHeight={80}
                        onChange={(value)=>{this.refs.testrule.value=value}}
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