import React, { Component, PropTypes } from 'react';
import style from './CommentList.css';

export default class Comment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.bookmark.user.name || 'NoName'}</p>
        <p>{this.props.bookmark.user.id}</p>
        <a>{this.props.bookmark.comment}</a>
      </div>
    );
  }
}
