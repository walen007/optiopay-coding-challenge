import { render, screen } from '@testing-library/react';
import WidgetHeader from '../';

describe('<WidgetHeader />', () => {
  it('-- should render <WidgetHeader />', () => {
    const intro = 'This is the intro';
    const instruction = 'This is the instruction';

    render(
      <WidgetHeader id="WidgetHeader" intro={intro} instruction={instruction} />
    );
    const widgetHeader = screen.getByTestId('WidgetHeader');
    expect(widgetHeader).toHaveTextContent(intro);
    expect(widgetHeader).toHaveTextContent(instruction);
  });
});
