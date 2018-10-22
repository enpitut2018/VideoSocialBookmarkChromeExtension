import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../redux-token-auth-config'; // <-- note this is YOUR file, not the redux-token-auth NPM module

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  submitForm = async (e) => {
    e.preventDefault();
    const { signInUser } = this.props;
    const {
      email,
      password,
    } = this.state;
    await signInUser({ email, password });
  }

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
            <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { signInUser },
)(SignInScreen);
