import { render, screen } from '@testing-library/react';
import Header from '../';

describe('<Header />', () => {
  it('-- should render <Header />', () => {
    render(<Header id="header001" title="Sample header title" />);
    const converter = screen.getByTestId('header001');
    expect(converter).toBeInTheDocument();
  });
});
