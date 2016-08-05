import React from 'react';
import { take, put, call, fork, select } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';
import { querySuccess, queryFailure } from '../actions/sprintActions';
import Util from '../common/util';
import Service from '../common/service';

const sprintlistData = {
  sprints : [],
};

function* queryCall({username}) {
  const url = Service.host + Service.sprintlist;
  const data = {
    username : username
  };
  sprintlistData = yield call(Util.post, url, data, function(response){

  	sprintlistData = response;
    
  });
  console.log('sprintlistData:' ,sprintlistData);
  yield put(querySuccess(sprintlistData));
  console.log('SAGA SPRINT QUERY SUCCESS: ', sprintlistData);
};

function *watchSprintRequest() {
  while(true) {
    const { username } = yield take(types.SPRINT_QUERYREQUEST);

    try {
      const payload = {
        username,
      }
      
      yield fork(queryCall, payload);
    } catch (err) {
      console.log('SAGA SPRINT QUERY ERR: ', err);
      yield put(queryFailure(err.status));
    }
  }
}


export default function* root() {
  yield fork(watchSprintRequest);
}
