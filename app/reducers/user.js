import { SIGNIN } from '../actions';

const initialState = {
  isLoggedIn: false,
};

const actionsMap = {
  [SIGNIN](state, action) {
    return {
      ...state, isLoggedIn: true
    };
  },
};

export default function todos(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
