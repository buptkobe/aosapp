import * as types from '../actions/actionTypes';

const initialState = {
  sprints: [],
  errorMessage: '',
  username: '',
};

export default function sprint(state = initialState, action) {
  switch(action.type) {
    case types.SPRINT_QUERYSUCCESS:
      return Object.assign({}, state, {
        sprints: action.sprints,
      });
    case types.SPRINT_QUERYFAILURE:
      return Object.assign({}, state, {
        errMessage : action.err,
      });
    case types.SPRINT_QUERYREQUEST:
      return Object.assign({}, state, {
        username: action.username,
      });  
    default:
      return state;
  }
}
