import * as types from './actionTypes';

export function query(projectid, versionid) {
  return {
    type: types.BURNDOWN_REQUEST,
    projectid,
    versionid
  }
}

export function querySuccess({linedatas}) {
  return {
    type: types.BURNDOWN_QUERY_SUCCESS,
    linedatas
  }
}