import { render, screen } from '@testing-library/react';
import ConversionResult from '../';

describe('<ConversionResult />', () => {
  const txtSample = 'This is a sample text';
  it('-- should render <ConversionResult />', () => {
    render(
      <ConversionResult
        id="text001"
        result={txtSample}
        color={txtSample.length > 20 ? 'red' : 'green'}
      />
    );
    const text = screen.getByTestId('text001');
    expect(text).toHaveTextContent(txtSample);
  });
});
