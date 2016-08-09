import * as types from '../actions/actionTypes';

const initialState = {
  projectoptions: [],
  projectselected: '',
};

export default function project(state = initialState, action) {
  switch(action.type) {
    case types.PROJECT_QUERY_SUCCESS:
      return Object.assign({}, state, {
        projectoptions: action.options,
      });
    case types.PROJECT_SELECT:
      return Object.assign({}, state, {
        selected : action.projectid,
      });
    case types.PROJECT_REQUEST:
      return Object.assign({}, state, {
        cteamguid: action.teamid,
      });  
    default:
      return state;
  }
}
