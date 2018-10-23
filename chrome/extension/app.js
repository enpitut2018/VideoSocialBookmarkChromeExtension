import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import './app.css';

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const initialState = Object.assign(
    JSON.parse(state || '{}'),
    {
      reduxTokenAuth: {
        currentUser: {
          isLoading: false,
          isSignedIn: false,
          attributes: {
          },
        },
      },
    }
  );

  const createStore = require('../../app/store/configureStore');

  ReactDOM.render(
    <Root store={createStore(initialState)} />,
    document.querySelector('#root')
  );
});
