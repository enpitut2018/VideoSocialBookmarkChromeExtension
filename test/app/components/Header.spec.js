import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from '../../../app/components/Header';

function setup(propOverrides) {
  const props = {
    ...propOverrides
  };
  const wrapper = shallow(<Header {...props} />);
  return { props, wrapper };
}

describe('<Header />', () => {
  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).to.matchSnapshot();
  });
});
