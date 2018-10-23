import { expect } from 'chai';
import { SET_ENTRY } from '../../../app/actions';
import entry from '../../../app/reducers/entry';

const sampleEntry = {
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
};

describe('entry reducer', () => {
  it('should handle initial state', () => {
    expect(
      entry(undefined, {})
    ).to.eql(
      null
    );
  });

  it('should handle SET_ENTRY', () => {
    expect(
      entry(null, {
        type: SET_ENTRY,
        entry: sampleEntry
      })
    ).to.eql(sampleEntry);
  });
});
