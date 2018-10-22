import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { fetchEntry } from '../actions';

@connect(
  state => ({
    entry: state.entry
  }),
  { fetchEntry }
)
export default class Form extends React.Component {

  static propTypes = {
    entry: PropTypes.object.isRequired,
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
