import * as types from '../actions/actionTypes';

const initialState = {
  moduleoptions: [],
  moduleselected: '',
};

export default function module(state = initialState, action) {
  switch(action.type) {
    case types.MODULE_QUERY_SUCCESS:
      return Object.assign({}, state, {
        moduleoptions: action.options,
      });
    
    case types.MODULE_REQUEST:
      return Object.assign({}, state, {
        cprojectguid: action.projectid,
      });  
    default:
      return state;
  }
}
