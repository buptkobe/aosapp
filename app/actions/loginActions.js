import * as types from './actionTypes';

export function loginRequest(username, password, devgroupid, devgroup) {
  return {
    type: types.LOGIN.REQUEST,
    username,
    password,
    devgroupid,
    devgroup,
  }
}

export function loginSuccess({token, user, isauthenticated}) {
  return {
    type: types.LOGIN.SUCCESS,
    token,
    user,
    isauthenticated,
  }
}

export function loginFailure(err) {
  return {
    type: types.LOGIN.FAILURE,
    err,
  }
}

export function logout() {
  return {
    type: types.LOGOUT,
  }
}