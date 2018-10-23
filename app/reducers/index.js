import { combineReducers } from 'redux';
import { reduxTokenAuthReducer } from 'redux-token-auth';
import entry from './entry';
import user from './user';
import form from './form';

export default combineReducers({
  user,
  entry,
  form,
  reduxTokenAuth: reduxTokenAuthReducer
});
