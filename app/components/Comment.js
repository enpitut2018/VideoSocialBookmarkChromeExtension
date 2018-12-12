import React, { PropTypes } from 'react';

export default class Comment extends React.Component {

  static propTypes = {
    comment: PropTypes.shape({
      user: PropTypes.shape({
        name: PropTypes.string.isRequired
      }),
      content: PropTypes.string.isRequired
    })
  };

  render() {
    return (
      <div>
        <p>{this.props.comment.user.name || 'NoName'}</p>
        <a>{this.props.comment.content}</a>
      </div>
    );
  }
}
