import React from 'react';
import { take, put, call, fork, select } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';
import { querySuccess,select as projectSelect} from '../actions/projectActions';
import Util from '../common/util';
import Service from '../common/service';

function* queryCall({teamid}) {
  
    const url = Service.host + Service.projectlist;
    const data = {
      cteamguid : teamid,
    };
    console.log('project query call start!');
    var projectData = yield call(Util.post, url, data, function(response){
      console.log('response:', response);
    });
    
  	console.log('project query call end!');
  	yield put(querySuccess(projectData));
  	console.log('project query SUCCESS: ', projectData);
    
};

function *watchProjectRequest() {
  while(true) {
    const { teamid } = yield take(types.PROJECT_REQUEST);

    try {
      const payload = {
        teamid
      }
      
      yield fork(queryCall, payload);
      
    } catch (err) {
      console.log('SAGA LOGIN ERR: ', err);
      yield put(loginFailure(err.status));
    }
  }
}

function *watchPorjectSelect() {
  while(true) {
    const { selectedvalue, selectedlabel } = yield take(types.PROJECT_SELECT);
    
    yield put(projectSelect(selectedvalue, selectedlabel));
  }
}


export default function* root() {
  yield fork(watchProjectRequest);
  yield fork(watchPorjectSelect);
}
