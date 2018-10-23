import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Popup from '../../../app/components/Popup';

function setup(propOverrides) {
  const props = {
    children: <div>Hello</div>,
    ...propOverrides
  };
  const wrapper = shallow(<Popup {...props} />);
  return { props, wrapper };
}

describe('<Popup />', () => {
  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).to.matchSnapshot();
  });
});
