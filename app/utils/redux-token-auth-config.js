import { generateAuthActions } from 'redux-token-auth';

const backend_api_url = 'https://video-social-bookmark.herokuapp.com/api/v1';

const config = {
  authUrl: `${backend_api_url}/auth`,
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
