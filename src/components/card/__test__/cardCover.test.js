import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../test/testUtils';
import CardCover from '../CardCover';

const setup = (props = {}) => {
  return shallow(<CardCover />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'card-covered');
  expect(component.length).toBe(1);
});
