import { useState } from 'react';
import RomanNumerals from '../../lib/RomanNumerals';
import './styles.css';

const RomanNumeralsConverter = () => {
  const [result, setResult] = useState('');

  const handleChange = input => {
    if (!isNaN(input)) return setResult(RomanNumerals.toRoman(+input));
    if (typeof input === 'string') setResult(RomanNumerals.fromRoman(input));
  };

  return (
    <div className="container">
      <div className="converter">
        <input
          data-testid="input"
          type="text"
          onChange={e => handleChange(e.target.value)}
          placeholder="Enter integer or Roman numeral"
        />
        <div style={{ color: result.length > 20 ? 'red' : 'green' }}>
          {result}
        </div>
      </div>
    </div>
  );
};

export default RomanNumeralsConverter;
