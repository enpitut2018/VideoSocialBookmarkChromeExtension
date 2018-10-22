import { combineReducers } from 'redux';
import { reduxTokenAuthReducer } from 'redux-token-auth';
import todos from './todos';

export default combineReducers({
  todos,
  reduxTokenAuth: reduxTokenAuthReducer
});
