import * as types from '../actions/actionTypes';

const initialState = {
  versionoptions: [],
  versionselected: '',
};

export default function version(state = initialState, action) {
  switch(action.type) {
    case types.VERSION_QUERY_SUCCESS:
      return Object.assign({}, state, {
        versionoptions: action.options,
      });
    
    case types.VERSION_REQUEST:
      return Object.assign({}, state, {
        cprojectguid: action.projectid,
      });  
    default:
      return state;
  }
}
