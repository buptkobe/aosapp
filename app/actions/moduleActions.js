import * as types from './actionTypes';

export function query(projectid) {
  return {
    type: types.MODULE_REQUEST,
    projectid,
  }
}

export function querySuccess({options}) {
  return {
    type: types.MODULE_QUERY_SUCCESS,
    options
  }
}