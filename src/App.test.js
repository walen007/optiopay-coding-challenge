import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('-- should render <App />', () => {
    render(<App />);
    const app = screen.getByTestId('main');
    expect(app).toBeInTheDocument();
  });
});
