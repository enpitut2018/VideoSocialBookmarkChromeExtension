import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import * as TodoActions from '../actions/todos';
import style from './CommentList.css';
import Comment from '../components/Comment';

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
    this.state = { entry: null };
    this.fetchEntry();
  }

  fetchEntry = () => axios
    .get(`${backend_api_url}/entries/8`)
    .then((res) => {
      console.log(res);
      this.setState({ entry: res.data });
    })
    .catch((res) => {
      console.log(res);
    })

  render() {
    console.log('hey', this.state);
    return (
      <div>
        {this.state.entry &&
          this.state.entry.bookmarks.map(bookmark => (
            <Comment bookmark={bookmark} key={bookmark.id} />
        ))}
      </div>
    );
  }
}
