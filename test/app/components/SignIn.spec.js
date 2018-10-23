import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { SignIn } from '../../../app/components/SignIn';

function setup(propOverrides) {
  const props = {
    signInUser: (email, password) => {},
    signIn: () => {},
    ...propOverrides
  };
  const wrapper = shallow(<SignIn {...props} />);
  return { props, wrapper };
}

describe('<SignIn />', () => {
  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).to.matchSnapshot();
  });

  it('should set value', async () => {
    const { wrapper } = setup();
    wrapper.find('input[type="text"]').simulate('change', { target: { value: 'TestMan' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'TestPassword' } });
    // wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(wrapper.find('input[type="text"]').props().value).to.equal('TestMan');
    expect(wrapper.find('input[type="password"]').props().value).to.equal('TestPassword');
  });
});
