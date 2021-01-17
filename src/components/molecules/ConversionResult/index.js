import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';

const ConversionResult = ({ id, color, result }) => (
  <div id={id} data-testid={id} style={{ color }}>
    <Text text={result} />
  </div>
);

ConversionResult.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  result: PropTypes.string.isRequired,
};

export default ConversionResult;
