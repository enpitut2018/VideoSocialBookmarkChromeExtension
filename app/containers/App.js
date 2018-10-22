import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Form from '../components/Form';
import * as TodoActions from '../actions/todos';
import style from './App.css';
import SignInScreen from '../components/SignIn';

@connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { todos, actions } = this.props;

    const keys = ['access-token', 'token-type', 'client', 'expiry', 'uid'];
    for (const key of keys) {
      axios.defaults.headers.common[key] = window.localStorage.getItem(key);
    }

    return (
      <div>
        <SignInScreen />
        <Form />
      </div>
    );
  }
}
