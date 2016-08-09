import { fork } from 'redux-saga/effects'

import init from './init';
import login from './login';
import sprint from './sprintSaga';
import backlog from './backlogSaga';
import project from './projectSaga';
import module from './moduleSaga';
import version from './versionSaga';

// Consider using takeEvery
export default function* root() {
  yield fork(init);
  yield fork(login);
  yield fork(sprint);
  yield fork(backlog);
  yield fork(project);
  yield fork(module);
  yield fork(version);
}
