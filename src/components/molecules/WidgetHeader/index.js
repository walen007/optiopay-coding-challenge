import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import './styles.css';

const WidgetHeader = ({ id, intro, instruction }) => (
  <div id={id} data-testid={id} className="widget-header">
    <Text customClass="intro">{intro}</Text>
    <Text customClass="instruction">{instruction}</Text>
  </div>
);

WidgetHeader.propTypes = {
  id: PropTypes.string,
  intro: PropTypes.string.isRequired,
  instruction: PropTypes.string.isRequired,
};

export default WidgetHeader;
