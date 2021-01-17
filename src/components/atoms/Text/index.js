import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ id, children }) => (
  <div id={id} data-testid={id}>
    {children}
  </div>
);

Text.propTypes = {
  id: PropTypes.string,
};

export default Text;
