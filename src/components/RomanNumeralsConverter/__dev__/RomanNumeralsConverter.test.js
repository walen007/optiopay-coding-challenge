import { render, screen } from '@testing-library/react';
import RomanNumeralsConverter from '../';

test('renders learn react link', () => {
  render(<RomanNumeralsConverter />);
  const input = screen.getByTestId('input');
  expect(input).toBeInTheDocument();
});
