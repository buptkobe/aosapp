import React from 'react';
import { take, put, call, fork, select } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';
import { querySuccess } from '../actions/moduleActions';
import Util from '../common/util';
import Service from '../common/service';

function* queryCall({projectid}) {
  
    const url = Service.host + Service.modulelist;
    const data = {
      cprojectguid : projectid,
    };
    console.log('module query call start!');
    var moduleData = yield call(Util.post, url, data, function(response){
      console.log('response:', response);
    });
    
  	console.log('module query call end!');
  	yield put(querySuccess(moduleData));
  	console.log('module query SUCCESS: ', moduleData);
    
};

function *watchModuleRequest() {
  while(true) {
    const { projectid } = yield take(types.MODULE_REQUEST);

    try {
      const payload = {
        projectid
      }
      
      yield fork(queryCall, payload);
      
    } catch (err) {
      console.log('SAGA MODULE REQUEST ERR: ', err);
      
    }
  }
}


export default function* root() {
  yield fork(watchModuleRequest);
}
