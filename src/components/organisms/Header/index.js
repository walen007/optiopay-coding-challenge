import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Header = ({ id, title }) => (
  <header id={id} data-testid={id}>
    <nav>{title}</nav>
  </header>
);

Header.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Header;
