import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import Popup from '../components/Popup';
import Header from '../components/Header';
import Form from '../components/Form';
import SignIn from '../components/SignIn';
import CommentList from '../components/CommentList';

@connect(
  state => ({
    isLoggedIn: state.user.isLoggedIn,
  }),
  { signIn }
)
export default class App extends React.Component {

  static propTypes = {
    signIn: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
  };

  componentDidMount = () => {
    this.props.signIn();
  }

  render() {
    return (
      <Popup>
        <Header />
        {!this.props.isLoggedIn &&
          <SignIn />
        }
        {this.props.isLoggedIn &&
          <Form />
        }
        <CommentList />
      </Popup>
    );
  }
}
