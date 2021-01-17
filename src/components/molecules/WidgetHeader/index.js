import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';

const WidgetHeader = ({ id, intro, instruction }) => (
  <div id={id} data-testid={id}>
    <Text>{intro}</Text>
    <Text>{instruction}</Text>
  </div>
);

WidgetHeader.propTypes = {
  id: PropTypes.string,
  intro: PropTypes.string.isRequired,
  instruction: PropTypes.string.isRequired,
};

export default WidgetHeader;
