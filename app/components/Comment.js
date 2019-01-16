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
      <div style={{ marginLeft: '10px' }}>
        <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{this.props.comment.user.name || 'NoName'}</p>
        <p style={{ fontSize: '16px', margin: '3px' }}>{this.props.comment.content}</p>
      </div>
    );
  }
}
