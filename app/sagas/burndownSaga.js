import React from 'react';
import { take, put, call, fork, select } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';
import { querySuccess } from '../actions/burndownActions';
import Util from '../common/util';
import Service from '../common/service';

var burndownData = {
    linedatas: [[0,0]]
};

function* queryCall({projectid,versionid}) {
  
    const url = Service.host + Service.burndown;
    const data = {
      cprojectguid : projectid,
      cguid: versionid
    };
    
    console.log('burndown query call start!');
    burndownData = yield call(Util.post, url, data, function(response){
      
      console.log('response:', response);
    });
    
  	console.log('burndown query call end!');
  	yield put(querySuccess(burndownData));
  	console.log('burndown query SUCCESS: ', burndownData);
    
};

function *watchBurndownRequest() {
  while(true) {
    const { projectid,versionid } = yield take(types.BURNDOWN_REQUEST);

    try {
      const payload = {
        projectid,
        versionid
      }
      
      yield fork(queryCall, payload);
      
    } catch (err) {
      console.log('SAGA burndown REQUEST ERR: ', err);
      
    }
  }
}


export default function* root() {
  yield fork(watchBurndownRequest);
}
