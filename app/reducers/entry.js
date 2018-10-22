import { SET_ENTRY } from '../actions';

const initialState = null;

const actionsMap = {
  [SET_ENTRY](state, action) {
    return action.entry;
  },
};

export default function entry(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
