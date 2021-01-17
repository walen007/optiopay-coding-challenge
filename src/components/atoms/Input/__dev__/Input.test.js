import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../';

describe('<Input />', () => {
  it('-- should render <Input />', () => {
    const handleChange = jest.fn();

    render(<Input id="input001" handleChange={handleChange} />);
    const input = screen.getByTestId('input001');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'some text' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
