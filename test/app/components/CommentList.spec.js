import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { CommentList } from '../../../app/components/CommentList';

function setup(propOverrides) {
  const props = {
    entry: {
      bookmarks: [
        {
          user: {
            name: 'TestMan',
            id: 3
          },
          comment: 'Test comment'
        },
        {
          user: {
            name: 'TestMan2',
            id: 3
          },
          comment: 'Test comment 2'
        }
      ]
    },
    fetchEntry: () => {},
    ...propOverrides
  };
  const wrapper = shallow(<CommentList {...props} />);
  return { props, wrapper };
}

describe('<CommentList />', () => {
  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).to.matchSnapshot();
  });

  it('should render correctly when no entry', () => {
    const { wrapper } = setup({ entry: null });
    expect(wrapper).to.matchSnapshot();
  });
});
