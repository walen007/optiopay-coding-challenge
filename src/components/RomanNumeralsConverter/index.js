import { useState } from 'react';

import RomanNumerals from '../../lib/RomanNumerals';

const RomanNumeralsConverter = () => {
  const [result, setResult] = useState();

  const handleChange = input => {
    if (!isNaN(input)) return setResult(RomanNumerals.toRoman(+input));
    if (typeof input === 'string') setResult(RomanNumerals.fromRoman(input));
  };

  return (
    <div className="main">
      <input
        data-testid="input"
        type="text"
        onChange={e => handleChange(e.target.value)}
      />
      <div>{result}</div>
    </div>
  );
};

export default RomanNumeralsConverter;
