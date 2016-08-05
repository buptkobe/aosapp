import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';
import entities from './entities';
import sprint from './sprint';
import backlog from './backlog';

export default combineReducers({
  counter,
  user,
  //entities,
  sprint,
  backlog,
});