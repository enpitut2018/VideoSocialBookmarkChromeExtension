import axios from 'axios';
import { apiUrl } from '../constants';

export const SET_ENTRY = 'SET_ENTRY';
export const SIGNIN = 'SIGNIN';

const getUrl = async () => new Promise((resolve) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const tab = tabs[0];
    const url = tab.url;
    resolve(url);
  });
});

export const setToken = () => (dispatch) => {
  const keys = ['access-token', 'token-type', 'client', 'expiry', 'uid'];
  for (const key of keys) {
    axios.defaults.headers.common[key] = window.localStorage.getItem(key);
  }
};

export const signIn = () => (dispatch) => {
  dispatch({ type: SIGNIN });
  dispatch(setToken());
};

export const post = comment => async (dispatch) => {
  const url = await getUrl();
  axios
  .post(`${apiUrl}/bookmarks`, {
    original_url: url,
    comment
  })
  .then((res) => {
    // success
  })
  .catch((_) => {
    // error
  });
};

export const fetchEntry = () => (dispatch) => {
  chrome.runtime.sendMessage({
    type: 'REQUEST_ENTRY'
  }, (res) => {
    const entry = JSON.parse(res.entry);
    dispatch({ type: SET_ENTRY, entry });
  });
};

