import * as types from './actionTypes';

export function query(projectid) {
  return {
    type: types.VERSION_REQUEST,
    projectid,
  }
}

export function querySuccess({options}) {
  return {
    type: types.VERSION_QUERY_SUCCESS,
    options
  }
}