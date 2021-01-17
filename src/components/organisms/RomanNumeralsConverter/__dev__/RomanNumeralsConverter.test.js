import { render, screen } from '@testing-library/react';
import RomanNumeralsConverter from '../';

describe('<RomanNumeralsConverter />', () => {
  it('-- should render <RomanNumeralsConverter />', () => {
    render(<RomanNumeralsConverter id="converter-id" />);
    const converter = screen.getByTestId('converter-id');
    expect(converter).toBeInTheDocument();
  });
});
