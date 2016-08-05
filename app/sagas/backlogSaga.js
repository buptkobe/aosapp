import React from 'react';
import { take, put, call, fork, select } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';
import { querySuccess, queryFailure } from '../actions/backlogActions';
import Util from '../common/util';
import Service from '../common/service';

const backloglistData = {
  backlogs : [],
};

function* queryCall({username, cteamguid}) {
  const url = Service.host + Service.backloglist;
  const data = {
    username : username,
    cteamguid : cteamguid
  };
  backloglistData = yield call(Util.post, url, data, function(response){

  	backloglistData = response;
    
  });
  console.log(backloglistData);
  yield put(querySuccess(backloglistData));
  console.log('SAGA BACKLOG QUERY SUCCESS: ', backloglistData);
};

function *watchBacklogRequest() {
  while(true) {
    const { username,cteamguid } = yield take(types.BACKLOG_QUERYREQUEST);

    try {
      const payload = {
        username,
        cteamguid,
      }
      
      yield fork(queryCall, payload);
    } catch (err) {
      console.log('SAGA BACKLOG QUERY ERR: ', err);
      yield put(queryFailure(err.status));
    }
  }
}

function* queryBySprintCall({sprintid}) {
  const url = Service.host + Service.backloglistbysp;
  const data = {
    sprintid : sprintid
  };
  backloglistData = yield call(Util.post, url, data, function(response){

    backloglistData = response;
    
  });
  console.log(backloglistData);
  yield put(querySuccess(backloglistData));
  console.log('SAGA BACKLOG QUERY SUCCESS: ', backloglistData);
};

function *watchBacklogQueryBySprint() {
  while(true) {
    const { sprintid } = yield take(types.BACKLOG_QUERYBYSPRINT);

    try {
      const payload = {
        sprintid
      }
      
      yield fork(queryBySprintCall, payload);
    } catch (err) {
      console.log('SAGA BACKLOG QUERY ERR: ', err);
      yield put(queryFailure(err.status));
    }
  }
}

function* queryByPVCall({project, version}) {
  const url = Service.host + Service.backloglistbypv;
  const data = {
    project : project,
    version : version
  };
  backloglistData = yield call(Util.post, url, data, function(response){

    backloglistData = response;
    
  });
  console.log(backloglistData);
  yield put(querySuccess(backloglistData));
  console.log('SAGA BACKLOG QUERY SUCCESS: ', backloglistData);
};

function *watchBacklogQueryByPV() {
  while(true) {
    const { project, version } = yield take(types.BACKLOG_QUERYBYPV);

    try {
      const payload = {
        project,
        version
      }
      
      yield fork(queryByPVCall, payload);
    } catch (err) {
      console.log('SAGA BACKLOG QUERY ERR: ', err);
      yield put(queryFailure(err.status));
    }
  }
}

export default function* root() {
  yield fork(watchBacklogRequest);
  yield fork(watchBacklogQueryBySprint);
  yield fork(watchBacklogQueryByPV);
}
