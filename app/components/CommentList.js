import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { fetchEntry } from '../actions';

export class CommentList extends React.Component {

  static propTypes = {
    entry: PropTypes.shape({
      comments: PropTypes.array
    }),
    fetchEntry: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    this.props.fetchEntry();
  }

  render() {
    return (
      <div>
        {/* サムネイルの表示
          this.props.entry &&
          <img src={this.props.entry.thumbnail_url} alt="pm" />
        */}
        {this.props.entry &&
          this.props.entry.comments.filter(comment => comment.content.length !== 0).map(comment => (
            <Comment comment={comment} key={comment.id} />
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
