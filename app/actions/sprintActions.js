import * as types from './actionTypes';

export function queryRequest(username) {
  return {
    type: types.SPRINT_QUERYREQUEST,
    username,
  };
}

export function querySuccess({sprints}) {
  return {
    type: types.SPRINT_QUERYSUCCESS,
    sprints,
  };
}

export function queryFailure(err) {
  return {
    type: types.SPRINT_QUERYFAILURE,
    err,
  }
}