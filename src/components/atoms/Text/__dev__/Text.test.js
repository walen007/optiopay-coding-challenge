import { render, screen } from '@testing-library/react';
import Text from '../';

describe('<Text />', () => {
  it('-- should render <Text />', () => {
    const txtSample = 'This is a sample text';
    render(<Text id="text001">{txtSample}</Text>);
    const text = screen.getByTestId('text001');
    expect(text).toHaveTextContent(txtSample);
  });
});
