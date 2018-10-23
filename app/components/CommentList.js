import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { fetchEntry } from '../actions';

export class CommentList extends React.Component {

  static propTypes = {
    entry: PropTypes.shape({
      bookmarks: PropTypes.array
    }),
    fetchEntry: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    this.props.fetchEntry();
  }

  render() {
    return (
      <div>
        {this.props.entry &&
          this.props.entry.bookmarks.map(bookmark => (
            <Comment bookmark={bookmark} key={bookmark.id} />
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    entry: state.entry
  }),
  { fetchEntry }
)(CommentList);
