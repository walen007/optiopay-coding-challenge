import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import ConversionResult from '../../molecules/ConversionResult';
import WidgetHeader from '../../molecules/WidgetHeader';
import RomanNumerals from '../../../lib/RomanNumerals';
import './styles.css';

const INTRO = 'Welcome to the Roman Numerals Converter.';
const INSTRUCTION = `
  This converter allows you to convert integers to Roman 
  numerals and vice versa.  
  Only numbers between 1-4999 are supported at the moment.
`;

const Converter = ({ id }) => {
  const [result, setResult] = useState('');

  const handleChange = input => {
    if (!isNaN(input)) return setResult(RomanNumerals.toRoman(+input));
    if (typeof input === 'string') setResult(RomanNumerals.fromRoman(input));
  };

  return (
    <>
      <WidgetHeader intro={INTRO} instruction={INSTRUCTION} />
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
    </>
  );
};

Converter.propTypes = {
  id: PropTypes.string,
};

export default Converter;
