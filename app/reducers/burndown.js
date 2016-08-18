import * as types from '../actions/actionTypes';

const initialState = {
  linedatas: [[0,0]],
};

export default function burndown(state = initialState, action) {
  switch(action.type) {
    case types.BURNDOWN_QUERY_SUCCESS:
      return Object.assign({}, state, {
        linedatas: action.linedatas,
      });
    
    case types.BURNDOWN_REQUEST:
      return Object.assign({}, state, {
        cprojectguid: action.projectid,
        cversionguid: action.versionid
      });  
    default:
      return state;
  }
}
