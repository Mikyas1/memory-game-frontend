import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../test/testUtils';
import CardFront from '../CardFront';

const defaultProps = {
  value: {
    type: 2,
    value: 3,
    solved: false,
    id: '13',
    cardId: '13',
  },
};

const setup = (props = {}) => {
  const propsList = { ...defaultProps, ...props };
  return shallow(<CardFront {...propsList} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'card-facing-up');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(CardFront, defaultProps);
});

describe('renders correct card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('renders with correct card value', () => {
    const cardValueComponent = findByTestAttr(wrapper, 'card-value');
    expect(cardValueComponent.text()).toBe('' + defaultProps.value.value);
  });

  test('renders with correct card type', () => {
    const cardImageComponent = findByTestAttr(wrapper, 'card-img');
    expect(cardImageComponent.getElement().props.src).toContain('diamond');
  });
});
