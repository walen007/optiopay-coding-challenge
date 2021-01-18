import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import ConversionResult from '../../molecules/ConversionResult';
import WidgetHeader from '../../molecules/WidgetHeader';
import RomanNumerals from '../../../lib/roman-numerals';
import { INTRO, INSTRUCTION } from '../../../common/constants';
import './styles.css';

const Converter = ({ id }) => {
  const [result, setResult] = useState('');

  const handleChange = useCallback(input => {
    if (!isNaN(input)) return setResult(RomanNumerals.toRoman(+input));
    if (typeof input === 'string') setResult(RomanNumerals.fromRoman(input));
  }, []);

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
