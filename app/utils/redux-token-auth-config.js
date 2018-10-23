import { generateAuthActions } from 'redux-token-auth';
import { apiUrl } from '../constants';

const config = {
  authUrl: `${apiUrl}/auth`,
  userAttributes: {},
  userRegistrationAttributes: {},
};

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config);

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}
;
