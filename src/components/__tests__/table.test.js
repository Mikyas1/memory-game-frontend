import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup, getByTestId } from '@testing-library/react';

import { Provider } from '../../context/CardGameContext';

import Table from '../Table';

afterEach(() => {
  cleanup();
});

const customRender = (ui) => {
  return render(<Provider>{ui}</Provider>);
};

test('should Table component render', () => {
  customRender(<Table />);

  const frontFacingCardElement = screen.getByTestId(`table`);

  expect(frontFacingCardElement).toBeInTheDocument();
});
