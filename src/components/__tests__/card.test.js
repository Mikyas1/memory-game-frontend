import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testUtils';
import Card from '../Card';

const defaultProps = {
  value: {
    type: 1,
    value: 3,
    solved: false,
    id: '13',
    cardId: '13',
  },
  cleanUpTemp: () => {},
  inTemp: false,
  addCartToTemp: () => {},
};

const setup = (props = {}) => {
  const propList = { ...defaultProps, ...props };
  return shallow(<Card {...propList} />);
};

test('should Card component render', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, `card-${defaultProps.value.id}`);
  expect(component.length).toBe(1);
});

test('should Card face be covered when not solved and not in Temp', () => {
  const wrapper = setup();
  const cardElement = findByTestAttr(wrapper, `covered`);
  expect(cardElement.length).toBe(1);
});

test('should Card face be facing up when solved but not in Temp', () => {
  const props = {
    value: {
      type: 1,
      value: 3,
      solved: true,
      id: '13',
      cardId: '13',
    },
    cleanUpTemp: () => {},
    inTemp: false,
    addCartToTemp: () => {},
  };
  const wrapper = setup(props);
  const cardElement = findByTestAttr(wrapper, `facing-up`);
  expect(cardElement.length).toBe(1);
});

test('should Card face be facing up when not solved but in Temp', () => {
  const props = {
    value: {
      type: 1,
      value: 3,
      solved: false,
      id: '13',
      cardId: '13',
    },
    cleanUpTemp: () => {},
    inTemp: true,
    addCartToTemp: () => {},
  };
  const wrapper = setup(props);
  const cardElement = findByTestAttr(wrapper, `facing-up`);
  expect(cardElement.length).toBe(1);
});
