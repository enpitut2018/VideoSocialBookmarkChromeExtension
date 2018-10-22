import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { post } from '../actions';

@connect(
  null,
  { post }
)
export default class Form extends React.Component {

  static propTypes = {
    post: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  handleChangeComment = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.post(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Add bookmark</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <input type="text" value={this.state.comment} onChange={this.handleChangeComment} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
