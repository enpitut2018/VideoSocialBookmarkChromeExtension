import React, { PropTypes } from 'react';

export default class Comment extends React.Component {

  static propTypes = {
    bookmark: PropTypes.shape({
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      }),
      comment: PropTypes.string.isRequired
    })
  };

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
