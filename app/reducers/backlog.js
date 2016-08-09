import * as types from '../actions/actionTypes';

const initialState = {
  backlogs: [],
  errorMessage: '',
  username: '',
  backlogsall: [],
};

export default function backlog(state = initialState, action) {
  switch(action.type) {
    case types.BACKLOG_QUERYSUCCESS:
      return Object.assign({}, state, {
        backlogs: action.backlogs,
      });
    case types.BACKLOG_QUERYFAILURE:
      return Object.assign({}, state, {
        errMessage : action.err,
      });
    case types.BACKLOG_QUERYREQUEST:
      return Object.assign({}, state, {
        username: action.username,
      });  
    case types.BACKLOG_QUERYBYPVSUCCESS:
      return Object.assign({}, state, {
        backlogsall: action.backlogs,
      });
    default:
      return state;
  }
}
