import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, placeholder, handleChange }) => (
  <input
    id={id}
    data-testid={id}
    type="text"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Input;
