import React from 'react';
import { take, put, call, fork, select } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';
import { querySuccess } from '../actions/versionActions';
import Util from '../common/util';
import Service from '../common/service';

function* queryCall({projectid}) {
  
    const url = Service.host + Service.versionlist;
    const data = {
      cprojectguid : projectid,
    };
    console.log('module query call start!');
    var versionData = yield call(Util.post, url, data, function(response){
      console.log('response:', response);
    });
    
  	console.log('module query call end!');
  	yield put(querySuccess(versionData));
  	console.log('module query SUCCESS: ', versionData);
    
};

function *watchVersionRequest() {
  while(true) {
    const { projectid } = yield take(types.VERSION_REQUEST);

    try {
      const payload = {
        projectid
      }
      
      yield fork(queryCall, payload);
      
    } catch (err) {
      console.log('SAGA VERSION REQUEST ERR: ', err);
      
    }
  }
}


export default function* root() {
  yield fork(watchVersionRequest);
}
