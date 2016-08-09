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
export const BACKLOG_QUERYBYPVSUCCESS = 'BACKLOG_QUERYBYPVSUCCESS';
export const BACKLOG_QUERYFAILURE = 'BACKLOG_QUERYFAILURE';

export const PROJECT_REQUEST = 'PROJECT_REQUEST';
export const PROJECT_SELECT = 'PROJECT_SELECT';
export const PROJECT_QUERY_SUCCESS = 'PROJECT_QUERY_SUCCESS';

export const MODULE_REQUEST = 'MODULE_REQUEST';
export const MODULE_QUERY_SUCCESS = 'MODULE_QUERY_SUCCESS';

export const VERSION_REQUEST = 'VERSION_REQUEST';
export const VERSION_QUERY_SUCCESS = 'VERSION_QUERY_SUCCESS';
