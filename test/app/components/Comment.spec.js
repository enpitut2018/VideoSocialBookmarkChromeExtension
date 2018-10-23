import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Comment from '../../../app/components/Comment';

function setup(propOverrides) {
  const props = {
    bookmark: {
      user: {
        name: 'TestMan',
        id: 3
      },
      comment: 'Test comment'
    },
    ...propOverrides
  };
  const wrapper = shallow(<Comment {...props} />);
  return { props, wrapper };
}

describe('<Comment />', () => {
  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).to.matchSnapshot();
  });
});
