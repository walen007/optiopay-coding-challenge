import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import './styles.css';

const Header = ({ id, title }) => (
  <header id={id} data-testid={id}>
    <Text text={title} />
  </header>
);

Header.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Header;
