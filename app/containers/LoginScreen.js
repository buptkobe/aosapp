import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, TextInput, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/loginActions';
import { Actions } from 'react-native-router-flux';
import Util from '../common/util';
import Service from '../common/service';
import ModalBox from 'react-native-modalbox';
import commonStyle from '../styles/commonstyles';
import ModalPicker from 'react-native-modal-picker';
import {Toast} from 'rn-weui/src';
import {Divider} from 'react-native-material-ui';

const data = [
    { key: 1, label: 'sunshine' },
    { key: 2, label: 'zero' },
    { key: 3, label: 'bee' },
];

class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
    isVisible: false,
    devgroup: '开发组',
    devgroupid: '',
    optionsdata: [],
  };

  loginEmail = () => {
    //this.refs.modal.open();
    if (this.state.username === '') {
      this.setState({needusername:true});
      setTimeout(() => {
        this.setState({needusername:false});
      }, 2000);
      return;
    }

    if (this.state.devgroupid === '') {
      this.setState({needgroup:true});
      setTimeout(() => {
        this.setState({needgroup:false});
      }, 2000);
      return;
    }
    this.setState({isVisible:true});
    console.log(this.state.username, this.state.password, this.props.actions);
    this.props.actions.loginRequest(this.state.username, this.state.password, 
      this.state.devgroupid, this.state.devgroup);
    //Actions.main();
    setTimeout(() => {
    //  this.refs.modal.close();
      
      if (!this.props.user.isAuthenticated && this.props.user.errorMessage) {

        this.setState({isVisible:false,isError:true});
        setTimeout(() => {
            this.setState({isError:false});
        }, 2000);
      }
    }, 1000);
  };

  onChangeName(text){
    console.log(text);
    this.setState({username : text});
    this.fetchDevGroup();
  };

  onChangePswd(text){
    this.setState({password : text});
  };

  fetchDevGroup() {
    var url = Service.host + Service.teamlist + '&username=' + this.state.username;
    fetch(url).then(response => response.json())
    .then(data => this.setState({optionsdata: data}))
    .catch(e => console.log("Oops, error", e))
  };

  render() {
    
    const { user } = this.props;

    let error;
    if (user.errorMessage !== '') {
      console.log('user', user, user.errorMessage);
      error = <Text style={{backgroundColor: 'red'}}>{user.errorMessage}</Text>;
    }

    return (
      <View style={styles.container} ref="f">
      
      <View style={styles.top}>
        
        <View>
          <Image style={styles.logo} source={require('../common/image/start_hightlight.png')}></Image>
        </View>
        <View>
          
          <View style={styles.inputRow}>
            <View style={{marginLeft:10}}>
              <Icon name="user"></Icon>
            </View>
            <TextInput
              style={styles.input}
              placeholder="用户名"
              onChangeText={this.onChangeName.bind(this)}
              value={this.state.username}
              underlineColorAndroid="transparent"
              numberOfLines={1}
              autoFocus={false}
              textAlign="left"
              onBlur={this.fetchDevGroup.bind(this)}
            />
          </View>

          <View style={styles.inputRow}>
            <View style={{marginLeft:10}}>
              <Icon name="lock"></Icon>
            </View>
            <TextInput
              style={styles.input}
              placeholder="密码"
              onChangeText={this.onChangePswd.bind(this)}
              value={this.state.password}
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              numberOfLines={1}
              textAlign="left"
            />
          </View>

           <View style={styles.inputRow}>
              <View >
                <Icon name="users"></Icon>
              </View>
                <ModalPicker
                    selectTextStyle={{color:'black'}}
                    data={this.state.optionsdata}
                    initValue="选择开发组!"
                    cancelText="取消"
                    onChange={(option)=>{ this.setState({devgroup: option.label, devgroupid: option.key}) }} >
                    <View style={styles.text}>
                      <Text>
                        {this.state.devgroup}
                      </Text>
                    </View>
                </ModalPicker>
              <View style={{marginLeft:10}}>
                <Icon name="angle-down"></Icon>
              </View>
                
            </View>
          <TouchableHighlight underlayColor="#fff" style={styles.btn} onPress={this.loginEmail.bind(this)}>
            <Text style={{color:'#fff'}}>登录</Text>
          </TouchableHighlight>

          
        </View>
        
      </View>

      <ModalBox style={[commonStyle.modal,commonStyle.justAlign]} 
        ref={"modal"} backdropPressToClose={true} 
        animationDuration={3}
        backdrop={true}
        backdropOpacity={0}
        isOpen={false}
      >
        <ActivityIndicator
          animating={true}
          style={[styles.centering, {height: 80}]}
          size="large"
        />
      </ModalBox>
      <Toast icon="info" show={this.state.needusername} onRequestClose={() => {this._setModalVisible(false)}}>用户名不能为空</Toast>
      <Toast icon="info" show={this.state.needgroup} onRequestClose={() => {this._setModalVisible(false)}}>开发组不能为空</Toast>
      <Toast icon="warn" show={this.state.isError} onRequestClose={() => {this._setModalVisible(false)}}>用户名或密码错误</Toast>
      <Toast icon="loading" show={this.state.isVisible} onRequestClose={() => {this._setModalVisible(false)}}>加载中...</Toast>
      <View style={{marginTop:150,marginBottom:10}}>
           <Divider/>
           <View style={{justifyContent: 'center',alignItems: 'center',}}>
           <Text >powered by aisino aos</Text>
           <Text >all rights reserved</Text>
           </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  top: {
    marginTop:50,
    flex: 1,
    alignItems:'center',
  },
  logo:{
    width:100,
    height:100,
    marginBottom:30,
    resizeMode: Image.resizeMode.contain
  },
  inputRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    borderWidth:Util.pixel,
    borderColor:'#ccc',
    backgroundColor:'#fff',
    paddingLeft:5
  },
  input:{
    marginLeft:10,
    width:Util.size.width-50,
   
    height:40,
    borderColor:'#ccc',
  },
  text:{
    marginLeft:10,
    width:Util.size.width-80,
    height:40,
    justifyContent: 'center',
  },
  btn:{
    marginTop:10,
    width:Util.size.width-10,
    height:35,
    backgroundColor:'#3BC1FF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 4,
    marginBottom:50
  },
  style_view_unlogin:{
    fontSize:12,
    color:'#63B8FF',
    marginLeft:10,
  },
  style_view_register:{
    fontSize:12,
    color:'#63B8FF',
    marginRight:10,
    alignItems:'flex-end',
    flex:1,
    flexDirection:'row',
    textAlign:'right',
  },
  bottom:{
    flex:1,
    flexDirection:'row',
    alignItems:'flex-end',
    bottom:20,
    
  }
});

function mapStateToProps(state) {
  const { user } = state;

  return {
    user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);