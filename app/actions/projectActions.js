import * as types from './actionTypes';

export function query(teamid) {
  return {
    type: types.PROJECT_REQUEST,
    teamid,
  }
}

export function select(selectedvalue, selectedlabel) {
  return {
    type: types.PROJECT_SELECT,
    selectedvalue,
    selectedlabel
  }
}

export function querySuccess({options}) {
  return {
    type: types.PROJECT_QUERY_SUCCESS,
    options
  }
}