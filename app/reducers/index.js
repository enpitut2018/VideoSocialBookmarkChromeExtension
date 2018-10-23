import { combineReducers } from 'redux';
import { reduxTokenAuthReducer } from 'redux-token-auth';
import entry from './entry';
import user from './user';

export default combineReducers({
  user,
  entry,
  reduxTokenAuth: reduxTokenAuthReducer
});
