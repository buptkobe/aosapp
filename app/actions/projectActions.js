import * as types from './actionTypes';

export function query(teamid) {
  return {
    type: types.PROJECT_REQUEST,
    teamid,
  }
}

export function select({projectid}) {
  return {
    type: types.PROJECT_SELECT,
    projectid
  }
}

export function querySuccess({options}) {
  return {
    type: types.PROJECT_QUERY_SUCCESS,
    options
  }
}