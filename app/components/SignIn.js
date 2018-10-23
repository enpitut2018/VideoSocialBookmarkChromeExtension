import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../utils/redux-token-auth-config';
import { signIn } from '../actions';

export class SignIn extends Component {

  static propTypes = {
    signInUser: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  submitForm = async (e) => {
    e.preventDefault();
    await this.props.signInUser({
      email: this.state.email,
      password: this.state.password
    }).then((res) => {
      this.props.signIn();
    }).catch((res) => {
      // error
    });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
          </label>
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
          <input type="submit" value="SignIn" />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { signInUser, signIn },
)(SignIn);
