import { expect } from 'chai';
import { SIGNIN } from '../../../app/actions';
import user from '../../../app/reducers/user';

describe('user reducer', () => {
  it('should handle initial state', () => {
    expect(
      user(undefined, {})
    ).to.eql({
      isLoggedIn: false
    });
  });

  it('should handle SET_ENTRY', () => {
    expect(
      user({ isLoggedIn: false }, {
        type: SIGNIN,
      })
    ).to.eql({
      isLoggedIn: true
    });
  });
});
