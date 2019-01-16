import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Form } from '../../../app/components/Form';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setup(propOverrides) {
  const props = {
    post: comment => ({
      status: 'SUCCESS',
      data: {
        entry: {
          title: 'HogeMovie',
          id: 1
        }
      } }),
    ...propOverrides
  };
  const wrapper = shallow(<Form {...props} />);
  return { props, wrapper };
}

describe('<Form />', () => {
  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).to.matchSnapshot();
  });

  it('should reset value on post with status=SUCCESS', async () => {
    const { wrapper } = setup();
    wrapper.find('input[type="text"]').simulate('change', { target: { value: 'Hello' } });
    wrapper.find('input[type="checkbox"]').simulate('change', { target: { checked: false } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    await timeout(10);
    expect(wrapper.find('input[type="text"]').props().value).to.equal('');
  });

  it('should not reset value on post with status=ERROR', async () => {
    const { wrapper } = setup({ post: comment => ({ status: 'ERROR' }) });
    wrapper.find('input[type="text"]').simulate('change', { target: { value: 'Hello' } });
    wrapper.find('input[type="checkbox"]').simulate('change', { target: { checked: false } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    await timeout(10);
    expect(wrapper.find('input[type="text"]').props().value).to.equal('Hello');
  });
});
