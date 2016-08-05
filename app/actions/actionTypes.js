const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE].forEach(type => res[type] = `${base}_${type}`);
  return res;
}

// Login events
export const LOGIN = createRequestTypes('LOGIN');
export const LOGOUT = 'LOGOUT'; // logout is always success

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const SPRINT_QUERYREQUEST = 'SPRINT_QUERYREQUEST';
export const SPRINT_QUERYSUCCESS = 'SPRINT_QUERYSUCCESS';
export const SPRINT_QUERYFAILURE = 'SPRINT_QUERYFAILURE';

export const BACKLOG_QUERYREQUEST = 'BACKLOG_QUERYREQUEST';
export const BACKLOG_QUERYBYSPRINT = 'BACKLOG_QUERYBYSPRINT';
export const BACKLOG_QUERYBYPV = 'BACKLOG_QUERYBYPV';
export const BACKLOG_QUERYSUCCESS = 'BACKLOG_QUERYSUCCESS';
export const BACKLOG_QUERYFAILURE = 'BACKLOG_QUERYFAILURE';