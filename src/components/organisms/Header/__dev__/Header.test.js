import { render, screen } from '@testing-library/react';
import Header from '../';

describe('<Header />', () => {
  it('-- should render <Header />', () => {
    const title = 'Sample header title';
    render(<Header id="header001" title={title} />);
    const header = screen.getByTestId('header001');
    expect(header).toHaveTextContent(title);
  });
});
