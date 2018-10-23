import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import storage from '../utils/storage';
import { verifyCredentials } from '../utils/redux-token-auth-config';

const middlewares = applyMiddleware(thunk);
const enhancer = compose(
  middlewares,
  storage()
);

export default function (initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  verifyCredentials(store);
  return store;
}
