import React from 'react';
import { take, put, call, fork, select } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';
import { loginSuccess, loginFailure } from '../actions/loginActions';
import Util from '../common/util';
import Service from '../common/service';

const loginData = {
  token: 'no token',
  user: {
    name: 'guest',
    userid: '1',
    devgroupid: '',
    devgroup: '',
  },
};

function* loginCall({username, password, devgroupid, devgroup}) {
  
    const url = Service.host + Service.login + '&devgroup=' + devgroup;
    const data = {
      username : username,
      password : password,
      devgroupid: devgroupid,
    };
    console.log('loginData start!');
    loginData = yield call(Util.post, url, data, function(response){
      console.log('response:', response);
    });
    if (loginData.isauthenticated == false) {
      yield put(loginFailure("用户名或密码错误！"));
    } else {
      console.log('loginData end!');
      yield put(loginSuccess(loginData));
      console.log('SAGA LOGIN SUCCESS: ', loginData);
    }
};

function *watchLoginRequest() {
  while(true) {
    const { username, password, devgroupid, devgroup } = yield take(types.LOGIN.REQUEST);

    try {
      const payload = {
        username,
        password,
        devgroupid,
        devgroup,
      }
      
      yield fork(loginCall, payload);
      
    } catch (err) {
      console.log('SAGA LOGIN ERR: ', err);
      yield put(loginFailure(err.status));
    }
  }
}


export default function* root() {
  yield fork(watchLoginRequest);
}
