import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';
import entities from './entities';
import sprint from './sprint';
import backlog from './backlog';
import project from './project';
import module from './module';
import version from './version';
import burndown from './burndown';

export default combineReducers({
  counter,
  user,
  //entities,
  sprint,
  backlog,
  project,
  module,
  version,
  burndown,
});