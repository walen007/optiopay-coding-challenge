import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const main = screen.getByTestId('main');
  expect(main).toBeInTheDocument();
});
