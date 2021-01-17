import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ id, text }) => (
  <div id={id} data-testid={id}>
    {text}
  </div>
);

Text.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Text;
