import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/todos';
import style from './Form.css';
import axios from 'axios';

const backend_api_url = 'https://video-social-bookmark.herokuapp.com/api/v1';

@connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      console.log(chrome);
      const tab = tabs[0];
      console.log(tab);
      const comment = this.state.comment;
      const url = 'https://video-social-bookmark.herokuapp.com/login';//tab.url;
      axios
      .post(`${backend_api_url}/bookmarks`, {
        original_url: url,
        comment
      })
      .then((res) => {
        alert(`A new bookmark was submitted: ${comment}, ${url}`);
      })
      .catch((_) => {
        // error
      });
    });
    event.preventDefault();
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Add bookmark</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <input type="text" value={this.state.comment} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
