import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setToken } from '../actions';
import Popup from '../components/Popup';
import Header from '../components/Header';
import Form from '../components/Form';
import SignIn from '../components/SignIn';
import CommentList from '../components/CommentList';

@connect(
  state => ({
    isLoggedIn: state.user.isLoggedIn,
  }),
  { setToken }
)
export default class App extends React.Component {

  static propTypes = {
    setToken: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
  };

  componentDidMount = () => {
    this.props.setToken();
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
