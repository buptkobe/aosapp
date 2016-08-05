import * as types from './actionTypes';

export function queryRequest(username, cteamguid) {
  return {
    type: types.BACKLOG_QUERYREQUEST,
    username,
    cteamguid,
  };
}

export function queryBySprint(sprintid) {
  return {
    type: types.BACKLOG_QUERYBYSPRINT,
    sprintid,
  };
}

export function queryByPV(project, version) {
  return {
    type: types.BACKLOG_QUERYBYPV,
    project,
    version,
  };
}

export function querySuccess({backlogs}) {
  return {
    type: types.BACKLOG_QUERYSUCCESS,
    backlogs,
  };
}

export function queryFailure(err) {
  return {
    type: types.BACKLOG_QUERYFAILURE,
    err,
  }
}