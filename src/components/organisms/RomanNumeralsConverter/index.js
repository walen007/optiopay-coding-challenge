import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ConversionResult from '../../molecules/ConversionResult';
import Input from '../../atoms/Input';
import RomanNumerals from '../../../lib/RomanNumerals';
import './styles.css';

const RomanNumeralsConverter = ({ id }) => {
  const [result, setResult] = useState('');

  const handleChange = input => {
    if (!isNaN(input)) return setResult(RomanNumerals.toRoman(+input));
    if (typeof input === 'string') setResult(RomanNumerals.fromRoman(input));
  };

  return (
    <div id={id} data-testid={id} className="converter">
      <Input
        placeholder="Enter integer or Roman numeral"
        handleChange={e => handleChange(e.target.value)}
      />
      <ConversionResult
        result={result.toString().replace('Error: ', '')}
        color={result.toString().startsWith('Error') ? 'red' : 'green'}
      />
    </div>
  );
};

ConversionResult.propTypes = {
  id: PropTypes.string,
};

export default RomanNumeralsConverter;
