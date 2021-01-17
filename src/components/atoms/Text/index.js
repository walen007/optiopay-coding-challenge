import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ id, customClass, children }) => (
  <div id={id} data-testid={id} className={customClass}>
    {children}
  </div>
);

Text.propTypes = {
  id: PropTypes.string,
  customClass: PropTypes.string,
};

export default Text;
